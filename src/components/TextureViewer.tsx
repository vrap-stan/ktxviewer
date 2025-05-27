import React, {useRef, useEffect, useState, useCallback} from 'react';
import * as THREE from 'three';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { read as parseKtxFile, type KTX2Container } from 'ktx-parse';
import type { TextureDisplayInfo } from 'src/types';

// Define a union type for convenience, representing the output of parseKtxFile
type KTXContainer = KTX2Container;

interface TextureViewerProps {
  selectedFile: File | null;
  onTextureLoaded: (info: TextureDisplayInfo) => void;
  flipY?: boolean;
}

type ZoomMode = number | 'fit-screen' | 'fit-width' | 'fit-height';

interface ZoomControlsProps {
  onZoomChange: (zoom: ZoomMode) => void;
  currentZoom: ZoomMode;
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ onZoomChange, currentZoom }) => {
  const zoomOptions: { label: string; value: ZoomMode }[] = [
    { label: '25%', value: 0.25 },
    { label: '50%', value: 0.5 },
    { label: '100%', value: 1.0 },
    { label: '150%', value: 1.5 },
    { label: '200%', value: 2.0 },
    { label: 'Fit Screen', value: 'fit-screen' },
    { label: 'Fit Width', value: 'fit-width' },
    { label: 'Fit Height', value: 'fit-height' },
  ];

  return (
    <div className="zoom-controls">
      {zoomOptions.map(opt => (
        <button
          key={String(opt.value)}
          onClick={() => onZoomChange(opt.value)}
          className={currentZoom === opt.value ? 'active' : ''}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

const getThreeJsFormatString = (texture: THREE.Texture | THREE.CompressedTexture): string => {
  if (!texture) return "Unknown";
  const formatMap: { [key: number]: string } = {
    [THREE.AlphaFormat]: "Alpha", [THREE.RedFormat]: "Red", [THREE.RedIntegerFormat]: "RedInteger",
    [THREE.RGFormat]: "RG", [THREE.RGIntegerFormat]: "RGInteger", [THREE.RGBFormat]: "RGB",
    [THREE.RGBIntegerFormat]: "RGBInteger", [THREE.RGBAFormat]: "RGBA", [THREE.RGBAIntegerFormat]: "RGBAInteger",
    [THREE.RGB_S3TC_DXT1_Format]: "DXT1 RGB", [THREE.RGBA_S3TC_DXT1_Format]: "DXT1 RGBA",
    [THREE.RGBA_S3TC_DXT3_Format]: "DXT3 RGBA", [THREE.RGBA_S3TC_DXT5_Format]: "DXT5 RGBA",
    [THREE.RGB_PVRTC_4BPPV1_Format]: "PVRTC1 RGB 4bpp", [THREE.RGB_PVRTC_2BPPV1_Format]: "PVRTC1 RGB 2bpp",
    [THREE.RGBA_PVRTC_4BPPV1_Format]: "PVRTC1 RGBA 4bpp", [THREE.RGBA_PVRTC_2BPPV1_Format]: "PVRTC1 RGBA 2bpp",
    [THREE.RGB_ETC1_Format]: "ETC1 RGB", [THREE.RGB_ETC2_Format]: "ETC2 RGB",
    [THREE.RGBA_ETC2_EAC_Format]: "ETC2 RGBA", [THREE.RGBA_ASTC_4x4_Format]: "ASTC 4x4",
    [THREE.RGBA_ASTC_5x4_Format]: "ASTC 5x4",
  };
  let formatStr = formatMap[texture.format] || `Unknown GPU Format (format: ${texture.format}, type: ${texture.type}, colorSpace: ${texture.colorSpace})`;
  if (texture.format && formatMap[texture.format] && texture.colorSpace === THREE.SRGBColorSpace) {
    formatStr += " (sRGB)";
  }
  return formatStr;
};

const getKtxOriginalFormatString = (ktxInfo: KTXContainer | null): string => {
  if (!ktxInfo) return "N/A (No KTX Info)";
  if ('glInternalFormat' in ktxInfo && ktxInfo.glInternalFormat !== undefined) {
    throw new Error("KTX1 format handling is not implemented in this example.");
  }
  if ('vkFormat' in ktxInfo && ktxInfo.vkFormat !== undefined) {
    return `KTX2 VKFormat: 0x${(ktxInfo as KTX2Container).vkFormat.toString(16)}`;
  }
  return "N/A (Format Undefined in KTX Info)";
};


const TextureViewer: React.FC<TextureViewerProps> = ({ selectedFile, onTextureLoaded, flipY }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const meshRef = useRef<THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial> | null>(null);
  const ktx2LoaderRef = useRef<KTX2Loader | null>(null);
  
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [zoom, setZoom] = useState<ZoomMode>(1.0);

  const onMouseScrollEvent = (event: WheelEvent) => {
    function isNumber(value: any) {
      return typeof value === 'number' && !isNaN(value);
    }

    const deltaY = event.deltaY;

    if (isNumber(zoom)) {
      setZoom(pre => {
        return pre as number + deltaY * (-0.001);
      });
    }
    return null;
  }

  // Stable render function
  const renderScene = useCallback(() => {
    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  }, []);

  // Stable function to update plane scale based on zoom and texture dimensions
  const updatePlaneScale = useCallback(() => {
    if (!meshRef.current || !cameraRef.current || !mountRef.current) return;

    const plane = meshRef.current;
    const texture = plane.material.map as THREE.Texture | THREE.CompressedTexture | null;

    if (!texture || !texture.image || texture.image.width === 0 || texture.image.height === 0) {
      plane.scale.set(0, 0, 0);
      return;
    }

    const texWidth = texture.image.width;
    const texHeight = texture.image.height;
    const canvasEl = mountRef.current;
    const canvasWidth = canvasEl.clientWidth;
    const canvasHeight = canvasEl.clientHeight;

    if (canvasWidth === 0 || canvasHeight === 0) {
        plane.scale.set(0,0,0);
        return;
    }

    let newPlaneWidth: number;
    let newPlaneHeight: number;

    if (typeof zoom === 'number') {
      newPlaneWidth = texWidth * zoom;
      newPlaneHeight = texHeight * zoom;
    } else {
      const texAspect = texWidth / texHeight;
      const canvasAspect = canvasWidth / canvasHeight;
      switch (zoom) {
        case 'fit-width':
          newPlaneWidth = canvasWidth;
          newPlaneHeight = canvasWidth / texAspect;
          break;
        case 'fit-height':
          newPlaneHeight = canvasHeight;
          newPlaneWidth = canvasHeight * texAspect;
          break;
        case 'fit-screen':
        default:
          if (texAspect > canvasAspect) {
            newPlaneWidth = canvasWidth;
            newPlaneHeight = canvasWidth / texAspect;
          } else {
            newPlaneHeight = canvasHeight;
            newPlaneWidth = canvasHeight * texAspect;
          }
          break;
      }
    }
    plane.scale.set(newPlaneWidth, newPlaneHeight, 1);
  }, [zoom]); // Depends on zoom state

  // Effect for one-time Three.js setup
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    currentMount.addEventListener('wheel', onMouseScrollEvent);

    sceneRef.current = new THREE.Scene();
    
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(rendererRef.current.domElement);

    ktx2LoaderRef.current = new KTX2Loader()
      .setTranscoderPath('https://cdn.jsdelivr.net/npm/three@0.176.0/examples/jsm/libs/basis/')
      .detectSupport(rendererRef.current);

    // Initialize camera with default orientation
    cameraRef.current = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    cameraRef.current.position.z = 1; // Default non-flipped
    cameraRef.current.rotation.order = 'XYZ'; // Default order

    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({ transparent: true, color: 0xffffff, side: THREE.DoubleSide });
    meshRef.current = new THREE.Mesh(geometry, material);
    sceneRef.current.add(meshRef.current);

    // Initial call to render. Other effects (flipY, zoom, resize) will also render.
    // renderScene(); // Let other effects handle initial render after their setup.

    return () => {
      ktx2LoaderRef.current?.dispose();
      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        if (meshRef.current.material.map) {
          (meshRef.current.material.map as THREE.Texture).dispose();
        }
        meshRef.current.material.dispose();
      }
      rendererRef.current?.dispose();
      if (currentMount && rendererRef.current?.domElement && currentMount.contains(rendererRef.current.domElement)) {
        currentMount.removeChild(rendererRef.current.domElement);
      }
      sceneRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      meshRef.current = null;
      ktx2LoaderRef.current = null;
    };
  }, []); // Empty dependency array: runs only on mount and unmount

  // Effect for handling window resize
  const handleResize = useCallback(() => {
    if (mountRef.current && rendererRef.current && cameraRef.current) {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      rendererRef.current.setSize(width, height);

      cameraRef.current.left = -width / 2;
      cameraRef.current.right = width / 2;
      cameraRef.current.top = height / 2;
      cameraRef.current.bottom = -height / 2;
      cameraRef.current.updateProjectionMatrix();
      
      updatePlaneScale();
      renderScene();
    }
  }, [updatePlaneScale, renderScene]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set up size and projection
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Effect for flipY changes
  useEffect(() => {
    if (cameraRef.current) {
      const camera = cameraRef.current;
      if (flipY) {
        camera.position.z = -1;
        camera.rotation.order = 'XZY';
        camera.rotation.x = 0;
        camera.rotation.y = Math.PI;
        camera.rotation.z = Math.PI;
      } else {
        camera.position.z = 1;
        camera.rotation.set(0, 0, 0); // Reset rotation
        camera.rotation.order = 'XYZ'; // Reset order
      }
      camera.updateMatrixWorld(); // Ensure matrix is updated
      renderScene();
    }
  }, [flipY, renderScene]);

  // Effect for zoom changes
  useEffect(() => {
    updatePlaneScale();
    renderScene();
  }, [zoom, updatePlaneScale, renderScene]);

  // Effect for selected file changes (texture loading)
  useEffect(() => {
    if (!selectedFile || !ktx2LoaderRef.current || !meshRef.current) {
      if (meshRef.current) { // Handle deselection or initial state
        const material = meshRef.current.material;
        if (material.map) {
          (material.map as THREE.Texture).dispose();
          material.map = null;
          material.needsUpdate = true;
        }
        updatePlaneScale(); // This will set scale to 0 if no texture
        renderScene();
      }
      if (!selectedFile) {
         onTextureLoaded({ width: 0, height: 0, format: 'No file selected' });
      }
      return;
    }

    setError(null);
    setIsLoading(true);
    const mesh = meshRef.current;
    const material = mesh.material;

    if (material.map) {
      (material.map as THREE.Texture).dispose();
      material.map = null;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      if (e.target?.result && ktx2LoaderRef.current) {
        const arrayBuffer = e.target.result as ArrayBuffer;
        let ktxParsedInfo: KTXContainer | null = null;
        let ktxOriginalFormat = "N/A";

        try {
          ktxParsedInfo = parseKtxFile(new Uint8Array(arrayBuffer));
          ktxOriginalFormat = getKtxOriginalFormatString(ktxParsedInfo);
        } catch (parseError) {
          console.warn("ktx-parse error:", parseError);
          ktxOriginalFormat = "N/A (Parse Error)";
        }

        const fileUrl = URL.createObjectURL(selectedFile);
        try {
          const texture = await ktx2LoaderRef.current.loadAsync(fileUrl);
          URL.revokeObjectURL(fileUrl);

          texture.colorSpace = THREE.SRGBColorSpace;
          texture.minFilter = THREE.LinearFilter; // Simpler filter for less perf overhead if mipmaps not essential
          texture.magFilter = THREE.LinearFilter;
          texture.needsUpdate = true;

          material.map = texture;
          material.needsUpdate = true;

          updatePlaneScale();
          renderScene();

          const threeJsGpuFormat = getThreeJsFormatString(texture);
          let finalFormatString = threeJsGpuFormat;
          const isKtx2 = (ktxParsedInfo && 'vkFormat' in ktxParsedInfo && ktxParsedInfo.vkFormat !== undefined) || selectedFile.name.toLowerCase().endsWith('.ktx2');

          if (isKtx2) {
            finalFormatString = `Basis/KTX2 (Original: ${ktxOriginalFormat}, Transcoded to: ${threeJsGpuFormat})`;
          } else {
            finalFormatString = `KTX1 (Original: ${ktxOriginalFormat}, Rendered as: ${threeJsGpuFormat})`;
          }

          onTextureLoaded({
            width: texture.image.width,
            height: texture.image.height,
            format: finalFormatString,
          });
        } catch (err) {
          URL.revokeObjectURL(fileUrl);
          console.error('Error loading KTX texture:', err);
          const errorMessage = err instanceof Error ? err.message : String(err);
          setError(`Error loading KTX: ${errorMessage}`);
          onTextureLoaded({ width: 0, height: 0, format: 'Error loading' });
          updatePlaneScale(); // Clear plane
          renderScene();
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };
    reader.onerror = (e) => {
      console.error("FileReader error:", e);
      setError("Failed to read file.");
      onTextureLoaded({ width: 0, height: 0, format: 'Error reading file' });
      setIsLoading(false);
      updatePlaneScale(); // Clear plane
      renderScene();
    };
    reader.readAsArrayBuffer(selectedFile);
  }, [selectedFile, onTextureLoaded, updatePlaneScale, renderScene]);


  return (
    <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#282c34' }}>
      <ZoomControls onZoomChange={setZoom} currentZoom={zoom} />
      {isLoading && <div className="texture-viewer-message">Loading texture...</div>}
      {error && <div className="texture-viewer-message" style={{ color: 'red' }}>{error}</div>}
      {!selectedFile && !error && !isLoading && <div className="texture-viewer-message">Drop a KTX/KTX2 file here or select from the list.</div>}
    </div>
  );
};

export default TextureViewer;
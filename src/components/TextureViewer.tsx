import React, { useRef, useEffect, useState, useCallback } from 'react';
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

// Helper to get human-readable format string from Three.js texture object
const getThreeJsFormatString = (texture: THREE.Texture | THREE.CompressedTexture): string => {
  if (!texture) return "Unknown";

  const formatMap: { [key: number]: string } = {
    [THREE.AlphaFormat]: "Alpha",
    [THREE.RedFormat]: "Red",
    [THREE.RedIntegerFormat]: "RedInteger",
    [THREE.RGFormat]: "RG",
    [THREE.RGIntegerFormat]: "RGInteger",
    [THREE.RGBFormat]: "RGB",
    [THREE.RGBIntegerFormat]: "RGBInteger",
    [THREE.RGBAFormat]: "RGBA",
    [THREE.RGBAIntegerFormat]: "RGBAInteger",
    [THREE.RGB_S3TC_DXT1_Format]: "DXT1 RGB",
    [THREE.RGBA_S3TC_DXT1_Format]: "DXT1 RGBA",
    [THREE.RGBA_S3TC_DXT3_Format]: "DXT3 RGBA",
    [THREE.RGBA_S3TC_DXT5_Format]: "DXT5 RGBA",
    [THREE.RGB_PVRTC_4BPPV1_Format]: "PVRTC1 RGB 4bpp",
    [THREE.RGB_PVRTC_2BPPV1_Format]: "PVRTC1 RGB 2bpp",
    [THREE.RGBA_PVRTC_4BPPV1_Format]: "PVRTC1 RGBA 4bpp",
    [THREE.RGBA_PVRTC_2BPPV1_Format]: "PVRTC1 RGBA 2bpp",
    [THREE.RGB_ETC1_Format]: "ETC1 RGB",
    [THREE.RGB_ETC2_Format]: "ETC2 RGB",
    [THREE.RGBA_ETC2_EAC_Format]: "ETC2 RGBA",
    [THREE.RGBA_ASTC_4x4_Format]: "ASTC 4x4",
    [THREE.RGBA_ASTC_5x4_Format]: "ASTC 5x4",
  };

  if (texture.format && formatMap[texture.format]) {
    let formatStr = formatMap[texture.format];
    if (texture.colorSpace === THREE.SRGBColorSpace) {
      formatStr += " (sRGB)";
    }
    return formatStr;
  }
  return `Unknown GPU Format (format: ${texture.format}, type: ${texture.type}, colorSpace: ${texture.colorSpace})`;
};

// Helper to get KTX-specific format info (simplified)
const getKtxOriginalFormatString = (ktxInfo: KTXContainer | null): string => {
  if (!ktxInfo) return "N/A (No KTX Info)";

  // KTX1 specific format
  if ('glInternalFormat' in ktxInfo && ktxInfo.glInternalFormat !== undefined) {
    // This check ensures ktxInfo is narrowed to KTX1Container if this block is entered
    // return `KTX1 Internal: 0x${(ktxInfo as KTX1Container).glInternalFormat.toString(16)}`;
    throw new Error("KTX1 format handling is not implemented in this example.");
  }
  // KTX2 specific format
  if ('vkFormat' in ktxInfo && ktxInfo.vkFormat !== undefined) {
    // This check ensures ktxInfo is narrowed to KTX2Container
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


  const updatePlaneSize = useCallback((texture: THREE.Texture | THREE.CompressedTexture | null) => {
    if (!meshRef.current || !cameraRef.current || !texture || !mountRef.current || !texture.image) return;

    const plane = meshRef.current;
    const texWidth = texture.image.width;
    const texHeight = texture.image.height;

    const canvasWidth = mountRef.current.clientWidth;
    const canvasHeight = mountRef.current.clientHeight;

    const texAspect = texWidth / texHeight;
    const canvasAspect = canvasWidth / canvasHeight;

    let planeWidth, planeHeight;

    if (texAspect > canvasAspect) {
      planeWidth = canvasWidth;
      planeHeight = canvasWidth / texAspect;
    } else {
      planeHeight = canvasHeight;
      planeWidth = canvasHeight * texAspect;
    }
    plane.scale.set(planeWidth, planeHeight, 1);

    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  }, []);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath('https://cdn.jsdelivr.net/npm/three@0.176.0/examples/jsm/libs/basis/');
    ktx2Loader.detectSupport(renderer);
    ktx2LoaderRef.current = ktx2Loader;

    const camera = new THREE.OrthographicCamera(
      -currentMount.clientWidth / 2, currentMount.clientWidth / 2,
      currentMount.clientHeight / 2, -currentMount.clientHeight / 2,
      0.1, 10
    );
    camera.position.z = 1;

    // flip y
    {
      camera.position.z = -1;
      camera.rotation.order = 'XZY';
      camera.rotation.z = Math.PI;
      camera.rotation.y = Math.PI;
    }


    cameraRef.current = camera;

    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({ transparent: true, color: 0xffffff, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);
    meshRef.current = mesh;
    scene.add(mesh);

    const handleResize = () => {
      if (currentMount && rendererRef.current && cameraRef.current && meshRef.current) {
        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;
        rendererRef.current.setSize(width, height);
        cameraRef.current.left = -width / 2;
        cameraRef.current.right = width / 2;
        cameraRef.current.top = height / 2;
        cameraRef.current.bottom = -height / 2;
        cameraRef.current.updateProjectionMatrix();
        updatePlaneSize(meshRef.current.material.map);
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      ktx2LoaderRef.current?.dispose();

      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        if (meshRef.current.material.map) {
          meshRef.current.material.map.dispose();
        }
        meshRef.current.material.dispose();
      }
      rendererRef.current?.dispose();
      if (currentMount && rendererRef.current?.domElement) {
        if (currentMount.contains(rendererRef.current.domElement)) {
          currentMount.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, [updatePlaneSize]);

  useEffect(() => {
    if (selectedFile && ktx2LoaderRef.current && meshRef.current && rendererRef.current && sceneRef.current && cameraRef.current) {
      setError(null);
      setIsLoading(true);
      const mesh = meshRef.current;
      const material = mesh.material;

      if (material.map) {
        material.map.dispose();
        material.map = null;
      }

      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result && ktx2LoaderRef.current) {
          const arrayBuffer = e.target.result as ArrayBuffer;
          let ktxParsedInfo: KTXContainer | null = null; // Use the union type
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
            texture.minFilter = THREE.LinearMipMapLinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.needsUpdate = true;

            material.map = texture;
            material.needsUpdate = true;

            updatePlaneSize(texture);

            const threeJsGpuFormat = getThreeJsFormatString(texture);
            let finalFormatString = threeJsGpuFormat;

            // Distinguish KTX1 from KTX2 based on parsed info if available,
            // otherwise fallback to filename (less reliable but okay as a backup)
            let isKtx2 = false;
            if (ktxParsedInfo && 'vkFormat' in ktxParsedInfo) {
              isKtx2 = true;
            } else if (selectedFile.name.toLowerCase().endsWith('.ktx2')) {
              isKtx2 = true;
            }


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

            if (rendererRef.current && sceneRef.current && cameraRef.current) {
              rendererRef.current.render(sceneRef.current, cameraRef.current);
            }

          } catch (err) {
            URL.revokeObjectURL(fileUrl);
            console.error('Error loading KTX texture:', err);
            let errorMessage = 'Unknown error during KTX loading';
            if (err instanceof Error) {
              errorMessage = err.message;
            } else if (typeof err === 'string') {
              errorMessage = err;
            }
            setError(`Error loading KTX: ${errorMessage}`);
            onTextureLoaded({ width: 0, height: 0, format: 'Error loading' });
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
      };
      reader.readAsArrayBuffer(selectedFile);
    } else if (!selectedFile && meshRef.current) {
      const material = meshRef.current.material;
      if (material.map) {
        material.map.dispose();
        material.map = null;
        material.needsUpdate = true;
      }
      meshRef.current.scale.set(0, 0, 0);
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      onTextureLoaded({ width: 0, height: 0, format: 'No file selected' });
    }
  }, [selectedFile, onTextureLoaded, updatePlaneSize]);

  if (cameraRef.current && rendererRef.current, sceneRef.current) {
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    const scene = sceneRef.current;

    if (flipY) {
      camera.position.z = -1;
      camera.rotation.order = 'XZY';
      camera.rotation.z = Math.PI;
      camera.rotation.y = Math.PI;
      renderer.render(scene, camera);
      
    } else {
      camera.position.z = 1;
      camera.rotation.z = 0;
      camera.rotation.y = 0;
      renderer.render(scene, camera);
    }
  }

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#282c34' }}>
      {isLoading && <div className="texture-viewer-message">Loading texture...</div>}
      {error && <div className="texture-viewer-message" style={{ color: 'red' }}>{error}</div>}
      {!selectedFile && !error && !isLoading && <div className="texture-viewer-message">Drop a KTX/KTX2 file here or select from the list.</div>}
    </div>
  );
};

export default TextureViewer;
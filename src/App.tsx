import React, { useState, useCallback, useRef, useEffect } from 'react';
import TextureViewer from './components/TextureViewer';
import FileSidebar from './components/FileSidebar';
import InfoOverlay from './components/InfoOverlay';
import './App.css';
import type { KTXFileInfo, TextureDisplayInfo } from './types';


function App() {
  const [ktxFiles, setKtxFiles] = useState<KTXFileInfo[]>([]);
  const [selectedFile, setSelectedFile] = useState<KTXFileInfo | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [textureDisplayInfo, setTextureDisplayInfo] = useState<TextureDisplayInfo | null>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const [flipyY, setFlipyY] = useState(false);


  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const files = Array.from(event.dataTransfer.files)
      .filter(file => file.name.toLowerCase().endsWith('.ktx') || file.name.toLowerCase().endsWith('.ktx2'))
      .map(file => ({ file, id: `${file.name}-${file.lastModified}-${file.size}` }));

    if (files.length > 0) {
      setKtxFiles(prevFiles => {
        const newFiles = files.filter(nf => !prevFiles.some(pf => pf.id === nf.id));
        return [...prevFiles, ...newFiles];
      });
      if (!selectedFile && files.length > 0) {
        setSelectedFile(files[0]);
      }
    }
  }, [selectedFile]);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleFileSelect = useCallback((fileInfo: KTXFileInfo) => {
    setSelectedFile(fileInfo);
    setTextureDisplayInfo(null); // Reset info when new file is selected
  }, []);

  const handleToggleSidebar = useCallback(() => {
    setSidebarVisible(prev => !prev);
  }, []);

  const onTextureLoaded = useCallback((info: TextureDisplayInfo) => {
    setTextureDisplayInfo(info);
  }, []);

  // Prevent default drag/drop for the whole window to avoid browser opening the file
  useEffect(() => {
    const preventDefault = (e: DragEvent) => e.preventDefault();
    window.addEventListener('dragover', preventDefault, false);
    window.addEventListener('drop', preventDefault, false);
    return () => {
      window.removeEventListener('dragover', preventDefault, false);
      window.removeEventListener('drop', preventDefault, false);
    };
  }, []);


  return (
    <div
      ref={appRef}
      className="app-container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="main-content">
        <TextureViewer
          selectedFile={selectedFile?.file || null}
          onTextureLoaded={onTextureLoaded}
          flipY={flipyY}
        />
        {textureDisplayInfo && <InfoOverlay info={textureDisplayInfo} />}
      </div>
      <FileSidebar
        files={ktxFiles}
        selectedFile={selectedFile}
        onFileSelect={handleFileSelect}
        visible={sidebarVisible}
        onToggle={handleToggleSidebar}
        flipY={flipyY}
        setFlipyY={setFlipyY}
      />
    </div>
  );
}

export default App;
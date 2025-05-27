import React from 'react';
import type { KTXFileInfo } from 'src/types';

interface FileSidebarProps {
  files: KTXFileInfo[];
  selectedFile: KTXFileInfo | null;
  onFileSelect: (fileInfo: KTXFileInfo) => void;
  visible: boolean;
  onToggle: () => void;
  flipY: boolean;
  setFlipyY: (value: boolean) => void;
}

const FileSidebar: React.FC<FileSidebarProps> = ({ files, selectedFile, onFileSelect, visible, onToggle, flipY, setFlipyY }) => {
  if (!visible) {
    return (
      <button onClick={onToggle} className="sidebar-toggle-button hidden-sidebar">
        ➔
      </button>
    );
  }

  return (
    <div className="file-sidebar">
      <button onClick={onToggle} className="sidebar-toggle-button">
        ✕
      </button>
      <button onClick={() => {
        setFlipyY(!flipY);
      }}>Flipy Y : {flipY ? "O" : "X"}</button>
      <h3>KTX Files</h3>
      {files.length === 0 && <p className="no-files-message">Drop KTX files onto the window.</p>}
      <ul>
        {files.map((fileInfo) => (
          <li
            key={fileInfo.id}
            className={selectedFile?.id === fileInfo.id ? 'selected' : ''}
            onClick={() => onFileSelect(fileInfo)}
          >
            {fileInfo.file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileSidebar;
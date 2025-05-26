import React from 'react';
import type { TextureDisplayInfo } from 'src/types';

interface InfoOverlayProps {
  info: TextureDisplayInfo | null;
}

const InfoOverlay: React.FC<InfoOverlayProps> = ({ info }) => {
  if (!info || info.width === 0) return null;

  return (
    <div className="info-overlay">
      <p>W: {info.width}px, H: {info.height}px</p>
      <p>Format: {info.format}</p>
    </div>
  );
};

export default InfoOverlay;
import React, { useState } from 'react';
import { ZoomIn, Gift, Sparkles, CheckCircle2 } from 'lucide-react';

interface GalleryProps {
  images: { url: string; alt: string }[];
}

export const ImageGallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Main Image Container */}
      <div 
        className="glass-card" 
        style={{
          position: 'relative',
          padding: '12px',
          overflow: 'hidden',
          borderRadius: '16px',
          cursor: 'pointer',
          background: 'rgba(18, 21, 36, 0.85)'
        }}
        onClick={() => setIsZoomed(true)}
      >
        {/* Badges Overlays */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <span className="badge-sale" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sparkles size={14} /> 93% OFF SALE
          </span>
          <span className="badge-green" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Gift size={14} /> FREE CapCut Pro
          </span>
        </div>

        {/* Zoom hint button */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 10,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
          color: '#ffffff',
          padding: '6px 12px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <ZoomIn size={14} /> Click to enlarge
        </div>

        {/* Main Image */}
        <img 
          src={images[selectedIdx]?.url} 
          alt={images[selectedIdx]?.alt || "Filmora 15 Product Preview"}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '480px',
            objectFit: 'contain',
            borderRadius: '12px',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>

      {/* Thumbnails Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${images.length}, 1fr)`,
        gap: '12px'
      }}>
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            style={{
              cursor: 'pointer',
              borderRadius: '10px',
              padding: '4px',
              border: selectedIdx === idx 
                ? '2px solid #ff003c' 
                : '1px solid rgba(255, 255, 255, 0.1)',
              background: selectedIdx === idx 
                ? 'rgba(255, 0, 60, 0.15)' 
                : 'rgba(22, 27, 46, 0.6)',
              boxShadow: selectedIdx === idx ? '0 0 12px rgba(255,0,60,0.4)' : 'none',
              transition: 'all 0.2s ease',
              overflow: 'hidden'
            }}
          >
            <img 
              src={img.url} 
              alt={img.alt}
              style={{
                width: '100%',
                height: '70px',
                objectFit: 'cover',
                borderRadius: '6px'
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal Zoom View */}
      {isZoomed && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setIsZoomed(false)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <img 
              src={images[selectedIdx]?.url} 
              alt={images[selectedIdx]?.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 0 50px rgba(0,0,0,0.8)'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '-40px',
              right: 0,
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}>
              ✕ Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

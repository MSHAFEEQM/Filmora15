import React from 'react';
import { ProductData } from '../data/productData';
import { Monitor, Laptop, Smartphone, Tablet, FileVideo, FileAudio, Image as ImageIcon, Check } from 'lucide-react';

interface Props {
  data: ProductData;
}

export const CompatibilityFormats: React.FC<Props> = ({ data }) => {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
            💻📱 Device Compatibility & Supported Formats
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Seamless video creation across desktop computers, laptops, and mobile devices with wide format support.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          
          {/* Column 1: Supported Devices */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ background: 'rgba(0, 242, 254, 0.15)', padding: '10px', borderRadius: '12px' }}>
                <Monitor size={24} color="#00f2fe" />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffffff' }}>
                💻 Supported Devices & OS
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
              {data.supportedDevices.map((dev, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#ffffff',
                  fontWeight: '600'
                }}>
                  <Check size={18} color="#10b981" />
                  <span>{dev.device}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Supported Formats */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ background: 'rgba(255, 0, 60, 0.15)', padding: '10px', borderRadius: '12px' }}>
                <FileVideo size={24} color="#ff003c" />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffffff' }}>
                📂 Supported Media Formats
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Video formats */}
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FileVideo size={14} color="#ff003c" /> Video Formats:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {data.supportedFormats.video.map((fmt, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(255, 0, 60, 0.15)',
                      color: '#ff3366',
                      border: '1px solid rgba(255, 0, 60, 0.3)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: '700'
                    }}>
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Audio formats */}
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FileAudio size={14} color="#00f2fe" /> Audio Formats:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {data.supportedFormats.audio.map((fmt, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(0, 242, 254, 0.15)',
                      color: '#00f2fe',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: '700'
                    }}>
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image formats */}
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ImageIcon size={14} color="#10b981" /> Image Formats:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {data.supportedFormats.images.map((fmt, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: '700'
                    }}>
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

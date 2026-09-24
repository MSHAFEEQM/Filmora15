import React from 'react';
import { ProductData } from '../data/productData';
import { 
  Sparkles, 
  Box, 
  CheckCircle, 
  Gift, 
  Zap, 
  Monitor, 
  BookOpen, 
  Bot, 
  Film, 
  Palette, 
  Music, 
  Cpu 
} from 'lucide-react';

interface Props {
  data: ProductData;
}

export const ProductHighlights: React.FC<Props> = ({ data }) => {
  return (
    <section style={{ padding: '60px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <div style={{
            background: 'rgba(0, 242, 254, 0.1)',
            color: '#00f2fe',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            padding: '4px 16px',
            borderRadius: '99px',
            fontSize: '0.85rem',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px'
          }}>
            <Sparkles size={14} /> COMPLETE CREATOR SUITE
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
            ✨ Product Highlights & Included Assets
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Everything you need to edit professional video content for YouTube, Reels, TikTok, and commercial projects in one affordable package.
          </p>
        </div>

        {/* Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '50px'
        }}>
          {data.highlights.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, rgba(255,0,60,0.2) 0%, rgba(121,40,202,0.2) 100%)',
                border: '1px solid rgba(255,0,60,0.4)',
                borderRadius: '12px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '46px'
              }}>
                <CheckCircle size={22} color="#ff003c" />
              </div>
              <span style={{ fontWeight: '600', fontSize: '1rem', color: '#ffffff' }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Boxed "What's Included" Callout */}
        <div className="glass-card-glow" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,0,60,0.15) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none'
          }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <Box size={28} color="#ff003c" />
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff' }}>
              📦 What's Included in Your Digital Package
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}>
            {data.whatsIncluded.map((item, idx) => (
              <div 
                key={idx} 
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#e2e8f0'
                }}
              >
                <div style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  padding: '6px',
                  borderRadius: '8px',
                  display: 'flex'
                }}>
                  <Zap size={18} color="#10b981" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

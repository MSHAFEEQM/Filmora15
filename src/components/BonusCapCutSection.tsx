import React from 'react';
import { ProductData } from '../data/productData';
import { Gift, Smartphone, Zap, CheckCircle, Video, Play, Sparkles } from 'lucide-react';
import { trackPixelEvent } from '../utils/metaPixel';

interface Props {
  data: ProductData;
  onCheckout: () => void;
}

export const BonusCapCutSection: React.FC<Props> = ({ data, onCheckout }) => {
  const handleBonusCheckout = () => {
    trackPixelEvent('AddToCart', { content_name: 'Wondershare Filmora 15 AI + CapCut Pro', value: 199, currency: 'INR' });
    onCheckout();
  };
  return (
    <section style={{
      padding: '80px 0',
      background: 'radial-gradient(circle at 100% 50%, rgba(121, 40, 202, 0.15) 0%, rgba(10, 12, 20, 0) 70%), var(--bg-secondary)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        
        <div className="glass-card-glow" style={{
          padding: '40px',
          background: 'linear-gradient(135deg, rgba(22, 27, 46, 0.9) 0%, rgba(30, 20, 50, 0.9) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'center'
          }} className="capcut-grid">
            <style>{`
              @media (min-width: 850px) {
                .capcut-grid {
                  grid-template-columns: 1fr 1fr !important;
                }
              }
            `}</style>

            {/* Left side text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '6px 16px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                width: 'fit-content'
              }}>
                <Gift size={16} /> SPECIAL BONUS INCLUDED 100% FREE
              </div>

              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: '800', color: '#ffffff' }}>
                🎁 FREE CapCut Pro Bonus
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Receive CapCut Pro absolutely FREE with your Filmora 15 AI purchase. The ultimate duo for long-form 4K videos and viral short-form social media content!
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#ffffff' }}>
                  <Smartphone size={18} color="#00f2fe" />
                  <span>Instagram Reels & Stories</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#ffffff' }}>
                  <Video size={18} color="#ff003c" />
                  <span>TikTok Trending FX</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#ffffff' }}>
                  <Play size={18} color="#ffb800" />
                  <span>YouTube Shorts Auto-Cut</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#ffffff' }}>
                  <Sparkles size={18} color="#9d4edd" />
                  <span>Social Ads & Promos</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                {data.capcutFeatures.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: '#e2e8f0' }}>
                    <CheckCircle size={18} color="#10b981" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '14px' }}>
                <button 
                  onClick={handleBonusCheckout}
                  className="btn-primary" 
                  style={{
                    padding: '14px 24px',
                    fontSize: '1rem',
                    borderRadius: '10px'
                  }}
                >
                  <Zap size={18} />
                  <span>Claim CapCut Pro & Get Instant Access (₹199) 🚀</span>
                </button>
              </div>

            </div>

            {/* Right side Image preview */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}>
                <img 
                  src="https://uniqva.store/cdn/shop/files/ChatGPT_Image_Jul_20_2026_01_48_30_PM.png?v=1784535538&width=1200" 
                  alt="CapCut Pro Bonus Banner"
                  style={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

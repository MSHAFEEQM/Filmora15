import React, { useState, useEffect } from 'react';
import { Zap, Gift, Clock, Sparkles } from 'lucide-react';
import { trackPixelEvent } from '../utils/metaPixel';

interface Props {
  salePrice: string;
  regularPrice: string;
  discount: string;
  onCheckout: () => void;
}

export const StickyCTA: React.FC<Props> = ({ salePrice, regularPrice, discount, onCheckout }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackPixelEvent('AddToCart', { value: 199, currency: 'INR' });
    onCheckout();
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      background: 'rgba(10, 12, 20, 0.95)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 0, 60, 0.4)',
      padding: '12px 0',
      boxShadow: '0 -10px 30px rgba(0,0,0,0.6)',
      animation: 'slideUp 0.3s ease-out'
    }}>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        
        {/* Price & Offer Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                {salePrice}
              </span>
              <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                {regularPrice}
              </span>
              <span className="badge-sale" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                {discount}
              </span>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Gift size={12} /> Includes FREE CapCut Pro Bonus
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="#checkout" 
          onClick={handleBuyClick}
          className="btn-primary pulse-animation" 
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            borderRadius: '10px'
          }}
        >
          <Zap size={18} />
          <span>Get Instant Access 🚀</span>
        </a>

      </div>
    </div>
  );
};

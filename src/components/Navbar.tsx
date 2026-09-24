import React from 'react';
import { Film, ShoppingCart, Zap, ShieldCheck } from 'lucide-react';
import { trackPixelEvent } from '../utils/metaPixel';

interface NavbarProps {
  onCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCheckout }) => {
  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackPixelEvent('AddToCart', { value: 199, currency: 'INR' });
    onCheckout();
  };

  return (
    <header style={{
      background: 'rgba(10, 12, 20, 0.9)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 90,
      padding: '12px 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            background: 'var(--gradient-primary)',
            padding: '8px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(255,0,60,0.4)'
          }}>
            <Film size={22} color="#ffffff" />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: '800',
              fontSize: '1.4rem',
              letterSpacing: '-0.03em',
              color: '#ffffff'
            }}>
              digicone<span style={{ color: '#ff003c' }}>-store</span>
            </span>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={12} color="#10b981" /> Verified Software Store
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '6px',
            color: '#10b981',
            fontSize: '0.85rem',
            fontWeight: '600'
          }} className="desktop-only">
            <Zap size={16} /> Instant Email Delivery
          </div>

          <a href="#checkout" onClick={handleBuyClick} className="btn-primary" style={{
            padding: '10px 20px',
            fontSize: '0.9rem',
            borderRadius: '10px'
          }}>
            <ShoppingCart size={16} />
            <span>Buy Now – ₹199</span>
          </a>
        </div>
      </div>
    </header>
  );
};

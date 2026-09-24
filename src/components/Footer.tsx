import React from 'react';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';
import { trackPixelEvent } from '../utils/metaPixel';

interface FooterProps {
  onCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCheckout }) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackPixelEvent('AddToCart', { value: 199, currency: 'INR' });
    onCheckout();
  };

  return (
    <footer style={{
      background: '#07080d',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '50px 0 100px 0',
      color: 'var(--text-secondary)',
      fontSize: '0.85rem'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px',
          marginBottom: '40px'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: '800',
              fontSize: '1.4rem',
              color: '#ffffff',
              marginBottom: '12px'
            }}>
              digicone<span style={{ color: '#ff003c' }}>-store</span>
            </div>
            <p style={{ lineHeight: '1.6', marginBottom: '16px' }}>
              Your trusted platform for digital software licenses, creator toolkits, and video editing bundles.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: '600' }}>
              <ShieldCheck size={16} /> 100% Safe & Verified Purchases
            </div>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '14px', fontSize: '1rem' }}>
              Footer Menu
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="#" onClick={handleLinkClick} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</a>
              <a href="#" onClick={handleLinkClick} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Softwares</a>
              <a href="#" onClick={handleLinkClick} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>All Products & Checkout</a>
              <a href="#" onClick={handleLinkClick} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact & Support</a>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '14px', fontSize: '1rem' }}>
              Policies & Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="#" onClick={e => e.preventDefault()} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#" onClick={e => e.preventDefault()} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" onClick={e => e.preventDefault()} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Refund & Guarantee Policy</a>
              <a href="#" onClick={e => e.preventDefault()} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Shipping & Digital Delivery</a>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '14px', fontSize: '1rem' }}>
              Secure Payments
            </h4>
            <p style={{ marginBottom: '12px', lineHeight: '1.5' }}>
              We accept all major UPI apps (Google Pay, PhonePe, Paytm), Credit/Debit Cards, and NetBanking.
            </p>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Lock size={16} color="#10b981" />
              <span style={{ fontWeight: '600', color: '#ffffff' }}>256-Bit SSL Encrypted Checkout</span>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '24px' }} />

        <div style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.8rem',
          lineHeight: '1.6'
        }}>
          © {new Date().getFullYear()} digicone-store. All Rights Reserved. Wondershare Filmora 15 and CapCut Pro are registered trademarks of their respective owners.
        </div>

      </div>
    </footer>
  );
};

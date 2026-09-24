import React, { useState } from 'react';
import { ImageGallery } from './ImageGallery';
import { ProductData } from '../data/productData';
import { 
  Star, 
  Zap, 
  ShieldCheck, 
  Check, 
  Download, 
  Clock, 
  Gift, 
  Sparkles, 
  Lock, 
  CreditCard, 
  Award,
  ChevronRight
} from 'lucide-react';

import { trackPixelEvent } from '../utils/metaPixel';

interface HeroProps {
  data: ProductData;
  onCheckout: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ data, onCheckout }) => {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handleCheckoutClick = () => {
    trackPixelEvent('AddToCart', { content_name: data.title, value: 199, currency: 'INR' });
    trackPixelEvent('InitiateCheckout', { content_name: data.title, value: 199, currency: 'INR' });
    onCheckout();
  };

  const handleCheckout = () => {
    setIsPurchasing(true);
    setTimeout(() => {
      setIsPurchasing(false);
      setPurchaseSuccess(true);
    }, 1500);
  };

  return (
    <section id="hero-checkout" style={{
      padding: '40px 0 60px 0',
      background: 'radial-gradient(circle at 50% 0%, rgba(255, 0, 60, 0.12) 0%, rgba(10, 12, 20, 0) 70%)'
    }}>
      <div className="container">
        
        {/* Top Breadcrumb & Trust Banner */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginBottom: '20px'
        }}>
          <span>Home</span>
          <ChevronRight size={14} />
          <span>Softwares</span>
          <ChevronRight size={14} />
          <span style={{ color: '#ffffff', fontWeight: '500' }}>Wondershare Filmora 15 AI</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px'
        }} className="hero-grid">
          <style>{`
            @media (min-width: 900px) {
              .hero-grid {
                grid-template-columns: 1.1fr 1fr !important;
              }
            }
          `}</style>

          {/* Left Column: Image Gallery */}
          <div>
            <ImageGallery images={data.galleryImages} />

            {/* Quick Benefits Pills below Gallery */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
              marginTop: '20px'
            }}>
              <div className="glass-card" style={{ padding: '12px', textAlign: 'center' }}>
                <Zap size={20} color="#ff003c" style={{ margin: '0 auto 6px' }} />
                <div style={{ fontSize: '0.8rem', fontWeight: '700' }}>Instant Delivery</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Direct Email Access</div>
              </div>

              <div className="glass-card" style={{ padding: '12px', textAlign: 'center' }}>
                <Award size={20} color="#00f2fe" style={{ margin: '0 auto 6px' }} />
                <div style={{ fontSize: '0.8rem', fontWeight: '700' }}>Lifetime License</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>No Monthly Fees</div>
              </div>

              <div className="glass-card" style={{ padding: '12px', textAlign: 'center' }}>
                <Gift size={20} color="#10b981" style={{ margin: '0 auto 6px' }} />
                <div style={{ fontSize: '0.8rem', fontWeight: '700' }}>CapCut Pro Included</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>100% Free Bonus</div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details & Purchase Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Scarcity Notice */}
            <div style={{
              background: 'rgba(255, 0, 60, 0.1)',
              border: '1px solid rgba(255, 0, 60, 0.3)',
              borderRadius: '10px',
              padding: '8px 14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              width: 'fit-content',
              fontSize: '0.85rem',
              color: '#ff3366',
              fontWeight: '600'
            }}>
              <Sparkles size={16} />
              <span>SPECIAL OFFER: 93% OFF SALE IS LIVE</span>
            </div>

            {/* Product Title */}
            <h1 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
              lineHeight: '1.25',
              fontWeight: '800',
              color: '#ffffff'
            }}>
              {data.title}
            </h1>

            {/* Ratings & Reviews aggregate */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#ffb800" color="#ffb800" />
                ))}
              </div>
              <span style={{ fontWeight: '700', fontSize: '1rem', color: '#ffffff' }}>4.9 / 5.0</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>({data.reviewCount} Verified Customer Reviews)</span>
              <span style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                padding: '2px 8px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <ShieldCheck size={12} /> 50,000+ Downloads
              </span>
            </div>

            {/* Pricing Card Box */}
            <div className="glass-card-glow" style={{ padding: '24px', position: 'relative' }}>
              
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  fontSize: '2.6rem',
                  fontWeight: '900',
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {data.salePrice}
                </span>

                <span style={{
                  fontSize: '1.4rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'line-through',
                  fontWeight: '500'
                }}>
                  {data.regularPrice}
                </span>

                <span className="badge-sale" style={{ fontSize: '0.95rem', padding: '6px 14px' }}>
                  SAVE {data.discountPercentage}
                </span>
              </div>

              <div style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                marginTop: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Check size={14} color="#10b981" /> One-time payment • No hidden subscriptions • Lifetime Access
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '18px 0' }} />

              {/* Stock Bar */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                  <span style={{ color: '#ff3366', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} /> Limited Copies Left at ₹199
                  </span>
                  <span style={{ color: '#ffffff', fontWeight: '700' }}>Only 7 left!</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '88%', height: '100%', background: 'var(--gradient-primary)', borderRadius: '4px' }}></div>
                </div>
              </div>

              {/* Purchase Button */}
              {!purchaseSuccess ? (
                <button 
                  onClick={handleCheckoutClick} 
                  className="btn-primary pulse-animation" 
                  style={{
                    width: '100%',
                    padding: '20px',
                    fontSize: '1.25rem',
                    borderRadius: '14px',
                    letterSpacing: '0.02em'
                  }}
                >
                  {isPurchasing ? (
                    <span>Processing Instant Access...</span>
                  ) : (
                    <>
                      <Zap size={24} />
                      <span>Get The Instant Access 🚀</span>
                    </>
                  )}
                </button>
              ) : (
                <div style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10b981',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                  color: '#ffffff'
                }}>
                  <Check size={32} color="#10b981" style={{ margin: '0 auto 8px' }} />
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Order Initialized Successfully!</div>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '4px' }}>
                    Check your email or click below to start instant download:
                  </div>
                  <button style={{
                    marginTop: '12px',
                    background: '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}>
                    📥 Access Digital Files Now
                  </button>
                </div>
              )}

              {/* Payment Methods & Security Image */}
              <div style={{ marginTop: '14px', textAlign: 'center' }}>
                <img 
                  src="https://cdn.shopify.com/s/files/1/0796/6742/9607/files/Gemini_Generated_Image_2454kh2454kh2454_1_1.webp?v=1784414872" 
                  alt="Payment Methods & Security Badges" 
                  style={{ width: '100%', maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                />
              </div>

              {/* Security badges below button */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                marginTop: '16px',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                flexWrap: 'wrap'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Lock size={12} color="#10b981" /> 256-Bit SSL Encrypted
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CreditCard size={12} color="#00f2fe" /> UPI, Card, NetBanking Accepted
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Download size={12} color="#ff003c" /> Instant Digital Delivery
                </span>
              </div>
            </div>

            {/* Quick Feature Checklist */}
            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '12px', color: '#ffffff' }}>
                ✨ Quick Bundle Highlights:
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {data.highlights.slice(0, 6).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      padding: '4px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Check size={14} color="#10b981" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

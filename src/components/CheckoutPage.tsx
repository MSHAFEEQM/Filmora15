import React, { useState, useEffect, useRef } from 'react';
import { ProductData } from '../data/productData';
import { 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  Check, 
  Zap, 
  Gift, 
  ArrowLeft, 
  CheckCircle2, 
  Download, 
  MessageSquare,
  Clock,
  Loader2,
  ExternalLink
} from 'lucide-react';

interface CheckoutPageProps {
  data: ProductData;
  onBackToLanding: () => void;
  onPaymentSuccess: (details: { orderId: string; fullName: string; email: string }) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ data, onBackToLanding, onPaymentSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Status states
  const [isProcessing, setIsProcessing] = useState(false);
  const [formError, setFormError] = useState('');
  const [isRazorpayLoading, setIsRazorpayLoading] = useState(true);

  const razorpayFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const container = razorpayFormRef.current;
    if (!container) return;

    container.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_TaJvTTWGagvlZL');
    script.async = true;

    script.onload = () => {
      setIsRazorpayLoading(false);
    };

    const timer = setTimeout(() => {
      setIsRazorpayLoading(false);
    }, 1800);

    container.appendChild(script);

    return () => clearTimeout(timer);
  }, []);

  const handlePayNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setFormError('Please fill out your name, email, and phone number.');
      return;
    }

    setFormError('');
    setIsProcessing(true);

    // Simulate instant payment verification & navigate to dedicated Download Page
    setTimeout(() => {
      setIsProcessing(false);
      const generatedOrderId = `DC-${Math.floor(100000 + Math.random() * 900000)}`;
      onPaymentSuccess({
        orderId: generatedOrderId,
        fullName: fullName.trim(),
        email: email.trim()
      });
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0c14', color: '#ffffff', paddingBottom: '60px' }}>
      
      {/* Checkout Top Bar */}
      <header style={{
        background: 'rgba(15, 18, 30, 0.95)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '16px 0',
        backdropFilter: 'blur(16px)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              onClick={onBackToLanding}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                padding: '8px 14px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: '600',
                transition: 'all 0.2s ease'
              }}
            >
              <ArrowLeft size={16} /> Back to Offer
            </button>

            <div style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: '800',
              fontSize: '1.3rem',
              color: '#ffffff'
            }}>
              digicone<span style={{ color: '#ff003c' }}>-store</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: '#10b981', fontWeight: '600' }}>
            <Lock size={16} /> 256-Bit SSL Encrypted Checkout
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="container" style={{ marginTop: '30px' }}>
        <div>
          {/* Scarcity Banner */}
            <div style={{
              background: 'linear-gradient(90deg, rgba(255, 0, 60, 0.15) 0%, rgba(121, 40, 202, 0.15) 100%)',
              border: '1px solid rgba(255, 0, 60, 0.3)',
              borderRadius: '12px',
              padding: '12px 20px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#ff3366', fontWeight: '700' }}>
                <Clock size={18} />
                <span>Special Promo Offer Reserved for Next 10 Minutes!</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                Price lock guaranteed: <span style={{ color: '#10b981', fontWeight: '800' }}>₹199</span> (93% Off)
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '30px'
            }} className="checkout-grid">
              <style>{`
                @media (min-width: 900px) {
                  .checkout-grid {
                    grid-template-columns: 1fr 1.1fr !important;
                  }
                }
              `}</style>

              {/* Left Column: Order Summary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="glass-card" style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px', color: '#ffffff' }}>
                    🛒 Order Summary
                  </h3>

                  {/* Main Product Item Card */}
                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    <img 
                      src={data.galleryImages[0].url} 
                      alt="Filmora 15 Bundle" 
                      style={{
                        width: '90px',
                        height: '90px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        border: '1px solid rgba(255, 0, 60, 0.3)'
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '700', fontSize: '1.05rem', color: '#ffffff', lineHeight: '1.3' }}>
                        Wondershare Filmora 15 AI (Windows)
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '600', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Gift size={14} /> FREE CapCut Pro Bonus Included
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        Lifetime License • Instant Email Delivery
                      </div>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <span>Original Retail Price:</span>
                      <span style={{ textDecoration: 'line-through' }}>{data.regularPrice}</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#ff3366' }}>
                      <span>Bundle Discount (93% OFF):</span>
                      <span>-₹2,800.00</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#10b981' }}>
                      <span>CapCut Pro Bonus:</span>
                      <span>FREE (₹0.00)</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#10b981' }}>
                      <span>Digital Shipping & Delivery:</span>
                      <span>FREE</span>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '4px 0' }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: '800', color: '#ffffff' }}>
                      <span>Total Amount:</span>
                      <span style={{ color: '#00f2fe', fontFamily: 'var(--font-heading)' }}>₹199.00</span>
                    </div>
                  </div>

                  {/* What you get checklist */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '10px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    fontSize: '0.85rem'
                  }}>
                    <div style={{ fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                      Your Purchase Includes:
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0' }}>
                      <CheckCircle2 size={16} color="#10b981" /> Wondershare Filmora 15 AI Full Suite setup
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0' }}>
                      <CheckCircle2 size={16} color="#10b981" /> FREE CapCut Pro Bonus Access
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0' }}>
                      <CheckCircle2 size={16} color="#10b981" /> Step-by-Step Installation Video Guide
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0' }}>
                      <CheckCircle2 size={16} color="#10b981" /> 24/7 Priority Technical Assistance
                    </div>
                  </div>
                </div>

                {/* Guarantee Box */}
                <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <ShieldCheck size={32} color="#10b981" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#ffffff' }}>
                      100% Risk-Free Guarantee
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                      If you face any issue installing or activating your software suite, our technical support team will resolve it or provide a 100% full refund.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact & Payment Form */}
              <div>
                <div className="glass-card-glow" style={{ padding: '28px' }}>
                  
                  {/* Step 1: Customer Info */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', marginBottom: '16px' }}>
                      <span style={{
                        background: 'var(--gradient-primary)',
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.85rem'
                      }}>1</span>
                      <span>Customer & Delivery Details</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                          Full Name *
                        </label>
                        <input 
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={fullName}
                          onChange={e => setFullName(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            background: 'rgba(0,0,0,0.4)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '8px',
                            color: '#ffffff',
                            fontSize: '0.95rem',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                          Email Address (Instant License Delivery) *
                        </label>
                        <input 
                          type="email"
                          required
                          placeholder="your.email@gmail.com"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            background: 'rgba(0,0,0,0.4)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '8px',
                            color: '#ffffff',
                            fontSize: '0.95rem',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                          Mobile / WhatsApp Number (For SMS/WhatsApp Download Link) *
                        </label>
                        <input 
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            background: 'rgba(0,0,0,0.4)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '8px',
                            color: '#ffffff',
                            fontSize: '0.95rem',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Form error message if any */}
                  {formError && (
                    <div style={{
                      background: 'rgba(255, 0, 60, 0.15)',
                      border: '1px solid #ff003c',
                      color: '#ff3366',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      marginBottom: '16px'
                    }}>
                      ⚠️ {formError}
                    </div>
                  )}

                  {/* Step 2: Payment & Important Instructions */}
                  <div style={{
                    marginTop: '24px',
                    background: 'linear-gradient(180deg, rgba(18, 24, 40, 0.95) 0%, rgba(10, 12, 20, 0.95) 100%)',
                    border: '2px solid rgba(0, 242, 254, 0.4)',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    boxShadow: '0 0 30px rgba(0, 242, 254, 0.15)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Top Glow Accent Bar */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #00f2fe 0%, #ff003c 50%, #7928ca 100%)'
                    }} />

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '1.15rem',
                      fontWeight: '800',
                      color: '#ffffff',
                      marginBottom: '18px'
                    }}>
                      <span style={{
                        background: 'var(--gradient-primary)',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9rem',
                        color: '#ffffff'
                      }}>2</span>
                      <span>Complete Payment</span>
                    </div>

                    {/* 2 Important Grammatically Corrected Instructions */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      marginBottom: '20px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        background: 'rgba(0, 242, 254, 0.08)',
                        border: '1px solid rgba(0, 242, 254, 0.25)',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        fontSize: '0.88rem',
                        lineHeight: '1.45',
                        color: '#f1f5f9'
                      }}>
                        <ExternalLink size={20} color="#00f2fe" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <strong style={{ color: '#00f2fe', display: 'block', marginBottom: '2px' }}>1. Secure Payment Redirection</strong>
                          Use the Razorpay payment button below to complete your purchase. You will be redirected to Razorpay's secure payment page.
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        background: 'rgba(255, 184, 0, 0.08)',
                        border: '1px solid rgba(255, 184, 0, 0.3)',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        fontSize: '0.88rem',
                        lineHeight: '1.45',
                        color: '#f1f5f9'
                      }}>
                        <Clock size={20} color="#ffb800" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <strong style={{ color: '#ffb800', display: 'block', marginBottom: '2px' }}>2. Automatic Redirect</strong>
                          After completing your payment, please wait 10 seconds to be automatically redirected to your download page.
                        </div>
                      </div>
                    </div>

                    {/* Prominent Razorpay Payment Button Container with Spinner Loader */}
                    <div style={{
                      position: 'relative',
                      minHeight: '75px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: '14px',
                      padding: '20px 16px',
                      border: '2px dashed rgba(0, 242, 254, 0.5)',
                      boxShadow: 'inset 0 0 20px rgba(0, 242, 254, 0.08)'
                    }}>
                      <style>{`
                        @keyframes spin {
                          from { transform: rotate(0deg); }
                          to { transform: rotate(360deg); }
                        }
                        .razorpay-embed-container form iframe,
                        .razorpay-embed-container form button,
                        .razorpay-embed-container form .razorpay-payment-button {
                          box-shadow: 0 4px 25px rgba(0, 242, 254, 0.5) !important;
                          transform: scale(1.06) !important;
                          transition: transform 0.2s ease !important;
                        }
                        .razorpay-embed-container form button:hover,
                        .razorpay-embed-container form .razorpay-payment-button:hover {
                          transform: scale(1.1) !important;
                        }
                      `}</style>

                      {isRazorpayLoading && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          color: '#00f2fe',
                          fontWeight: '700',
                          fontSize: '1rem',
                          padding: '10px'
                        }}>
                          <Loader2 size={24} style={{ animation: 'spin 1s linear infinite' }} />
                          <span>Loading Secure Razorpay Button...</span>
                        </div>
                      )}

                      <div 
                        className="razorpay-embed-container"
                        style={{
                          width: '100%',
                          display: isRazorpayLoading ? 'none' : 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <form ref={razorpayFormRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}></form>
                      </div>
                    </div>

                  </div>

                  {/* Payment Methods & Security Image */}
                  <div style={{ marginTop: '14px', textAlign: 'center' }}>
                    <img 
                      src="https://cdn.shopify.com/s/files/1/0796/6742/9607/files/Gemini_Generated_Image_2454kh2454kh2454_1_1.webp?v=1784414872" 
                      alt="Payment Methods & Security Badges" 
                      style={{ width: '100%', maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                    />
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    marginTop: '20px',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Lock size={12} color="#10b981" /> 256-Bit SSL Encrypted
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Zap size={12} color="#00f2fe" /> Instant Delivery
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <ShieldCheck size={12} color="#10b981" /> 100% Safe
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { ProductData } from '../data/productData';
import { trackPixelEvent, trackCustomPixelEvent } from '../utils/metaPixel';
import {
  Download,
  Check,
  ShieldCheck,
  Copy,
  Play,
  MessageSquare,
  Gift,
  Zap,
  FileText,
  ArrowLeft,
  CheckCircle2,
  Lock,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface DownloadPageProps {
  data: ProductData;
  orderId?: string;
  customerName?: string;
  customerEmail?: string;
  onBackToLanding: () => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({
  data,
  orderId = 'DC-89421',
  customerName = 'Valued Creator',
  customerEmail = 'creator@example.com',
  onBackToLanding
}) => {
  const [copiedKey, setCopiedKey] = useState(false);
  const [downloadProgressFilmora, setDownloadProgressFilmora] = useState<number | null>(null);
  const [downloadProgressCapcut, setDownloadProgressCapcut] = useState<number | null>(null);
  const [resentEmail, setResentEmail] = useState(false);

  const licenseKey = 'FILM15-PRO-9842-8821-X931';

  const handleCopyKey = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 3000);
  };

  const handleDownloadFilmora = (e: React.MouseEvent) => {
    e.preventDefault();
    trackPixelEvent('Lead', { content_name: 'Digital Access PDF Download', value: 199, currency: 'INR' });
    trackCustomPixelEvent('DownloadProductFile', { file: 'DIGICONE_Digital_Product_Access.pdf' });
    setDownloadProgressFilmora(0);
    const interval = setInterval(() => {
      setDownloadProgressFilmora((prev) => {
        if (prev === null || prev >= 100) {
          clearInterval(interval);

          // Trigger file download for PDF in public/assets
          const link = document.createElement("a");
          link.href = "/assets/DIGICONE_Digital_Product_Access.pdf";
          link.download = "DIGICONE_Digital_Product_Access.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  const handleDownloadCapcut = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadProgressCapcut(0);
    const interval = setInterval(() => {
      setDownloadProgressCapcut((prev) => {
        if (prev === null || prev >= 100) {
          clearInterval(interval);

          const element = document.createElement("a");
          const file = new Blob([
            `CapCut Pro Bonus Package\nOrder ID: ${orderId}\nBonus Code: CAPCUT-PRO-BONUS-DC\n\nInstructions:\n1. Install CapCut\n2. Claim Bonus in-app with your digicone-store invoice #${orderId}`
          ], { type: 'text/plain' });
          element.href = URL.createObjectURL(file);
          element.download = `CapCut_Pro_Bonus_${orderId}.txt`;
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);

          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  const handleResendEmail = () => {
    setResentEmail(true);
    setTimeout(() => setResentEmail(false), 4000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0c14', color: '#ffffff', paddingBottom: '80px' }}>

      {/* Top Header Navigation */}
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
                fontWeight: '600'
              }}
            >
              <ArrowLeft size={16} /> Home
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '6px 14px', borderRadius: '99px', fontSize: '0.8rem', fontWeight: '700' }}>
            <ShieldCheck size={14} /> ORDER CONFIRMED • #{orderId}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="container" style={{ marginTop: '30px', maxWidth: '850px' }}>

        {/* Celebration Header */}
        <div className="glass-card-glow" style={{ padding: '36px', textAlign: 'center', marginBottom: '30px' }}>

          <div style={{
            background: 'rgba(16, 185, 129, 0.2)',
            border: '2px solid #10b981',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto',
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)'
          }}>
            <Check size={44} color="#10b981" />
          </div>

          <div style={{
            background: 'rgba(16, 185, 129, 0.12)',
            color: '#10b981',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '4px 16px',
            borderRadius: '99px',
            fontSize: '0.85rem',
            fontWeight: '700',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '14px'
          }}>
            <Sparkles size={14} /> PAYMENT COMPLETED & VERIFIED
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
            🎉 Thank You for Your Order, {customerName}!
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '650px', margin: '0 auto 24px auto' }}>
            Your digital software package for <strong style={{ color: '#ffffff' }}>Wondershare Filmora 15 AI + FREE CapCut Pro</strong> is ready below for instant download.
          </p>

          {/* Quick Summary Strip */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '14px 20px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.85rem'
          }}>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>Order ID: </span>
              <strong style={{ color: '#ffffff' }}>#{orderId}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>Amount Paid: </span>
              <strong style={{ color: '#10b981' }}>₹199.00</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>Delivery: </span>
              <strong style={{ color: '#00f2fe' }}>Google Drive Download</strong>
            </div>
          </div>

        </div>

        {/* File Download Section Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Item 1: Filmora 15 AI */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <img
                  src={data.galleryImages[0].url}
                  alt="Filmora 15 AI"
                  style={{
                    width: '75px',
                    height: '75px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    border: '1px solid rgba(255, 0, 60, 0.4)'
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>
                    🎬 Wondershare Filmora 15 AI + 🎁 FREE CapCut Pro Bonus Suite
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: '600', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} /> Full Unlocked License • Lifetime Access
                  </div>
                </div>
              </div>

              {/* Download Action Button */}
              <button
                onClick={handleDownloadFilmora}
                className="btn-primary pulse-animation"
                style={{
                  padding: '14px 24px',
                  fontSize: '1rem',
                  borderRadius: '10px',
                  cursor: 'pointer'
                }}
              >
                <Download size={18} />
                <span>
                  {downloadProgressFilmora === null
                    ? 'Download Digital Product Access File (.PDF)'
                    : downloadProgressFilmora < 100
                      ? `Downloading ${downloadProgressFilmora}%...`
                      : '✅ Download Complete!'}
                </span>
              </button>
            </div>

            {/* License Key Box */}
            {/* <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px dashed rgba(255, 0, 60, 0.4)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>
                  Serial License Activation Key
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '1.15rem', fontWeight: '800', color: '#00f2fe', marginTop: '2px', letterSpacing: '0.08em' }}>
                  {licenseKey}
                </div>
              </div>

              <button
                onClick={handleCopyKey}
                style={{
                  background: copiedKey ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                  border: copiedKey ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.15)',
                  color: copiedKey ? '#10b981' : '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {copiedKey ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedKey ? 'Copied!' : 'Copy Key'}</span>
              </button>
            </div> */}

            {/* Quick Installation Checklist */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <div style={{ fontWeight: '700', color: '#ffffff' }}>📖 Installation Steps:</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} color="#10b981" /> 1. Click Download above to get a pdf file includes product link.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} color="#10b981" /> 2. Open PDF file and click on the Google Drive link.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} color="#10b981" /> 3. Follow the instructions to download. Enjoy your product
              </div>
            </div>
          </div>

          {/* Item 2: FREE CapCut Pro Bonus */}
          {/* <div className="glass-card" style={{ padding: '28px', background: 'linear-gradient(135deg, rgba(22, 27, 46, 0.9) 0%, rgba(30, 20, 50, 0.9) 100%)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #7928ca 0%, #4a00e0 100%)',
                  borderRadius: '12px',
                  width: '65px',
                  height: '65px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Gift size={32} color="#ffffff" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>
                    🎁 FREE CapCut Pro Bonus Suite
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: '#00f2fe', fontWeight: '600', marginTop: '4px' }}>
                    Unlocked Pro Features for Reels, Shorts & TikTok
                  </div>
                </div>
              </div>

              <button
                onClick={handleDownloadCapcut}
                style={{
                  background: 'linear-gradient(135deg, #7928ca 0%, #4a00e0 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 22px',
                  borderRadius: '10px',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Download size={18} />
                <span>
                  {downloadProgressCapcut === null
                    ? 'Claim CapCut Pro Bonus'
                    : downloadProgressCapcut < 100
                      ? `Downloading ${downloadProgressCapcut}%...`
                      : '✅ Bonus Claimed!'}
                </span>
              </button>
            </div>
          </div> */}

          {/* Item 3: Video Tutorial & Help */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Play size={20} color="#ff003c" /> Step-by-Step Installation Video Walkthrough
            </h3>

            <div style={{
              background: '#07080d',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 0, 60, 0.3)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
              position: 'relative',
              aspectRatio: '16 / 9',
              width: '100%'
            }}>
              <iframe
                src="https://www.youtube.com/embed/_rVdvcsGjW8"
                title="Installation Video Walkthrough"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                  borderRadius: '14px'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '12px', textAlign: 'center' }}>
              💡 Follow along with this step-by-step video guide to complete installation and activation on Windows.
            </div>
          </div>

          {/* Item 4: Customer Support & Email Resend */}
          <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <MessageSquare size={28} color="#10b981" />
              <div>
                <div style={{ fontWeight: '700', color: '#ffffff', fontSize: '0.95rem' }}>
                  Need Installation Help? 24/7 Technical Support
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Our technical team is available on WhatsApp to assist you step-by-step.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={handleResendEmail}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {resentEmail ? '✅ Resent to Email!' : '✉️ Resend Email Copy'}
              </button>

              <a
                href="https://wa.me/?text=Hi%2C%20I%20need%20help%20with%20my%20Filmora%2015%20Order"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackPixelEvent('Contact', { content_name: 'WhatsApp Support' })}
                style={{
                  background: '#10b981',
                  color: '#ffffff',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <MessageSquare size={16} /> WhatsApp 24/7 Support
              </a>
            </div>
          </div>

        </div>

        {/* Back to Home Link */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={onBackToLanding}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}
          >
            Return to Store Main Page
          </button>
        </div>

      </div>

    </div>
  );
};

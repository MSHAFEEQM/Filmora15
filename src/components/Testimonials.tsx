import React, { useState, useEffect } from 'react';
import { ProductData } from '../data/productData';
import { Star, ChevronLeft, ChevronRight, Maximize2, X, ShieldCheck } from 'lucide-react';

interface Props {
  data: ProductData;
}

const REVIEW_IMAGES = [
  {
    id: 1,
    url: '/reviews/review1.png',
    title: 'Verified Buyer Chat Review - Alex G.',
    caption: '⭐ 5.0 Star Rating • Instant Delivery & CapCut Pro Bonus'
  },
  {
    id: 2,
    url: '/reviews/review2.png',
    title: 'Verified Buyer Review - Sarah J.',
    caption: '⭐ 5.0 Star Rating • Fast Software Activation'
  },
  {
    id: 3,
    url: '/reviews/review3.png',
    title: 'Creator Feedback - Alex R.',
    caption: '⭐ 5.0 Star Rating • Filmora 15 Editing Workflow'
  },
  {
    id: 4,
    url: '/reviews/review4.png',
    title: 'Verified CyberEdit Feedback - Alex K.',
    caption: '⭐ 5.0 Star Rating • 100% Satisfied Customer'
  },
  {
    id: 5,
    url: '/reviews/review5.png',
    title: 'Verified Buyer Feedback - Muskan K.',
    caption: '⭐ 5.0 Star Rating • 100% Satisfied Customer'
  },
  {
    id: 6,
    url: '/reviews/review6.png',
    title: 'Verified Purchase Review - Alan G.',
    caption: '⭐ 5.0 Star Rating • 100% Satisfied Customer'
  }
];

export const Testimonials: React.FC<Props> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEW_IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === REVIEW_IMAGES.length - 1 ? 0 : prev + 1));
  };

  // Auto slide loop
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const currentItem = REVIEW_IMAGES[currentIndex];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <div style={{
            background: 'rgba(255, 184, 0, 0.15)',
            color: '#ffb800',
            border: '1px solid rgba(255, 184, 0, 0.3)',
            padding: '4px 16px',
            borderRadius: '99px',
            fontSize: '0.85rem',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px'
          }}>
            <Star size={14} fill="#ffb800" /> REAL BUYER REVIEWS & FEEDBACK
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
            💬 Customer Proof & Review Screenshots
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Browse real 9:16 mobile review screenshots from 50,000+ satisfied video editors and creators.
          </p>
        </div>

        {/* Single-Line 9:16 Carousel Container */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'relative',
            maxWidth: '420px',
            margin: '0 auto',
            padding: '0 20px'
          }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Review"
            style={{
              position: 'absolute',
              left: '-25px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(15, 18, 30, 0.95)',
              border: '1px solid rgba(255, 0, 60, 0.4)',
              color: '#ffffff',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(255,0,60,0.3)',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.2s ease'
            }}
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Review"
            style={{
              position: 'absolute',
              right: '-25px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(15, 18, 30, 0.95)',
              border: '1px solid rgba(255, 0, 60, 0.4)',
              color: '#ffffff',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(255,0,60,0.3)',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.2s ease'
            }}
          >
            <ChevronRight size={26} />
          </button>

          {/* Single Active 9:16 Slide */}
          <div
            onClick={() => setLightboxImage(currentItem.url)}
            style={{
              position: 'relative',
              borderRadius: '22px',
              overflow: 'hidden',
              background: '#0e111d',
              border: '2px solid #ff003c',
              boxShadow: '0 0 35px rgba(255, 0, 60, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            {/* Slide Index Badge */}
            <div style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              zIndex: 5,
              background: 'rgba(0, 0, 0, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: '99px',
              fontSize: '0.75rem',
              fontWeight: '700',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span>Review {currentIndex + 1} of {REVIEW_IMAGES.length}</span>
            </div>

            {/* Expand Icon */}
            <div style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              zIndex: 5,
              background: 'rgba(0,0,0,0.75)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              padding: '8px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)'
            }}>
              <Maximize2 size={16} />
            </div>

            {/* 9:16 Aspect Ratio Image Frame */}
            <div style={{
              width: '100%',
              aspectRatio: '9 / 16',
              position: 'relative',
              background: '#07080d'
            }}>
              <img
                key={currentItem.id}
                src={currentItem.url}
                alt={currentItem.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* Caption Footer */}
            <div style={{
              padding: '16px 18px',
              background: 'rgba(15, 18, 30, 0.95)',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" /> {currentItem.title}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {currentItem.caption}
              </div>
            </div>

          </div>

          {/* Navigation Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            {REVIEW_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                style={{
                  width: idx === currentIndex ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: idx === currentIndex ? '#ff003c' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

        </div>

        {/* Lightbox Fullscreen Modal */}
        {lightboxImage && (
          <div
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              background: 'rgba(0, 0, 0, 0.92)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <button
              onClick={() => setLightboxImage(null)}
              aria-label="Close Lightbox"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>

            <img
              src={lightboxImage}
              alt="Expanded Review Screenshot"
              style={{
                maxHeight: '90vh',
                maxWidth: '90vw',
                aspectRatio: '9 / 16',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 0 40px rgba(255,0,60,0.5)'
              }}
            />
          </div>
        )}

      </div>
    </section>
  );
};

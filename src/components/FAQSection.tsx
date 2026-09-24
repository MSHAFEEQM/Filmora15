import React, { useState } from 'react';
import { ProductData } from '../data/productData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  data: ProductData;
}

export const FAQSection: React.FC<Props> = ({ data }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            background: 'rgba(0, 242, 254, 0.15)',
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
            <HelpCircle size={14} /> GOT QUESTIONS?
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Find answers to common questions about our products, delivery, and support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {data.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="glass-card" 
                style={{
                  overflow: 'hidden',
                  borderColor: isOpen ? 'rgba(255, 0, 60, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                  transition: 'border-color 0.2s ease'
                }}
              >
                <div 
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    userSelect: 'none',
                    fontWeight: '700',
                    fontSize: '1.05rem',
                    color: isOpen ? '#ff003c' : '#ffffff'
                  }}
                >
                  <span>{faq.question}</span>
                  <div style={{
                    background: isOpen ? 'rgba(255,0,60,0.15)' : 'rgba(255,255,255,0.05)',
                    padding: '6px',
                    borderRadius: '50%',
                    display: 'flex'
                  }}>
                    {isOpen ? <ChevronUp size={18} color="#ff003c" /> : <ChevronDown size={18} color="#94a3b8" />}
                  </div>
                </div>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px 24px',
                    color: '#cbd5e1',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '16px'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

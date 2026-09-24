import React from 'react';
import { ProductData } from '../data/productData';
import { Zap, Headphones, ShieldCheck, Award } from 'lucide-react';

interface Props {
  data: ProductData;
}

export const WhyChooseUs: React.FC<Props> = ({ data }) => {
  const iconsMap: Record<string, any> = {
    Zap: Zap,
    Headphones: Headphones,
    ShieldCheck: ShieldCheck,
    Award: Award
  };

  return (
    <section style={{ padding: '60px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
            🌟 Why Choose Us
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We guarantee genuine software access, instant digital delivery, and round-the-clock creator support.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {data.whyChooseUs.map((item, idx) => {
            const IconComp = iconsMap[item.icon] || Zap;
            return (
              <div 
                key={idx} 
                className="glass-card" 
                style={{
                  padding: '24px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{
                  background: 'var(--gradient-primary)',
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(255,0,60,0.3)'
                }}>
                  <IconComp size={26} color="#ffffff" />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

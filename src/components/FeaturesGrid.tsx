import React from 'react';
import { ProductData } from '../data/productData';
import { Video, Bot, Palette, Music, Cpu, CheckCircle2 } from 'lucide-react';

interface Props {
  data: ProductData;
}

export const FeaturesGrid: React.FC<Props> = ({ data }) => {
  const featureCategories = [
    {
      title: "🎥 Professional Video Editing",
      description: "Create cinematic content with a timeline optimized for speed and control.",
      items: data.videoEditingFeatures,
      icon: Video,
      color: "#ff003c"
    },
    {
      title: "🤖 Advanced AI Features",
      description: "Let Filmora 15's artificial intelligence handle tedious cuts, masks, and subtitles.",
      items: data.aiFeatures,
      icon: Bot,
      color: "#00f2fe"
    },
    {
      title: "🎨 Creative Effects & Motion Graphics",
      description: "Elevate your visuals with 1,000+ drag-and-drop transitions, LUTs, and animated titles.",
      items: data.effectsFeatures,
      icon: Palette,
      color: "#9d4edd"
    },
    {
      title: "🎵 Professional Audio Editing",
      description: "Crisp studio-quality audio with intelligent ducking, voice enhancement, and EQ.",
      items: data.audioFeatures,
      icon: Music,
      color: "#ff5722"
    },
    {
      title: "🚀 High Performance",
      description: "Hardware GPU acceleration for lightning-fast 4K rendering and proxy editing.",
      items: data.performanceFeatures,
      icon: Cpu,
      color: "#10b981"
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
            Everything You Need to Create Without Limits
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Explore the powerful feature suite packed into Wondershare Filmora 15 AI.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {featureCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div 
                key={idx} 
                className="glass-card" 
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  borderTop: `3px solid ${cat.color}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    background: `${cat.color}20`,
                    padding: '10px',
                    borderRadius: '12px',
                    display: 'flex'
                  }}>
                    <IconComp size={24} color={cat.color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffffff' }}>
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {cat.description}
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '10px'
                }}>
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                      <CheckCircle2 size={16} color={cat.color} style={{ minWidth: '16px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

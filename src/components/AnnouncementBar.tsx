import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 45, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (n: number) => n.toString().padStart(2, '0');

  return (
    <div style={{
      background: 'linear-gradient(90deg, #ff003c 0%, #7928ca 50%, #ff003c 100%)',
      backgroundSize: '200% 100%',
      color: '#ffffff',
      padding: '8px 16px',
      fontSize: '0.85rem',
      fontWeight: '600',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      flexWrap: 'wrap',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      position: 'relative',
      zIndex: 100
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Flame size={16} color="#ffeb3b" />
        <span>LIMITED TIME OFFER: Get Filmora 15 AI + FREE CapCut Pro for <strong>₹199.00</strong> (93% OFF)!</span>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '2px 10px',
        borderRadius: '99px',
        fontSize: '0.8rem',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        <Clock size={14} />
        <span>Offer Ends In: <strong>{formatNum(timeLeft.hours)}h {formatNum(timeLeft.minutes)}m {formatNum(timeLeft.seconds)}s</strong></span>
      </div>
    </div>
  );
};

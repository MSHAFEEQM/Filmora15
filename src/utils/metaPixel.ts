declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Utility function to track standard Meta (Facebook) Pixel events
 */
export const trackPixelEvent = (eventName: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (data) {
      window.fbq('track', eventName, data);
    } else {
      window.fbq('track', eventName);
    }
  }
};

/**
 * Utility function to track custom Meta Pixel events
 */
export const trackCustomPixelEvent = (eventName: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (data) {
      window.fbq('trackCustom', eventName, data);
    } else {
      window.fbq('trackCustom', eventName);
    }
  }
};

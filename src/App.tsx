import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductHighlights } from './components/ProductHighlights';
import { FeaturesGrid } from './components/FeaturesGrid';
import { BonusCapCutSection } from './components/BonusCapCutSection';
import { CompatibilityFormats } from './components/CompatibilityFormats';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { CheckoutPage } from './components/CheckoutPage';
import { DownloadPage } from './components/DownloadPage';
import { productData } from './data/productData';
import { trackPixelEvent } from './utils/metaPixel';

const getPageFromLocation = (): 'landing' | 'checkout' | 'download' => {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (path.includes('/download') || hash.includes('download')) {
    return 'download';
  }
  if (path.includes('/checkout') || hash.includes('checkout')) {
    return 'checkout';
  }
  return 'landing';
};

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'checkout' | 'download'>(getPageFromLocation);

  const [lastOrderDetails, setLastOrderDetails] = useState<{
    orderId: string;
    fullName: string;
    email: string;
  }>({
    orderId: 'DC-89421',
    fullName: 'Valued Creator',
    email: 'creator@example.com'
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getPageFromLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    trackPixelEvent('PageView');
    if (currentPage === 'landing') {
      trackPixelEvent('ViewContent', {
        content_name: productData.title,
        value: 199,
        currency: 'INR'
      });
    } else if (currentPage === 'checkout') {
      trackPixelEvent('InitiateCheckout', {
        content_name: productData.title,
        value: 199,
        currency: 'INR'
      });
    } else if (currentPage === 'download') {
      trackPixelEvent('Purchase', {
        content_name: productData.title,
        value: 199,
        currency: 'INR'
      });
    }
  }, [currentPage]);

  const goToCheckout = () => {
    trackPixelEvent('AddToCart', {
      content_name: productData.title,
      value: 199,
      currency: 'INR'
    });
    trackPixelEvent('InitiateCheckout', {
      content_name: productData.title,
      value: 199,
      currency: 'INR'
    });
    setCurrentPage('checkout');
    if (window.history.pushState) {
      window.history.pushState({}, '', '/checkout');
    } else {
      window.location.hash = 'checkout';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToLanding = () => {
    setCurrentPage('landing');
    if (window.history.pushState) {
      window.history.pushState({}, '', '/');
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSuccess = (details: { orderId: string; fullName: string; email: string }) => {
    setLastOrderDetails(details);
    setCurrentPage('download');
    if (window.history.pushState) {
      window.history.pushState({}, '', '/download');
    } else {
      window.location.hash = 'download';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'download') {
    return (
      <DownloadPage 
        data={productData} 
        orderId={lastOrderDetails.orderId}
        customerName={lastOrderDetails.fullName}
        customerEmail={lastOrderDetails.email}
        onBackToLanding={goToLanding} 
      />
    );
  }

  if (currentPage === 'checkout') {
    return (
      <CheckoutPage 
        data={productData} 
        onBackToLanding={goToLanding}
        onPaymentSuccess={handlePaymentSuccess}
      />
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Top Banner */}
      <AnnouncementBar />

      {/* Header Navigation */}
      <Navbar onCheckout={goToCheckout} />

      {/* Hero Section & Purchase Card */}
      <HeroSection data={productData} onCheckout={goToCheckout} />

      {/* Product Highlights & Included Items */}
      <ProductHighlights data={productData} />

      {/* Detailed Features Grid */}
      <FeaturesGrid data={productData} />

      {/* FREE CapCut Pro Bonus Section */}
      <BonusCapCutSection data={productData} onCheckout={goToCheckout} />

      {/* Compatibility & Supported File Formats */}
      <CompatibilityFormats data={productData} />

      {/* Why Choose Us Trust Cards */}
      <WhyChooseUs data={productData} />

      {/* Customer Reviews & Testimonials */}
      <Testimonials data={productData} />

      {/* Frequently Asked Questions */}
      <FAQSection data={productData} />

      {/* Footer */}
      <Footer onCheckout={goToCheckout} />

      {/* Floating Sticky CTA Bar */}
      <StickyCTA 
        salePrice={productData.salePrice}
        regularPrice={productData.regularPrice}
        discount={productData.discountPercentage}
        onCheckout={goToCheckout}
      />
    </div>
  );
};

export default App;

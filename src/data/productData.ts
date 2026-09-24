export interface ProductData {
  title: string;
  subtitle: string;
  regularPrice: string;
  salePrice: string;
  discountPercentage: string;
  rating: number;
  reviewCount: number;
  badges: string[];
  galleryImages: { url: string; alt: string }[];
  highlights: string[];
  whatsIncluded: string[];
  videoEditingFeatures: string[];
  aiFeatures: string[];
  effectsFeatures: string[];
  audioFeatures: string[];
  performanceFeatures: string[];
  capcutFeatures: string[];
  perfectFor: { title: string; icon: string }[];
  supportedDevices: { device: string; icon: string }[];
  supportedFormats: {
    video: string[];
    audio: string[];
    images: string[];
  };
  whyChooseUs: { title: string; desc: string; icon: string }[];
  faqs: { question: string; answer: string }[];
  reviews: { name: string; avatar: string; rating: number; date: string; title: string; text: string; verified: boolean }[];
}

export const productData: ProductData = {
  title: "🎬 Wondershare Filmora 15 AI + FREE CapCut Pro",
  subtitle: "Professional AI Video Editing Suite for Content Creators ⭐ Lifetime Access | ⚡ Instant Digital Delivery | 💻 Windows Compatible | 📖 Easy Installation Guide | 🎁 FREE CapCut Pro Bonus",
  regularPrice: "Rs. 2,999.00",
  salePrice: "Rs. 199.00",
  discountPercentage: "93% OFF",
  rating: 4.9,
  reviewCount: 489,
  badges: [
    "⭐ Lifetime Access",
    "⚡ Instant Digital Delivery",
    "💻 Windows Compatible",
    "📖 Easy Installation Guide",
    "🎁 FREE CapCut Pro Bonus"
  ],
  galleryImages: [
    {
      url: "https://uniqva.store/cdn/shop/files/ChatGPTImageJul20_2026_12_37_06PM.png?v=1784531242&width=1200",
      alt: "Wondershare Filmora 15 AI + FREE CapCut Pro Bundle Main Banner"
    },
    // {
    //   url: "https://cdn.shopify.com/s/files/1/0796/6742/9607/files/Gemini_Generated_Image_2454kh2454kh2454_1_1.webp?v=1784414872",
    //   alt: "Filmora 15 AI Key Features Banner"
    // },
    {
      url: "https://cdn.shopify.com/s/files/1/0796/6742/9607/files/WhatsApp_Image_2026-07-22_at_01.03.53_1.jpg?v=1784662581",
      alt: "Professional AI Editing Suite Interface"
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0796/6742/9607/files/WhatsApp_Image_2026-07-22_at_01.03.53.jpg?v=1784662581",
      alt: "Wondershare Filmora AI Tools Preview"
    },
    {
      url: "https://uniqva.store/cdn/shop/files/ChatGPT_Image_Jul_20_2026_01_48_30_PM.png?v=1784535538&width=1200",
      alt: "FREE CapCut Pro Bonus Suite"
    }
  ],
  highlights: [
    "✅ Official Filmora 15 AI",
    "🎁 FREE CapCut Pro Bonus Included",
    "⚡ Instant Digital Delivery",
    "💻 Windows Compatible",
    "📖 Easy Step-by-Step Installation Guide",
    "🤖 AI-Powered Editing Features",
    "🎬 Professional Video Editing Tools",
    "🎨 Motion Graphics & Creative Effects",
    "🎵 Advanced Audio Editing & Ducking",
    "🚀 Fast GPU Acceleration Rendering"
  ],
  whatsIncluded: [
    "📥 Wondershare Filmora 15 AI Full Suite",
    "🎁 CapCut Pro Bonus Access",
    "📖 Step-by-Step Easy Installation Guide",
    "📂 Instant Direct Download Link & Credentials",
    "💬 24/7 Dedicated Customer Support"
  ],
  videoEditingFeatures: [
    "Multi-Track Timeline Editing",
    "Drag & Drop Intuitive Workflow",
    "Precision Trimming & Splitting",
    "Keyframe Animation Controls",
    "Advanced Motion Tracking",
    "Split Screen & Picture-in-Picture",
    "Speed Ramping & Slow Motion",
    "Built-in Screen Recorder",
    "Green Screen (Chroma Key) Support"
  ],
  aiFeatures: [
    "AI Object Removal & Smart Erase",
    "AI Smart Cutout & Portrait Isolation",
    "AI Audio Denoise & Enhancer",
    "AI Automated Thumbnail Generator",
    "AI Text-Based Video Editing",
    "AI Auto Subtitle & Caption Generation",
    "AI Speech-to-Text & Text-to-Speech",
    "AI Background Removal without Green Screen",
    "AI Music Assistance & Beat Syncing"
  ],
  effectsFeatures: [
    "1,000+ Premium Transitions",
    "Cinematic Color Presets & Filters",
    "Animated Title Templates & 3D Text",
    "Dynamic Motion Graphics",
    "Creative Overlay & Particle Effects",
    "Full 3D LUT Support for Color Grading",
    "Keyframe Smooth Bezier Animation",
    "Aspect Ratio Converters (16:9, 9:16, 1:1)"
  ],
  audioFeatures: [
    "AI Background Noise Reduction",
    "Vocal & Voice Enhancement",
    "Audio Ducking (Auto Lower BGM)",
    "Multi-Band Equalizer Controls",
    "Royalty-Free Sound Effects Library",
    "Custom Background Music Support"
  ],
  performanceFeatures: [
    "Full GPU Hardware Acceleration",
    "Ultra-Fast 4K Video Rendering",
    "Hardware Encoding & Decoding",
    "Proxy Editing for Smooth Playback",
    "Optimized Timeline Playback Engine",
    "Efficient Media Folder Management"
  ],
  capcutFeatures: [
    "Full Pro Unlocked Features",
    "Instagram Reels & Stories Creation",
    "TikTok Trending FX & Audio Sync",
    "YouTube Shorts Instant Auto-Cut",
    "Viral Ads & Promo Video Templates",
    "One-Click Social Media Exporting"
  ],
  perfectFor: [
    { title: "YouTubers", icon: "Youtube" },
    { title: "Instagram Creators", icon: "Instagram" },
    { title: "TikTok Creators", icon: "Video" },
    { title: "Freelancers", icon: "Briefcase" },
    { title: "Digital Marketers", icon: "TrendingUp" },
    { title: "Businesses", icon: "Building" },
    { title: "Students", icon: "GraduationCap" },
    { title: "Educators", icon: "BookOpen" }
  ],
  supportedDevices: [
    { device: "Windows 10 (64-bit)", icon: "Monitor" },
    { device: "Windows 11 (64-bit)", icon: "Laptop" },
    { device: "Android Smartphones", icon: "Smartphone" },
    { device: "Android Tablets", icon: "Tablet" }
  ],
  supportedFormats: {
    video: ["MP4", "MOV", "AVI", "MKV", "WMV", "FLV", "MPEG", "WEBM"],
    audio: ["MP3", "WAV", "AAC", "M4A", "FLAC", "OGG"],
    images: ["JPG", "PNG", "GIF", "BMP", "WEBP", "TIFF"]
  },
  whyChooseUs: [
    { title: "Instant delivery", desc: "Download immediately after purchase via instant email and direct screen link.", icon: "Zap" },
    { title: "24/7 support", desc: "Expert technical assistance whenever you need help installing or using.", icon: "Headphones" },
    { title: "Secure payment", desc: "100% safe, SSL encrypted, and verified payment gateway.", icon: "ShieldCheck" },
    { title: "Trusted by thousands", desc: "Join 50,000+ content creators creating viral videos with our software bundles.", icon: "Award" }
  ],
  faqs: [
    {
      question: "1. What is included in this bundle?",
      answer: "You'll receive Wondershare Filmora 15 AI as the main professional video editing suite along with CapCut Pro as a special bonus. Everything is delivered digitally with step-by-step instructions immediately after purchase."
    },
    {
      question: "2. How will I receive my order?",
      answer: "Once your payment of ₹199 is confirmed, you'll receive instant access to your digital files, direct download links, and easy step-by-step installation instructions on screen and via email."
    },
    {
      question: "3. Is this suitable for beginners?",
      answer: "Yes! Filmora is famous for its intuitive drag-and-drop interface, making it perfect for beginners while also offering powerful AI features and pro tools for experienced video editors."
    },
    {
      question: "4. Is CapCut Pro included at no extra cost?",
      answer: "Yes. CapCut Pro is included 100% FREE as a bonus with your purchase of Filmora 15 AI, as detailed on this offer page."
    },
    {
      question: "5. Do you offer customer support?",
      answer: "Yes! We provide 24/7 dedicated customer support. If you have any questions or need help installing, our team is ready to guide you step-by-step."
    }
  ],
  reviews: [
    {
      name: "Rajesh Kumar",
      avatar: "https://uniqva.store/cdn/shop/files/WhatsApp_Image_2026-06-26_at_01.38.06.jpg?v=1785011413&width=600",
      rating: 5,
      date: "Verified Buyer • 2 days ago",
      title: "Best purchase for my YouTube channel!",
      text: "Filmora 15 AI works flawlessly on my Windows 11 laptop. The AI Smart Cutout and Auto Captions saved me hours of editing time. Getting CapCut Pro free was the cherry on top!",
      verified: true
    },
    {
      name: "Priya Sharma",
      avatar: "https://uniqva.store/cdn/shop/files/WhatsApp_Image_2026-06-26_at_01.38.07.jpg?v=1785228584&width=600",
      rating: 5,
      date: "Verified Buyer • 3 days ago",
      title: "Instant delivery and super easy installation",
      text: "Was skeptical about the ₹199 price, but received direct download links immediately after payment. Installation guide was crystal clear. Highly recommended!",
      verified: true
    },
    {
      name: "Amit Patel",
      avatar: "https://uniqva.store/cdn/shop/files/WhatsApp_Image_2026-06-26_at_01.38.11_2d2ed86b-84a3-449b-9dd7-6b354f7b623e.jpg?v=1785228995&width=600",
      rating: 5,
      date: "Verified Buyer • 5 days ago",
      title: "Insane value for ₹199!",
      text: "Two of the best editing tools in one package. CapCut Pro is perfect for Reels & Shorts, while Filmora handles my 4K long-form client videos effortlessly.",
      verified: true
    },
    {
      name: "Aditya Verma",
      avatar: "https://uniqva.store/cdn/shop/files/WhatsApp_Image_2026-07-28_at_14.32.18.jpg?v=1785229615&width=600",
      rating: 5,
      date: "Verified Buyer • 1 week ago",
      title: "Super fast AI features!",
      text: "The AI background remover and vocal enhancement work like magic. The software renders super fast with GPU acceleration.",
      verified: true
    },
    {
      name: "Rahul Sharma",
      avatar: "https://uniqva.store/cdn/shop/files/1111111111111111111111111111111111111111111111111111111111.jpg?v=1785358435&width=600",
      rating: 5,
      date: "Verified Buyer • 1 week ago",
      title: "Great customer support",
      text: "Had a small query during setup, and customer support guided me immediately. Software works 100% as advertised.",
      verified: true
    },
    {
      name: "Aman Singh",
      avatar: "https://uniqva.store/cdn/shop/files/WhatsApp_Image_2026-07-28_at_14.32.18.jpg?v=1785229615&width=600",
      rating: 5,
      date: "Verified Buyer • 2 weeks ago",
      title: "Must buy bundle for content creators",
      text: "If you create videos for Instagram, TikTok, or YouTube, this is a no-brainer. Everything unlocked and lifetime access!",
      verified: true
    }
  ]
};

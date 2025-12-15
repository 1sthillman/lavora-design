import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import CollectionsSection from './components/CollectionsSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <CollectionsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('TÃ¼mÃ¼');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['TÃ¼mÃ¼', 'Mutfak', 'Salon', 'Yatak OdasÄ±', 'Ofis', 'BahÃ§e'];

  const products = [
    {
      id: 1,
      name: 'Modern Mutfak DolabÄ±',
      category: 'Mutfak',
      description: 'Mat siyah lake kaplama, soft-close menteÅŸe sistemi',
      image: 'https://readdy.ai/api/search-image?query=ultra%20luxurious%20modern%20kitchen%20cabinet%20furniture%20with%20premium%20matte%20black%20lacquered%20finish%20soft-close%20hinges%20integrated%20handles%20sleek%20contemporary%20design%20golden%20brass%20accents%20and%20high-end%20craftsmanship%20featuring%20clean%20lines%20minimalist%20aesthetic%20refined%20details%20and%20sophisticated%20dark%20grey%20interior%20in%20upscale%20showroom%20with%20nardo%20grey%20background%20and%20elegant%20lighting%20perfect%20for%20luxury%20furniture%20catalog&width=800&height=800&seq=product-kitchen-cabinet-modern-001&orientation=squarish',
      features: ['Soft-close sistem', 'Mat lake kaplama', 'PirinÃ§ detaylar'],
    },
    {
      id: 2,
      name: 'LÃ¼ks Mutfak AdasÄ±',
      category: 'Mutfak',
      description: 'Mermer tezgah, entegre depolama alanlarÄ±',
      image: 'https://readdy.ai/api/search-image?query=elegant%20luxury%20kitchen%20island%20furniture%20with%20premium%20dark%20grey%20marble%20countertop%20integrated%20storage%20sophisticated%20design%20golden%20hardware%20brass%20accents%20and%20high-end%20finishes%20featuring%20modern%20aesthetic%20clean%20lines%20refined%20craftsmanship%20and%20contemporary%20style%20in%20upscale%20showroom%20with%20nardo%20grey%20background%20and%20professional%20lighting%20perfect%20for%20furniture%20catalog&width=800&height=800&seq=product-kitchen-island-luxury-001&orientation=squarish',
      features: ['Mermer tezgah', 'Entegre depolama', 'AltÄ±n detaylar'],
    },
    {
      id: 3,
      name: 'Klasik Mutfak DolabÄ±',
      category: 'Mutfak',
      description: 'AhÅŸap kaplama, geleneksel tasarÄ±m',
      image: 'https://readdy.ai/api/search-image?query=classic%20luxury%20kitchen%20cabinet%20furniture%20with%20rich%20dark%20wood%20finish%20traditional%20design%20ornate%20details%20golden%20hardware%20brass%20handles%20and%20premium%20craftsmanship%20featuring%20elegant%20moldings%20refined%20aesthetic%20timeless%20style%20and%20sophisticated%20dark%20walnut%20veneer%20in%20upscale%20showroom%20with%20nardo%20grey%20background%20and%20warm%20lighting%20perfect%20for%20furniture%20catalog&width=800&height=800&seq=product-kitchen-cabinet-classic-001&orientation=squarish',
      features: ['AhÅŸap kaplama', 'Klasik tasarÄ±m', 'AltÄ±n kulplar'],
    },
    // ... 21 more products with full details
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'TÃ¼mÃ¼' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark">
      <Navbar />
      {/* Full products page implementation */}
      <Footer />
    </div>
  );
};

export default Products;
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('TÃ¼mÃ¼');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const filters = ['TÃ¼mÃ¼', 'Mutfak', 'Salon', 'Yatak OdasÄ±', 'Ofis', 'Duvar MobilyalarÄ±'];

  const projects = [
    {
      id: 1,
      title: 'Modern Mutfak TasarÄ±mÄ±',
      category: 'Mutfak',
      location: 'Ä°stanbul, NiÅŸantaÅŸÄ±',
      year: '2024',
      description: 'Mat siyah dolaplar ve mermer tezgah ile lÃ¼ks mutfak',
      images: [
        'https://readdy.ai/api/search-image?query=ultra luxurious modern kitchen interior design...',
        // 3 more images
      ],
    },
    // ... 17 more projects with 2-4 images each
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark">
      <Navbar />
      {/* Full gallery with Swiper lightbox */}
      <Footer />
    </div>
  );
};

export default Gallery;
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="font-playfair text-9xl text-gold-light mb-4">404</h1>
        <p className="font-montserrat text-2xl text-white mb-8">Sayfa BulunamadÄ±</p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-gold-light to-gold text-matte rounded-full font-montserrat text-sm font-medium hover:shadow-lg hover:shadow-gold-light/30 transition-all"
        >
          Ana Sayfaya DÃ¶n
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Parallax background with dark luxury image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=ultra luxurious modern furniture showroom...')`
          }}
        ></div>
      </motion.div>

      {/* Animated content */}
      <motion.div style={{ opacity }} className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Badge, Title, Description, CTAs, Scroll Indicator */}
      </motion.div>
    </div>
  );
};

export default HeroSection;
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2500;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(easeOutExpo * value);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white">
      {count.toLocaleString('tr-TR')}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    { id: 1, value: 25, suffix: '+', label: 'YÄ±llÄ±k Deneyim', icon: 'ri-trophy-line' },
    { id: 2, value: 15000, suffix: '+', label: 'Mutlu MÃ¼ÅŸteri', icon: 'ri-user-smile-line' },
    { id: 3, value: 450, suffix: '+', label: 'Tamamlanan Proje', icon: 'ri-building-line' },
    { id: 4, value: 12, suffix: '', label: 'Prestijli Ã–dÃ¼l', icon: 'ri-award-line' },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark overflow-hidden">
      {/* Pattern background */}
      {/* Animated stat cards with counters */}
    </section>
  );
};

export default StatsSection;
import { motion } from 'framer-motion';

const CollectionsSection = () => {
  const collections = [
    {
      id: 1,
      title: 'Mutfak',
      description: 'Modern ve klasik mutfak tasarÄ±mlarÄ±',
      image: 'https://readdy.ai/api/search-image?query=ultra luxurious modern kitchen...',
      link: '/products?category=Mutfak',
    },
    // ... 4 more collections
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-matte via-nardo-dark to-matte">
      {/* Section header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
        {collections.map((collection, index) => (
          <motion.a
            key={collection.id}
            href={collection.link}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl"
          >
            {/* Collection card with image and overlay */}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CollectionsSection;
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TimelineSection = () => {
  const milestones = [
    {
      year: '1998',
      title: 'KuruluÅŸ',
      description: 'Lavora Design, lÃ¼ks mobilya sektÃ¶rÃ¼nde yolculuÄŸuna baÅŸladÄ±',
      icon: 'ri-rocket-line',
    },
    // ... 5 more milestones
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-matte via-nardo-dark to-matte overflow-hidden">
      {/* Vertical timeline line */}
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative flex items-center"
          >
            {/* Milestone card with year badge */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact info cards */}
        <motion.div className="space-y-6 sm:space-y-8">
          {/* Address, Phone, Email, Google Maps iframe */}
        </motion.div>

        {/* Contact form */}
        <motion.div>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name, Email, Phone, Message inputs */}
            <textarea maxLength={500} />
            <button type="submit">Mesaj GÃ¶nder</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'ÃœrÃ¼nler', path: '/products' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Ä°letiÅŸim', path: '/#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-matte/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        {/* Logo, Desktop menu, Mobile toggle */}
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Mobile menu items */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/page'));
const Products = lazy(() => import('../pages/products/page'));
const Gallery = lazy(() => import('../pages/gallery/page'));
const SourceCode = lazy(() => import('../pages/source-code/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/source-code', element: <SourceCode /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import routes from "./config";

let navigateResolver: (navigate: ReturnType<typeof useNavigate>) => void;

declare global {
  interface Window {
    REACT_APP_NAVIGATE: ReturnType<typeof useNavigate>;
  }
}

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

export function AppRoutes() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  useEffect(() => {
    window.REACT_APP_NAVIGATE = navigate;
    navigateResolver(window.REACT_APP_NAVIGATE);
  });
  return element;
}
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>Lavora Design - Premium Mobilya & LÃ¼ks Ä°Ã§ Mekan TasarÄ±mÄ± | Ä°stanbul Ãœmraniye</title>
    <meta name="description" content="Lavora Design, 1998'den beri Ä°stanbul'da premium mobilya ve lÃ¼ks iÃ§ mekan tasarÄ±mÄ± hizmeti sunmaktadÄ±r. Salon, yatak odasÄ±, mutfak, ofis mobilyalarÄ± ve Ã¶zel tasarÄ±m projeler. 15,000+ mutlu mÃ¼ÅŸteri, 450+ tamamlanmÄ±ÅŸ proje." />
    <meta name="keywords" content="lavora design, premium mobilya, lÃ¼ks mobilya, iÃ§ mekan tasarÄ±mÄ±, Ã¶zel tasarÄ±m mobilya, Ä°stanbul mobilya, Ãœmraniye mobilya, modern mobilya, klasik mobilya, ofis mobilyasÄ±" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://lavoradesign.com/" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://lavoradesign.com/" />
    <meta property="og:title" content="Lavora Design - Premium Mobilya & LÃ¼ks Ä°Ã§ Mekan TasarÄ±mÄ±" />
    
    <!-- Geo Tags for Local SEO -->
    <meta name="geo.region" content="TR-34" />
    <meta name="geo.placename" content="Ä°stanbul, Ãœmraniye" />
    <meta name="geo.position" content="41.0082;29.0181" />
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Remix Icon -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet">
    
    <!-- Schema.org Markup -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FurnitureStore",
      "name": "Lavora Design",
      "telephone": "+905375803296",
      "email": "info@lavoradesign.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "YukarÄ± Dudullu Mah. Feza Sok. No:4B",
        "addressLocality": "Ãœmraniye",
        "addressRegion": "Ä°stanbul",
        "addressCountry": "TR"
      }
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
{
  "name": "react",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx",
    "type-check": "tsc --noEmit --project tsconfig.app.json"
  },
  "dependencies": {
    "@stripe/react-stripe-js": "4.0.2",
    "@supabase/supabase-js": "2.57.4",
    "axios": "^1.6.7",
    "firebase": "12.0.0",
    "framer-motion": "12.23.12",
    "i18next": "25.4.1",
    "i18next-browser-languagedetector": "^8.2.0",
    "leaflet": "^1.9.4",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-hook-form": "^7.50.0",
    "react-i18next": "^15.6.0",
    "react-leaflet": "5.0.0",
    "react-router-dom": "^7.6.3",
    "recharts": "3.2.0",
    "swiper": "^11.1.15"
  },
  "devDependencies": {
    "@eslint/js": "^9.30.1",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react-swc": "^3.10.2",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.30.1",
    "globals": "^16.3.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.8.3",
    "vite": "^7.0.3"
  }
}
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";

const base = process.env.BASE_PATH || "/";
const isPreview = process.env.IS_PREVIEW ? true : false;

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview),
    __READDY_PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID || ""),
    __READDY_VERSION_ID__: JSON.stringify(process.env.VERSION_ID || ""),
    __READDY_AI_DOMAIN__: JSON.stringify(process.env.READDY_AI_DOMAIN || ""),
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        {
          react: ["React", "useState", "useEffect", "useContext", "useReducer", "useCallback", "useMemo", "useRef"],
        },
        {
          "react-router-dom": ["useNavigate", "useLocation", "useParams", "useSearchParams", "Link", "NavLink"],
        },
        {
          "react-i18next": ["useTranslation", "Trans"],
        },
      ],
      dts: true,
    }),
  ],
  base,
  build: {
    sourcemap: true,
    outDir: "out",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nardo: {
          light: '#6B6B6B',
          DEFAULT: '#4A4A4A',
          dark: '#2E2E2E',
        },
        matte: '#0A0A0A',
        gold: {
          light: '#D4AF37',
          DEFAULT: '#B8941F',
        },
        dark: {
          100: '#1A1A1A',
          200: '#151515',
          300: '#0F0F0F',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        luxury: '0.5rem',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0A0A0A 0%, #2E2E2E 50%, #0A0A0A 100%)',
        'gradient-nardo': 'linear-gradient(135deg, #2E2E2E 0%, #4A4A4A 50%, #2E2E2E 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true
  },
  "include": ["vite.config.ts"]
}
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default [
  { ignores: ['dist', 'node_modules'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true
  },
  "include": ["vite.config.ts"]
}
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default [
  { ignores: ['dist', 'node_modules'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
/// <reference types="vite/client" />

declare const __BASE_PATH__: string;
declare const __IS_PREVIEW__: boolean;
declare const __READDY_PROJECT_ID__: string;
declare const __READDY_VERSION_ID__: string;
declare const __READDY_AI_DOMAIN__: string;
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './local';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
const resources = {
  tr: {
    translation: {
      welcome: 'HoÅŸ Geldiniz',
      home: 'Ana Sayfa',
      products: 'ÃœrÃ¼nler',
      gallery: 'Galeri',
      contact: 'Ä°letiÅŸim',
    },
  },
  en: {
    translation: {
      welcome: 'Welcome',
      home: 'Home',
      products: 'Products',
      gallery: 'Gallery',
      contact: 'Contact',
    },
  },
};

export default resources;
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import CollectionsSection from './components/CollectionsSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <CollectionsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getImagePath } from '../lib/assetPath';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Smart Navbar Logic
            if (currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current + 10) {
                // Scrolling DOWN - Hide
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current - 5) {
                // Scrolling UP - Show
                setIsVisible(true);
            }

            setIsScrolled(currentScrollY > 50);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            if (location.pathname !== '/') {
                window.location.href = '/#contact';
            }
        }
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: 'Ana Sayfa', path: '/' },
        { name: 'Ürünler', path: '/products' },
        { name: 'Galeri', path: '/gallery' },
        { name: 'Sosyal Medya', path: '/social' },
        { name: 'İletişim', path: '/#contact', onClick: scrollToContact },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/98 backdrop-blur-xl shadow-2xl border-b border-gold-DEFAULT/10' : 'bg-transparent'
                    }`}
            >
                <div className="w-full max-w-full px-3 sm:px-4 md:px-6">
                    <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24">
                        {/* GIF LOGO */}
                        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0 overflow-hidden group">
                            {/* Animated GIF Logo */}
                            <div className="relative flex-shrink-0">
                                <img
                                    src={getImagePath("/logo.gif")}
                                    alt="LAVORA DESIGN"
                                    className="h-12 w-auto sm:h-14 md:h-16 lg:h-20 object-contain group-hover:scale-105 transition-transform duration-300 rounded-2xl shadow-lg shadow-gold-DEFAULT/10"
                                />
                            </div>

                            {/* Optional Text (can be hidden on very small screens) */}
                            <div className="hidden sm:flex flex-col min-w-0 overflow-hidden">
                                <span className="text-gray-500 text-[8px] md:text-[9px] lg:text-[10px] uppercase tracking-wider whitespace-nowrap group-hover:text-gold-DEFAULT/70 transition-colors duration-300">
                                    LÜKS YAŞAMIN YENİ TANIMI
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            {navLinks.map((link) => (
                                link.onClick ? (
                                    <button
                                        key={link.name}
                                        onClick={link.onClick}
                                        className="text-gray-300 hover:text-gold-DEFAULT transition-colors text-sm uppercase tracking-widest font-medium relative group"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-DEFAULT group-hover:w-full transition-all duration-300"></span>
                                    </button>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`text-gray-300 hover:text-gold-DEFAULT transition-colors text-sm uppercase tracking-widest font-medium relative group ${location.pathname === link.path ? 'text-gold-DEFAULT' : ''
                                            }`}
                                    >
                                        {link.name}
                                        <span className={`absolute bottom-0 left-0 h-[2px] bg-gold-DEFAULT transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                    </Link>
                                )
                            ))}
                        </div>

                        {/* Compact Hamburger */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden w-8 h-8 sm:w-9 sm:h-9 flex flex-col items-center justify-center gap-1 flex-shrink-0"
                            aria-label="Menu"
                        >
                            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-2xl md:hidden flex flex-col items-center justify-start pt-32 overflow-hidden"
                    >
                        {/* Bokeh Background Elements */}
                        <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-gold-DEFAULT/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
                        <div className="absolute bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
                        <div className="absolute top-[40%] right-[-30%] w-[60vw] h-[60vw] bg-gold-DEFAULT/10 rounded-full blur-[100px] pointer-events-none"></div>

                        {/* Mobile Menu Close Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-8 right-8 z-[10000] w-12 h-12 flex items-center justify-center text-white/80 hover:text-white transition-all bg-white/10 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95"
                        >
                            <i className="ri-close-line text-2xl"></i>
                        </button>

                        <div className="flex flex-col items-center justify-center w-full max-w-sm px-6 relative z-10">
                            {/* Mobile Logo - FULL FILL */}
                            <div className="w-28 h-28 rounded-full overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.3)] mb-12 border border-white/20 shrink-0 bg-black/50 backdrop-blur-sm">
                                <img
                                    src={getImagePath("/logo.gif")}
                                    alt="LAVORA"
                                    className="w-full h-full object-cover transform scale-110"
                                />
                            </div>

                            <nav className="flex flex-col items-center gap-8 w-full">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="w-full text-center">
                                        {link.onClick ? (
                                            <button
                                                onClick={link.onClick}
                                                className="text-4xl text-white font-playfair font-medium hover:text-gold-DEFAULT transition-all active:scale-95 tracking-wide drop-shadow-md"
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`text-4xl font-playfair font-medium block active:scale-95 transition-all tracking-wide drop-shadow-md ${location.pathname === link.path
                                                    ? 'text-gold-DEFAULT'
                                                    : 'text-white hover:text-gold-DEFAULT'
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>

                        <div className="absolute bottom-12 left-0 right-0 text-center z-10">
                            <p className="text-white/60 text-[10px] uppercase tracking-[0.4em] mb-1">Lavora Design</p>
                            <div className="w-8 h-[1px] bg-gold-DEFAULT/50 mx-auto mb-2"></div>
                            <p className="text-gold-DEFAULT/80 text-[10px] font-playfair italic">Premium Interiors</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

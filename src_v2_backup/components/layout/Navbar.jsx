import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { cn } from '@/utils/cn';

export function Navbar() {
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
        { name: 'Koleksiyonlar', path: '/products' },
        { name: 'Galeri', path: '/gallery' },
        { name: 'Hakkımızda', path: '/about' },
        { name: 'İletişim', path: '/contact' },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-glass"
                        : "bg-transparent py-8"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="relative z-50 group">
                        <div className="font-serif font-bold text-2xl md:text-3xl tracking-[0.2em] text-white">
                            LAVORA
                        </div>
                        <div className="font-sans text-[0.5rem] md:text-[0.6rem] tracking-[0.8em] text-accent text-center -mt-1 group-hover:text-white transition-colors">
                            DESIGN
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative group py-2",
                                    location.pathname === link.path ? "text-accent" : "text-white/80 hover:text-white"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full",
                                    location.pathname === link.path && "w-3"
                                )}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-white/80 hover:text-accent transition-colors"><Search size={20} /></button>
                        <div className="w-px h-4 bg-white/20"></div>
                        <Link to="/contact" className="text-xs uppercase tracking-widest text-accent hover:text-white transition-colors border border-accent/30 hover:border-accent px-4 py-2 rounded-sm">
                            Teklif Al
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden relative z-50 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
                        >
                            <div className="flex flex-col space-y-8 text-center">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className="text-3xl font-serif font-light text-white hover:text-accent transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Button variant="primary" onClick={() => setIsMobileMenuOpen(false)}>TEKLİF AL</Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}

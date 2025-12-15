import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MAIN_PATHS = ['/', '/products', '/gallery'];

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Only trigger the full cinematic transition for main pages
        // checks if the current path exactly matches one of the main paths
        const shouldTransition = MAIN_PATHS.includes(location.pathname);

        if (shouldTransition) {
            setIsTransitioning(true);
            const timer = setTimeout(() => setIsTransitioning(false), 1800); // 1.8s - slightly faster
            return () => clearTimeout(timer);
        } else {
            setIsTransitioning(false);
        }
    }, [location.pathname]);

    return (
        <>
            {/* Ultra-Professional Cinematic Transition - Only for Main Pages */}
            <AnimatePresence mode="wait">
                {isTransitioning && (
                    <motion.div
                        className="fixed inset-0 z-[200] pointer-events-none overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {/* Dark overlay for contrast - Deep Black */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-black"
                        />

                        {/* Cinematic Gold Energy Sweep - Faster & Cleaner */}
                        <motion.div
                            initial={{ x: "-100%", skewX: -10, opacity: 0 }}
                            animate={{ x: "100%", skewX: 10, opacity: [0, 0.4, 0] }}
                            transition={{
                                duration: 1.4,
                                ease: [0.22, 1, 0.36, 1], // Custom Ease for "Swoosh" feel
                                times: [0, 0.5, 1]
                            }}
                            className="absolute inset-y-0 w-full"
                            style={{
                                background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.4) 50%, transparent 100%)',
                                filter: 'blur(40px)'
                            }}
                        />

                        {/* Main content container */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                {/* Glow effect behind text */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 0.3, scale: 1.2 }}
                                    exit={{ opacity: 0, scale: 1.4 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 blur-3xl bg-gold-DEFAULT/40 rounded-full"
                                />

                                {/* LAVORA - Professional reveal */}
                                <div className="relative flex flex-col items-center z-10">
                                    <div className="flex items-baseline gap-3 overflow-hidden">
                                        {/* LAVORA text */}
                                        <motion.div
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -50, opacity: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                            className="font-playfair text-5xl sm:text-7xl font-bold tracking-wider text-white"
                                        >
                                            LAVORA
                                        </motion.div>

                                        {/* DESIGN text */}
                                        <motion.div
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -50, opacity: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                            className="font-playfair text-5xl sm:text-7xl font-bold tracking-wider italic text-gold-DEFAULT"
                                            style={{
                                                color: '#FFD700', // Ensuring Gold Color
                                                textShadow: '0 0 40px rgba(255, 215, 0, 0.6)'
                                            }}
                                        >
                                            DESIGN
                                        </motion.div>
                                    </div>

                                    {/* Elegant Line */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        exit={{ scaleX: 0 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        className="h-[2px] w-32 bg-gold-DEFAULT/60 mt-4 rounded-full"
                                    />

                                    {/* Tagline */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="text-xs sm:text-sm uppercase tracking-[0.4em] mt-4 text-white/50"
                                    >
                                        LÜKS YAŞAMIN YENİ TANIMI
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page content with standard soft fade */}
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(5px)" }}
                transition={{
                    duration: 0.6, // Slightly longer fade for smoother feeling
                    ease: "easeInOut"
                }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageTransition;

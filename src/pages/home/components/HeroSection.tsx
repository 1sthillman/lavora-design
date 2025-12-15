import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const videos = [
    "/videos/Whisk_mzjm0e2mlzjmjjwntqdo2gtlmjjy00cmirgotet.mp4",
    "/videos/Whisk_ymwnlftn4mwyzgjmtudnkltl1qwy00cmyadotqt.mp4",
    "/videos/lv_0_20251214215935.mp4",
    "/videos/lv_0_20251214230758.mp4"
];

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentVideo, setCurrentVideo] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 8000); // Change video every 8 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen overflow-hidden w-full max-w-full bg-[#0A0A0A]">
            {/* Parallax background */}
            <motion.div style={{ y, scale }} className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10 pointer-events-none"></div>

                <AnimatePresence mode='popLayout'>
                    <motion.video
                        key={currentVideo}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src={videos[currentVideo]} type="video/mp4" />
                    </motion.video>
                </AnimatePresence>
            </motion.div>

            {/* Content */}
            <motion.div style={{ opacity }} className="relative z-20 h-full flex flex-col items-center justify-center text-center px-3 sm:px-4 overflow-hidden w-full max-w-full">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 border border-gold-DEFAULT/30 rounded-full bg-black/20 backdrop-blur-sm"
                >
                    <span className="text-gold-light text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">1998'den Beri</span>
                </motion.div>

                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-medium text-white mb-4 sm:mb-6 tracking-tighter w-full max-w-full px-2"
                    style={{ wordWrap: 'break-word', hyphens: 'auto' }}
                >
                    LAVORA <br /> <span className="text-gold-DEFAULT italic">DESIGN</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-xl w-full text-gray-300 font-montserrat text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6"
                >
                    Zarafet ve lüksün buluştuğu noktada, hayallerinizdeki yaşam alanlarını tasarlıyoruz.
                </motion.p>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md px-4"
                >
                    <a href="/products" className="px-6 sm:px-10 py-3 sm:py-4 bg-gold-DEFAULT text-matte font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-gold-light transition-colors transform hover:scale-105 duration-300 whitespace-nowrap">
                        Koleksiyonu Keşfet
                    </a>
                    <a href="/gallery" className="px-6 sm:px-10 py-3 sm:py-4 border border-white/20 text-white font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 transition-colors backdrop-blur-sm whitespace-nowrap">
                        Projelerimizi İncele
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-6 sm:bottom-10 animate-bounce"
                >
                    <span className="text-white/50 text-[9px] sm:text-[10px] tracking-widest uppercase mb-2 block">Kaydırın</span>
                    <i className="ri-arrow-down-line text-white text-xl sm:text-2xl"></i>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HeroSection;

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronDown, Play } from 'lucide-react';

export function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Using a real high-quality luxury furniture video loop (placeholder URL for now, but formatted correctly)
    const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-with-a-fireplace-and-furniture-2964-large.mp4";

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
            {/* Dynamic Video Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background z-20" /> {/* Gradient Blend */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-110" // Scale up slightly to avoid edge issues on scroll
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </motion.div>

            {/* Main Content */}
            <motion.div
                style={{ opacity, y: textY }}
                className="relative z-30 text-center px-6 max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h2 className="text-accent text-xs md:text-sm tracking-[0.5em] uppercase font-light mb-4 opacity-90">
                        Timeless Elegance
                    </h2>
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-bold text-white tracking-tighter leading-none mix-blend-overlay opacity-80">
                        LAVORA
                    </h1>
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-thin text-stone-300 tracking-[0.1em] leading-none -mt-3 md:-mt-8 opacity-90">
                        DESIGN
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Yaşam alanlarınızı modern sanat eserlerine dönüştüren, <br className="hidden md:block" />
                    ultra-premium mobilya koleksiyonları.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Button
                        variant="primary"
                        className="group relative px-10 py-5 bg-transparent border border-white/20 hover:border-accent/0 overflow-hidden"
                        onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="absolute inset-0 w-full h-full bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">KOLEKSİYONU KEŞFET</span>
                    </Button>

                    <button className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors group">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                            <Play size={16} fill="currentColor" />
                        </div>
                        <span className="text-sm tracking-widest uppercase">Tanıtım Filmi</span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Floating Elements for "Atmosphere" */}
            <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none noise-bg mix-blend-overlay" />

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 z-30 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
                onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white">Kaydır</span>
                <ChevronDown className="text-accent" size={24} />
            </motion.div>
        </div>
    );
}

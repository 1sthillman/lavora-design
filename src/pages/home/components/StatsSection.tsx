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
        { id: 1, value: 25, suffix: '+', label: 'Yıllık Deneyim', icon: 'ri-trophy-line' },
        { id: 2, value: 15000, suffix: '+', label: 'Mutlu Müşteri', icon: 'ri-user-smile-line' },
        { id: 3, value: 450, suffix: '+', label: 'Tamamlanan Proje', icon: 'ri-building-line' },
        { id: 4, value: 12, suffix: '', label: 'Prestijli Ödül', icon: 'ri-award-line' },
    ];

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark overflow-hidden border-t border-b border-white/5">
            {/* Pattern background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#B8941F 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="w-full max-w-full mx-auto px-3 sm:px-4 md:px-6 relative z-10 overflow-hidden">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: stat.id * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold-DEFAULT/20 transition-colors duration-500">
                                <i className={`${stat.icon} text-3xl text-gold-DEFAULT`}></i>
                            </div>
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            <span className="mt-2 text-sm md:text-base text-gray-400 font-montserrat uppercase tracking-wider">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

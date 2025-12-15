import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ from, to, duration, suffix = '' }) {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (inView) {
            let startTime;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * (to - from) + from));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [inView, from, to, duration]);

    return <span ref={nodeRef}>{count}{suffix}</span>;
}

export function StatsSection() {
    const stats = [
        { label: "Yıl Deneyim", value: 25, suffix: "+" },
        { label: "Mutlu Müşteri", value: 15000, suffix: "+" },
        { label: "Özel Tasarım", value: 450, suffix: "+" },
        { label: "Uluslararası Ödül", value: 12, suffix: "" },
    ];

    return (
        <section id="stats" className="py-20 bg-background border-b border-primary/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                                <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm md:text-base text-primary uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

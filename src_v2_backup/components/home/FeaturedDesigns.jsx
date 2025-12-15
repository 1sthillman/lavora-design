import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// A mix of detailed product shots
const items = [
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=600&auto=format&fit=crop", // Chair
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop", // Chair 2
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop", // Chair 3
    "https://images.unsplash.com/photo-1503602642458-232111445857?q=80&w=600&auto=format&fit=crop", // Stool
    "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=600&auto=format&fit=crop", // Lamp
    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=600&auto=format&fit=crop", // Chair 4
];

export function FeaturedDesigns() {
    return (
        <section className="py-20 bg-[#080808] overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <h3 className="text-3xl font-serif text-white">Yeni Gelenler</h3>
                <Link to="/products" className="text-accent text-xs uppercase tracking-widest hover:text-white transition-colors">Hepsini Gör</Link>
            </div>

            {/* Infinite Scroll Marquee */}
            <div className="relative w-full flex">
                <motion.div
                    className="flex gap-6 min-w-full"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...items, ...items, ...items].map((src, i) => (
                        <div key={i} className="min-w-[280px] h-[350px] relative group cursor-pointer rounded-sm overflow-hidden">
                            <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>
                    ))}
                </motion.div>
                {/* Duplicate for infinite effect (basic implementation, usually needs 2 divs) */}
                <motion.div
                    className="flex gap-6 min-w-full absolute left-full top-0 pl-6"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...items, ...items, ...items].map((src, i) => (
                        <div key={i} className="min-w-[280px] h-[350px] relative group cursor-pointer rounded-sm overflow-hidden">
                            <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

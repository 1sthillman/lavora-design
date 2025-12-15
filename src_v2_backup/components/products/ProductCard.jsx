import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Plus, Heart } from 'lucide-react';
import { cn } from '@/utils/cn';

export function ProductCard({ product }) {
    return (
        <motion.div
            className="group relative cursor-pointer"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-stone-900 rounded-sm">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Top Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-10 group-hover:translate-x-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                        <Heart size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                        <Plus size={18} />
                    </button>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {product.badges && product.badges.length > 0 && (
                        <span className="text-[10px] uppercase font-bold tracking-widest bg-accent text-black px-2 py-1 mb-3 inline-block">
                            {product.badges[0]}
                        </span>
                    )}
                    <h3 className="text-xl font-serif font-semibold text-white mb-1">{product.name}</h3>
                    <div className="flex items-center justify-between">
                        <p className="text-stone-300 text-sm font-light">{product.category}</p>
                        <span className="text-accent text-sm uppercase tracking-widest border-b border-transparent group-hover:border-accent transition-colors">İncele</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

const categories = [
    { id: 1, name: 'Salon', subtitle: 'LIVING', image: 'https://images.unsplash.com/photo-1629079448107-772921a4f07a?q=80&w=1600&auto=format&fit=crop', link: '/products?category=salon' },
    { id: 2, name: 'Mutfak', subtitle: 'KITCHEN', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop', link: '/products?category=mutfak' },
    { id: 3, name: 'Yatak Odası', subtitle: 'BEDROOM', image: 'https://images.unsplash.com/photo-1616594039964-40891a913161?q=80&w=1600&auto=format&fit=crop', link: '/products?category=yatak-odasi' },
    { id: 4, name: 'Ofis', subtitle: 'OFFICE', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop', link: '/products?category=ofis' },
    { id: 5, name: 'Bahçe', subtitle: 'GARDEN', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop', link: '/products?category=bahce' },
    { id: 6, name: 'Aydınlatma', subtitle: 'LIGHTING', image: 'https://images.unsplash.com/photo-1540932296774-3ed692689563?q=80&w=1600&auto=format&fit=crop', link: '/products?category=aydinlatma' },
    { id: 7, name: 'Banyo', subtitle: 'BATH', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop', link: '/products?category=aksesuar' },
    { id: 8, name: 'Dekor', subtitle: 'DECOR', image: 'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4a?q=80&w=1600&auto=format&fit=crop', link: '/products?category=aksesuar' },
];

const CollectionItem = ({ category, className }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn("relative group overflow-hidden bg-stone-900 border-r border-b border-black/50 h-[400px] md:h-[600px]", className)}
    >
        <Link to={category.link} className="block w-full h-full relative">
            <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            {/* Content Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 p-4">
                <span className="text-accent text-xs tracking-[0.4em] uppercase mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    {category.subtitle}
                </span>
                <h3 className="text-3xl md:text-5xl font-serif text-white font-light group-hover:-translate-y-2 transition-transform duration-500">
                    {category.name}
                </h3>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-[10px] uppercase tracking-widest text-white border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-colors">
                        Keşfet
                    </span>
                </div>
            </div>
        </Link>
    </motion.div>
);

export function Collections() {
    return (
        <section id="collections" className="bg-black relative pt-0">
            <div className="text-center py-20 bg-black">
                <h2 className="text-4xl md:text-5xl font-serif text-white font-thin">
                    Koleksiyonlar
                </h2>
            </div>

            {/* Full Bleed Mosaic Grid - No Gaps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                {categories.map((cat, i) => (
                    <CollectionItem
                        key={cat.id}
                        category={cat}
                        // Make some items span 2 columns nicely on large screens to break monotony (optional, keeping uniform for density now)
                        className="w-full"
                    />
                ))}
            </div>

            {/* Banner Section */}
            <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 fixed-bg-effect"
                />
                <div className="relative z-10 text-center max-w-2xl px-6">
                    <h3 className="text-4xl md:text-6xl font-serif text-white mb-6">Mekan Tasarımı</h3>
                    <p className="text-stone-300 mb-8 text-lg font-light">Özel ölçü ve proje bazlı çalışmalarımızla hayalinizdeki mekanı gerçeğe dönüştürüyoruz.</p>
                    <Link to="/contact" className="inline-block bg-white text-black px-8 py-4 text-xs tracking-[0.2em] hover:bg-accent transition-colors">
                        PROJE BAŞLAT
                    </Link>
                </div>
            </div>
        </section>
    );
}

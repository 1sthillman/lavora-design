import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import { galleryData } from '@/data/galleryData';

export default function Gallery() {
    const [filter, setFilter] = useState('Tümü');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = ['Tümü', ...new Set(galleryData.map(p => p.category))];

    const filteredProjects = filter === 'Tümü'
        ? galleryData
        : galleryData.filter(p => p.category === filter);

    return (
        <div className="container mx-auto px-6 py-20 bg-background min-h-screen">
            <div className="text-center mb-20 pt-10">
                <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6 tracking-tight">Özel Projeler</h1>
                <div className="w-24 h-[1px] bg-accent mx-auto opacity-50"></div>
            </div>

            {/* Ultra Minimal Filters */}
            <div className="flex justify-center flex-wrap gap-8 mb-20">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative group py-2
                    ${filter === cat ? 'text-accent' : 'text-white/40 hover:text-white'}`}
                    >
                        {cat}
                        <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent transform origin-left transition-transform duration-300 ${filter === cat ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
                    </button>
                ))}
            </div>

            {/* Masonry Grid */}
            <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                <AnimatePresence>
                    {filteredProjects.map(project => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                            className={`break-inside-avoid group relative rounded-sm overflow-hidden cursor-pointer ${project.height}`}
                            onClick={() => setSelectedImage(project)}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                            />
                            {/* Hover Overlay - Minimalist */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl font-serif text-white mb-2 italic">{project.title}</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-accent/80">İncele</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Cinematic Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="absolute inset-0 pointer-events-none noise-bg opacity-10"></div>
                        <button className="absolute top-8 right-8 z-[110] text-white/50 hover:text-white transition-colors group">
                            <span className="text-[10px] uppercase tracking-widest mr-2 opacity-0 group-hover:opacity-100 transition-opacity">Kapat</span>
                            <X size={32} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="max-h-[85vh] max-w-[95vw] object-contain shadow-2xl shadow-black/50"
                        />
                        <div className="absolute bottom-10 left-10 text-left z-[110]">
                            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-2">{selectedImage.category}</p>
                            <h3 className="text-3xl md:text-4xl font-serif text-white font-light">{selectedImage.title}</h3>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

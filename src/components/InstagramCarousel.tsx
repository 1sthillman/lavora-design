import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import instagramData from '../data/instagram-posts.json';

interface InstagramPost {
    id: string;
    url: string;
    type: 'post' | 'reel';
}

export function InstagramCarousel() {
    const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
    const posts: InstagramPost[] = instagramData.posts || [];

    // Debug log
    useEffect(() => {
        console.log('📸 Instagram Posts:', posts.length, 'post yüklendi');
        console.log('📦 Instagram Data:', instagramData);
    }, [posts]);

    // Instagram embed script yükle
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    // Modal açıldığında embed'i yenile ve scroll yap
    useEffect(() => {
        if (selectedPost) {
            // Üste scroll yap
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Instagram embed'i yenile
            if ((window as any).instgrm) {
                setTimeout(() => {
                    (window as any).instgrm.Embeds.process();
                }, 100);
            }
        }
    }, [selectedPost]);

    if (posts.length === 0) {
        return (
            <div className="text-center py-20">
                <div className="max-w-xl mx-auto">
                    <i className="ri-instagram-line text-6xl text-gold-DEFAULT mb-4 block"></i>
                    <h3 className="text-2xl font-playfair text-white mb-4">
                        Instagram Feed Yükleniyor...
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Build yapıldığında Instagram post'larınız otomatik yüklenecek.
                    </p>
                    <a
                        href="https://www.instagram.com/lavoradesing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all"
                    >
                        <i className="ri-instagram-line text-xl"></i>
                        Instagram'da Görüntüle
                    </a>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Carousel - Testimonials Gibi Marquee - SONSUZ DÖNGÜ */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
                <div className="group flex overflow-hidden p-2 [--gap:1rem] sm:[--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:60s]">
                    {/* İlk Set - Asıl İçerik */}
                    <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                        {posts.map((post, i) => (
                            posts.map((post, i) => (
                                <button
                                    key={`set1-${i}`}
                                    onClick={() => setSelectedPost(post)}
                                    className="group/card relative flex-none w-[280px] sm:w-[320px] md:w-[350px] h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 hover:border-gold-DEFAULT/40 transition-all duration-500 shadow-2xl hover:shadow-gold-DEFAULT/20 cursor-pointer"
                                >
                                    {/* Instagram Preview Embed */}
                                    <div className="relative w-full h-full">
                                        <iframe
                                            src={`${post.url}embed/captioned/`}
                                            className="w-full h-full border-0"
                                            style={{ 
                                                background: '#000',
                                                pointerEvents: 'none' // Tıklamaları engelle, sadece görsel
                                            }}
                                            scrolling="no"
                                            allowTransparency={true}
                                        />
                                        
                                        {/* Overlay - Click to View */}
                                        <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover/card:opacity-100 transition-all duration-300 text-center">
                                                <div className="px-4 py-2 bg-gold-DEFAULT/90 rounded-full">
                                                    <span className="text-black font-semibold text-sm">
                                                        Görüntüle
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))
                        )}
                    </div>
                    
                    {/* İkinci Set - Klon (Sonsuz Döngü İçin) */}
                    <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
                        {posts.map((post, i) => (
                                <button
                                    key={`set2-${i}`}
                                    onClick={() => setSelectedPost(post)}
                                    className="group/card relative flex-none w-[280px] sm:w-[320px] md:w-[350px] h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 hover:border-gold-DEFAULT/40 transition-all duration-500 shadow-2xl hover:shadow-gold-DEFAULT/20 cursor-pointer"
                                >
                                    <div className="relative w-full h-full">
                                        <iframe
                                            src={`${post.url}embed/captioned/`}
                                            className="w-full h-full border-0"
                                            style={{ 
                                                background: '#000',
                                                pointerEvents: 'none'
                                            }}
                                            scrolling="no"
                                            allowTransparency={true}
                                        />
                                        
                                        <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover/card:opacity-100 transition-all duration-300 text-center">
                                                <div className="px-4 py-2 bg-gold-DEFAULT/90 rounded-full">
                                                    <span className="text-black font-semibold text-sm">
                                                        Görüntüle
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))
                        )}
                    </div>
                </div>

                {/* Fade Gradients */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10" />
            </div>

            {/* Modal */}
            {selectedPost && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-start justify-center p-4 overflow-y-auto"
                    onClick={() => setSelectedPost(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        className="relative bg-black rounded-2xl max-w-2xl w-full border border-white/20 my-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center transition-all"
                        >
                            <i className="ri-close-line text-2xl text-white"></i>
                        </button>

                        <div className="p-6">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={selectedPost.url}
                                data-instgrm-version="14"
                                style={{
                                    background: '#000',
                                    border: 0,
                                    borderRadius: '12px',
                                    margin: '0 auto',
                                    maxWidth: '540px',
                                    minWidth: '326px',
                                    padding: 0,
                                    width: '100%'
                                }}
                            >
                                <div className="flex items-center justify-center py-20">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-DEFAULT"></div>
                                </div>
                            </blockquote>

                            <div className="mt-6 text-center">
                                <a
                                    href={selectedPost.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all"
                                >
                                    <i className="ri-instagram-line text-xl"></i>
                                    Instagram'da Görüntüle
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}


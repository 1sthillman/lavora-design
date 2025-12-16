import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

// Instagram embed için type
declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void;
            };
        };
    }
}

interface InstagramPost {
    id: string;
    url: string;
    type: 'post' | 'reel';
}

const SocialMedia = () => {
    const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Instagram embed script yükle
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

    useEffect(() => {
        // Modal açıldığında embed'leri yükle
        if (selectedPost && window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, [selectedPost]);

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-4 sm:px-6">
            <SEO
                title="Sosyal Medya | Lavora Design Instagram"
                description="Lavora Design Instagram sayfamızda son paylaşımlarımızı takip edin. Lüks mobilya tasarımları, proje fotoğrafları ve daha fazlası."
                keywords="lavora design instagram, mobilya tasarım fotoğrafları, interior design instagram, lüks mobilya"
            />
            <Navbar />

            <div className="w-full max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold-DEFAULT text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
                    >
                        SOSYAL MEDYA
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-playfair text-white mb-6"
                    >
                        Instagram Paylaşımlarımız
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-montserrat max-w-2xl mx-auto mb-8"
                    >
                        En son projelerimiz, tasarımlarımız ve ilham verici içeriklerimiz. 
                        Yeni paylaşımlarımız otomatik olarak burada görünür.
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        href="https://www.instagram.com/lavoradesing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <i className="ri-instagram-line text-2xl"></i>
                        Instagram'da Takip Et
                    </motion.a>
                </div>

                {/* INSTAGRAM FEED - Dark Theme & Clickable */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-playfair text-white mb-6 text-center">
                        Instagram Sayfamız
                    </h2>
                    <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
                        En son projelerimiz ve tasarımlarımız. İçeriklere tıklayarak sitede görüntüleyin.
                    </p>

                    {/* Instagram Profile Embed - DARK & Clickable Posts */}
                    <div className="relative bg-black rounded-2xl p-4 md:p-6 border border-white/10 overflow-hidden">
                        {/* Overlay to capture clicks */}
                        <div 
                            className="absolute inset-0 z-10 cursor-pointer"
                            onClick={(e) => {
                                // Instagram post'larına tıklandığında modal aç
                                const target = e.target as HTMLElement;
                                const link = target.closest('a');
                                if (link && link.href.includes('instagram.com/p/')) {
                                    e.preventDefault();
                                    setSelectedPost({
                                        id: Date.now().toString(),
                                        url: link.href,
                                        type: 'post'
                                    });
                                }
                            }}
                            style={{ pointerEvents: 'none' }}
                        >
                            <div style={{ pointerEvents: 'auto' }}>
                                <iframe
                                    src="https://www.instagram.com/lavoradesing/embed/"
                                    width="100%"
                                    height="1000"
                                    frameBorder="0"
                                    scrolling="yes"
                                    allowTransparency={true}
                                    className="rounded-lg w-full"
                                    style={{
                                        border: 'none',
                                        overflow: 'auto',
                                        background: '#000000',
                                        colorScheme: 'dark',
                                        maxWidth: '1400px',
                                        margin: '0 auto',
                                        display: 'block'
                                    }}
                                    title="Lavora Design Instagram"
                                ></iframe>
                            </div>
                        </div>

                        {/* Dark Theme CSS */}
                        <style dangerouslySetInnerHTML={{
                            __html: `
                                iframe[src*="instagram.com/embed"] {
                                    background: #000 !important;
                                }
                            `
                        }} />
                    </div>

                    {/* Modal için tıklanabilir overlay (Instagram içerik için) */}
                    {selectedPost && createPortal(
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[9999] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4"
                                onClick={() => setSelectedPost(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, y: 50 }}
                                    animate={{ scale: 1, y: 0 }}
                                    exit={{ scale: 0.9, y: 50 }}
                                    className="relative bg-black rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden border border-white/20"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/20"
                                    >
                                        <i className="ri-close-line text-2xl text-white"></i>
                                    </button>

                                    {/* Instagram Post Embed - DARK THEME */}
                                    <div className="p-4 overflow-y-auto max-h-[95vh]">
                                        <blockquote
                                            className="instagram-media"
                                            data-instgrm-permalink={selectedPost.url}
                                            data-instgrm-version="14"
                                            data-instgrm-captioned
                                            style={{
                                                background: '#000',
                                                border: 0,
                                                borderRadius: '12px',
                                                margin: '0 auto',
                                                maxWidth: '658px',
                                                minWidth: '326px',
                                                padding: 0,
                                                width: '100%'
                                            }}
                                        >
                                            <div className="flex items-center justify-center py-20">
                                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-DEFAULT"></div>
                                            </div>
                                        </blockquote>

                                        {/* Instagram'da Görüntüle Butonu */}
                                        <div className="mt-6 text-center">
                                            <a
                                                href={selectedPost.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
                                            >
                                                <i className="ri-instagram-line text-xl"></i>
                                                Instagram'da Aç
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>,
                        document.body
                    )}

                </motion.div>

                {/* Instagram İstatistikleri */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-12 text-center"
                >
                    <h3 className="text-2xl font-playfair text-white mb-4">
                        Sosyal Medyada Biz
                    </h3>
                    <p className="text-gray-400 font-montserrat mb-8 max-w-2xl mx-auto">
                        Tasarım yolculuğumuzu Instagram'da paylaşıyoruz. 
                        Yeni projeler, ürünler ve ilham verici içerikler için bizi takip edin!
                    </p>
                    
                    <div className="flex justify-center gap-4 mb-8">
                        <a
                            href="https://www.instagram.com/lavoradesing/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50"
                        >
                            <i className="ri-instagram-line text-3xl text-white"></i>
                        </a>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 rounded-full border border-white/10">
                        <span className="text-gray-400 text-sm">Instagram:</span>
                        <a 
                            href="https://www.instagram.com/lavoradesing/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 font-semibold"
                        >
                            @lavoradesing
                        </a>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default SocialMedia;


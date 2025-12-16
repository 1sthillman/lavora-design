import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { InstagramCarousel } from '../../components/ui/instagram-carousel';
import { getImagePath } from '../../lib/assetPath';
import { fetchInstagramMedia, convertToAppFormat, validateAccessToken } from '../../services/instagramService';

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
    embedUrl: string;
    thumbnailUrl: string;
    caption: string;
    type: 'post' | 'reel';
}

const SocialMedia = () => {
    const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
    const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // ========================================
    // 🚀 OTOMATİK INSTAGRAM FEED - API ile
    // ========================================
    // Instagram'dan otomatik post çekiliyor!
    // Access token ayarlamak için: src/services/instagramService.ts
    
    // Fallback posts (API çalışmazsa gösterilecek)
    const fallbackPosts: InstagramPost[] = [
        {
            id: '1',
            embedUrl: 'https://www.instagram.com/p/DKweigMMN3W/',
            thumbnailUrl: getImagePath('/images/mutfak-görsel/2affba172e571c35714b4d0c77e63562.jpg'),
            caption: 'Lüks mutfak tasarımı ✨',
            type: 'post'
        },
        {
            id: '2',
            embedUrl: 'https://www.instagram.com/lavoradesing/',
            thumbnailUrl: getImagePath('/images/salon/1edd0fc0589731acb619c7d0c5c4a2e6.jpg'),
            caption: 'Modern salon takımı 🛋️',
            type: 'post'
        },
        {
            id: '3',
            embedUrl: 'https://www.instagram.com/lavoradesing/',
            thumbnailUrl: getImagePath('/images/yatak odası/348eac05693386e7cc24c32eab2b68b4.jpg'),
            caption: 'Yatak odası tasarımı 🌙',
            type: 'reel'
        },
        {
            id: '4',
            embedUrl: 'https://www.instagram.com/lavoradesing/',
            thumbnailUrl: getImagePath('/images/ofis/47c6bbdf513bdffd25e3a941513220f2.jpg'),
            caption: 'Executive ofis mobilyası 💼',
            type: 'post'
        },
        {
            id: '5',
            embedUrl: 'https://www.instagram.com/lavoradesing/',
            thumbnailUrl: getImagePath('/images/duvar ünite/0b7b05410e735a9a89ff029cc0343651.jpg'),
            caption: 'Duvar ünitesi tasarımı 📺',
            type: 'post'
        },
        {
            id: '6',
            embedUrl: 'https://www.instagram.com/lavoradesing/',
            thumbnailUrl: getImagePath('/images/salon/2fc6ec2b075c5c30ad2f16ff15f68bd4.jpg'),
            caption: 'Premium salon grubu 🛋️',
            type: 'post'
        },
        {
            id: '7',
            embedUrl: 'https://www.instagram.com/lavoradesing/',
            thumbnailUrl: getImagePath('/images/mutfak-görsel/4f0129548c499268c1127a6d5e75d8c3.jpg'),
            caption: 'Mutfak montajı - Reels 🎬',
            type: 'reel'
        },
        {
            id: '8',
            embedUrl: 'https://www.instagram.com/lavoradesing/',
            thumbnailUrl: getImagePath('/images/yatak odası/5ad06ee85682e7897130840d6ac9934a.jpg'),
            caption: 'Minimalist yatak odası 🌟',
            type: 'post'
        },
        {
            id: '9',
            embedUrl: 'https://www.instagram.com/lavoradesing/',
            thumbnailUrl: getImagePath('/images/ofis/b0f0e076406eacf7ea78401f3e174312.jpg'),
            caption: 'Lüks ofis tasarımı 🏢',
            type: 'post'
        },
        {
            id: '10',
            embedUrl: 'https://www.instagram.com/lavoradesing/',
            thumbnailUrl: getImagePath('/images/salon/3e3abb5cb94c4c88dc34b84e6f5b572a.jpg'),
            caption: 'Modern oturma grubu ☕',
            type: 'post'
        },
        {
            id: '11',
            embedUrl: 'https://www.instagram.com/lavoradesing/',
            thumbnailUrl: getImagePath('/images/mutfak-görsel/6ef949fdc55e51f821e49f64c34dc92c.jpg'),
            caption: 'Mutfak detayları 🍳',
            type: 'post'
        },
        {
            id: '12',
            embedUrl: 'https://www.instagram.com/lavoradesing/',
            thumbnailUrl: getImagePath('/images/yatak odası/7aec9929da51a2d6b5fb13bf4f61f887.jpg'),
            caption: 'Yatak odası dekorasyon - Reels 🎥',
            type: 'reel'
        },
    ];

    // Instagram'dan post'ları çek
    useEffect(() => {
        const loadInstagramPosts = async () => {
            setLoading(true);
            setError(null);

            try {
                // Access token kontrolü
                const isTokenValid = await validateAccessToken();
                
                if (!isTokenValid) {
                    console.warn('⚠️ Instagram Access Token ayarlanmamış veya geçersiz. Fallback post\'lar gösteriliyor.');
                    console.warn('👉 Token ayarlamak için: src/services/instagramService.ts');
                    setInstagramPosts(fallbackPosts);
                    setLoading(false);
                    return;
                }

                // Instagram API'den post'ları çek
                const media = await fetchInstagramMedia(12);
                
                if (media.length > 0) {
                    const formattedPosts = media.map(convertToAppFormat);
                    setInstagramPosts(formattedPosts);
                    console.log(`✅ ${formattedPosts.length} Instagram post yüklendi!`);
                } else {
                    // API çalıştı ama post yok
                    setInstagramPosts(fallbackPosts);
                }

            } catch (err) {
                console.error('Instagram post\'ları yüklenemedi:', err);
                setError('Instagram post\'ları yüklenemedi');
                setInstagramPosts(fallbackPosts);
            } finally {
                setLoading(false);
            }
        };

        loadInstagramPosts();
    }, []);

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

                {/* INSTAGRAM CAROUSEL - Modern & Animated */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="px-4 py-1.5 bg-gold-DEFAULT/10 rounded-full text-gold-DEFAULT text-xs uppercase tracking-widest inline-block"
                        >
                            Son Paylaşımlarımız
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-playfair text-white mb-4 mt-6"
                        >
                            Instagram Galerimiz
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 font-montserrat max-w-2xl mx-auto"
                        >
                            En son projelerimiz, tasarımlarımız ve ilham verici içeriklerimiz. 
                            Post'lara tıklayarak detaylı görüntüleyin.
                        </motion.p>
                    </div>

                    {/* Instagram Carousel Component */}
                    <InstagramCarousel
                        posts={instagramPosts}
                        onPostClick={(post) => setSelectedPost(post)}
                        className="py-8"
                    />

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
                                    <div className="p-6 overflow-y-auto max-h-[95vh]">
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-playfair text-white mb-2">
                                                {selectedPost.caption}
                                            </h3>
                                            <span className="text-gold-DEFAULT text-sm uppercase tracking-wider">
                                                {selectedPost.type === 'reel' ? '🎥 Reels' : '📷 Post'}
                                            </span>
                                        </div>

                                        <blockquote
                                            className="instagram-media"
                                            data-instgrm-permalink={selectedPost.embedUrl}
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
                                        <div className="mt-8 text-center">
                                            <p className="text-gray-400 text-sm mb-4">
                                                Instagram'da tam boyutlu görmek ve etkileşimde bulunmak için:
                                            </p>
                                            <a
                                                href={selectedPost.embedUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                            >
                                                <i className="ri-instagram-line text-2xl"></i>
                                                Instagram'da Görüntüle
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


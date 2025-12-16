import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { getImagePath } from '../../lib/assetPath';

// Instagram embed script type declaration
declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void;
            };
        };
    }
}

interface InstagramEmbed {
    id: string;
    type: 'post' | 'reel';
    embedUrl: string;
    caption: string;
    thumbnail?: string;
}

const SocialMedia = () => {
    const [selectedPost, setSelectedPost] = useState<InstagramEmbed | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Instagram embed script'ini yükle
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // Embed'leri yenile
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, [selectedPost]);

    // Instagram postları - Manuel olarak ekleniyor
    // HER YENİ INSTAGRAM PAYLAŞIMINDA BURAYA EKLENMELİ
    // Instagram post linkini ve thumbnail'ı güncelleyin
    const rawPosts: InstagramEmbed[] = [
        {
            id: '1',
            type: 'post',
            embedUrl: 'https://www.instagram.com/p/YOUR_POST_ID_1/',
            caption: 'Lavora Design - Lüks mutfak tasarımı 🏡',
            thumbnail: '/images/mutfak-görsel/2affba172e571c35714b4d0c77e63562.jpg'
        },
        {
            id: '2',
            type: 'post',
            embedUrl: 'https://www.instagram.com/p/YOUR_POST_ID_2/',
            caption: 'Modern salon takımı ile zarafet ✨',
            thumbnail: '/images/salon/1edd0fc0589731acb619c7d0c5c4a2e6.jpg'
        },
        {
            id: '3',
            type: 'reel',
            embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID_1/',
            caption: 'Yatak odası tasarımı - Reels 🎥',
            thumbnail: '/images/yatak odası/348eac05693386e7cc24c32eab2b68b4.jpg'
        },
        {
            id: '4',
            type: 'post',
            embedUrl: 'https://www.instagram.com/p/YOUR_POST_ID_3/',
            caption: 'Executive ofis mobilyası 💼',
            thumbnail: '/images/ofis/47c6bbdf513bdffd25e3a941513220f2.jpg'
        },
        {
            id: '5',
            type: 'post',
            embedUrl: 'https://www.instagram.com/p/YOUR_POST_ID_4/',
            caption: 'Modern duvar ünitesi tasarımı 📺',
            thumbnail: '/images/duvar ünite/0b7b05410e735a9a89ff029cc0343651.jpg'
        },
        {
            id: '6',
            type: 'post',
            embedUrl: 'https://www.instagram.com/p/YOUR_POST_ID_5/',
            caption: 'Premium salon grubu 🛋️',
            thumbnail: '/images/salon/2fc6ec2b075c5c30ad2f16ff15f68bd4.jpg'
        },
        {
            id: '7',
            type: 'reel',
            embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID_2/',
            caption: 'Mutfak dolabı montaj - Reels 🎬',
            thumbnail: '/images/mutfak-görsel/4f0129548c499268c1127a6d5e75d8c3.jpg'
        },
        {
            id: '8',
            type: 'post',
            embedUrl: 'https://www.instagram.com/p/YOUR_POST_ID_6/',
            caption: 'Minimalist yatak odası 🌙',
            thumbnail: '/images/yatak odası/5ad06ee85682e7897130840d6ac9934a.jpg'
        },
        {
            id: '9',
            type: 'post',
            embedUrl: 'https://www.instagram.com/p/YOUR_POST_ID_7/',
            caption: 'Lüks ofis tasarımı 🏢',
            thumbnail: '/images/ofis/b0f0e076406eacf7ea78401f3e174312.jpg'
        },
    ];

    // Apply image path transformation
    const instagramPosts = rawPosts.map(post => ({
        ...post,
        thumbnail: getImagePath(post.thumbnail)
    }));

    const handlePostClick = (post: InstagramEmbed) => {
        setSelectedPost(post);
        setLoading(true);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
        setLoading(false);
    };

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
                        Instagram Paylaşımları
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-montserrat max-w-2xl mx-auto mb-8"
                    >
                        En son projelerimiz, tasarımlarımız ve ilham verici içeriklerimiz
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

                {/* Instagram Posts Grid - Büyük Boyut */}
                <div className="mb-16">
                    <h3 className="text-3xl font-playfair text-white mb-4 text-center">
                        Instagram Galerimiz
                    </h3>
                    <p className="text-gray-400 font-montserrat mb-12 text-center max-w-2xl mx-auto">
                        Son paylaşımlarımıza göz atın. Post'lara tıklayarak detaylı görüntüleyebilirsiniz.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {instagramPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handlePostClick(post)}
                                className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 cursor-pointer hover:border-gold-DEFAULT/50 transition-all duration-300"
                            >
                                <img
                                    src={post.thumbnail}
                                    alt={post.caption}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <p className="text-white font-montserrat text-sm mb-3 line-clamp-2">
                                        {post.caption}
                                    </p>
                                    <div className="flex items-center gap-2 text-gold-DEFAULT">
                                        <i className={`${post.type === 'reel' ? 'ri-video-line' : 'ri-image-line'} text-xl`}></i>
                                        <span className="text-xs uppercase tracking-wider">
                                            {post.type === 'reel' ? 'Reels' : 'Post'}
                                        </span>
                                    </div>
                                </div>
                                {post.type === 'reel' && (
                                    <div className="absolute top-4 right-4">
                                        <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                                            <i className="ri-play-fill text-white text-xl"></i>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Instagram Post Modal */}
                {selectedPost && createPortal(
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                            onClick={handleCloseModal}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 50 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 50 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                className="relative bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                                >
                                    <i className="ri-close-line text-2xl text-white"></i>
                                </button>

                                <div className="p-8 overflow-y-auto max-h-[90vh]">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-playfair text-white mb-2">
                                            {selectedPost.caption}
                                        </h3>
                                        <span className="text-gold-DEFAULT text-sm uppercase tracking-wider">
                                            {selectedPost.type === 'reel' ? '🎥 Reels' : '📷 Post'}
                                        </span>
                                    </div>

                                    {/* Instagram Embed */}
                                    <div className="relative w-full flex justify-center">
                                        <blockquote
                                            className="instagram-media"
                                            data-instgrm-permalink={selectedPost.embedUrl}
                                            data-instgrm-version="14"
                                            style={{
                                                background: '#FFF',
                                                border: 0,
                                                borderRadius: '3px',
                                                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                                margin: '1px',
                                                maxWidth: '540px',
                                                minWidth: '326px',
                                                padding: 0,
                                                width: 'calc(100% - 2px)'
                                            }}
                                        >
                                            {loading && (
                                                <div className="flex items-center justify-center py-20">
                                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-DEFAULT"></div>
                                                </div>
                                            )}
                                        </blockquote>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <p className="text-gray-400 text-sm mb-4">
                                            Instagram'da tam boyutlu görmek ve etkileşimde bulunmak için:
                                        </p>
                                        <a
                                            href={selectedPost.embedUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                        >
                                            <i className="ri-instagram-line text-xl"></i>
                                            Instagram'da Görüntüle
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>,
                    document.body
                )}

                {/* Social Media Links */}
                <div className="bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-playfair text-white mb-6">
                        Bizi Takip Edin
                    </h3>
                    <p className="text-gray-400 font-montserrat mb-8 max-w-2xl mx-auto">
                        Sosyal medya hesaplarımızda tasarım ilhamı, proje güncellemeleri ve daha fazlası için bizi takip edin.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://www.instagram.com/lavoradesing/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                        >
                            <i className="ri-instagram-line text-2xl text-white"></i>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SocialMedia;


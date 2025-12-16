import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

interface InstagramPost {
    id: string;
    media_type: string;
    media_url: string;
    permalink: string;
    caption?: string;
    timestamp: string;
    thumbnail_url?: string;
}

const SocialMedia = () => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchInstagramPosts();
    }, []);

    const fetchInstagramPosts = async () => {
        try {
            // Instagram Basic Display API kullanarak son paylaşımları çek
            // Not: Bu API için Instagram Developer hesabı ve Access Token gerekli
            // Şimdilik statik demo içerik gösteriyoruz
            
            // Demo içerik (API entegrasyonu için hazırlanmış yapı)
            const demoData: InstagramPost[] = [
                {
                    id: '1',
                    media_type: 'IMAGE',
                    media_url: 'https://picsum.photos/800/800?random=1',
                    permalink: 'https://www.instagram.com/lavoradesing/',
                    caption: 'Modern mutfak tasarımı 🏡 #lavoradesign #mobilya',
                    timestamp: new Date().toISOString(),
                }
            ];
            
            setPosts(demoData);
            setLoading(false);
        } catch (err) {
            console.error('Instagram posts fetch error:', err);
            setError('Instagram gönderileri yüklenirken bir hata oluştu.');
            setLoading(false);
        }
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

                {/* Instagram Feed Embed */}
                <div className="mb-16">
                    <div className="bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-playfair text-white mb-4">
                                @lavoradesing
                            </h2>
                            <p className="text-gray-400 font-montserrat">
                                Instagram'daki en son paylaşımlarımızı görün
                            </p>
                        </div>

                        {/* Instagram Embed Widget */}
                        <div className="relative w-full overflow-hidden rounded-xl">
                            <iframe
                                src="https://www.instagram.com/lavoradesing/embed"
                                className="w-full min-h-[600px] border-0"
                                allowTransparency
                                style={{ background: 'transparent' }}
                            />
                        </div>

                        {/* Alternative: Elfsight Widget */}
                        <div className="mt-8">
                            <script 
                                src="https://static.elfsight.com/platform/platform.js" 
                                data-use-service-core 
                                defer
                            ></script>
                            <div 
                                className="elfsight-app-6f7b4c8e-8d9a-4c5e-b2e1-3a4f5c6d7e8f"
                                data-elfsight-app-lazy
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Instagram Grid - Manuel gösterim */}
                <div className="mb-16">
                    <h3 className="text-2xl font-playfair text-white mb-8 text-center">
                        Son Paylaşımlar
                    </h3>
                    
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-DEFAULT"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 text-gray-500">
                            <i className="ri-error-warning-line text-5xl mb-4 block"></i>
                            <p>{error}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {posts.map((post, index) => (
                                <motion.a
                                    key={post.id}
                                    href={post.permalink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative aspect-square overflow-hidden rounded-lg bg-black/50"
                                >
                                    <img
                                        src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                                        alt={post.caption?.substring(0, 50) || 'Instagram post'}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white text-sm line-clamp-2">
                                            {post.caption || 'Instagram paylaşımını görüntüle'}
                                        </p>
                                    </div>
                                    {post.media_type === 'VIDEO' && (
                                        <div className="absolute top-4 right-4">
                                            <i className="ri-play-circle-fill text-white text-3xl drop-shadow-lg"></i>
                                        </div>
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    )}
                </div>

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


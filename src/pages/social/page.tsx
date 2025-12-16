import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const SocialMedia = () => {
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

                {/* INSTAGRAM PROFILE EMBED - Otomatik Feed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-playfair text-white mb-6 text-center">
                        Instagram Sayfamız
                    </h2>
                    <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
                        En son projelerimiz ve tasarımlarımız. Yeni paylaşımlar otomatik olarak görünür.
                    </p>

                    {/* Instagram Profile Embed - Full Feed */}
                    <div className="bg-gradient-to-br from-[#0A0A0A] to-[#151515] rounded-2xl p-4 md:p-8 border border-white/10">
                        <div className="relative w-full mx-auto" style={{ maxWidth: '100%', minHeight: '800px' }}>
                            {/* Instagram Embed Container */}
                            <div className="w-full h-full flex justify-center">
                                <iframe
                                    src="https://www.instagram.com/lavoradesing/embed/"
                                    width="100%"
                                    height="900"
                                    frameBorder="0"
                                    scrolling="auto"
                                    allowTransparency={true}
                                    className="rounded-lg w-full max-w-4xl"
                                    style={{
                                        border: 'none',
                                        overflow: 'hidden',
                                        background: '#000000'
                                    }}
                                    title="Lavora Design Instagram Feed"
                                ></iframe>
                            </div>

                            {/* Fallback Message */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                    <p className="text-gray-500 text-sm">
                                        Instagram feed yükleniyor...
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="mt-8 bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <i className="ri-check-double-line text-2xl text-green-400"></i>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-green-400 font-semibold text-lg mb-2">
                                        ✅ Otomatik Instagram Feed
                                    </h3>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>• Instagram'daki <strong className="text-white">tüm paylaşımlarınız</strong> otomatik görünür</li>
                                        <li>• <strong className="text-white">Yeni post, reel, video</strong> paylaştığınızda anında yansır</li>
                                        <li>• Hiçbir 3. parti servis yok - sadece Instagram'ın kendi sistemi</li>
                                        <li>• Tamamen ücretsiz ve profesyonel</li>
                                        <li>• Hiçbir kod değişikliği gerekmez</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
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


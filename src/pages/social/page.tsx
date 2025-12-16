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

                {/* INSTAGRAM NATIVE EMBED - Hiç 3. parti yok! */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-playfair text-white mb-4 text-center">
                        Son Instagram Paylaşımlarımız
                    </h2>
                    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        Instagram'daki en yeni içeriklerimizi keşfedin. Doğrudan Instagram'dan otomatik yüklenir.
                    </p>

                    {/* Instagram Grid - Native Embeds */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {/* Post 1 - Son paylaşımınızın linkini buraya */}
                        <div className="bg-gradient-to-br from-[#0A0A0A] to-[#151515] rounded-xl overflow-hidden border border-white/10">
                            <blockquote 
                                className="instagram-media" 
                                data-instgrm-captioned 
                                data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_ID_1/" 
                                data-instgrm-version="14"
                                style={{ 
                                    background: '#0A0A0A', 
                                    border: 0, 
                                    borderRadius: '3px', 
                                    margin: 0,
                                    padding: 0,
                                    width: '100%'
                                }}
                            ></blockquote>
                        </div>

                        {/* Post 2 */}
                        <div className="bg-gradient-to-br from-[#0A0A0A] to-[#151515] rounded-xl overflow-hidden border border-white/10">
                            <blockquote 
                                className="instagram-media" 
                                data-instgrm-captioned 
                                data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_ID_2/" 
                                data-instgrm-version="14"
                                style={{ 
                                    background: '#0A0A0A', 
                                    border: 0, 
                                    borderRadius: '3px', 
                                    margin: 0,
                                    padding: 0,
                                    width: '100%'
                                }}
                            ></blockquote>
                        </div>

                        {/* Post 3 */}
                        <div className="bg-gradient-to-br from-[#0A0A0A] to-[#151515] rounded-xl overflow-hidden border border-white/10">
                            <blockquote 
                                className="instagram-media" 
                                data-instgrm-captioned 
                                data-instgrm-permalink="https://www.instagram.com/reel/YOUR_REEL_ID_1/" 
                                data-instgrm-version="14"
                                style={{ 
                                    background: '#0A0A0A', 
                                    border: 0, 
                                    borderRadius: '3px', 
                                    margin: 0,
                                    padding: 0,
                                    width: '100%'
                                }}
                            ></blockquote>
                        </div>

                        {/* Post 4 */}
                        <div className="bg-gradient-to-br from-[#0A0A0A] to-[#151515] rounded-xl overflow-hidden border border-white/10">
                            <blockquote 
                                className="instagram-media" 
                                data-instgrm-captioned 
                                data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_ID_3/" 
                                data-instgrm-version="14"
                                style={{ 
                                    background: '#0A0A0A', 
                                    border: 0, 
                                    borderRadius: '3px', 
                                    margin: 0,
                                    padding: 0,
                                    width: '100%'
                                }}
                            ></blockquote>
                        </div>

                        {/* Post 5 */}
                        <div className="bg-gradient-to-br from-[#0A0A0A] to-[#151515] rounded-xl overflow-hidden border border-white/10">
                            <blockquote 
                                className="instagram-media" 
                                data-instgrm-captioned 
                                data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_ID_4/" 
                                data-instgrm-version="14"
                                style={{ 
                                    background: '#0A0A0A', 
                                    border: 0, 
                                    borderRadius: '3px', 
                                    margin: 0,
                                    padding: 0,
                                    width: '100%'
                                }}
                            ></blockquote>
                        </div>

                        {/* Post 6 */}
                        <div className="bg-gradient-to-br from-[#0A0A0A] to-[#151515] rounded-xl overflow-hidden border border-white/10">
                            <blockquote 
                                className="instagram-media" 
                                data-instgrm-captioned 
                                data-instgrm-permalink="https://www.instagram.com/reel/YOUR_REEL_ID_2/" 
                                data-instgrm-version="14"
                                style={{ 
                                    background: '#0A0A0A', 
                                    border: 0, 
                                    borderRadius: '3px', 
                                    margin: 0,
                                    padding: 0,
                                    width: '100%'
                                }}
                            ></blockquote>
                        </div>
                    </div>

                    {/* Nasıl Güncellenir */}
                    <div className="bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-gold-DEFAULT/20 rounded-xl p-8">
                        <div className="max-w-3xl mx-auto">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-DEFAULT/20 flex items-center justify-center">
                                    <i className="ri-lightbulb-line text-2xl text-gold-DEFAULT"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-playfair text-white mb-2">
                                        Yeni Paylaşımları Nasıl Eklerim?
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        Her yeni Instagram paylaşımınızı buraya eklemek çok basit:
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 text-sm">
                                <div className="flex gap-3 items-start bg-black/30 rounded-lg p-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-DEFAULT text-black font-bold flex items-center justify-center text-xs">1</span>
                                    <p className="text-gray-300">
                                        Instagram'da paylaşımınızı açın, <strong className="text-white">"..." → "Embed"</strong> → Linki kopyalayın
                                    </p>
                                </div>

                                <div className="flex gap-3 items-start bg-black/30 rounded-lg p-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-DEFAULT text-black font-bold flex items-center justify-center text-xs">2</span>
                                    <div className="flex-1">
                                        <p className="text-gray-300 mb-2">
                                            <code className="bg-black/50 px-2 py-1 rounded text-purple-400">src/pages/social/page.tsx</code> dosyasını açın
                                        </p>
                                        <p className="text-gray-400 text-xs">
                                            Satır 93'ten itibaren post blokları var
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start bg-black/30 rounded-lg p-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-DEFAULT text-black font-bold flex items-center justify-center text-xs">3</span>
                                    <div className="flex-1">
                                        <p className="text-gray-300 mb-2">
                                            <code className="text-green-400">YOUR_POST_ID_1</code> yerine kendi post linkinizi yapıştırın
                                        </p>
                                        <div className="bg-black/50 p-3 rounded border border-white/10 mt-2">
                                            <code className="text-purple-400 text-xs break-all">
                                                data-instgrm-permalink="https://www.instagram.com/p/<span className="text-green-400">DEFvwxyz123</span>/"
                                            </code>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start bg-black/30 rounded-lg p-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-DEFAULT text-black font-bold flex items-center justify-center text-xs">4</span>
                                    <p className="text-gray-300">
                                        Git push → GitHub Actions otomatik deploy eder → ✅ Hazır!
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10">
                                <div className="flex items-start gap-3 bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-lg p-4">
                                    <i className="ri-check-double-line text-2xl text-green-400 flex-shrink-0"></i>
                                    <div>
                                        <h5 className="text-green-400 font-semibold mb-1">✅ Avantajlar:</h5>
                                        <ul className="text-gray-400 text-xs space-y-1">
                                            <li>• Hiçbir 3. parti servis yok - sadece Instagram</li>
                                            <li>• Tamamen ücretsiz - sınırsız</li>
                                            <li>• Video, reels, foto - hepsi çalışır</li>
                                            <li>• Sitede oynatılır (Instagram'a yönlendirmez)</li>
                                            <li>• Siyah tema uyumlu</li>
                                        </ul>
                                    </div>
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


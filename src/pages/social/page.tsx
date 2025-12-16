import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const SocialMedia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
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

                {/* ÜCRETSİZ INSTAGRAM FEED - SnapWidget */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-br from-[#0A0A0A] to-[#151515] rounded-2xl p-8 border border-white/10">
                        <h2 className="text-3xl font-playfair text-white mb-4 text-center">
                            Son Instagram Paylaşımlarımız
                        </h2>
                        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
                            Instagram'daki en yeni içeriklerimiz. Tıklayarak detaylı görebilir, videoları izleyebilirsiniz.
                        </p>

                        {/* SnapWidget Embed Alanı */}
                        {/* BURAYA WIDGET KODUNU YAPIŞTıRıN */}
                        <div className="relative min-h-[600px] flex items-center justify-center">
                            <div className="text-center max-w-2xl mx-auto">
                                <i className="ri-instagram-line text-6xl text-gold-DEFAULT mb-6 block"></i>
                                <h3 className="text-2xl font-playfair text-white mb-4">
                                    🎉 %100 ÜCRETSİZ Instagram Feed
                                </h3>
                                <p className="text-gray-400 font-montserrat mb-8">
                                    2 dakikada kurun, otomatik güncellesin!
                                </p>
                                
                                <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 text-left space-y-6">
                                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-4">
                                        <h4 className="text-gold-DEFAULT font-bold text-xl mb-2 flex items-center gap-2">
                                            <i className="ri-gift-line"></i>
                                            SnapWidget - Tamamen Ücretsiz!
                                        </h4>
                                        <p className="text-gray-300 text-sm">
                                            ✅ Kredi kartı yok &nbsp; ✅ Kayıt 30 saniye &nbsp; ✅ Otomatik güncelleme
                                        </p>
                                    </div>

                                    <h4 className="text-white font-semibold text-lg border-b border-white/10 pb-2">
                                        📋 HIZLI KURULUM (2 Dakika):
                                    </h4>
                                    
                                    <div className="space-y-4 text-sm">
                                        <div className="flex gap-3 items-start">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-DEFAULT/20 text-gold-DEFAULT font-bold flex items-center justify-center">1</span>
                                            <div className="flex-1">
                                                <p className="text-gray-200 mb-2">
                                                    <a 
                                                        href="https://snapwidget.com/widgets/free-instagram-widget" 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="text-purple-400 hover:text-purple-300 underline font-semibold"
                                                    >
                                                        SnapWidget sayfasına git
                                                    </a>
                                                </p>
                                                <p className="text-gray-400 text-xs">
                                                    Ücretsiz Grid veya Slideshow widget'ı seçin
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-3 items-start">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-DEFAULT/20 text-gold-DEFAULT font-bold flex items-center justify-center">2</span>
                                            <div className="flex-1">
                                                <p className="text-gray-200 mb-2">
                                                    Instagram hesabınızı bağlayın: <code className="bg-black/50 px-2 py-1 rounded text-purple-400">@lavoradesing</code>
                                                </p>
                                                <p className="text-gray-400 text-xs">
                                                    "Connect Instagram" butonuna tıklayıp giriş yapın
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-3 items-start">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-DEFAULT/20 text-gold-DEFAULT font-bold flex items-center justify-center">3</span>
                                            <div className="flex-1">
                                                <p className="text-gray-200 mb-2">
                                                    Tasarım ayarları:
                                                </p>
                                                <ul className="text-gray-400 text-xs space-y-1 ml-4">
                                                    <li>• Background Color: <span className="text-white">#0A0A0A</span> (siyah)</li>
                                                    <li>• Layout: Grid veya Slideshow</li>
                                                    <li>• Responsive: Açık</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-3 items-start">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-DEFAULT/20 text-gold-DEFAULT font-bold flex items-center justify-center">4</span>
                                            <div className="flex-1">
                                                <p className="text-gray-200 mb-2">
                                                    Embed kodunu kopyalayın
                                                </p>
                                                <p className="text-gray-400 text-xs">
                                                    "Get Widget" → Kodu kopyala
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-3 items-start">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-DEFAULT/20 text-gold-DEFAULT font-bold flex items-center justify-center">5</span>
                                            <div className="flex-1">
                                                <p className="text-gray-200 mb-2">
                                                    Kodu yapıştırın:
                                                </p>
                                                <div className="bg-black/50 p-3 rounded border border-white/10 overflow-x-auto">
                                                    <code className="text-purple-400 text-xs">
                                                        src/pages/social/page.tsx
                                                    </code>
                                                    <p className="text-gray-400 text-xs mt-2">
                                                        Satır 85'e (bu mesajın yerine) widget kodunu yapıştırın
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-lg p-4 mt-6">
                                        <div className="flex items-start gap-3">
                                            <i className="ri-check-double-line text-2xl text-green-400 flex-shrink-0"></i>
                                            <div>
                                                <h5 className="text-green-400 font-semibold mb-1">Otomatik Güncelleme</h5>
                                                <p className="text-gray-400 text-xs">
                                                    Instagram'a yeni bir şey paylaştığınızda widget otomatik güncellenir. 
                                                    Hiçbir şey yapmanıza gerek yok!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="https://snapwidget.com/widgets/free-instagram-widget"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                    >
                                        <i className="ri-external-link-line text-xl"></i>
                                        SnapWidget'ı Kullan (Ücretsiz)
                                    </a>
                                </div>

                                <p className="text-gray-500 text-xs mt-6">
                                    💡 <strong>Alternatif:</strong> Behold.so, LightWidget.com da ücretsiz alternatifler
                                </p>
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


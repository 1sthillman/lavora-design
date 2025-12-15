import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Ported from previous version but adapted for TS/New Layout
export default function SourceCode() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark text-white pt-32 pb-20 px-6">
            <Navbar />
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-20 h-20 bg-gold-DEFAULT/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                        <i className="ri-code-line text-4xl text-gold-DEFAULT"></i>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Kaynak Kodlar</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
                        Lavora Design projesinin tüm kaynak kodlarına erişin. Bu paket, projenin en güncel halini, tüm bileşenleri ve konfigürasyon dosyalarını içerir (V3.0 TypeScript).
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
                        <div className="bg-white/5 p-6 border border-white/5 rounded-sm hover:border-gold-DEFAULT/30 transition-colors">
                            <i className="ri-file-code-line text-2xl text-gold-DEFAULT mb-4 block"></i>
                            <h3 className="text-white font-serif text-xl mb-2">TypeScript</h3>
                            <p className="text-gray-500 text-sm">Tip güvenliği ve modern geliştirme deneyimi sağlayan tam TypeScript desteği.</p>
                        </div>
                        <div className="bg-white/5 p-6 border border-white/5 rounded-sm hover:border-gold-DEFAULT/30 transition-colors">
                            <i className="ri-code-s-slash-line text-2xl text-gold-DEFAULT mb-4 block"></i>
                            <h3 className="text-white font-serif text-xl mb-2">Clean Code</h3>
                            <p className="text-gray-500 text-sm">Modüler bileşen yapısı, düzenli klasör sistemi ve kapsamlı dökümantasyon.</p>
                        </div>
                        <div className="bg-white/5 p-6 border border-white/5 rounded-sm hover:border-gold-DEFAULT/30 transition-colors">
                            <i className="ri-layout-masonry-line text-2xl text-gold-DEFAULT mb-4 block"></i>
                            <h3 className="text-white font-serif text-xl mb-2">V3.0 Architecture</h3>
                            <p className="text-gray-500 text-sm">Vite, React 19 ve TailwindCSS ile güçlendirilmiş en son teknoloji yığını.</p>
                        </div>
                    </div>

                    <div className="bg-black border border-gold-DEFAULT/20 p-10 rounded-lg inline-block relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gold-DEFAULT/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                        <h2 className="text-3xl font-serif text-white mb-4 relative z-10">Proje Dosyalarını İndir</h2>
                        <div className="flex flex-col items-center gap-4 relative z-10">
                            <p className="text-gray-400 text-sm mb-4">Sürüm: v3.0 (TypeScript) • Boyut: ~25MB</p>
                            <a href="/lavora-source.zip" download>
                                <button className="px-10 py-4 bg-gold-DEFAULT text-matte font-bold rounded-full flex items-center gap-3 hover:bg-gold-light transition-colors">
                                    <i className="ri-download-cloud-line text-xl"></i>
                                    KAYNAK KODU İNDİR (.ZIP)
                                </button>
                            </a>
                            <p className="text-gray-600 text-xs mt-4 max-w-md">
                                Not: İndirme işlemi tarayıcı üzerinden gerçekleşir. Dosya <code>public/lavora-source.zip</code> konumunda oluşturulmuştur.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}

import { motion } from 'framer-motion';
import { Download, Code, FileCode } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SourceCode() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-slow">
                        <Code className="text-accent" size={40} />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Kaynak Kodlar</h1>
                    <p className="text-stone-400 text-lg max-w-2xl mx-auto mb-12">
                        Lavora Design projesinin tüm kaynak kodlarına erişin. Bu paket, projenin en güncel halini, tüm bileşenleri ve konfigürasyon dosyalarını içerir.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
                        <div className="bg-stone-900/50 p-6 border border-white/5 rounded-sm">
                            <FileCode className="text-accent mb-4" size={24} />
                            <h3 className="text-white font-serif text-xl mb-2">Modern Stack</h3>
                            <p className="text-stone-500 text-sm">React 18, Vite, TailwindCSS ve Framer Motion ile geliştirilmiş modern mimari.</p>
                        </div>
                        <div className="bg-stone-900/50 p-6 border border-white/5 rounded-sm">
                            <FileCode className="text-accent mb-4" size={24} />
                            <h3 className="text-white font-serif text-xl mb-2">Clean Code</h3>
                            <p className="text-stone-500 text-sm">Modüler bileşen yapısı, düzenli klasör sistemi ve kapsamlı dökümantasyon.</p>
                        </div>
                        <div className="bg-stone-900/50 p-6 border border-white/5 rounded-sm">
                            <FileCode className="text-accent mb-4" size={24} />
                            <h3 className="text-white font-serif text-xl mb-2">VIP Design</h3>
                            <p className="text-stone-500 text-sm">Özel animasyonlar, lüks renk paleti ve responsive tasarım sistemi.</p>
                        </div>
                    </div>

                    <div className="bg-black border border-accent/20 p-10 rounded-lg inline-block relative overflow-hidden group">
                        <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                        <h2 className="text-3xl font-serif text-white mb-4 relative z-10">Proje Dosyalarını İndir</h2>
                        <div className="flex flex-col items-center gap-4 relative z-10">
                            <p className="text-stone-400 text-sm mb-4">Sürüm: v2.4 (Latest) • Boyut: ~25MB</p>
                            <a href="/lavora-source.zip" download>
                                <Button variant="primary" className="px-10 py-4 flex items-center gap-3">
                                    <Download size={20} />
                                    KAYNAK KODU İNDİR (.ZIP)
                                </Button>
                            </a>
                            <p className="text-stone-600 text-xs mt-4 max-w-md">
                                Not: İndirme işlemi tarayıcı üzerinden gerçekleşir. Dosya <code>public/lavora-source.zip</code> konumunda oluşturulmuştur.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

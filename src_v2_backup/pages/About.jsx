import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="container mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-6">Mükemmelliğin <span className="text-accent">Yansıması</span></h1>
                    <p className="text-primary text-lg leading-relaxed mb-6">
                        1998 yılından bu yana, mobilya sanatını modern tasarım anlayışıyla birleştirerek, yaşam alanlarına değer katıyoruz. Her bir parçamız, ustalarımızın el emeği ve tasarımcılarımızın vizyonuyla şekilleniyor.
                    </p>
                    <p className="text-primary text-lg leading-relaxed">
                        Lavora Design olarak amacımız sadece mobilya üretmek değil, bir yaşam tarzı sunmaktır. Kalite, estetik ve fonksiyonelliği buluşturduğumuz koleksiyonlarımızla dünya çapında 15.000'den fazla mutlu müşteriye ulaştık.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-square bg-surface overflow-hidden relative z-10">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Showroom" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent z-0" />
                </motion.div>
            </div>

            {/* Timeline */}
            <div className="mb-24">
                <h2 className="text-3xl font-serif font-bold text-center text-text mb-12">Tarihçemiz</h2>
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:bg-gradient-to-b before:from-transparent before:via-accent before:to-transparent">
                    {[
                        { year: '1998', title: 'Kuruluş', desc: 'İstanbul Modoko\'da küçük bir atölye olarak yola çıktık.' },
                        { year: '2005', title: 'İlk Showroom', desc: 'Markalaşma sürecimizin ilk adımı olan 2000 m²\'lik showroomumuzu açtık.' },
                        { year: '2010', title: 'İhracat Başarısı', desc: 'Avrupa ve Orta Doğu pazarına açılarak uluslararası bir marka olma yolunda ilerledik.' },
                        { year: '2025', title: 'Dijital Dönüşüm', desc: 'Lavora Design, dijital dünyada premium bir deneyim sunmak için yenilendi.' }
                    ].map((item, index) => (
                        <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-accent text-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shrink-0">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface p-6 rounded border border-primary/10 hover:border-accent/30 transition-colors shadow-lg">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <h3 className="font-serif font-bold text-text">{item.title}</h3>
                                    <time className="font-mono text-accent">{item.year}</time>
                                </div>
                                <p className="text-primary text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

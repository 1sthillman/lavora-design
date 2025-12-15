import { motion } from 'framer-motion';

const CollectionsSection = () => {
    const collections = [
        {
            id: 1,
            title: 'Mutfak',
            description: 'Modern ve klasik mutfak tasarımları',
            image: '/images/mutfak-görsel/2affba172e571c35714b4d0c77e63562.jpg',
            link: '/products?category=Mutfak',
        },
        {
            id: 2,
            title: 'Salon',
            description: 'Şık oturma grupları ve aksesuarlar',
            image: '/images/salon/1edd0fc0589731acb619c7d0c5c4a2e6.jpg',
            link: '/products?category=Salon',
        },
        {
            id: 3,
            title: 'Yatak Odası',
            description: 'Konforlu ve zarif yatak odası mobilyaları',
            image: '/images/yatak odası/348eac05693386e7cc24c32eab2b68b4.jpg',
            link: '/products?category=Yatak Odası',
        },
        {
            id: 4,
            title: 'Ofis',
            description: 'Profesyonel çalışma alanları',
            image: '/images/ofis/47c6bbdf513bdffd25e3a941513220f2.jpg',
            link: '/products?category=Ofis',
        },
        {
            id: 5,
            title: 'Duvar Ünite',
            description: 'Modern duvar tasarımları',
            image: '/images/duvar ünite/0b7b05410e735a9a89ff029cc0343651.jpg',
            link: '/products?category=Duvar',
        },
    ];

    return (
        <section className="relative py-24 bg-gradient-to-br from-matte via-nardo-dark to-matte">
            <div className="w-full max-w-full mx-auto px-3 sm:px-4 md:px-6 overflow-hidden">
                <div className="text-center mb-16">
                    <span className="px-3 py-1 border border-gold-DEFAULT/30 rounded-full text-gold-DEFAULT text-[10px] tracking-[0.2em] bg-black/40 uppercase">Koleksiyonlar</span>
                    <h2 className="text-4xl md:text-6xl font-playfair text-white mt-6 mb-4">Premium Kategoriler</h2>
                    <p className="text-gray-400 font-montserrat max-w-2xl mx-auto">
                        Her mekan için özel tasarlanmış lüks mobilya koleksiyonları
                    </p>
                    <div className="w-24 h-[1px] bg-gold-DEFAULT mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {collections.map((collection, index) => (
                        <motion.a
                            key={collection.id}
                            href={collection.link}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
                        >
                            <img
                                src={collection.image}
                                alt={collection.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-2xl font-playfair text-white mb-2">{collection.title}</h3>
                                <p className="text-gray-300 text-xs font-montserrat mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                    {collection.description}
                                </p>
                                <div className="px-4 py-2 bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 text-gold-DEFAULT text-xs uppercase tracking-widest inline-block rounded-full group-hover:bg-gold-DEFAULT group-hover:text-matte transition-all">
                                    Keşfet <i className="ri-arrow-right-line ml-1"></i>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionsSection;

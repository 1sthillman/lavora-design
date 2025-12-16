import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { getImagePath } from '../../lib/assetPath';

interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
    price?: string;
}

// Kategori tipleri - ürünlerdeki gerçek kategorilerle eşleşmeli
type Category = 'Tümü' | 'Salon' | 'Mutfak' | 'Yatak Odası' | 'Ofis' | 'Duvar';

const Products = () => {
    const { category } = useParams<{ category: string }>();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    // Map URL to Display Category
    const categoryMap: { [key: string]: Category } = {
        'salon': 'Salon',
        'mutfak': 'Mutfak',
        'yatak-odasi': 'Yatak Odası',
        'ofis': 'Ofis',
        'duvar': 'Duvar'
    };

    // Reverse map for navigation
    const reverseCategoryMap: { [key: string]: string } = {
        'Salon': 'salon',
        'Mutfak': 'mutfak',
        'Yatak Odası': 'yatak-odasi',
        'Ofis': 'ofis',
        'Duvar': 'duvar',
        'Tümü': ''
    };

    const initialCategory = category && categoryMap[category] ? categoryMap[category] : 'Tümü';
    const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const categories: Category[] = ['Tümü', 'Salon', 'Mutfak', 'Yatak Odası', 'Ofis', 'Duvar'];

    // Raw product data with image paths - converted to full paths at runtime
    const rawProducts = [
        // MUTFAK
        { id: 1, name: 'Modern Mutfak Tasarımı', category: 'Mutfak', description: 'Premium mutfak dolap sistemi, modern tasarım', imagePath: '/images/mutfak-görsel/2affba172e571c35714b4d0c77e63562.jpg' },
        { id: 2, name: 'Lüks Mutfak Dolabı', category: 'Mutfak', description: 'Ahşap detaylı mutfak sistemi', imagePath: '/images/mutfak-görsel/4f0129548c499268c1127a6d5e75d8c3.jpg' },
        { id: 3, name: 'Minimalist Mutfak', category: 'Mutfak', description: 'Temiz çizgiler, gizli kulplar ve modern estetik', imagePath: '/images/mutfak-görsel/6eaca09af50be3e224e066f1d06c10ab.jpg' },
        { id: 4, name: 'Klasik Mutfak Dolabı', category: 'Mutfak', description: 'Geleneksel tasarım, ahşap detaylar', imagePath: '/images/mutfak-görsel/75475696254d72baebcf235ed19f1b7d.jpg' },
        { id: 5, name: 'Premium Mutfak Sistemi', category: 'Mutfak', description: 'Entegre cihazlar ve modern dolaplar', imagePath: '/images/mutfak-görsel/98cb00646c145981ec077db90a7e7217.jpg' },
        { id: 6, name: 'Ada Mutfak Tasarımı', category: 'Mutfak', description: 'Mermer tezgah ve ada ünitesi', imagePath: '/images/mutfak-görsel/ac2ecb14623202cc8a099a3b968d7978.jpg' },
        { id: 7, name: 'MAT MUTFAK Dolabı', category: 'Mutfak', description: 'MAT lake kaplama, modern çizgiler', imagePath: '/images/mutfak-görsel/c162ea3a1da8980cf7c1689fedd268f7.jpg' },
        { id: 8, name: 'Klasik Mutfak Sistemi', category: 'Mutfak', description: 'Klasik Mutfak Sistemi, geniş depolama', imagePath: '/images/mutfak-görsel/c4100faed51ad904824c744cb668eec3.jpg' },
        // SALON
        { id: 9, name: 'Modern Oturma Grubu', category: 'Salon', description: 'Contemporary salon takımı', imagePath: '/images/salon/1edd0fc0589731acb619c7d0c5c4a2e6.jpg' },
        { id: 10, name: 'Lüks Salon Takımı', category: 'Salon', description: 'Premium kumaş kaplı koltuk seti', imagePath: '/images/salon/2fc6ec2b075c5c30ad2f16ff15f68bd4.jpg' },
        { id: 11, name: 'Minimalist Salon', category: 'Salon', description: 'Temiz çizgili modern oturma grubu', imagePath: '/images/salon/3e978f7b380e102f014e4b780158564b.jpg' },
        { id: 12, name: 'Klasik Salon Seti', category: 'Salon', description: 'Zarif ve şık salon mobilyası', imagePath: '/images/salon/5ab571e66ee70b434a230d65b5d096db.jpg' },
        { id: 13, name: 'Premium Koltuk Takımı', category: 'Salon', description: 'Yüksek konforlu salon grubu', imagePath: '/images/salon/7289417b31c47191b99e5d4586e316c3.jpg' },
        { id: 14, name: 'Modern L Koltuk', category: 'Salon', description: 'L tipi modüler koltuk sistemi', imagePath: '/images/salon/8a6a40625ab22c183d22850b8e8b01d0.jpg' },
        { id: 15, name: 'Şık Salon Grubu', category: 'Salon', description: 'Zarif tasarım, konforlu oturma', imagePath: '/images/salon/90b527b3d2654b5614a9255927c03dc5.jpg' },
        // YATAK ODASI
        { id: 16, name: 'Modern Yatak Odası', category: 'Yatak Odası', description: 'Minimal tasarım yatak odası seti', imagePath: '/images/yatak odası/348eac05693386e7cc24c32eab2b68b4.jpg' },
        { id: 17, name: 'Lüks Yatak Başlığı', category: 'Yatak Odası', description: 'Kapitone detaylı yatak başlığı', imagePath: '/images/yatak odası/4650c4e9e72bb127e0782992fb326570.jpg' },
        { id: 18, name: 'Premium Yatak Seti', category: 'Yatak Odası', description: 'Ahşap detaylı yatak odası', imagePath: '/images/yatak odası/5ad06ee85682e7897130840d6ac9934a.jpg' },
        { id: 19, name: 'Modern Yatak Odası', category: 'Yatak Odası', description: 'Geniş dolap ve yatak seti', imagePath: '/images/yatak odası/63c264ac6f904920bdf67b384e29a49c.jpg' },
        { id: 20, name: 'Klasik Yatak Odası', category: 'Yatak Odası', description: 'Zarif yatak odası mobilyası', imagePath: '/images/yatak odası/80f3de31c6ec080fcd8626047e8bfe3a.jpg' },
        { id: 21, name: 'Giyinme Odası', category: 'Yatak Odası', description: 'Modern ve sade tasarım', imagePath: '/images/yatak odası/8616a57a0afdda27d3ca47ea4f03052b.jpg' },
        // OFİS
        { id: 22, name: 'Executive Ofis Masası', category: 'Ofis', description: 'Yönetici masası, premium kalite', imagePath: '/images/ofis/47c6bbdf513bdffd25e3a941513220f2.jpg' },
        { id: 23, name: 'Modern Çalışma Masası', category: 'Ofis', description: 'Minimalist ofis masası', imagePath: '/images/ofis/b0f0e076406eacf7ea78401f3e174312.jpg' },
        { id: 24, name: 'Modern Ofis Masası', category: 'Ofis', description: 'Büyük toplantı masası sistemi', imagePath: '/images/ofis/d2fea467feae98a0648de5b4bebd7c41.jpg' },
        { id: 25, name: 'Ofis Mobilyası', category: 'Ofis', description: 'Komple ofis donanımı', imagePath: '/images/ofis/eb32409e145f0e66b75b8f887f1bdaf2.jpg' },
        { id: 26, name: 'Premium Ofis Seti', category: 'Ofis', description: 'Lüks ofis mobilya seti', imagePath: '/images/ofis/f4058fe2846a7194c32ff71eedcf80b8.jpg' },
        // DUVAR
        { id: 27, name: 'Modern TV Ünitesi', category: 'Duvar', description: 'Minimalist duvar ünitesi', imagePath: '/images/duvar ünite/0b7b05410e735a9a89ff029cc0343651.jpg' },
        { id: 28, name: 'Klasik Duvar Dolabı', category: 'Duvar', description: 'Ahşap detaylı duvar sistemi', imagePath: '/images/duvar ünite/44383f98ed663ce4418e6560dc5350a6.jpg' },
        { id: 29, name: 'TV Ünitesi Premium', category: 'Duvar', description: 'Entegre duvar sistemi', imagePath: '/images/duvar ünite/59aa69eca6f5c78c2a56caa0a8148e90.jpg' },
        { id: 30, name: 'Lüks Duvar Ünitesi Tv', category: 'Duvar', description: 'Premium duvar mobilyası', imagePath: '/images/duvar ünite/8b5bba9055a1aa001679b0b54e195ec4.jpg' },
    ];

    // Convert raw paths to full paths at runtime using getImagePath
    const products: Product[] = rawProducts.map(product => ({
        ...product,
        image: getImagePath(product.imagePath)
    }));

    // Sync URL with State - check both route param and query string
    useEffect(() => {
        // First check route parameter
        if (category) {
            const mappedCategory = categoryMap[category];
            if (mappedCategory) {
                setSelectedCategory(mappedCategory);
                return;
            }
        }
        
        // Fallback to query string
        const queryCategory = searchParams.get('category');
        if (queryCategory) {
            // Map query category to display category
            const queryCategoryMap: { [key: string]: Category } = {
                'Mutfak': 'Mutfak',
                'Salon': 'Salon',
                'Yatak Odası': 'Yatak Odası',
                'Ofis': 'Ofis',
                'Duvar': 'Duvar'
            };
            const mappedQueryCategory = queryCategoryMap[queryCategory];
            if (mappedQueryCategory) {
                setSelectedCategory(mappedQueryCategory);
                return;
            }
        }
        
        setSelectedCategory('Tümü');
    }, [category, searchParams]);

    // Sync Product Modal with URL
    useEffect(() => {
        const productId = searchParams.get('product');
        if (productId) {
            const product = products.find(p => p.id === Number(productId));
            if (product) setSelectedProduct(product);
        } else {
            setSelectedProduct(null);
        }
    }, [searchParams]);

    const handleCategoryClick = (cat: Category) => {
        if (cat === 'Tümü') {
            navigate('/products');
        } else {
            const slug = reverseCategoryMap[cat];
            if (slug) navigate('/products/' + slug);
        }
    };

    const handleProductClick = (product: Product) => {
        setSearchParams({ product: product.id.toString() });
    };

    const handleCloseModal = () => {
        setSearchParams({});
    };

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === 'Tümü' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Dynamic SEO Data
    const seoTitle = selectedProduct
        ? selectedProduct.name + ' | Lavora Design'
        : selectedCategory !== 'Tümü'
            ? selectedCategory + ' Koleksiyonu | Lavora Design'
            : "Tasarım Koleksiyonları | Salon, Yatak Odası, Ofis Mobilyaları";

    const seoDescription = selectedProduct
        ? selectedProduct.description
        : "Lavora Design'ın özel üretim mobilya koleksiyonlarını keşfedin. Modern ve klasik mobilya tasarımları.";

    // Generate Product Schema if a product is selected
    const productSchema = selectedProduct ? {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": selectedProduct.name,
        "image": selectedProduct.image.startsWith('http') ? selectedProduct.image : `https://lavoradesign.com${selectedProduct.image}`,
        "description": selectedProduct.description,
        "brand": {
            "@type": "Brand",
            "name": "Lavora Design"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "TRY",
            "availability": "https://schema.org/InStock",
            "price": "POA" // Price on Application
        }
    } : null;

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-4 sm:px-6 relative">
            <SEO
                title={seoTitle}
                description={seoDescription}
                keywords="premium mobilya showroom, lüks mobilya fiyatları, özel tasarım koltuk, yatak odası takımı, yemek odası mobilya"
                schema={productSchema || undefined}
            />
            <Navbar />

            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold-DEFAULT text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
                    >
                        KOLEKSİYONLAR
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-playfair text-white mb-8"
                    >
                        {selectedCategory === 'Tümü' ? 'Tüm Ürünler' : selectedCategory}
                    </motion.h1>

                    <div className="max-w-lg mx-auto relative group mb-10">
                        <input
                            type="text"
                            placeholder="Ürün Ara..."
                            className="w-full bg-[#111111] border border-white/10 rounded-full py-4 px-6 pl-14 text-white outline-none focus:border-gold-DEFAULT transition-colors placeholder:text-gray-600"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <i className="ri-search-line absolute left-5 top-1/2 -translate-y-1/2 text-xl text-gray-500 group-hover:text-gold-DEFAULT transition-colors"></i>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryClick(cat)}
                            className={`px-6 sm:px-8 py-2.5 rounded-full border text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${selectedCategory === cat
                                ? 'bg-gold-DEFAULT border-gold-DEFAULT text-[#0A0A0A] font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                                : 'border-white/10 bg-[#111111] text-gray-400 hover:border-gold-DEFAULT/50 hover:text-white'
                                } `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => handleProductClick(product)}
                                className="group bg-[#111111] border border-white/5 rounded-lg overflow-hidden hover:border-gold-DEFAULT/30 transition-all duration-500 cursor-pointer flex flex-col h-full shadow-xl shadow-black/20"
                            >
                                <div className="h-72 overflow-hidden relative bg-black">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                                        <span className="px-8 py-3 bg-gold-DEFAULT text-[#0A0A0A] font-bold uppercase tracking-widest text-xs rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            İncele
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-gold-DEFAULT text-[10px] uppercase tracking-widest font-medium">{product.category}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-playfair text-white mb-3 group-hover:text-gold-DEFAULT transition-colors leading-tight">{product.name}</h3>
                                    <p className="text-gray-500 text-sm font-montserrat leading-relaxed flex-1">{product.description}</p>
                                    <div className="pt-4 border-t border-white/5 mt-4 flex justify-end items-center">
                                        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-DEFAULT hover:text-[#0A0A0A] transition-all">
                                            <i className="ri-arrow-right-line text-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-24 text-gray-600">
                        <i className="ri-search-2-line text-5xl mb-6 block"></i>
                        <p className="text-lg">Aradığınız kriterlere uygun ürün bulunamadı.</p>
                    </div>
                )}
            </div>

            {/* Product Modal */}
            {selectedProduct && createPortal(
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                                {/* Image Section */}
                                <div className="md:w-3/5 relative bg-black flex items-center justify-center p-8">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="w-full h-full object-contain max-h-[70vh]"
                                    />
                                    <button
                                        onClick={handleCloseModal}
                                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all group"
                                    >
                                        <i className="ri-close-line text-2xl text-white"></i>
                                    </button>
                                </div>

                                {/* Details Section */}
                                <div className="md:w-2/5 p-8 md:p-10 overflow-y-auto">
                                    <div className="mb-4">
                                        <span className="text-gold-DEFAULT text-xs uppercase tracking-widest font-semibold">{selectedProduct.category}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-playfair text-white mb-6 leading-tight">{selectedProduct.name}</h2>
                                    <p className="text-gray-400 font-montserrat leading-relaxed mb-8">{selectedProduct.description}</p>

                                    <div className="space-y-4 border-t border-white/10 pt-6">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <i className="ri-check-line text-gold-DEFAULT text-xl mr-3"></i>
                                            <span>Premium kalite malzeme</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <i className="ri-check-line text-gold-DEFAULT text-xl mr-3"></i>
                                            <span>Özel tasarım ve üretim</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <i className="ri-check-line text-gold-DEFAULT text-xl mr-3"></i>
                                            <span>Garantili kurulum</span>
                                        </div>
                                    </div>

                                    <button className="w-full mt-8 px-8 py-4 bg-gold-DEFAULT text-[#0A0A0A] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gold-light transition-all shadow-lg shadow-gold-DEFAULT/30 hover:shadow-gold-DEFAULT/50">
                                        Teklif Al
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>,
                document.body
            )}

            <Footer />
        </div>
    );
};

export default Products;

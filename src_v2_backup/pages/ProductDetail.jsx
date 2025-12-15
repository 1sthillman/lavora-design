import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ChevronRight } from 'lucide-react';

export default function ProductDetail() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('features');

    // Mock Data
    const product = {
        id,
        name: "Milano Lüks Köşe Takımı",
        category: "Salon",
        description: "İtalyan tasarımı ve Türk el işçiliğinin mükemmel birleşimi. Nardo gri kadife kumaş ve altın detaylarla zenginleştirilmiş, konforun ve lüksün zirvesi.",
        images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200&auto=format&fit=crop"
        ],
        features: [
            "Birinci sınıf gürgen iskelet",
            "35 HR soft sünger teknolojisi",
            "Leke tutmayan ithal kadife kumaş",
            "Paslanmaz titanyum kaplama metal ayaklar"
        ],
        technical: [
            "Genişlik: 320 cm",
            "Derinlik: 105 cm",
            "Yükseklik: 75 cm",
            "Oturum Yüksekliği: 42 cm"
        ]
    };

    const [mainImage, setMainImage] = useState(product.images[0]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-6 py-12"
        >
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-primary mb-8 space-x-2">
                <Link to="/" className="hover:text-accent">Ana Sayfa</Link>
                <ChevronRight size={14} />
                <Link to="/products" className="hover:text-accent">Koleksiyonlar</Link>
                <ChevronRight size={14} />
                <span className="text-text">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Gallery */}
                <div className="space-y-4">
                    <motion.div
                        key={mainImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="aspect-[4/3] bg-surface overflow-hidden rounded-sm"
                    >
                        <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
                    </motion.div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((img, idx) => (
                            <div
                                key={idx}
                                className={`aspect-square cursor-pointer border-2 ${mainImage === img ? 'border-accent' : 'border-transparent'}`}
                                onClick={() => setMainImage(img)}
                            >
                                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info & Form */}
                <div>
                    <h1 className="text-4xl font-serif font-bold text-text mb-2">{product.name}</h1>
                    <p className="text-accent text-lg mb-6">{product.category} Koleksiyonu</p>

                    <p className="text-primary leading-relaxed mb-8">
                        {product.description}
                    </p>

                    {/* Tabs */}
                    <div className="mb-8 border-b border-primary/20">
                        <button
                            onClick={() => setActiveTab('features')}
                            className={`pb-2 mr-6 text-sm font-medium tracking-wider transition-colors border-b-2 ${activeTab === 'features' ? 'border-accent text-accent' : 'border-transparent text-primary hover:text-text'}`}
                        >
                            ÖZELLİKLER
                        </button>
                        <button
                            onClick={() => setActiveTab('technical')}
                            className={`pb-2 text-sm font-medium tracking-wider transition-colors border-b-2 ${activeTab === 'technical' ? 'border-accent text-accent' : 'border-transparent text-primary hover:text-text'}`}
                        >
                            TEKNİK DETAYLAR
                        </button>
                    </div>

                    <div className="mb-12 h-40">
                        {activeTab === 'features' ? (
                            <ul className="list-disc list-inside space-y-2 text-primary">
                                {product.features.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        ) : (
                            <ul className="list-disc list-inside space-y-2 text-primary">
                                {product.technical.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        )}
                    </div>

                    {/* Offer Form */}
                    <div className="bg-surface p-8 border border-primary/10 rounded-sm">
                        <h3 className="text-xl font-serif font-bold text-text mb-4">Fiyat Teklifi Al</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input label="Adınız Soyadınız" />
                                <Input label="Telefon Numarası" />
                            </div>
                            <Input label="E-posta Adresi" type="email" />
                            <textarea
                                className="w-full bg-background border border-primary/30 text-text px-4 py-3 outline-none focus:border-accent min-h-[100px] placeholder-primary/50"
                                placeholder="Proje detayları veya özel istekleriniz..."
                            />
                            <Button className="w-full">
                                TEKLİF İSTE
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

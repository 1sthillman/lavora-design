import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '@/components/products/ProductCard';
import { FilterPanel } from '@/components/products/FilterPanel';
import { motion } from 'framer-motion';

// Mock Data
const MOCK_PRODUCTS = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    name: `Lüks Tasarım ${i + 1}`,
    description: "Modern ve klasik çizgilerin eşsiz uyumu.",
    category: ['Salon', 'Ofis', 'Yatak Odası'][i % 3],
    image: `https://images.unsplash.com/photo-${[
        '1618221195710-dd6b41faaea6',
        '1505693314120-0d443867891c',
        '1556911220-bff31c812dba',
        '1524758631624-e2822e304c36'
    ][i % 4]}?q=80&w=800&auto=format&fit=crop`,
    style: ['Modern', 'Minimal'][i % 2],
    material: ['Ahşap', 'Deri'][i % 2],
    color: ['Siyah', 'Gri'][i % 2],
    badges: i % 3 === 0 ? ['Yeni'] : []
}));

export default function Products() {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category');

    const [filters, setFilters] = useState({
        category: initialCategory ? [initialCategory] : [],
        style: [],
        material: [],
        color: []
    });

    const filteredProducts = useMemo(() => {
        return MOCK_PRODUCTS.filter(product => {
            if (filters.category.length > 0 && !filters.category.some(c => c.toLowerCase() === product.category.toLowerCase())) return false;
            if (filters.style.length > 0 && !filters.style.includes(product.style)) return false;
            if (filters.material.length > 0 && !filters.material.includes(product.material)) return false;
            if (filters.color.length > 0 && !filters.color.includes(product.color)) return false;
            return true;
        });
    }, [filters]);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">Koleksiyonlar</h1>
                <p className="text-primary max-w-2xl mx-auto">Hayalinizdeki yaşam alanını oluşturmak için özel olarak tasarlanmış parçalar.</p>
            </motion.div>

            <div className="flex flex-col lg:flex-row">
                <FilterPanel filters={filters} onFilterChange={handleFilterChange} />

                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                        {filteredProducts.map(product => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                layout
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 text-primary">
                            <p className="text-xl">Aradığınız kriterlere uygun ürün bulunamadı.</p>
                            <button
                                onClick={() => setFilters({ category: [], style: [], material: [], color: [] })}
                                className="mt-4 text-accent hover:underline"
                            >
                                Filtreleri Temizle
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

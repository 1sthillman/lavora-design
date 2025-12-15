import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Plus, Edit, Trash, Search } from 'lucide-react';

const MOCK_PRODUCTS = [
    { id: 1, name: "Milano Lüks Köşe", category: "Salon", price: "45.000 ₺", stock: 12 },
    { id: 2, name: "Venedik Yemek Odası", category: "Mutfak", price: "85.000 ₺", stock: 5 },
    { id: 3, name: "Roma Yatak Başlığı", category: "Yatak Odası", price: "24.000 ₺", stock: 20 },
    { id: 4, name: "Torino Ofis Masası", category: "Ofis", price: "32.000 ₺", stock: 8 },
];

export default function ProductManager() {
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = MOCK_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-serif font-bold text-text">Ürün Yönetimi</h2>
                <Button>
                    <Plus size={18} className="mr-2" />
                    Yeni Ürün Ekle
                </Button>
            </div>

            <div className="bg-surface border border-primary/20 rounded-sm overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-primary/20 bg-surface/50">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-3 text-primary" size={18} />
                        <input
                            type="text"
                            placeholder="Ürün ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-background border border-primary/30 pl-10 pr-4 py-2 text-text outline-none focus:border-accent rounded-sm"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-primary/20 text-primary uppercase tracking-wider">
                            <tr>
                                <th className="p-4 font-medium">ID</th>
                                <th className="p-4 font-medium">Ürün Adı</th>
                                <th className="p-4 font-medium">Kategori</th>
                                <th className="p-4 font-medium">Fiyat</th>
                                <th className="p-4 font-medium">Stok</th>
                                <th className="p-4 font-medium text-right">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/10">
                            {filtered.map(product => (
                                <tr key={product.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-primary">#{product.id}</td>
                                    <td className="p-4 font-bold text-text">{product.name}</td>
                                    <td className="p-4 text-text">{product.category}</td>
                                    <td className="p-4 text-accent">{product.price}</td>
                                    <td className="p-4 text-text">{product.stock}</td>
                                    <td className="p-4 text-right space-x-2">
                                        <button className="p-2 text-primary hover:text-accent transition-colors"><Edit size={18} /></button>
                                        <button className="p-2 text-red-500 hover:text-red-400 transition-colors"><Trash size={18} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filtered.length === 0 && (
                        <div className="p-8 text-center text-primary">
                            Sonuç bulunamadı.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

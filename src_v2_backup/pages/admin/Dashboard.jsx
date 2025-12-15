import { Users, ShoppingBag, MessageSquare, Activity } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const StatCard = ({ title, value, icon: Icon, color }) => (
    <Card className="p-6 flex items-center justify-between">
        <div>
            <p className="text-primary text-sm uppercase tracking-wider mb-1">{title}</p>
            <h3 className="text-3xl font-serif font-bold text-text">{value}</h3>
        </div>
        <div className={`p-4 rounded-full bg-opacity-10 ${color}`}>
            <Icon size={24} className="text-text" />
        </div>
    </Card>
);

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-serif font-bold text-text">Genel Bakış</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Günlük Ziyaret" value="1,240" icon={Users} color="bg-blue-500" />
                <StatCard title="Toplam Ürün" value="45" icon={ShoppingBag} color="bg-green-500" />
                <StatCard title="Okunmamış Mesaj" value="3" icon={MessageSquare} color="bg-yellow-500" />
                <StatCard title="Server Status" value="99.9%" icon={Activity} color="bg-purple-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6 h-80">
                    <h3 className="text-lg font-serif font-bold text-text mb-4">Son Aktiviteler</h3>
                    <div className="space-y-4">
                        {[
                            "Admin giriş yaptı.",
                            "Yeni ürün eklendi: Lüks Kanepe.",
                            "İletişim formundan mesaj geldi.",
                            "Fiyat güncellemesi yapıldı."
                        ].map((log, i) => (
                            <div key={i} className="flex items-center space-x-2 text-sm text-primary border-b border-primary/10 pb-2">
                                <span className="w-2 h-2 rounded-full bg-accent"></span>
                                <span>{log}</span>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-6 h-80 flex items-center justify-center text-primary">
                    Grafik Alanı (Recharts Placeholder)
                </Card>
            </div>
        </div>
    );
}

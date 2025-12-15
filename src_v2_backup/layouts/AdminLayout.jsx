import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/utils/cn';
import { LayoutDashboard, Package, LogOut, Settings } from 'lucide-react';

export default function AdminLayout() {
    const { logout } = useAuth();
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Ürün Yönetimi', path: '/admin/products', icon: Package },
        { name: 'Ayarlar', path: '/admin/settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen flex bg-background text-text">
            {/* Sidebar */}
            <aside className="w-64 bg-surface border-r border-primary/20 flex flex-col">
                <div className="p-6 border-b border-primary/20">
                    <h1 className="text-xl font-serif font-bold bg-gold-gradient bg-clip-text text-transparent tracking-widest text-center">
                        LAVORA
                    </h1>
                    <p className="text-xs text-center text-primary mt-1">Yönetim Paneli</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map(item => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "flex items-center space-x-3 px-4 py-3 rounded-sm transition-colors",
                                location.pathname === item.path
                                    ? "bg-accent/10 text-accent border-l-2 border-accent"
                                    : "text-primary hover:text-text hover:bg-white/5"
                            )}
                        >
                            <item.icon size={20} />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-primary/20">
                    <button
                        onClick={logout}
                        className="flex items-center space-x-3 w-full px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-sm transition-colors"
                    >
                        <LogOut size={20} />
                        <span>Çıkış Yap</span>
                    </button>
                </div>
            </aside>

            {/* content */}
            <main className="flex-1 overflow-auto p-8">
                <Outlet />
            </main>
        </div>
    );
}

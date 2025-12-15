import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-surface border-t border-primary/20 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold bg-gold-gradient bg-clip-text text-transparent tracking-widest">
                            LAVORA
                        </h2>
                        <p className="text-primary text-sm leading-relaxed">
                            Ultra premium mobilya koleksiyonları ile yaşam alanlarınıza değer katın. Modern tasarım, el işçiliği ve lüks detaylar.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-text font-serif text-lg mb-6">Koleksiyonlar</h3>
                        <ul className="space-y-3">
                            <li><Link to="/products?category=salon" className="text-primary hover:text-accent transition-colors text-sm">Salon</Link></li>
                            <li><Link to="/products?category=yatak-odasi" className="text-primary hover:text-accent transition-colors text-sm">Yatak Odası</Link></li>
                            <li><Link to="/products?category=mutfak" className="text-primary hover:text-accent transition-colors text-sm">Mutfak</Link></li>
                            <li><Link to="/products?category=ofis" className="text-primary hover:text-accent transition-colors text-sm">Ofis</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-text font-serif text-lg mb-6">İletişim</h3>
                        <ul className="space-y-3 text-sm text-primary">
                            <li>Yukarı Dudullu Mah. Feza Sok. 4B</li>
                            <li>Ümraniye, İstanbul</li>
                            <li>+90 537 580 32 96</li>
                            <li>info@lavoradesign.com</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-text font-serif text-lg mb-6">Bülten</h3>
                        <p className="text-primary text-sm mb-4">Yeni koleksiyonlardan haberdar olun.</p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="bg-background border border-primary/20 px-4 py-2 text-sm text-text focus:border-accent outline-none"
                            />
                            <button className="bg-gold-gradient text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
                                Abone Ol
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary">
                    <p>&copy; 2025 Lavora Design. Tüm hakları saklıdır.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-text transition-colors">Gizlilik Politikası</Link>
                        <Link to="/terms" className="hover:text-text transition-colors">Kullanım Koşulları</Link>
                        <Link to="/source-code" className="hover:text-accent transition-colors font-medium text-accent">Kaynak Kodlar</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

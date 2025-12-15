import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-background text-text">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
}

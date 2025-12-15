import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './router';
import PageTransition from './components/PageTransition';
import { initGA } from './lib/analytics';

function App() {
    useEffect(() => {
        initGA();
    }, []);

    return (
        <HelmetProvider>
            <BrowserRouter basename={__BASE_PATH__}>
                <div className="relative z-10 min-h-screen w-full bg-[#0A0A0A]">
                    <PageTransition>
                        <AppRoutes />
                    </PageTransition>
                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;

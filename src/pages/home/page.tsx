import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import CollectionsSection from './components/CollectionsSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import SEO from '../../components/SEO';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark text-white selection:bg-gold-DEFAULT selection:text-matte">
            <SEO />
            <Navbar />
            <main>
                <HeroSection />
                <StatsSection />
                <CollectionsSection />
                <TimelineSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;

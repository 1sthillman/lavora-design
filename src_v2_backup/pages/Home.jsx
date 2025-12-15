import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { Collections } from '@/components/home/Collections';
import { FeaturedDesigns } from '@/components/home/FeaturedDesigns';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <HeroSection />
            <Collections />
            <FeaturedDesigns />
        </motion.div>
    );
}

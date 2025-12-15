import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h1 className="font-playfair text-9xl text-gold-light mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gold-DEFAULT to-white/50">404</h1>
                <p className="font-montserrat text-2xl text-white mb-8">Sayfa Bulunamadı</p>
                <Link
                    to="/"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-gold-light to-gold-DEFAULT text-matte rounded-full font-montserrat text-sm font-medium hover:shadow-lg hover:shadow-gold-light/30 transition-all font-bold tracking-widest uppercase"
                >
                    Ana Sayfaya Dön
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;

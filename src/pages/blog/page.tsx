import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { blogPosts } from '../../data/blogData';

const Blog = () => {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-4 sm:px-6">
            <SEO
                title="Blog | Mobilya Dekorasyon Trendleri ve İpuçları"
                description="2025 mobilya trendleri, lüks dekorasyon önerileri, mobilya bakımı rehberleri ve iç mimari ipuçları. Lavora Design blog sayfası."
                keywords="mobilya blog, dekorasyon trendleri, lüks mobilya bakımı, iç mimari rehberi, mobilya dekorasyon fikirleri"
            />
            <Navbar />

            <div className="w-full max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold-DEFAULT text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
                    >
                        Tasarım Günlüğü
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-playfair text-white mb-6"
                    >
                        Blog & Haberler
                    </motion.h1>
                    <div className="w-24 h-[1px] bg-gold-DEFAULT mx-auto opacity-50"></div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-[#111111] border border-white/5 rounded-lg overflow-hidden hover:border-gold-DEFAULT/30 transition-all duration-300"
                        >
                            <Link to={`/blog/${post.slug}`} className="block h-full flex flex-col">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-gold-DEFAULT text-xs px-3 py-1 uppercase tracking-wider font-semibold rounded pointer-events-none">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                        <span>{post.readTime} okuma</span>
                                    </div>
                                    <h2 className="text-xl font-playfair text-white mb-3 group-hover:text-gold-DEFAULT transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <span className="text-gold-DEFAULT text-xs uppercase tracking-widest font-semibold flex items-center group/link">
                                        Devamını Oku
                                        <i className="ri-arrow-right-line ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                                    </span>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;

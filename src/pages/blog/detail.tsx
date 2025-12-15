import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { blogPosts, BlogPost } from '../../data/blogData';

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundPost = blogPosts.find(p => p.slug === slug);
        setPost(foundPost || null);
        setLoading(false);
    }, [slug]);

    if (loading) {
        return <div className="min-h-screen bg-[#0A0A0A]"></div>;
    }

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Article Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": `https://lavoradesign.com.tr${post.image}`,
        "datePublished": "2025-01-15T08:00:00+03:00", // Would be dynamic in real app
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Lavora Design",
            "logo": {
                "@type": "ImageObject",
                "url": "https://lavoradesign.com.tr/logo.png"
            }
        },
        "description": post.excerpt
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-4 sm:px-6 relative">
            <SEO
                title={post.title}
                description={post.excerpt}
                keywords={`${post.category}, mobilya blog, lavora design blog`}
                image={post.image}
                type="article"
                schema={articleSchema}
            />
            <Navbar />

            <article className="w-full max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center space-x-4 text-xs sm:text-sm text-gold-DEFAULT uppercase tracking-widest mb-6 font-semibold"
                    >
                        <span>{post.category}</span>
                        <span className="w-1 h-1 bg-gold-DEFAULT rounded-full"></span>
                        <span>{post.date}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-playfair text-white mb-8 leading-tight"
                    >
                        {post.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center space-x-3 text-gray-400 text-sm"
                    >
                        <span className="font-medium text-white">{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime} okuma</span>
                    </motion.div>
                </div>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative aspect-video w-full rounded-xl overflow-hidden mb-16 border border-white/10 shadow-2xl"
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-playfair prose-headings:text-white prose-p:text-gray-300 prose-a:text-gold-DEFAULT hover:prose-a:text-white prose-strong:text-white prose-li:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Back Button */}
                <div className="mt-20 pt-10 border-t border-white/10 flex justify-center">
                    <Link
                        to="/blog"
                        className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all text-sm uppercase tracking-widest flex items-center group"
                    >
                        <i className="ri-arrow-left-line mr-2 transform group-hover:-translate-x-1 transition-transform"></i>
                        Blog'a Dön
                    </Link>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogDetail;

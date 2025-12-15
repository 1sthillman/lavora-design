import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export function Button({ children, className, variant = 'primary', ...props }) {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all duration-300 rounded-sm group focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background cursor-pointer";

    const variants = {
        primary: "bg-gold-gradient text-background shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105",
        outline: "border border-accent text-accent hover:bg-accent hover:text-background",
        ghost: "text-text hover:text-accent"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            <span className="relative z-10 font-serif tracking-wider flex items-center gap-2">{children}</span>
        </motion.button>
    );
}

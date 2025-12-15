import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export function Card({ children, className, ...props }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "bg-surface border border-primary/10 overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-accent/30 transition-all duration-500 rounded-sm",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    )
}

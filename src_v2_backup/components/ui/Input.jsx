import React from 'react';
import { cn } from '@/utils/cn';

export const Input = React.forwardRef(({ label, error, className, ...props }, ref) => {
    return (
        <div className="relative group">
            <input
                ref={ref}
                className={cn(
                    "peer w-full bg-surface border border-primary/30 text-text px-4 py-3 outline-none transition-all duration-300 focus:border-accent placeholder-transparent rounded-sm",
                    error && "border-red-500",
                    className
                )}
                placeholder={label}
                {...props}
            />
            <label className="absolute left-4 top-3 text-primary transition-all duration-300 -translate-y-6 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accent cursor-text bg-surface px-1 pointer-events-none origin-[0]">
                {label}
            </label>
            {error && <span className="text-red-500 text-xs mt-1 block">{error}</span>}
        </div>
    );
});
Input.displayName = 'Input';

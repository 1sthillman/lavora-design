import { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string; // Applied to container
    imgClassName?: string; // Applied to img
    priority?: boolean; // If true, eager load (for LCP)
}

const OptimizedImage = ({ src, alt, className = "", imgClassName = "", priority = false, ...props }: OptimizedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Generate WebP path (assuming same directory and filename structure)
    // Example: /images/photo.jpg -> /images/photo.webp
    // Note: This assumes the webp version exists. If not, fallback will handle it (mostly).
    // Better strategy: Try to load webp, if fails, use original.
    // Since we can't check file existence on client easily without request,
    // we use the <picture> tag which browser handles.

    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const isWebPGenerated = src !== webpSrc; // Only try webp if extension changed

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Blur placeholder */}
            {!isLoaded && <div className="absolute inset-0 bg-white/5 animate-pulse z-0" />}

            <picture>
                {isWebPGenerated && <source srcSet={webpSrc} type="image/webp" />}
                <img
                    src={src}
                    alt={alt}
                    className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
                    loading={priority ? "eager" : "lazy"}
                    decoding={priority ? "sync" : "async"}
                    onLoad={() => setIsLoaded(true)}
                    {...props}
                />
            </picture>
        </div>
    );
};

export default OptimizedImage;

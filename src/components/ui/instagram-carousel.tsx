import { cn } from "@/lib/utils";

interface InstagramPost {
    id: string;
    embedUrl: string;
    thumbnailUrl: string;
    caption: string;
    type: 'post' | 'reel';
}

interface InstagramCarouselProps {
    posts: InstagramPost[];
    className?: string;
    onPostClick?: (post: InstagramPost) => void;
}

export function InstagramCarousel({
    posts,
    className,
    onPostClick
}: InstagramCarouselProps) {
    return (
        <div className={cn("relative flex w-full flex-col items-center justify-center overflow-hidden", className)}>
            <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:80s]">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                    {[...Array(5)].map((_, setIndex) => (
                        posts.map((post, i) => (
                            <button
                                key={`${setIndex}-${i}`}
                                onClick={() => onPostClick?.(post)}
                                className="group/card relative flex-none w-[320px] h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 hover:border-gold-DEFAULT/40 transition-all duration-500 shadow-2xl hover:shadow-gold-DEFAULT/20 cursor-pointer"
                            >
                                {/* Thumbnail Image */}
                                <div className="relative w-full h-full">
                                    <img
                                        src={post.thumbnailUrl}
                                        alt={post.caption}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-300" />

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                                        {/* Type Badge */}
                                        <div className="absolute top-4 right-4">
                                            <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center gap-2">
                                                <i className={`${post.type === 'reel' ? 'ri-video-line' : 'ri-image-line'} text-gold-DEFAULT text-sm`}></i>
                                                <span className="text-white text-xs uppercase font-semibold tracking-wider">
                                                    {post.type === 'reel' ? 'Reels' : 'Post'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Play Icon for Reels */}
                                        {post.type === 'reel' && (
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 group-hover/card:scale-110 transition-transform duration-300">
                                                    <i className="ri-play-fill text-white text-3xl ml-1"></i>
                                                </div>
                                            </div>
                                        )}

                                        {/* Caption */}
                                        <p className="text-white font-montserrat text-sm line-clamp-2 opacity-0 group-hover/card:opacity-100 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300">
                                            {post.caption}
                                        </p>

                                        {/* Instagram Icon */}
                                        <div className="mt-3 flex items-center gap-2 text-gold-DEFAULT opacity-0 group-hover/card:opacity-100 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300 delay-75">
                                            <i className="ri-instagram-line text-xl"></i>
                                            <span className="text-xs uppercase tracking-wider font-semibold">Görüntüle</span>
                                        </div>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                                </div>
                            </button>
                        ))
                    ))}
                </div>
            </div>

            {/* Fade Gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10" />
        </div>
    );
}


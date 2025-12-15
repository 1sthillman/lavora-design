import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    return (
        <section className={cn(
            "bg-transparent text-white",
            "py-12 sm:py-16 md:py-20 px-0",
            className
        )}>
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-12">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
                    <span className="px-4 py-1.5 bg-gold-DEFAULT/10 rounded-full text-gold-DEFAULT text-xs uppercase tracking-widest">
                        Müşteri Yorumları
                    </span>
                    <h2 className="max-w-[720px] text-3xl sm:text-4xl md:text-5xl font-playfair font-bold leading-tight text-white">
                        {title}
                    </h2>
                    <p className="text-md max-w-[600px] font-medium text-gray-400 sm:text-lg font-montserrat">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:120s]">
                        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {[...Array(4)].map((_, setIndex) => (
                                testimonials.map((testimonial, i) => (
                                    <TestimonialCard
                                        key={`${setIndex}-${i}`}
                                        {...testimonial}
                                    />
                                ))
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                </div>
            </div>
        </section>
    )
}

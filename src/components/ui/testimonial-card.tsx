import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

export interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
}

export function TestimonialCard({
    author,
    text,
    href,
    className
}: TestimonialCardProps) {
    const Card = href ? 'a' : 'div'

    return (
        <Card
            {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn(
                "flex flex-col rounded-lg border border-white/10",
                "bg-gradient-to-b from-white/5 to-white/[0.02]",
                "p-4 text-start sm:p-6",
                "hover:from-white/10 hover:to-white/5 hover:border-gold-DEFAULT/30",
                "max-w-[320px] sm:max-w-[360px]",
                "transition-all duration-300",
                className
            )}
        >
            <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-gold-DEFAULT/20">
                    <AvatarImage src={author.avatar} alt={author.name} />
                </Avatar>
                <div className="flex flex-col items-start">
                    <h3 className="text-md font-semibold leading-none text-white font-playfair">
                        {author.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                        {author.handle}
                    </p>
                </div>
            </div>
            <p className="sm:text-md mt-4 text-sm text-gray-300 leading-relaxed font-montserrat">
                {text}
            </p>
        </Card>
    )
}

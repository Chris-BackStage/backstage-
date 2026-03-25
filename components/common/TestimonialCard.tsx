import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string | null
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex flex-col gap-6 rounded-2xl border border-bone-400 bg-white p-8 shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-300",
        className
      )}
    >
      <Quote className="h-6 w-6 text-gold flex-shrink-0" aria-hidden="true" />
      <blockquote className="flex-1">
        <p className="text-base font-sans text-charcoal leading-relaxed text-pretty">{quote}</p>
      </blockquote>
      <figcaption className="flex items-center gap-4">
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatar}
            alt={author}
            className="h-10 w-10 rounded-full object-cover border border-bone-400"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-aegean-50 border border-aegean/20 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-aegean font-sans" aria-hidden="true">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-charcoal font-sans">{author}</p>
          <p className="text-xs text-charcoal-400 font-sans">
            {role}{company ? `, ${company}` : ""}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}

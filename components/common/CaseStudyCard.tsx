import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CaseStudyCardProps {
  slug: string
  title: string
  category: string
  client: string
  summary: string
  image?: string | null
  className?: string
}

export function CaseStudyCard({
  slug,
  title,
  category,
  client,
  summary,
  image,
  className,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-bone-400 bg-white overflow-hidden",
        "shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegean focus-visible:ring-offset-2",
        className
      )}
    >
      {/* Image area */}
      <div className="relative h-52 bg-gradient-to-br from-bone-300 to-bone-400 overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl font-heading font-light text-charcoal-300 tracking-tight">
              {title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <Badge variant="bone" className="absolute bottom-4 left-4 text-xs">
          {category}
        </Badge>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-charcoal-300 font-sans">
          {client}
        </p>
        <h3 className="font-heading text-lg font-semibold text-charcoal leading-snug group-hover:text-aegean transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm font-sans text-charcoal-400 leading-relaxed flex-1">{summary}</p>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-aegean font-sans mt-2">
          View case study
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  )
}

import { Linkedin, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface BioCardProps {
  name: string
  role: string
  bio: string
  tools?: string[]
  favoriteAutomation?: string
  image?: string | null
  linkedin?: string
  twitter?: string
  className?: string
}

export function BioCard({
  name,
  role,
  bio,
  tools,
  favoriteAutomation,
  image,
  linkedin,
  twitter,
  className,
}: BioCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-bone-400 bg-white p-8 shadow-elevation-1",
        className
      )}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={name}
              className="h-24 w-24 rounded-2xl object-cover border border-bone-400"
            />
          ) : (
            <div className="h-24 w-24 rounded-2xl bg-aegean-mist border border-aegean/20 flex items-center justify-center">
              <span className="text-3xl font-heading font-light text-aegean" aria-hidden="true">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="font-heading text-xl font-semibold text-charcoal">{name}</h3>
              <p className="text-sm text-charcoal-400 font-sans mt-1">{role}</p>
            </div>
            <div className="flex gap-2">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-charcoal-300 hover:text-aegean hover:bg-aegean/10 transition-colors"
                  aria-label={`${name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-charcoal-300 hover:text-aegean hover:bg-aegean/10 transition-colors"
                  aria-label={`${name} on X (Twitter)`}
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-4 text-sm font-sans text-charcoal-500 leading-relaxed">{bio}</p>
        </div>
      </div>

      {tools && tools.length > 0 && (
        <div className="mt-6 border-t border-bone-400 pt-6">
          <p className="mb-3 text-xs font-semibold tracking-widest uppercase text-charcoal-300 font-sans">
            Toolkit
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge key={tool} variant="bone">{tool}</Badge>
            ))}
          </div>
        </div>
      )}

      {favoriteAutomation && (
        <div className="mt-4 rounded-xl bg-gold/10 border border-gold/20 px-4 py-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 font-sans mb-1">
            Favorite automation
          </p>
          <p className="text-sm font-sans text-charcoal-500 leading-relaxed">{favoriteAutomation}</p>
        </div>
      )}
    </article>
  )
}

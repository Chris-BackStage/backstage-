import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: { label: string; href: string }
  featured?: boolean
}

interface PricingTableProps {
  tiers: PricingTier[]
  className?: string
}

export function PricingTable({ tiers, className }: PricingTableProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-3", className)}>
      {tiers.map((tier) => (
        <article
          key={tier.name}
          className={cn(
            "relative flex flex-col rounded-2xl border p-8 transition-shadow duration-300",
            tier.featured
              ? "border-aegean bg-aegean text-bone shadow-aegean-glow"
              : "border-bone-400 bg-white shadow-elevation-1 hover:shadow-elevation-2"
          )}
        >
          {tier.featured && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <Badge className="bg-gold text-charcoal border-0 shadow-elevation-1">
                Most popular
              </Badge>
            </div>
          )}

          <div className="mb-6">
            <h3
              className={cn(
                "font-heading text-lg font-semibold",
                tier.featured ? "text-bone" : "text-charcoal"
              )}
            >
              {tier.name}
            </h3>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span
                className={cn(
                  "font-heading text-4xl font-bold tracking-tight",
                  tier.featured ? "text-bone" : "text-charcoal"
                )}
              >
                {tier.price}
              </span>
              {tier.price !== "Custom" && (
                <span className={cn("text-sm font-sans", tier.featured ? "text-bone/70" : "text-charcoal-400")}>
                  / {tier.period}
                </span>
              )}
            </div>
            <p
              className={cn(
                "mt-3 text-sm font-sans leading-relaxed",
                tier.featured ? "text-bone/80" : "text-charcoal-400"
              )}
            >
              {tier.description}
            </p>
          </div>

          <ul className="mb-8 flex-1 space-y-3" role="list">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check
                  className={cn(
                    "mt-0.5 h-4 w-4 flex-shrink-0",
                    tier.featured ? "text-gold-300" : "text-olive"
                  )}
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    "text-sm font-sans",
                    tier.featured ? "text-bone/90" : "text-charcoal-500"
                  )}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant={tier.featured ? "gold" : "outline"}
            size="lg"
            className="w-full"
          >
            <a href={tier.cta.href}>{tier.cta.label}</a>
          </Button>
        </article>
      ))}
    </div>
  )
}

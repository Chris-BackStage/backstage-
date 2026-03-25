import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureListProps {
  items: string[]
  className?: string
  iconColor?: "aegean" | "olive" | "gold"
}

export function FeatureList({ items, className, iconColor = "olive" }: FeatureListProps) {
  const iconColors = {
    aegean: "text-aegean",
    olive: "text-olive",
    gold: "text-gold",
  }

  return (
    <ul className={cn("space-y-3", className)} role="list">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className={cn("mt-0.5 flex-shrink-0", iconColors[iconColor])} aria-hidden="true">
            <Check className="h-5 w-5" />
          </span>
          <span className="text-sm font-sans text-charcoal-500 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

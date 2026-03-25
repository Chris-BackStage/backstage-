import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold font-sans tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "bg-charcoal text-bone",
        aegean: "bg-aegean/10 text-aegean-700 border border-aegean/20",
        olive: "bg-olive/10 text-olive-700 border border-olive/20",
        gold: "bg-gold/10 text-gold-600 border border-gold/20",
        bone: "bg-bone-300 text-charcoal-500 border border-bone-400",
        outline: "border border-charcoal-200 text-charcoal bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

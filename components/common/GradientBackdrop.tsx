import { cn } from "@/lib/utils"

interface GradientBackdropProps {
  variant?: "marble" | "aegean" | "olive" | "dark" | "subtle"
  className?: string
  children?: React.ReactNode
  as?: "div" | "section"
}

export function GradientBackdrop({
  variant = "marble",
  className,
  children,
  as: Component = "div",
}: GradientBackdropProps) {
  const gradients = {
    marble: "bg-gradient-to-br from-bone-200 via-bone-300 to-bone-400",
    aegean: "bg-aegean-mist",
    olive: "bg-olive-breath",
    dark: "bg-charcoal text-bone",
    subtle: "bg-bone-100",
  }

  return (
    <Component className={cn("relative overflow-hidden noise-overlay", gradients[variant], className)}>
      {/* Decorative vein element */}
      {variant === "marble" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(18deg, transparent, transparent 40px, #C2A660 40px, #C2A660 41px)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </Component>
  )
}

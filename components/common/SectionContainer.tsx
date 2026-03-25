import { cn } from "@/lib/utils"
import { type ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
  as?: "section" | "div" | "article" | "aside"
  narrow?: boolean
  wide?: boolean
}

export function SectionContainer({
  children,
  className,
  id,
  as: Component = "section",
  narrow = false,
  wide = false,
}: SectionContainerProps) {
  return (
    <Component id={id} className={cn("section-padding", className)}>
      <div
        className={cn(
          "mx-auto w-full px-6 md:px-8 lg:px-12",
          narrow ? "max-w-3xl" : wide ? "max-w-screen-xl" : "max-w-screen-lg"
        )}
      >
        {children}
      </div>
    </Component>
  )
}

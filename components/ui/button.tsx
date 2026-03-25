import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-all duration-250 ease-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegean focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-charcoal text-bone hover:bg-charcoal-700 shadow-elevation-1 hover:shadow-elevation-2 active:translate-y-px",
        primary:
          "bg-aegean text-bone hover:bg-aegean-700 shadow-elevation-1 hover:shadow-elevation-2 active:translate-y-px",
        secondary:
          "bg-olive text-bone hover:bg-olive-600 shadow-elevation-1 hover:shadow-elevation-2 active:translate-y-px",
        gold:
          "bg-gold text-charcoal hover:bg-gold-500 shadow-elevation-1 hover:shadow-elevation-2 active:translate-y-px",
        outline:
          "border border-charcoal-200 bg-transparent text-charcoal hover:bg-bone-300 hover:border-charcoal",
        ghost:
          "bg-transparent text-charcoal hover:bg-bone-300",
        link:
          "text-aegean underline-offset-4 hover:underline p-0 h-auto",
        "outline-white":
          "border border-bone/40 bg-transparent text-bone hover:bg-bone/10",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm rounded-lg",
        sm: "h-9 px-4 py-2 text-xs rounded-md",
        lg: "h-13 px-8 py-3.5 text-base rounded-lg",
        xl: "h-14 px-10 py-4 text-base rounded-xl",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

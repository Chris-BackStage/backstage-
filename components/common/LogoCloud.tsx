import { cn } from "@/lib/utils"

interface LogoCloudProps {
  items: Array<{ name: string; placeholder?: boolean }>
  label?: string
  className?: string
}

export function LogoCloud({ items, label, className }: LogoCloudProps) {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <p className="mb-8 text-center text-xs font-semibold tracking-widest uppercase text-charcoal-300 font-sans">
          {label}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex h-8 items-center justify-center opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-300"
            aria-label={item.name}
          >
            {item.placeholder ? (
              <div
                className="h-7 rounded bg-charcoal-200 flex items-center justify-center px-4"
                aria-hidden="true"
              >
                <span className="text-xs font-bold tracking-wider text-charcoal-400 font-sans uppercase">
                  {item.name}
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

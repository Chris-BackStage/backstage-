import Link from "next/link"
import { Linkedin, Twitter, Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { COPY } from "@/content/copy"
import { cn } from "@/lib/utils"

export function Footer() {
  const { footer } = COPY

  return (
    <footer className="bg-charcoal text-bone" role="contentinfo">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12">
        {/* Upper section */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
              aria-label="Backstage homepage"
            >
              <span className="font-heading text-xl font-semibold text-bone tracking-tight">Backstage</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            </Link>
            <p className="mt-4 max-w-xs text-sm font-sans text-bone/60 leading-relaxed">
              {footer.tagline}
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3" role="list" aria-label="Social media links">
              {footer.social.map((item) => {
                const icons: Record<string, React.ElementType> = {
                  Linkedin, Twitter, Instagram,
                }
                const Icon = icons[item.icon] ?? Linkedin
                return (
                  <a
                    key={item.platform}
                    href={item.href.includes("[[") ? "#" : item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="listitem"
                    aria-label={`Backstage on ${item.platform}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-bone/20 text-bone/50 hover:border-bone/40 hover:text-bone transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-xs font-semibold tracking-widest uppercase text-bone/40 font-sans">
                {col.heading}
              </h3>
              <ul className="space-y-3" role="list">
                {col.links.map((link) => (
                  <li key={link.href} role="listitem">
                    <Link
                      href={link.href}
                      className="text-sm font-sans text-bone/60 hover:text-bone transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-bone/10" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-sans text-bone/40">{footer.legal}</p>
          <div className="flex gap-6">
            <Link
              href="/legal/privacy"
              className="text-xs font-sans text-bone/40 hover:text-bone/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="text-xs font-sans text-bone/40 hover:text-bone/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

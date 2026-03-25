"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import { cn } from "@/lib/utils"
import { COPY } from "@/content/copy"

const services = [
  { label: "Websites & AI Builder", href: "/services/websites-ai-builder", icon: "🌐" },
  { label: "Media Automation", href: "/services/media-marketing-automations", icon: "📣" },
  { label: "Lead Automation", href: "/services/lead-finding-follow-ups", icon: "🎯" },
  { label: "Email Automations", href: "/services/email-automations", icon: "✉️" },
  { label: "Custom Workflows", href: "/services/integrations-custom-workflows", icon: "⚙️" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const isHomePage = pathname === "/"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHomePage
          ? "bg-bone/95 backdrop-blur-md shadow-elevation-1 border-b border-bone-400"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-screen-xl items-center justify-between px-6 md:px-8 lg:px-12 h-16 md:h-18"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegean rounded-md"
          aria-label="Backstage — go to homepage"
        >
          <span
            className={cn(
              "font-heading text-xl font-semibold tracking-tight transition-colors duration-200",
              scrolled || !isHomePage ? "text-charcoal" : "text-charcoal"
            )}
          >
            Backstage
          </span>
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-gold ml-0.5"
            aria-hidden="true"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {/* Services dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium font-sans transition-colors duration-200",
                "text-charcoal hover:text-aegean hover:bg-bone-300",
                pathname.startsWith("/services") && "text-aegean"
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {servicesOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-bone-400 bg-white p-2 shadow-elevation-3"
                role="menu"
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    role="menuitem"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-sans text-charcoal hover:bg-bone-200 hover:text-aegean transition-colors duration-150"
                  >
                    <span aria-hidden="true" className="text-base">{service.icon}</span>
                    {service.label}
                  </Link>
                ))}
                <div className="mt-1 border-t border-bone-300 pt-1">
                  <Link
                    href="/services"
                    role="menuitem"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold font-sans text-aegean hover:bg-aegean/10 transition-colors duration-150"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {COPY.nav.links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium font-sans transition-colors duration-200",
                "text-charcoal hover:text-aegean hover:bg-bone-300",
                pathname === link.href && "text-aegean"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <Link href="/contact#quote">Get a Quote</Link>
          </Button>
          <Button asChild variant="primary" size="sm">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-charcoal hover:bg-bone-300 transition-colors"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-bone-400 bg-bone/98 backdrop-blur-md"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-6 py-4 space-y-1">
            <Link
              href="/services"
              className="block rounded-lg px-3 py-3 text-sm font-medium font-sans text-charcoal hover:bg-bone-300 hover:text-aegean transition-colors"
            >
              Services
            </Link>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 pl-8 text-sm font-sans text-charcoal-500 hover:bg-bone-300 hover:text-aegean transition-colors"
              >
                <span aria-hidden="true">{service.icon}</span>
                {service.label}
              </Link>
            ))}
            {COPY.nav.links.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-3 text-sm font-medium font-sans text-charcoal hover:bg-bone-300 hover:text-aegean transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-2 border-t border-bone-400 space-y-2">
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/contact#quote">Get a Quote</Link>
              </Button>
              <Button asChild variant="primary" size="sm" className="w-full">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

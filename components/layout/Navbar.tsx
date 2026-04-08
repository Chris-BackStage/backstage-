"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { COPY } from "@/content/copy"

const services = [
  { label: "Website Creation", href: "/services/website-creation", description: "Design + development" },
  { label: "Media Marketing", href: "/services/media-marketing", description: "Content systems at scale" },
  { label: "Digital Branding", href: "/services/digital-branding", description: "Identity + visual systems" },
  { label: "Creative Strategy", href: "/services/creative-strategy", description: "Direction + positioning" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  // For dark hero pages, start transparent
  const isDarkPage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const isTransparent = isDarkPage && !scrolled

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent"
          : isDarkPage
          ? "bg-charcoal/90 backdrop-blur-md border-b border-bone/[0.08]"
          : "bg-bone/95 backdrop-blur-md shadow-elevation-1 border-b border-bone-400"
      )}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-screen-xl items-center justify-between px-6 md:px-8 lg:px-12 h-16 md:h-[4.5rem]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
          aria-label="Backstage — go to homepage"
        >
          <span
            className={cn(
              "font-heading text-xl font-semibold tracking-tight transition-colors duration-300",
              isTransparent ? "text-bone" : isDarkPage ? "text-bone" : "text-charcoal"
            )}
          >
            {COPY.brand.name}
          </span>
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-gold ml-0.5 flex-shrink-0"
            aria-hidden="true"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {/* Services dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 180)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium font-sans transition-colors duration-200",
                isTransparent
                  ? "text-bone/70 hover:text-bone hover:bg-bone/10"
                  : isDarkPage
                  ? "text-bone/70 hover:text-bone hover:bg-bone/10"
                  : "text-charcoal hover:text-aegean hover:bg-bone-300",
                pathname.startsWith("/services") && (isTransparent || isDarkPage ? "text-bone" : "text-aegean")
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
                className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-bone-400 bg-white p-2 shadow-elevation-3"
                role="menu"
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    role="menuitem"
                    className="flex flex-col rounded-lg px-4 py-3 transition-colors duration-150 hover:bg-bone-100"
                  >
                    <span className="text-sm font-medium font-sans text-charcoal">
                      {service.label}
                    </span>
                    <span className="text-xs font-sans text-charcoal/50 mt-0.5">
                      {service.description}
                    </span>
                  </Link>
                ))}
                <div className="mt-1 border-t border-bone-300 pt-1">
                  <Link
                    href="/services"
                    role="menuitem"
                    className="flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold font-sans text-aegean hover:bg-bone-100 transition-colors duration-150"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Other nav links */}
          {COPY.nav.links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium font-sans transition-colors duration-200",
                isTransparent
                  ? "text-bone/70 hover:text-bone hover:bg-bone/10"
                  : isDarkPage
                  ? "text-bone/70 hover:text-bone hover:bg-bone/10"
                  : "text-charcoal hover:text-aegean hover:bg-bone-300",
                pathname === link.href && (isTransparent || isDarkPage ? "text-bone" : "text-aegean")
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            variant={isTransparent || isDarkPage ? "gold" : "primary"}
            size="sm"
            className="font-sans"
          >
            <Link href={COPY.nav.cta.href}>{COPY.nav.cta.label}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              "rounded-lg p-2 transition-colors",
              isTransparent || isDarkPage
                ? "text-bone/70 hover:text-bone hover:bg-bone/10"
                : "text-charcoal hover:bg-bone-300"
            )}
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
          className="md:hidden border-t border-bone/10 bg-charcoal/98 backdrop-blur-md"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-6 py-4 space-y-1">
            {/* Services */}
            <div className="py-2">
              <p className="px-3 pb-2 text-[10px] font-sans font-semibold tracking-widest uppercase text-bone/30">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-bone/10"
                >
                  <span className="text-sm font-medium font-sans text-bone">
                    {service.label}
                  </span>
                  <span className="text-xs font-sans text-bone/40 mt-0.5">
                    {service.description}
                  </span>
                </Link>
              ))}
            </div>

            <div className="border-t border-bone/10 pt-2 space-y-1">
              {COPY.nav.links.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-sm font-medium font-sans text-bone/70 hover:text-bone hover:bg-bone/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 pb-2 border-t border-bone/10">
              <Button asChild variant="gold" size="sm" className="w-full font-sans">
                <Link href={COPY.nav.cta.href}>{COPY.nav.cta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

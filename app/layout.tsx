import type { Metadata, Viewport } from "next"
import { Fraunces, Sora } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { absoluteUrl } from "@/lib/utils"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://backstage.build"),
  title: {
    default: "Backstage — Automation Working Quietly Backstage",
    template: "%s | Backstage",
  },
  description:
    "Backstage designs, builds, and runs the workflows behind your business—from websites and media to lead finding, follow-ups, and everyday email.",
  keywords: [
    "AI automation",
    "business automation",
    "workflow automation",
    "marketing automation",
    "lead automation",
    "email automation",
    "website development",
    "Next.js agency",
  ],
  authors: [{ name: "Backstage" }],
  creator: "Backstage",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName: "Backstage",
    title: "Backstage — Automation Working Quietly Backstage",
    description:
      "Backstage designs, builds, and runs the workflows behind your business—from websites and media to lead finding, follow-ups, and everyday email.",
    images: [
      {
        url: absoluteUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "Backstage — AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backstage — Automation Working Quietly Backstage",
    description:
      "AI-powered workflows for ambitious businesses. Websites, media, leads, email, and custom automation.",
    images: [absoluteUrl("/og-image.png")],
    creator: "@backstage",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F4EF" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1317" },
  ],
  width: "device-width",
  initialScale: 1,
}

const analyticsProvider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${sora.variable}`}>
      <head>
        {/* Plausible analytics */}
        {analyticsProvider === "plausible" && process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
        {/* GA4 analytics */}
        {analyticsProvider === "ga4" && process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Backstage",
              url: absoluteUrl("/"),
              logo: absoluteUrl("/logo.png"),
              description:
                "Backstage designs, builds, and runs the workflows behind your business—from websites and media to lead finding, follow-ups, and everyday email.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@backstage.build",
                contactType: "customer service",
              },
              sameAs: [
                "[[LINKEDIN_URL]]",
                "[[TWITTER_URL]]",
              ],
            }),
          }}
        />
        {/* JSON-LD: Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: absoluteUrl("/"),
              name: "Backstage",
              description: "AI-powered automation for ambitious businesses.",
              potentialAction: {
                "@type": "SearchAction",
                target: `${absoluteUrl("/work")}?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-bone text-charcoal antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-aegean focus:px-4 focus:py-2 focus:text-bone focus:shadow-elevation-3"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

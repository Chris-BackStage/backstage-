# Backstage — Marketing Website

> A high-performance marketing website for Backstage, built with Next.js 14 App Router and a modern TypeScript stack.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-EF008F?logo=framer&logoColor=white)

---

## Overview

Backstage is a fully static (SSG) marketing website designed for lead generation and brand storytelling. It showcases services, case studies, and provides a contact/inquiry flow. The site is optimized for a Lighthouse score of 90+ across all categories, full WCAG 2.2 AA accessibility compliance, and SEO score of 100.

Key capabilities:
- Dynamic service pages generated at build time from a central content file
- Portfolio case study pages with the same generation pattern
- Contact form with server-side validation, honeypot spam protection, and rate limiting
- Optional newsletter signup via Mailchimp API
- Analytics abstraction layer supporting Plausible or GA4
- Full dark-mode support via Tailwind's `dark:` variant
- All animations respect `prefers-reduced-motion`

---

## Tech Stack

| Technology       | Version   | Purpose                                      | Link                                       |
|------------------|-----------|----------------------------------------------|--------------------------------------------|
| Next.js          | 14.x      | Framework (App Router, SSG, API Routes)      | https://nextjs.org                         |
| React            | 18.x      | UI library                                   | https://react.dev                          |
| TypeScript       | 5.x       | Type safety                                  | https://www.typescriptlang.org             |
| Tailwind CSS     | 3.x       | Utility-first styling                        | https://tailwindcss.com                    |
| shadcn/ui        | latest    | Accessible component primitives (Radix UI)   | https://ui.shadcn.com                      |
| Framer Motion    | 11.x      | Animation library                            | https://www.framer.com/motion              |
| Resend           | latest    | Transactional email (recommended)            | https://resend.com                         |
| Zod              | 3.x       | Schema validation (form + API)               | https://zod.dev                            |
| next/font        | built-in  | Zero-FOUT font loading                       | https://nextjs.org/docs/app/api-reference/components/font |

---

## Prerequisites

- **Node.js** >= 18.17.0 (LTS recommended)
- **npm** >= 9.x or **pnpm** >= 8.x
- **Git** >= 2.x

Check your versions:

```bash
node -v
npm -v
git --version
```

---

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/your-org/backstage.git
cd backstage

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Open .env.local and fill in all required values (see Environment Variables section)

# 4. Start the development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Command               | Description                                            |
|-----------------------|--------------------------------------------------------|
| `npm run dev`         | Start development server with hot reload               |
| `npm run build`       | Build the production application                       |
| `npm run start`       | Start the production server (after build)              |
| `npm run lint`        | Run ESLint across all source files                     |
| `npm run type-check`  | Run TypeScript compiler without emitting files         |

---

## Environment Variables

Copy `.env.example` to `.env.local` and populate the values below. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser bundle.

### Email

| Variable              | Required | Description                                                        | Example                        |
|-----------------------|----------|--------------------------------------------------------------------|--------------------------------|
| `RESEND_API_KEY`      | Yes*     | API key from resend.com (recommended email provider)               | `re_xxxxxxxxxxxxxxxxxxxxxxxx`  |
| `RESEND_FROM_EMAIL`   | Yes*     | Verified sender address in your Resend account                     | `hello@backstage.build`        |
| `RESEND_TO_EMAIL`     | Yes*     | Recipient address for contact form submissions                     | `team@backstage.build`         |
| `EMAIL_PROVIDER`      | Optional | Set to `smtp` to use SMTP instead of Resend                        | `resend` (default)             |
| `SMTP_HOST`           | No**     | SMTP server hostname                                               | `smtp.sendgrid.net`            |
| `SMTP_PORT`           | No**     | SMTP server port                                                   | `587`                          |
| `SMTP_USER`           | No**     | SMTP authentication username                                       | `apikey`                       |
| `SMTP_PASS`           | No**     | SMTP authentication password                                       | `SG.xxxxxxxxxxxxxxxx`          |
| `SMTP_FROM`           | No**     | Sender address when using SMTP                                     | `hello@backstage.build`        |

> *Required when `EMAIL_PROVIDER=resend` (default).
> **Required when `EMAIL_PROVIDER=smtp`.

### Analytics

| Variable                             | Required | Description                                                   | Example                           |
|--------------------------------------|----------|---------------------------------------------------------------|-----------------------------------|
| `NEXT_PUBLIC_ANALYTICS_PROVIDER`     | Optional | Set to `plausible` or `ga4` to enable analytics               | `plausible`                       |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`       | No*      | Your site domain registered in Plausible                      | `backstage.build`                 |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID`     | No**     | GA4 measurement ID from Google Analytics                      | `G-XXXXXXXXXX`                    |

> *Required when `NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible`.
> **Required when `NEXT_PUBLIC_ANALYTICS_PROVIDER=ga4`.

### Scheduling

| Variable                       | Required | Description                                                      | Example                                      |
|--------------------------------|----------|------------------------------------------------------------------|----------------------------------------------|
| `NEXT_PUBLIC_CALENDLY_URL`     | Optional | Calendly scheduling link for booking CTAs                        | `https://calendly.com/yourname/30min`        |
| `NEXT_PUBLIC_CALCOM_URL`       | Optional | Cal.com alternative scheduling link                              | `https://cal.com/yourname/30min`             |

> Only one scheduling URL is needed. `NEXT_PUBLIC_CALENDLY_URL` takes precedence if both are set.

### Newsletter

| Variable                    | Required | Description                                                       | Example                    |
|-----------------------------|----------|-------------------------------------------------------------------|----------------------------|
| `MAILCHIMP_API_KEY`         | Optional | Mailchimp API key (for newsletter signup)                         | `xxxxxxxxxxxxxxxx-us1`     |
| `MAILCHIMP_AUDIENCE_ID`     | Optional | The Mailchimp list/audience ID to subscribe users to              | `abc123def4`               |
| `MAILCHIMP_SERVER_PREFIX`   | Optional | Data center prefix from your Mailchimp API key (e.g., `us1`)     | `us1`                      |

### Site

| Variable                  | Required | Description                                          | Example                    |
|---------------------------|----------|------------------------------------------------------|----------------------------|
| `NEXT_PUBLIC_SITE_URL`    | Yes      | Canonical base URL of the site (no trailing slash)   | `https://backstage.build`  |

### Rate Limiting

| Variable                   | Required | Description                                                         | Example  |
|----------------------------|----------|---------------------------------------------------------------------|----------|
| `RATE_LIMIT_REQUESTS`      | Optional | Max number of contact form submissions per window (default: `5`)    | `5`      |
| `RATE_LIMIT_WINDOW_MS`     | Optional | Rate limit window in milliseconds (default: `60000` = 1 minute)     | `60000`  |

---

## Project Structure

```
backstage/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, metadata, providers)
│   ├── page.tsx                  # Homepage (/)
│   ├── globals.css               # Global styles, CSS variables, Tailwind base
│   ├── sitemap.ts                # Dynamic sitemap generator
│   ├── robots.ts                 # robots.txt generator
│   ├── not-found.tsx             # Custom 404 page
│   ├── error.tsx                 # Runtime error boundary page
│   ├── about/
│   │   └── page.tsx              # About page (/about)
│   ├── creators/
│   │   └── page.tsx              # Creators page (/creators)
│   ├── services/
│   │   ├── page.tsx              # Services overview (/services)
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic service page (/services/:slug)
│   ├── work/
│   │   ├── page.tsx              # Work/portfolio overview (/work)
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic case study page (/work/:slug)
│   ├── contact/
│   │   └── page.tsx              # Contact page (/contact)
│   ├── legal/
│   │   ├── privacy/
│   │   │   └── page.tsx          # Privacy Policy (/legal/privacy)
│   │   └── terms/
│   │       └── page.tsx          # Terms of Service (/legal/terms)
│   └── api/
│       ├── contact/
│       │   └── route.ts          # Contact form API endpoint (POST)
│       └── newsletter/
│           └── route.ts          # Newsletter signup API endpoint (POST)
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Site header with navigation
│   │   ├── Footer.tsx            # Site footer
│   │   ├── ServicesDropdown.tsx  # Desktop services dropdown nav
│   │   ├── MobileMenu.tsx        # Mobile navigation drawer
│   │   └── SkipLink.tsx          # Skip-to-content accessibility link
│   ├── home/
│   │   ├── HeroSection.tsx       # Homepage hero
│   │   ├── ServicesSection.tsx   # Services overview grid
│   │   ├── WorkSection.tsx       # Featured case studies
│   │   ├── TestimonialsSection.tsx
│   │   └── CtaSection.tsx        # Bottom call-to-action
│   ├── contact/
│   │   └── ContactForm.tsx       # Validated contact form component
│   ├── ui/                       # shadcn/ui generated components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── dialog.tsx
│   │   ├── AnimatedSection.tsx   # Framer Motion scroll-reveal wrapper
│   │   └── ...
│   └── seo/
│       └── JsonLd.tsx            # JSON-LD structured data component
├── content/
│   └── copy.ts                   # All site copy, slugs, and content data
├── lib/
│   ├── analytics.ts              # Analytics abstraction (Plausible / GA4)
│   ├── email.ts                  # Email sending abstraction (Resend / SMTP)
│   ├── rate-limit.ts             # In-memory rate limiter for API routes
│   └── utils.ts                  # Shared utility functions (cn, etc.)
├── public/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── og-image.png              # Default OG image (1200×630)
│   ├── robots.txt                # Static fallback robots.txt
│   └── site.webmanifest
├── specs/
│   └── a11y-perf-report.md       # Accessibility & performance documentation
├── QA/
│   └── checklist.md              # Pre-launch QA checklist
├── .env.example                  # Environment variable template
├── .env.local                    # Local environment variables (git-ignored)
├── .gitignore
├── components.json               # shadcn/ui configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration and design tokens
├── tsconfig.json                 # TypeScript configuration
├── package.json
└── README.md
```

---

## Customization Guide

### Colors & Tokens

The brand color palette is defined in two places and must be kept in sync.

**1. `tailwind.config.ts`** — adds tokens to Tailwind's theme:

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      charcoal: "#0F1317",
      bone:     "#F6F4EF",
      aegean:   "#0A5AA1",
      "warm-gray": "#6B6863",
    },
  },
},
```

**2. `app/globals.css`** — CSS custom properties for use in arbitrary CSS:

```css
:root {
  --color-charcoal:   #0F1317;
  --color-bone:       #F6F4EF;
  --color-aegean:     #0A5AA1;
  --color-warm-gray:  #6B6863;
}
```

To change a brand color, update the hex value in both files and run `npm run build` to verify no contrast issues are introduced.

---

### Fonts

Fonts are configured in `app/layout.tsx` using `next/font/google`:

```tsx
import { Fraunces, Sora } from "next/font/google"

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["300", "400", "600", "700"],
})

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600"],
})
```

To swap fonts:
1. Replace `Fraunces` and `Sora` imports with your chosen Google Fonts.
2. Update the `variable` names if desired.
3. Update `tailwind.config.ts` `fontFamily` to reference the new CSS variable names.
4. Update `app/globals.css` to assign `font-family` to the appropriate elements.

---

### Content

All site copy is centralized in `content/copy.ts`. This file exports a single `COPY` object.

```ts
// content/copy.ts (simplified example)
export const COPY = {
  site: {
    name: "Backstage",
    tagline: "We build the systems behind your growth.",
  },
  services: {
    items: [
      {
        slug: "websites-ai-builder",
        title: "Websites & AI Builder",
        headline: "...",
        description: "...",
      },
      // ...
    ],
  },
  work: {
    caseStudies: [
      {
        slug: "lead-automation-saas",
        title: "Lead Automation for SaaS",
        // ...
      },
    ],
  },
}
```

**`[[PLACEHOLDER]]` tokens** are used for content that must be replaced before launch (e.g., real client names, specific metrics). Search the entire codebase for `[[PLACEHOLDER]]` before going live:

```bash
grep -r "\[\[PLACEHOLDER\]\]" .
```

---

### Components

This project uses [shadcn/ui](https://ui.shadcn.com). Components live in `components/ui/` and are generated via the CLI:

```bash
# Add a new shadcn/ui component
npx shadcn@latest add <component-name>

# Example
npx shadcn@latest add accordion
```

Components are unstyled primitives built on Radix UI. Customize their appearance by editing the generated file in `components/ui/`.

---

## Page Routes

| Path                          | File                                    | Purpose                        | Dynamic |
|-------------------------------|-----------------------------------------|--------------------------------|---------|
| `/`                           | `app/page.tsx`                          | Homepage                       | No      |
| `/services`                   | `app/services/page.tsx`                 | Services overview              | No      |
| `/services/:slug`             | `app/services/[slug]/page.tsx`          | Individual service page        | Yes     |
| `/work`                       | `app/work/page.tsx`                     | Portfolio / case study index   | No      |
| `/work/:slug`                 | `app/work/[slug]/page.tsx`              | Individual case study          | Yes     |
| `/about`                      | `app/about/page.tsx`                    | About page                     | No      |
| `/creators`                   | `app/creators/page.tsx`                 | Creators page                  | No      |
| `/contact`                    | `app/contact/page.tsx`                  | Contact / inquiry page         | No      |
| `/legal/privacy`              | `app/legal/privacy/page.tsx`            | Privacy Policy                 | No      |
| `/legal/terms`                | `app/legal/terms/page.tsx`              | Terms of Service               | No      |
| `/api/contact`                | `app/api/contact/route.ts`              | Contact form API endpoint      | No      |
| `/api/newsletter`             | `app/api/newsletter/route.ts`           | Newsletter signup API          | No      |
| `/sitemap.xml`                | `app/sitemap.ts`                        | XML sitemap                    | No      |
| `/robots.txt`                 | `app/robots.ts`                         | Robots directives              | No      |

---

## Services (Adding New Ones)

Service pages are statically generated from `content/copy.ts`. To add a new service:

1. **Add the service object** to `COPY.services.items` in `content/copy.ts`:

```ts
{
  slug: "my-new-service",           // URL-safe slug
  title: "My New Service",
  headline: "Short punchy headline",
  description: "Longer description paragraph...",
  features: ["Feature 1", "Feature 2"],
  // ...add any additional fields your page template uses
}
```

2. **Add the slug** to `serviceSlugs` in `app/sitemap.ts` so it appears in the sitemap.

3. **Verify** `app/services/[slug]/page.tsx` exports `generateStaticParams` referencing `COPY.services.items`. No other changes are needed — the page is generated automatically.

4. Run `npm run build` to confirm the new page is generated without errors.

---

## Portfolio (Adding Case Studies)

Case study pages follow the same pattern as services.

1. **Add the case study object** to `COPY.work.caseStudies` in `content/copy.ts`:

```ts
{
  slug: "my-new-case-study",
  title: "Client Name — Project Type",
  category: "Web Development",
  summary: "One sentence summary...",
  challenge: "...",
  solution: "...",
  results: ["Metric 1", "Metric 2"],
  // ...
}
```

2. **Add the slug** to `workSlugs` in `app/sitemap.ts`.

3. Run `npm run build` to confirm the page generates correctly.

---

## Analytics Setup

Analytics are abstracted behind `lib/analytics.ts`. All custom event tracking in the codebase calls `trackEvent()` from this module, so swapping providers requires only environment variable changes.

### Plausible

```bash
# .env.local
NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=backstage.build
```

The Plausible script is injected via `next/script` with `strategy="lazyOnload"` in the root layout. No additional code changes are required.

### GA4

```bash
# .env.local
NEXT_PUBLIC_ANALYTICS_PROVIDER=ga4
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

The `gtag.js` script is injected similarly. A consent mode stub is included for GDPR compliance.

### Custom Events

Use `trackEvent()` anywhere in client components:

```tsx
import { trackEvent } from "@/lib/analytics"

// Track a custom conversion event
trackEvent("contact_form_submit", { service: "websites-ai-builder" })
```

---

## Email Setup

### Resend (Recommended)

1. Create an account at [resend.com](https://resend.com) and verify your sending domain.
2. Generate an API key.
3. Set the following in `.env.local`:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=hello@backstage.build
RESEND_TO_EMAIL=team@backstage.build
```

### SMTP Fallback

If you prefer to use a standard SMTP provider (SendGrid, Postmark, Mailgun, etc.):

```bash
EMAIL_PROVIDER=smtp
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.xxxxxxxxxxxxxxxx
SMTP_FROM=hello@backstage.build
```

### Testing the Contact Form

Send a test POST request from the command line:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test submission."
  }'
```

Expected response on success:
```json
{ "success": true, "message": "Message sent successfully." }
```

---

## Deploying to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-org/backstage.git
git push -u origin main
```

### 2. Import in Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Click **"Add New Project"** and import your GitHub repository.
3. Vercel will auto-detect Next.js. Leave the framework preset as **Next.js**.
4. Do not change the build command (`next build`) or output directory.

### 3. Set Environment Variables

In the Vercel dashboard, navigate to your project → **Settings** → **Environment Variables**. Add all variables from `.env.example` with their production values.

At minimum, set:
- `NEXT_PUBLIC_SITE_URL` = `https://backstage.build`
- `RESEND_API_KEY` (and related email vars)

### 4. Deploy

Click **Deploy**. Vercel will build and deploy your site. The first deploy typically takes 1–2 minutes.

### 5. Add Custom Domain

1. In Vercel: **Settings** → **Domains** → add `backstage.build`.
2. Update your DNS provider with the records Vercel provides (usually an A record and/or CNAME).
3. Vercel provisions an SSL certificate automatically.

### 6. Verify Sitemap & Robots

After the domain resolves:

```bash
curl https://backstage.build/sitemap.xml
curl https://backstage.build/robots.txt
```

Submit `https://backstage.build/sitemap.xml` to [Google Search Console](https://search.google.com/search-console).

---

## Performance Notes

| Topic              | Guideline                                                                                     |
|--------------------|-----------------------------------------------------------------------------------------------|
| Images             | Always use `next/image`. Never use a raw `<img>` tag. Set `width`, `height`, and `priority` on hero images. |
| Fonts              | Always load fonts via `next/font`. Never use `<link rel="stylesheet">` or `@import` for fonts. |
| Animations         | All `motion.*` components must check `useReducedMotion()` and skip transforms when true.      |
| Scripts            | Third-party scripts must use `next/script` with `strategy="lazyOnload"` or `"afterInteractive"`. |
| Dynamic imports    | Use `next/dynamic` for heavy components not needed on initial render.                         |
| Lighthouse target  | Performance ≥ 90 (mobile), Accessibility = 100, Best Practices ≥ 95, SEO = 100.             |

---

## Contributing / Development

### Branching Strategy

```
main          → production (auto-deploys to Vercel)
staging       → pre-production testing
feature/*     → new features (branch from main)
fix/*         → bug fixes (branch from main)
chore/*       → tooling, deps, documentation
```

Open pull requests against `main`. All PRs require at least one approval before merging.

### Commit Style

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add newsletter signup to footer
fix: correct mobile menu z-index on iOS Safari
chore: upgrade Framer Motion to v11.5
docs: update environment variables table in README
```

### Linting & Type Checking

Run these before committing:

```bash
# Lint all files
npm run lint

# Type check (no emit)
npm run type-check
```

Both commands must pass with zero errors before a PR can be merged.

### Pre-commit Checklist

- [ ] `npm run lint` passes
- [ ] `npm run type-check` passes
- [ ] `npm run build` succeeds locally
- [ ] No `[[PLACEHOLDER]]` tokens introduced
- [ ] No `.env.local` or secrets committed

---

## License

MIT License — see [LICENSE](./LICENSE) for details.

---

*Built by the Backstage team. For support or questions, reach out via [backstage.build/contact](https://backstage.build/contact).*
#   b a c k s t a g e -  
 
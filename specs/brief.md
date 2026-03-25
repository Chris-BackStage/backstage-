# Backstage — Project Brief
## Single Source of Truth: Brand, Design, Copy & Architecture
**Version:** 1.0.0 | **Date:** 2026-03-24 | **Agent:** PROJECT BRIEF v1

---

## 1. Project Overview

**Product:** Backstage — marketing website for an AI automation startup
**Framework:** Next.js 14 (App Router)
**Purpose:** Generate qualified leads, communicate service value, and establish brand authority for an AI-powered operations firm serving growth-stage startups, SMBs, and enterprise teams.

---

## 2. Brand Identity

### 2.1 Brand Name & Positioning

- **Name:** Backstage
- **Tagline:** "Automation working quietly backstage."
- **Short description:** Your AI-powered operations team.
- **Full description:** Backstage designs, builds, and runs the workflows behind your business—from websites and media to lead finding, follow-ups, and everyday email.

### 2.2 Positioning Statement

Backstage is the embedded operational partner for ambitious businesses that need Fortune 500 infrastructure without Fortune 500 headcount. We don't sell software or deliverables—we build systems that run autonomously and stay accountable to outcomes.

### 2.3 Audience

| Segment | Description |
|---|---|
| Growth-stage startups | Seed to Series B, 10–100 employees, need ops without headcount |
| SMBs scaling ops | 50–500 employees, fragmented toolstack, manual workflows |
| Enterprise teams | Innovation/ops units within larger orgs, piloting automation |

### 2.4 Competitive Positioning

- **Not** a traditional agency (we don't hand off and disappear)
- **Not** a SaaS product (we build custom, not off-the-shelf)
- **Not** a freelancer marketplace (we're an embedded team with accountability)
- **Is** an AI-powered ops partner that designs, builds, and runs systems end-to-end

---

## 3. Brand Voice & Tone

### 3.1 Tone Attributes

| Attribute | Description |
|---|---|
| Confident | We know what we're doing. No hedging, no filler. |
| Elegant | Premium feel without being cold or inaccessible. |
| Benefit-led | Every claim answers "so what?" before the reader has to ask. |
| Direct | Short sentences. Active verbs. No buzzword padding. |
| Human | Behind every automation is a team that cares about craft. |

### 3.2 Brand Verbs

The following action verbs define how we talk about work. Use them throughout copy:

- **Build** — we build systems, not just deliverables
- **Orchestrate** — we orchestrate workflows across your stack
- **Route** — we route leads, data, and notifications automatically
- **Follow-up** — we follow up so your team doesn't have to
- **Publish** — we publish content, reports, and updates on autopilot

### 3.3 Tone Anti-patterns

Avoid:
- "Leverage synergies" / "best-in-class" / "robust solution"
- Passive voice ("automations are built" → "we build automations")
- Vague superlatives ("the most powerful platform")
- Over-promising ("guaranteed results")
- Filler phrases ("In today's fast-paced world...")

### 3.4 CTA Language

**Primary CTA:** "Contact Sales"
**Secondary CTA:** "Get a Quote"

These are the only two CTAs used site-wide. No variations. No "Learn more" as a primary action. CTAs always link to `/contact` or `/contact#quote`.

---

## 4. Visual Design System

### 4.1 Color Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-base` | Bone White | `#F7F4EF` | Page background, card backgrounds |
| `--color-aegean` | Aegean Blue | `#0A5AA1` | Primary brand color, key CTAs, hero accents |
| `--color-olive` | Olive Green | `#2E7D6D` | Secondary accent, service highlights, success states |
| `--color-gold` | Soft Gold | `#C2A660` | Tertiary accent, pricing highlights, decorative |
| `--color-charcoal` | Charcoal | `#0F1317` | Body text, headings, footer background |

**Usage rules:**
- Bone White is the dominant background (80%+ of surface area)
- Charcoal is the dominant text color
- Aegean Blue is used sparingly — primary CTA buttons, key callouts, and one accent per section
- Olive Green used for secondary service cards and success/positive states
- Soft Gold used for decorative highlights, premium tier pricing, and subtle accents
- Never place Aegean Blue on Olive Green or vice versa
- Ensure WCAG AA contrast on all text/background combinations

### 4.2 Typography

| Role | Font | Weight | Size Range |
|---|---|---|---|
| Display headings | Fraunces | 300–400 (Italic available) | 48px–96px |
| Section headings | Fraunces | 400 | 32px–48px |
| Subheadings | Fraunces | 300 | 20px–28px |
| Body text | Sora | 400 | 16px–18px |
| UI labels / nav | Sora | 500–600 | 12px–15px |
| Captions / meta | Sora | 400 | 12px–14px |

**Font loading:** Google Fonts via `next/font`. Both Fraunces and Sora loaded with `display: swap`.

**Typographic rules:**
- Headings use sentence case, not title case, except for brand name
- Maximum line length: 65–70 characters for body text
- Minimum 1.6 line height for body text
- Fraunces italic used selectively for hero display text or pullquotes
- Never use Fraunces for body copy or UI labels

### 4.3 Spacing & Grid

- Base grid: 12-column, 80px outer margin (desktop), 24px (mobile)
- Section vertical rhythm: 120px top/bottom (desktop), 80px (mobile)
- Component internal spacing: multiples of 8px (8, 16, 24, 32, 48, 64)
- Content max-width: 1280px
- Prose max-width: 720px

### 4.4 Border Radius & Surfaces

- Cards: 2px border radius (near-square — premium, not bubbly)
- Buttons: 2px border radius
- Inputs: 2px border radius
- Modals / overlays: 4px
- No drop shadows on content cards — use subtle 1px borders (`#0F1317` at 8% opacity) instead

### 4.5 Iconography

- Library: Lucide React
- Style: Stroke icons, 1.5px stroke weight, never filled
- Size: 20px (inline), 24px (section), 32px (feature cards)
- Color: Inherits text color or uses brand accent deliberately

---

## 5. Information Architecture

### 5.1 Page Structure

```
/                           Home
/services                   Services index
/services/[slug]            Individual service pages (5 total)
  /websites-ai-builder
  /media-marketing-automations
  /lead-finding-follow-ups
  /email-automations
  /integrations-custom-workflows
/work                       Case studies index
/work/[slug]                Individual case study pages (3 initial)
  /lead-automation-saas
  /content-machine-agency
  /ecommerce-website
/about                      About page
/creators                   Founders / team page
/contact                    Contact + quote form
/legal/privacy              Privacy Policy
/legal/terms                Terms of Service
```

### 5.2 Navigation

**Primary nav (desktop):** Services | Our Work | About | Creators | [Contact Sales — CTA]
**Mobile nav:** Hamburger drawer with same links plus "Get a Quote" secondary CTA
**Footer nav:** Three columns — Solutions, Company, Resources (see copy.ts)

---

## 6. Page-by-Page Section Map

### 6.1 Home (`/`)

1. **Hero** — Full-viewport. Headline, subheadline, dual CTAs, trust line
2. **Trust Bar** — Integration logo strip, de-emphasized
3. **Pillars** — 4-up value propositions (Launch / Leads / Media / Ops)
4. **How It Works** — 3-step process (Discover / Orchestrate / Run)
5. **Features** — 6-item capability grid
6. **Integrations** — Logo cloud with 18 tools
7. **Testimonials** — 3 client quotes (carousel or static grid)
8. **Pricing** — 3-tier pricing table (Starter / Growth / Enterprise)
9. **FAQ** — 6 questions, accordion
10. **Final CTA** — Full-width section, dual CTAs

### 6.2 Services Index (`/services`)

1. Service headline + description
2. 5-item service card grid (icon, tagline, outcomes preview, CTA)
3. Process teaser (link to how it works)
4. Final CTA

### 6.3 Service Detail (`/services/[slug]`)

1. Hero with service tagline and color accent
2. Outcomes (what you'll achieve)
3. What you get (deliverables list)
4. Integrations relevant to this service
5. Related case study teaser
6. Final CTA

### 6.4 Work Index (`/work`)

1. Headline + description
2. Case study card grid (category filter optional)
3. "Start your project" CTA

### 6.5 Work Detail (`/work/[slug]`)

1. Project hero (title, client, category, summary)
2. The problem
3. Constraints
4. The workflow / build
5. Tools used
6. Outcome metrics
7. Client quote
8. Next case study link + CTA

### 6.6 About (`/about`)

1. Brand statement hero
2. Mission paragraph
3. How we work (3 principles)
4. Values (4-item grid)
5. CTA

### 6.7 Creators (`/creators`)

1. Intro hero
2. Founder cards (2) — bio, tools, favorite automation
3. The Workbench (8 tools with categories)
4. Company timeline (3 milestones)
5. CTA

### 6.8 Contact (`/contact`)

1. Headline + subheadline
2. Contact form (name, email, company, use case, budget, timeline)
3. Contact info sidebar (email, scheduling link)
4. Compliance text

---

## 7. Component Architecture

### 7.1 Layout Components

- `<Nav />` — sticky, transparent-to-solid on scroll
- `<Footer />` — dark background (charcoal), 3-column + social
- `<PageWrapper />` — applies consistent outer padding

### 7.2 Section Components

- `<Hero />` — configurable for home vs. interior pages
- `<SectionLabel />` — small uppercase tracking label above section headlines
- `<TrustBar />` — logo strip with fade edges
- `<PillarCard />` — icon + title + description + color accent
- `<ProcessStep />` — numbered step with title and description
- `<FeatureGrid />` — 6-up icon/title/description grid
- `<IntegrationCloud />` — pill-style logo cloud
- `<TestimonialCard />` — quote + author attribution
- `<PricingTier />` — feature list + CTA, featured state variant
- `<FAQItem />` — accordion item with smooth expand
- `<FinalCTA />` — full-width dark or accent section with dual CTAs

### 7.3 UI Components

- `<Button />` — variants: primary (filled aegean), secondary (outlined), ghost
- `<Badge />` — category labels, service tags
- `<ServiceCard />` — used on services index
- `<CaseStudyCard />` — used on work index
- `<MetricStat />` — before/after or single value display
- `<FounderCard />` — photo + bio + tools + favorite automation
- `<ToolBadge />` — tool name + category pill

---

## 8. SEO & Metadata

### 8.1 Default Metadata

```ts
title: "Backstage — AI Automation for Ambitious Teams"
description: "Backstage designs, builds, and runs the workflows behind your business. Websites, lead automation, content pipelines, and custom integrations."
```

### 8.2 Page-level Titles

Format: `[Page Name] | Backstage`

- Home: `Backstage — AI Automation for Ambitious Teams`
- Services: `Services | Backstage`
- Service detail: `[Service Name] | Backstage`
- Work: `Our Work | Backstage`
- About: `About | Backstage`
- Creators: `The Creators | Backstage`
- Contact: `Contact Sales | Backstage`

### 8.3 Structured Data

- Organization schema on home
- Service schema on each service page
- BreadcrumbList on all interior pages
- FAQPage schema on home (FAQ section)

---

## 9. Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| Core Web Vitals LCP | < 2.5s |
| Core Web Vitals CLS | < 0.1 |
| Core Web Vitals INP | < 200ms |

---

## 10. Agent Contracts

All agents working on this codebase must read and respect this section.

### 10.1 Copy Agent

- **File:** `content/copy.ts`
- **Rule:** All user-facing copy lives in `COPY`. No hardcoded strings in components.
- **Placeholders:** `[[PLACEHOLDER]]` tokens are client-supplied. Never fill them with invented data.
- **CTAs:** Only "Contact Sales" → `/contact` and "Get a Quote" → `/contact#quote`. No other primary CTA text.

### 10.2 Design Agent

- **File:** This brief + `specs/luxury-patterns.md`
- **Rule:** All colors, fonts, and spacing values come from design tokens. No arbitrary hex values in component files.
- **Rule:** Fraunces headings only. Sora body only. No substitutions.

### 10.3 Dev Agent

- **Framework:** Next.js 14, App Router, TypeScript strict mode
- **Styling:** Tailwind CSS with custom tokens extending the default config
- **Components:** Lucide React for icons. No other icon library.
- **Rule:** All pages are server components by default. Use `"use client"` only where interactivity requires it.
- **Rule:** Images use `next/image` with explicit width/height or `fill` layout. No unoptimized images.

### 10.4 SEO Agent

- **File:** Each page's `generateMetadata()` export
- **Rule:** Every page has a unique title and description.
- **Rule:** No page is `noindex` except `/legal/*` (optional).
- **Rule:** Canonical URLs set on all pages.

---

## 11. Placeholder Tokens

All client-supplied content is marked with double-bracket tokens. These must not be filled by agents:

| Token | Awaiting |
|---|---|
| `[[CLIENT NAME]]` | Real client name from testimonial |
| `[[COMPANY NAME]]` | Real company name |
| `[[FOUNDER NAME]]` | Actual founder name |
| `[[FOUNDER BIO]]` | Actual founder biography |
| `[[LINKEDIN_URL]]` | Social profile URL |
| `[[TWITTER_URL]]` | Social profile URL |
| `[[GITHUB_URL]]` | GitHub profile/org URL |
| `[[CALENDLY_OR_CAL_URL]]` | Scheduling link |
| `[[PLACEHOLDER]]` | Pricing figures |
| `[[YEAR]]` | Timeline year |
| `[[MILESTONE]]` | Timeline milestone text |
| `[[N]]` | Numeric metrics |
| `[[CLIENT/PROJECT NAME]]` | Case study project title |

---

*This document is the single source of truth for the Backstage project. All agents should reference it before making structural, copy, or design decisions.*

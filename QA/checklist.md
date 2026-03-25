# QA Checklist — Backstage Marketing Site

**Site:** https://backstage.build
**Last updated:** 2026-03-24
**Stack:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion

> Mark each item `- [x]` when verified. Items marked `[BLOCKER]` must pass before launch.

---

## 1. Links & Navigation

- [ ] All internal links resolve — no 404 errors on any page `[BLOCKER]`
- [ ] Logo in header links to homepage (`/`)
- [ ] Logo in footer links to homepage (`/`)
- [ ] Active/current-page state is visually applied to the correct nav item
- [ ] Skip-to-content link is the first focusable element on every page
- [ ] Skip-to-content link jumps focus to `#main-content` when activated
- [ ] Skip-to-content link is visually hidden until focused
- [ ] Primary nav: all top-level links load the correct page
- [ ] Services dropdown opens on hover (desktop)
- [ ] Services dropdown opens on click/Enter (keyboard)
- [ ] Services dropdown lists all 5 service pages
- [ ] Services dropdown closes on Escape key
- [ ] Services dropdown closes when focus leaves it
- [ ] All footer navigation links resolve correctly
- [ ] Footer social links open in new tab with `rel="noopener noreferrer"`
- [ ] Footer social links have descriptive `aria-label` values
- [ ] Mobile hamburger button opens the mobile menu
- [ ] Mobile menu closes via hamburger/close button
- [ ] Mobile menu closes on Escape key
- [ ] Mobile menu: all nav links work and close the menu after navigation
- [ ] Breadcrumbs on service and work detail pages are correct and link properly
- [ ] CTA buttons throughout the site link to the correct destination (`/contact` or Calendly)
- [ ] "Back to Services" / "Back to Work" links on detail pages work correctly
- [ ] Pagination or "next case study" links (if present) work correctly
- [ ] No external links are broken (manual spot check or tool like Broken Link Checker)

---

## 2. Forms

- [ ] Contact form: Name field is required and validates on submit `[BLOCKER]`
- [ ] Contact form: Email field is required and validates format on submit `[BLOCKER]`
- [ ] Contact form: Message field is required and validates on submit `[BLOCKER]`
- [ ] Contact form: Submit button shows loading/spinner state during submission
- [ ] Contact form: Success message/state renders after successful submission `[BLOCKER]`
- [ ] Contact form: Error state renders if the API call fails `[BLOCKER]`
- [ ] Contact form: Error messages are announced to screen readers (`role="alert"`)
- [ ] Contact form: Honeypot field is present and hidden from sighted users
- [ ] Contact form: Honeypot field has `tabindex="-1"` and `aria-hidden="true"`
- [ ] Contact form: Submission with honeypot filled is silently rejected
- [ ] Contact form: Rate limiting prevents more than N submissions per window `[BLOCKER]`
- [ ] Contact form: Rate limit error message is shown to the user
- [ ] Contact form: All fields have associated `<label>` elements (not placeholder-only)
- [ ] Contact form: All fields have `autocomplete` attributes set appropriately
- [ ] Contact form: Form resets or disables after successful submission to prevent double-send
- [ ] Newsletter form (if present): Accepts a valid email address
- [ ] Newsletter form: Rejects an invalid email address with an error message
- [ ] Newsletter form: Shows success confirmation after sign-up
- [ ] Newsletter form: Handles duplicate email gracefully (no 500 error)
- [ ] Newsletter form: API key / Mailchimp credentials are set in `.env.local`
- [ ] All form submissions are actually received in the configured inbox `[BLOCKER]`

---

## 3. Responsive & Cross-Browser

- [ ] **320px** — no horizontal scroll, all text readable, buttons tappable
- [ ] **375px** — standard small phone (iPhone SE); layout intact
- [ ] **390px** — iPhone 14/15 Pro; layout intact
- [ ] **430px** — iPhone 14/15 Plus; layout intact
- [ ] **768px** — tablet portrait; nav transitions correctly (mobile → desktop)
- [ ] **1024px** — tablet landscape / small desktop; desktop nav fully visible
- [ ] **1280px** — standard desktop; all grid layouts correct
- [ ] **1440px** — large desktop; max-width container is centered and padded
- [ ] **1920px** — widescreen; no content stretches beyond max-width
- [ ] **Chrome (latest)** — full functional and visual pass
- [ ] **Firefox (latest)** — full functional and visual pass
- [ ] **Safari (latest, macOS)** — full functional and visual pass; check CSS gap/grid support
- [ ] **Edge (latest)** — full functional and visual pass
- [ ] **iOS Safari (iPhone, latest iOS)** — tap targets work, no 300ms tap delay, no viewport issues
- [ ] **Android Chrome (latest)** — layout and interactions correct
- [ ] No horizontal overflow at any breakpoint (use `overflow-x: hidden` check)
- [ ] Hero section scales correctly at all breakpoints
- [ ] Service cards stack correctly on mobile
- [ ] Work/case study grid stacks correctly on mobile
- [ ] Footer columns stack correctly on mobile
- [ ] No text overflows its container at any breakpoint
- [ ] All images are not distorted at any breakpoint

---

## 4. Dark Mode

- [ ] Light mode is the default when no system preference is set `[BLOCKER]`
- [ ] Dark mode activates when OS/system `prefers-color-scheme: dark` is set
- [ ] All body text has sufficient contrast (≥ 4.5:1) in dark mode
- [ ] All heading text has sufficient contrast (≥ 3:1 large) in dark mode
- [ ] All interactive element text has sufficient contrast in dark mode
- [ ] Logo renders correctly in dark mode (no invisible light logo on dark bg)
- [ ] Hero section background and text are correct in dark mode
- [ ] Cards, panels, and surfaces use the correct dark-mode background tokens
- [ ] Form inputs have visible borders and correct text/background in dark mode
- [ ] Footer background and text are correct in dark mode
- [ ] `<code>` blocks (if any) have correct dark-mode styling
- [ ] Images with transparent backgrounds render correctly against dark bg
- [ ] Focus rings are visible against dark-mode backgrounds
- [ ] No hard-coded `#fff` or `#000` values that break dark mode

---

## 5. SEO & Metadata

- [ ] Every page has a unique, descriptive `<title>` tag `[BLOCKER]`
- [ ] Every page has a unique `<meta name="description">` (150–160 chars) `[BLOCKER]`
- [ ] Homepage `<title>` matches target keyword strategy
- [ ] Every page has a `<link rel="canonical">` pointing to its canonical URL `[BLOCKER]`
- [ ] No duplicate canonical URLs across different pages
- [ ] Open Graph `og:title` is set on every page
- [ ] Open Graph `og:description` is set on every page
- [ ] Open Graph `og:image` is set on every page and resolves to an absolute URL `[BLOCKER]`
- [ ] `og:image` dimensions are 1200×630 px
- [ ] `og:type` is set (`website` on static pages, `article` on blog/case study pages if applicable)
- [ ] `og:url` matches the canonical URL
- [ ] Twitter `twitter:card` is set to `summary_large_image`
- [ ] Twitter `twitter:title` and `twitter:description` are set
- [ ] Twitter `twitter:image` resolves correctly
- [ ] `/sitemap.xml` is accessible and returns valid XML `[BLOCKER]`
- [ ] Sitemap contains all pages listed in `app/sitemap.ts`
- [ ] Sitemap `lastmod` dates are set
- [ ] `/robots.txt` is accessible and returns the correct content `[BLOCKER]`
- [ ] `robots.txt` disallows `/api/`, `/_next/`, `/admin/`
- [ ] `robots.txt` references the sitemap URL
- [ ] JSON-LD `Organization` schema is present on the homepage
- [ ] JSON-LD `WebSite` schema (with `SearchAction` if applicable) is on the homepage
- [ ] JSON-LD `BreadcrumbList` schema is on service and work detail pages
- [ ] JSON-LD `FAQPage` schema is on pages with FAQ sections
- [ ] JSON-LD validates with no errors in Google's Rich Results Test
- [ ] No `<meta name="robots" content="noindex">` on pages that should be indexed
- [ ] 301 redirect from `www.backstage.build` to `backstage.build` (or vice versa)
- [ ] HTTPS enforced; HTTP redirects to HTTPS

---

## 6. Accessibility (WCAG 2.2 AA)

- [ ] Color contrast ≥ 4.5:1 for all normal body text `[BLOCKER]`
- [ ] Color contrast ≥ 3:1 for all large text (18px+ regular or 14px+ bold) `[BLOCKER]`
- [ ] Color contrast ≥ 3:1 for all UI components and graphical objects `[BLOCKER]`
- [ ] Focus rings are visible on all interactive elements `[BLOCKER]`
- [ ] Focus ring contrast ≥ 3:1 against adjacent colors
- [ ] Skip-to-content link is present and functional `[BLOCKER]`
- [ ] Keyboard navigation: all interactive elements reachable via Tab key
- [ ] Keyboard navigation: no positive `tabindex` values used
- [ ] Keyboard navigation: no focus traps (except intentional modal traps with exit)
- [ ] Keyboard navigation: dropdown and modal can be dismissed with Escape
- [ ] Screen reader test (NVDA + Chrome): page structure announced correctly
- [ ] Screen reader test (VoiceOver + Safari on macOS): page structure announced correctly
- [ ] Screen reader test (TalkBack + Android Chrome): key flows work
- [ ] All images have descriptive `alt` text; decorative images have `alt=""`
- [ ] All form fields have programmatically associated labels
- [ ] Form validation errors are announced to assistive technology
- [ ] Error messages are specific and describe how to fix the error
- [ ] All page content is within landmark regions (header, nav, main, footer)
- [ ] Each page has exactly one `<h1>`
- [ ] Heading hierarchy is logical and sequential (no skipped levels) `[BLOCKER]`
- [ ] All icon-only buttons have `aria-label` or visually hidden text
- [ ] `aria-expanded` is set on disclosure/dropdown triggers and reflects state
- [ ] Dialogs/modals trap focus correctly and return focus on close
- [ ] No content flashes more than 3 times per second (seizure safety)
- [ ] All Framer Motion animations respect `prefers-reduced-motion` `[BLOCKER]`
- [ ] `lang="en"` is set on the `<html>` element
- [ ] Page validates with 0 errors in axe DevTools or Lighthouse accessibility audit

---

## 7. Performance

- [ ] Lighthouse Performance score ≥ 90 on homepage (mobile) `[BLOCKER]`
- [ ] Lighthouse Performance score ≥ 90 on homepage (desktop)
- [ ] Lighthouse Accessibility score = 100 `[BLOCKER]`
- [ ] Lighthouse Best Practices score ≥ 95
- [ ] Lighthouse SEO score = 100 `[BLOCKER]`
- [ ] LCP < 2.5s (verified in Chrome DevTools / CrUX) `[BLOCKER]`
- [ ] CLS < 0.1 (no unexpected layout shifts) `[BLOCKER]`
- [ ] FID / INP < 100ms
- [ ] No render-blocking resources (CSS/JS in `<head>` that block paint)
- [ ] All images use `next/image` (no raw `<img>` tags) `[BLOCKER]`
- [ ] All above-the-fold images have `priority={true}`
- [ ] All images have explicit `width` and `height` to prevent CLS
- [ ] Fonts loaded via `next/font` (not `<link>` or `@import`) `[BLOCKER]`
- [ ] Third-party scripts use `next/script` with appropriate `strategy`
- [ ] No unused JavaScript > 50KB in production bundle
- [ ] Gzip/Brotli compression enabled on the server (Vercel default)
- [ ] No console errors or warnings in production build
- [ ] `npm run build` completes with no errors or type errors `[BLOCKER]`
- [ ] No `useEffect` missing dependency array warnings
- [ ] Production build tested locally with `npm run start` before deploying

---

## 8. Error Pages

- [ ] Custom 404 page (`app/not-found.tsx`) renders correctly `[BLOCKER]`
- [ ] 404 page includes navigation so the user can return to the site
- [ ] 404 page has appropriate `<title>` and meta tags
- [ ] Custom error page (`app/error.tsx`) renders for runtime errors
- [ ] Error boundary does not expose stack traces or sensitive data to the user
- [ ] API route `/api/contact` returns 400 for invalid input (not 500)
- [ ] API route `/api/contact` returns 429 for rate-limited requests
- [ ] API route `/api/contact` returns 500 with a generic message (no stack trace) on server error
- [ ] Form UI correctly handles and displays API error responses

---

## 9. Legal & Compliance

- [ ] Privacy Policy page (`/legal/privacy`) is accessible and readable `[BLOCKER]`
- [ ] Terms of Service page (`/legal/terms`) is accessible and readable `[BLOCKER]`
- [ ] Privacy Policy is linked in the site footer
- [ ] Terms of Service is linked in the site footer
- [ ] Contact form includes a note referencing the Privacy Policy
- [ ] Contact form checkbox or note covers consent to be contacted (if required by jurisdiction)
- [ ] GDPR: No personal data stored without consent (verify form handler)
- [ ] GDPR: Privacy Policy details what data is collected and how it is used
- [ ] Analytics: If GA4/Plausible is active, it is disclosed in the Privacy Policy
- [ ] Cookie banner/notice present if cookies beyond strictly necessary are set
- [ ] No third-party scripts loading without user consent (if required)
- [ ] All `[[PLACEHOLDER]]` tokens in legal pages are replaced with real content `[BLOCKER]`

---

## 10. Pre-Launch Checklist

- [ ] `.env.example` file is complete and committed to the repo `[BLOCKER]`
- [ ] `.env.local` is in `.gitignore` and NOT committed `[BLOCKER]`
- [ ] All `[[PLACEHOLDER]]` tokens replaced with real content across all pages `[BLOCKER]`
- [ ] All `TODO` comments in source code reviewed and resolved (or documented)
- [ ] Real company name, address, and contact details in footer
- [ ] Social media profile URLs updated from placeholders to real accounts
- [ ] Favicon (`/public/favicon.ico`) is present and correct `[BLOCKER]`
- [ ] `apple-touch-icon.png` (180×180) is present in `/public`
- [ ] `og-image.png` (1200×630) is present in `/public` and renders correctly `[BLOCKER]`
- [ ] OG image previewed with opengraph.xyz or similar tool
- [ ] `site.webmanifest` is present and references correct icons
- [ ] `NEXT_PUBLIC_SITE_URL` is set to the production URL in Vercel env vars `[BLOCKER]`
- [ ] All other production env vars (`RESEND_API_KEY`, etc.) are set in Vercel `[BLOCKER]`
- [ ] Vercel deployment preview URL has been thoroughly QA'd before promoting to production
- [ ] Google Search Console: site verified and sitemap submitted
- [ ] DNS records correct; custom domain resolves to Vercel
- [ ] SSL certificate active and auto-renewing
- [ ] `www` → apex (or apex → `www`) redirect working
- [ ] Test form submission end-to-end in production environment `[BLOCKER]`
- [ ] Confirm real email arrives in inbox after production form submission `[BLOCKER]`
- [ ] Lighthouse audit run on live production URL (not localhost)
- [ ] No staging/dev references remain in copy, links, or environment config

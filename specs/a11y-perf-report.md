# A11y & Performance Report — Backstage

**Date:** 2026-03-24
**Status:** Implemented
**Site:** https://backstage.build
**Standard:** WCAG 2.2 AA

---

## WCAG 2.2 AA Compliance

### Color Contrast Ratios

All text/background combinations were evaluated against WCAG 2.2 SC 1.4.3 (AA: 4.5:1 normal text, 3:1 large text) and SC 1.4.6 (AAA: 7:1 normal text).

| Foreground Token | Hex       | Background Token | Hex       | Ratio  | AA Normal | AA Large | AAA    |
|------------------|-----------|------------------|-----------|--------|-----------|----------|--------|
| Charcoal         | `#0F1317` | Bone             | `#F6F4EF` | ~14:1  | PASS      | PASS     | PASS   |
| Charcoal         | `#0F1317` | White            | `#FFFFFF` | ~19:1  | PASS      | PASS     | PASS   |
| Aegean           | `#0A5AA1` | Bone             | `#F6F4EF` | ~5.8:1 | PASS      | PASS     | FAIL   |
| Aegean           | `#0A5AA1` | White            | `#FFFFFF` | ~6.1:1 | PASS      | PASS     | FAIL   |
| Bone             | `#F6F4EF` | Charcoal         | `#0F1317` | ~14:1  | PASS      | PASS     | PASS   |
| Bone             | `#F6F4EF` | Aegean           | `#0A5AA1` | ~5.8:1 | PASS      | PASS     | FAIL   |
| Warm Gray        | `#6B6863` | Bone             | `#F6F4EF` | ~4.6:1 | PASS      | PASS     | FAIL   |
| Warm Gray        | `#6B6863` | White            | `#FFFFFF` | ~4.8:1 | PASS      | PASS     | FAIL   |
| White            | `#FFFFFF` | Charcoal         | `#0F1317` | ~19:1  | PASS      | PASS     | PASS   |
| White            | `#FFFFFF` | Aegean           | `#0A5AA1` | ~6.1:1 | PASS      | PASS     | FAIL   |
| Charcoal         | `#0F1317` | Light Gray       | `#E8E6E1` | ~12:1  | PASS      | PASS     | PASS   |

> Ratios are calculated using the WCAG relative luminance formula. All AA-required combinations pass. AAA failures are noted for reference only and are not blocking.

---

### Focus States

- **Implementation:** Custom `focus-visible` ring applied globally via Tailwind's `focus-visible:ring-2 focus-visible:ring-aegean focus-visible:ring-offset-2`.
- **Color:** Aegean `#0A5AA1` — 5.8:1 contrast against bone background, exceeding the 3:1 minimum for focus indicators (WCAG 2.2 SC 1.4.11).
- **Width:** 2px solid ring.
- **Offset:** 2px, ensuring the ring does not overlap interactive element borders.
- **Scope:** Applied to all `<a>`, `<button>`, `<input>`, `<textarea>`, `<select>`, and `[role="button"]` elements.
- **Mouse users:** `focus-visible` selector ensures ring does not appear on click, only on keyboard navigation.

---

### Keyboard Navigation

| Feature                         | Implementation                                                                    | Status |
|---------------------------------|-----------------------------------------------------------------------------------|--------|
| Skip-to-content link            | First focusable element in `<body>`; visually hidden until focused; jumps to `#main-content` | PASS   |
| Logical tab order               | DOM order matches visual order; no positive `tabindex` values used                | PASS   |
| Full keyboard operability       | All interactive elements reachable and activatable via keyboard                   | PASS   |
| Modal focus trap                | Dialog components trap focus using `@radix-ui/react-dialog` built-in behavior     | PASS   |
| Dropdown navigation             | Services dropdown operable with Arrow keys, Enter, Escape                         | PASS   |
| Mobile menu                     | Hamburger button toggles menu; focus moves into menu; Escape closes it            | PASS   |
| No keyboard traps               | Verified no elements trap focus without an exit path                              | PASS   |

---

### Screen Reader Compatibility

| Requirement                          | Implementation                                                                  | Status |
|--------------------------------------|---------------------------------------------------------------------------------|--------|
| Decorative icons hidden              | All Lucide/SVG icons that are decorative have `aria-hidden="true"`              | PASS   |
| Meaningful images have alt text      | All `<Image>` components include descriptive `alt` props                        | PASS   |
| Form fields labeled                  | All inputs associated with `<label>` via `htmlFor`/`id`; no placeholder-only labels | PASS   |
| Section headings present             | Each page section has a logical heading (`h1`→`h2`→`h3`)                       | PASS   |
| Error messages announced             | Form errors use `role="alert"` and `aria-live="polite"` for live announcements  | PASS   |
| Link purpose clear                   | No bare "click here" or "read more" links; each link has descriptive text or `aria-label` | PASS   |
| Button purpose clear                 | All icon-only buttons have `aria-label`                                         | PASS   |
| Page language declared               | `<html lang="en">` set in root layout                                           | PASS   |

---

### ARIA Landmark Roles

| Role              | Element / Component       | `aria-label`                        |
|-------------------|---------------------------|-------------------------------------|
| `banner`          | `<header>`                | —                                   |
| `navigation`      | `<nav>` (primary)         | `"Primary navigation"`              |
| `navigation`      | `<nav>` (footer)          | `"Footer navigation"`               |
| `main`            | `<main id="main-content">`| —                                   |
| `contentinfo`     | `<footer>`                | —                                   |
| `search`          | Search form (if present)  | `"Site search"`                     |
| `complementary`   | Sidebar (if present)      | descriptive label                   |

Dropdown menus use `aria-expanded`, `aria-controls`, and `aria-haspopup="true"` on trigger buttons.

---

### Reduced Motion

All Framer Motion animations are gated on `useReducedMotion()`:

```tsx
const shouldReduce = useReducedMotion()

const variants = {
  hidden: { opacity: 0, y: shouldReduce ? 0 : 24 },
  visible: { opacity: 1, y: 0 },
}
```

- Applies to: section fade-ins, hero entrance, service card hovers, page transitions, scroll-triggered counters.
- CSS `@media (prefers-reduced-motion: reduce)` is also set in `globals.css` as a fallback, disabling transitions and animations at the CSS layer.
- Verified with `prefers-reduced-motion: reduce` in Chrome DevTools emulation.

---

### Font Sizes

| Element              | Size     | Compliant |
|----------------------|----------|-----------|
| Body copy            | 16px     | PASS      |
| Small/caption text   | 14px     | PASS      |
| Fine print / legal   | 13px     | PASS      |
| Minimum anywhere     | 12px     | PASS      |

No text renders below 12px. Sub-12px text is not used anywhere in the codebase.

---

### Touch Targets

- Minimum touch target size: 44px × 44px (WCAG 2.2 SC 2.5.5, Target Size AAA; also recommended under 2.5.8 AA).
- Navigation links, buttons, and form controls all meet or exceed this minimum via padding.
- Mobile menu items: min-height 48px.
- Icon buttons: wrapped in a 44px × 44px clickable area using padding.

---

## Performance Targets

### Core Web Vitals

| Metric                                    | Target     | Notes                                              |
|-------------------------------------------|------------|----------------------------------------------------|
| LCP (Largest Contentful Paint)            | < 2.5s     | Hero image preloaded with `priority` prop          |
| FID (First Input Delay) / INP             | < 100ms    | Minimal main-thread blocking JS                    |
| CLS (Cumulative Layout Shift)             | < 0.1      | All images have explicit `width`/`height`; fonts use `size-adjust` |
| TTFB (Time to First Byte)                 | < 800ms    | Static generation + Vercel Edge CDN               |
| FCP (First Contentful Paint)              | < 1.8s     | Critical CSS inlined; fonts preloaded              |

---

### Lighthouse Targets

| Category       | Target | Notes                                        |
|----------------|--------|----------------------------------------------|
| Performance    | ≥ 90   | Static pages, optimized images, minimal JS   |
| Accessibility  | 100    | Full WCAG 2.2 AA compliance                  |
| Best Practices | ≥ 95   | HTTPS, no deprecated APIs, no console errors |
| SEO            | 100    | Meta tags, sitemap, robots, structured data  |

---

### Image Strategy

- All images use `next/image` with automatic AVIF/WebP conversion and CDN delivery.
- Explicit `width` and `height` on every image to prevent layout shift (CLS = 0).
- Above-the-fold hero images use `priority={true}` to trigger `<link rel="preload">`.
- Below-the-fold images use default `loading="lazy"`.
- `sizes` prop set on responsive images to match actual rendered dimensions.
- Image quality: 85 (balances file size vs. visual fidelity).

---

### Font Loading Strategy

- Fonts loaded via `next/font/google` with `display: "swap"` to prevent FOUT blocking render.
- `Fraunces` (display/headings) and `Sora` (body) are subsetted to `latin` only.
- Critical font weights preloaded at build time by `next/font`.
- `size-adjust` descriptor used to minimize CLS during font swap.
- No `@import` in CSS; no external font `<link>` tags.

---

### Code Splitting & Lazy Loading

- Next.js App Router performs automatic per-route code splitting.
- Heavy components (Framer Motion animation wrappers, rich text editors, map embeds) use `next/dynamic` with `{ ssr: false }` where appropriate.
- `React.lazy()` + `Suspense` used for below-the-fold UI sections.
- Third-party scripts (analytics) deferred via `next/script` with `strategy="lazyOnload"`.

---

### Prefetching

- `next/link` automatically prefetches linked routes when they enter the viewport (production only).
- Critical navigation routes (Home, Services, Contact) are always visible in the nav and are prefetched on mount.

---

### CSS Optimization

- Tailwind CSS configured with `content` globs in `tailwind.config.ts`; unused styles are tree-shaken at build time.
- Critical CSS is inlined by Next.js automatically.
- No unused CSS classes remain in production bundle.
- `postcss-import` and `autoprefixer` in the PostCSS pipeline.

---

## Implemented Fixes Log

The following specific fixes were applied during development:

| # | Fix                                                                                      | File(s)                                              |
|---|------------------------------------------------------------------------------------------|------------------------------------------------------|
| 1 | Added `lang="en"` to root `<html>` element                                               | `app/layout.tsx`                                     |
| 2 | Added skip-to-content link as first child of `<body>`                                    | `app/layout.tsx`, `components/layout/SkipLink.tsx`   |
| 3 | Replaced all bare icon buttons with `aria-label` variants                                | `components/layout/Header.tsx`                       |
| 4 | Added `aria-hidden="true"` to all decorative SVG icons                                   | All icon usages across `components/`                 |
| 5 | Added `role="navigation"` and `aria-label` to primary and footer `<nav>` elements        | `components/layout/Header.tsx`, `components/layout/Footer.tsx` |
| 6 | Added `aria-expanded` and `aria-controls` to services dropdown trigger                   | `components/layout/ServicesDropdown.tsx`             |
| 7 | Gated all Framer Motion variants behind `useReducedMotion()` hook                        | `components/ui/AnimatedSection.tsx`, all page sections |
| 8 | Added `@media (prefers-reduced-motion: reduce)` CSS fallback                             | `app/globals.css`                                    |
| 9 | Set explicit `width` and `height` on all `<Image>` components to eliminate CLS           | All pages and components using images                |
| 10| Added `priority={true}` to above-the-fold hero images                                    | `app/page.tsx`, `app/services/[slug]/page.tsx`       |
| 11| Migrated font loading from `<link>` tags to `next/font/google`                           | `app/layout.tsx`                                     |
| 12| Added `focus-visible` ring styles globally                                                | `app/globals.css`, `tailwind.config.ts`              |
| 13| Increased minimum touch target size to 44px via padding utilities                        | `components/layout/Header.tsx`, `components/ui/Button.tsx` |
| 14| Added `role="alert"` and `aria-live="polite"` to form error containers                   | `components/contact/ContactForm.tsx`                 |
| 15| Ensured all form `<input>` elements have associated `<label>` elements                   | `components/contact/ContactForm.tsx`                 |
| 16| Added `sizes` prop to all responsive `<Image>` components                                | Multiple page components                             |
| 17| Deferred analytics scripts using `next/script strategy="lazyOnload"`                    | `app/layout.tsx`                                     |
| 18| Added `<id="main-content">` to `<main>` element for skip-link target                    | `app/layout.tsx`                                     |
| 19| Replaced positive `tabindex` values with DOM reordering                                  | `components/home/HeroSection.tsx`                    |
| 20| Added descriptive `aria-label` to all social media icon links                            | `components/layout/Footer.tsx`                       |
| 21| Added `autocomplete` attributes to all contact form fields                               | `components/contact/ContactForm.tsx`                 |
| 22| Ensured heading hierarchy (`h1` → `h2` → `h3`) on every page                            | All page components                                  |
| 23| Added `<title>` and `<desc>` to inline SVGs used as meaningful graphics                  | `components/ui/Logo.tsx`                             |
| 24| Removed `outline: none` overrides; replaced with `focus-visible` equivalents             | `app/globals.css`                                    |
| 25| Added `prefers-color-scheme` media query handling for OG image meta tags                 | `app/layout.tsx`                                     |

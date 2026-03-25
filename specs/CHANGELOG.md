# CHANGELOG

All notable changes to the Backstage project are documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.0] — 2026-03-24

### Added

- Initial project setup
- Brand system tokens
- IA and navigation specs
- Copy constants
- Luxury pattern analysis

#### Details

- `content/copy.ts` — Complete marketing copy constants for all pages (home, services × 5, work × 3, about, creators, contact, footer, legal). Single source of truth for all user-facing strings. Placeholder tokens marked with `[[DOUBLE BRACKETS]]` for client-supplied content.
- `specs/brief.md` — Full project brief covering brand identity, positioning, audience, color palette, typography system, spacing grid, information architecture, page-section maps, component architecture, SEO metadata strategy, performance targets, and agent contracts.
- `specs/nav.json` — Navigation structure JSON for primary nav (with Services dropdown children), mobile nav, CTA definitions, and full footer column/social/legal structure.
- `specs/sitemap.md` — Full sitemap specification covering all 16 URLs, per-page section maps, metadata priorities and changefreq values, internal linking strategy, robots.txt guidance, and Next.js implementation notes.
- `specs/luxury-patterns.md` — Luxury design pattern analysis across 8 disciplines (whitespace, image scale, typography, color, navigation, motion, content-before-commerce) with per-principle application guidelines specific to the Backstage brand and website.
- `specs/CHANGELOG.md` — This file.

---

*Maintained by the Backstage project team. Update this file with every structural change to specs, copy, or design tokens.*

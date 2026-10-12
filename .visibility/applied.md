# Applied changes: steviewoodrecovery.com

Log of every item in `REPORT.md` and what happened to it. Last updated 12 October 2026.
Branch: `claude/elegant-faraday-frljy0`. **The live site only changes once this branch is merged into `main`.**

## Client request (report section 4)

| # | Change | Status | Check |
|---|---|---|---|
| R1 | Page title → `Car Recovery Edinburgh \| 24/7 Towing & Breakdown \| Stevie Wood` | Done | 62 chars, seen by seo_audit.py |
| R2 | og:title → `Car Recovery Edinburgh, 24/7 \| Stevie Wood Recovery` | Done | head |
| R3 | Schema description rewritten | Done | JSON-LD parses |
| R4 | Hero badge → `Car Recovery Edinburgh · 24/7` (now the H1) | Done (redesign) | one H1 on page |
| R5 | Footer tagline → `Family-run car recovery in Edinburgh, 24 hours a day…` | Done | footer |
| - | Meta description and og:description rewritten (100+ reviews) | Done | 150 chars |

## Critical

| # | Change | Status | Check |
|---|---|---|---|
| C1 | `.co.uk` email | **Removed** from schema and both legal popups (owner's choice). Add the real email when Stevie confirms it (Q3) | grep finds no `co.uk` |
| C2 | Inline styles overriding mobile CSS | Done (redesign) | no sideways scroll at 17 sizes |
| C3 | Hero heading cut off on phones | Done (redesign) | fit test |
| C4 | Hero photo 1.2 MB from github.com | Done (redesign): local 107 KB webp, mobile 43 KB, preloaded | |

## High

| # | Change | Status | Check |
|---|---|---|---|
| H1 | `sitemap.xml` | Done | valid XML, 200 |
| H2 | `robots.txt` | Done | 200 |
| H3 | H1 with the main phrase | Done (redesign) | |
| H4 | Schema: AutomotiveBusiness, @id, +44 phone, logo, image, areaServed list, service catalogue | Done. **`sameAs` / `hasMap` waiting on Stevie's profile links (Q4)** | JSON-LD parses |
| H5 | Self-made review stars removed | Done | no `aggregateRating` |
| H6 | Are the 4 reviews real? | **Waiting on Stevie (Q6)**. Kept as they were | |
| H7 | Dead social links | Done (redesign): removed until real links exist | |
| H8 | FAQ + FAQPage schema | Done: 6 questions, schema matches the page word for word | |
| H9 | Render-blocking fonts/icons | Done: fonts preconnect, Font Awesome loads without blocking | icons still render |
| H10 | Gallery paths, captions, lazy loading | Done (redesign) | |

## Medium

| # | Change | Status |
|---|---|---|
| M1 | Opening paragraph with the phrase | Done (redesign) |
| M2 | Extra roads (A7, A1) | **Waiting on Stevie (Q9)**. A720 already listed |
| M3 | Heading order | Done (redesign) |
| M4 | Colour contrast | Checked: no failures on the new design |
| M5 | Social share image + og tags | Done: `public/images/social/og-image-1200x630.jpg` |
| M6 | GA4 + call tracking | **Waiting on a GA4 property ID** |
| M7 | Price line | **Waiting on Stevie (Q7)** |
| M8 | Dates | Done: © 2026, legal popups "Last updated October 2026" |

## Low

| # | Change | Status |
|---|---|---|
| L1 | meta keywords removed | Done |
| L2 | `llms.txt` | Done |
| L3 | Bigger tap targets on dots | Done (redesign) |
| L4 | Carousels pause / reduced motion | Done (redesign) |
| L5 | Area pages | Not started. Only with real local content, later |
| L6 | README | Done |

## Extra (owner request)
- Favicon from the logo: `favicon.ico`, `favicon-48.png`, `favicon-96.png`, `favicon-192.png` (Google search results want sizes in multiples of 48), `apple-touch-icon.png`, `public/images/brand/favicon-32.png`, plus `site.webmanifest`.
- Google Business Profile wording to match the site: `.visibility/GBP.md`.

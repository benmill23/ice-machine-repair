# Music City Ice Machine Repair — SEO Web App

A local-SEO–optimized marketing site for a commercial ice machine repair
business in Nashville, TN. Built with **Next.js 16 (App Router)** and deployed
on **Vercel**. The visual design is ported from the original single-page concept
(`_design-reference/original-index.html`).

## Stack

- Next.js 16 App Router (Turbopack) + React 19 + TypeScript
- next/font (DM Sans + Playfair Display)
- Hand-authored design system in `src/app/globals.css`
- Data-driven pages — add a service or city by editing one data file

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home (hero, services, brands, rates, guarantee, CTA) |
| `/services` | Services index |
| `/services/[slug]` | 6 service landing pages w/ FAQ schema |
| `/about` | About / trust |
| `/contact` | Contact details + request-service form (Server Action) |

### Programmatic-SEO entity pages (~100 pages total)

| Route | Count | Targets |
| --- | --- | --- |
| `/services/[slug]` | 8 | service intent — flagship "Commercial Ice Machine Repair", emergency, maintenance, cleaning/descaling, installation, diagnostics, warranty, consultation |
| `/brands/[slug]` | 14 | "{Brand} ice machine repair" — Manitowoc, Scotsman, Hoshizaki, Ice-O-Matic, Follett, Kold-Draft… with real model lines + brand-specific failure modes |
| `/problems/[slug]` | 14 | symptom/diagnostic — "not making ice", "leaking water", "cloudy ice"… with causes + FAQ schema |
| `/equipment/[slug]` | 10 | machine type — modular, undercounter, nugget, flake, cube, air/water/remote-cooled, dispensers |
| `/industries/[slug]` | 12 | audience — restaurants, bars, hotels, healthcare, c-stores… |
| `/service-areas/[slug]` | 30 | Nashville-metro cities w/ per-city districts, hard-water angle, and city FAQ |

**Strategy:** these are *entity* pages (each genuinely unique), **not** a service×city
matrix — for a single-location business a cartesian matrix is a doorway-page pattern
Google penalizes. Internal linking is hub-and-spoke (city pages link up to canonical
service/brand pages).

## SEO features

- Per-page `<title>`, meta description, canonical URL, Open Graph + Twitter cards
- Auto-generated branded Open Graph image (`src/app/opengraph-image.tsx`)
- Structured data (JSON-LD): `LocalBusiness`/`HVACBusiness`, `Service`,
  `FAQPage`, `BreadcrumbList`
- `sitemap.xml` and `robots.txt` generated from the data layer
- PWA `manifest.webmanifest` + SVG favicon

## Project structure

```
src/
  app/                 # routes, layout, sitemap/robots/manifest, OG image
  components/          # Header, Footer, ServiceCard, sections, icons, JsonLd
  lib/
    site.ts            # ⚠️ business config / NAP — EDIT THIS
    services.ts        # service catalog + FAQs
    locations.ts       # service-area cities (30)
    brands.ts          # ice machine brands (models, failure modes)
    catalog.ts         # problems + industries + equipment types
    seo.ts             # metadata + JSON-LD builders
```

## ⚠️ Before you go live — replace the placeholders

All marked with `TODO` in `src/lib/site.ts`:

1. **Business name** — `site.name` / `site.legalName`
2. **Phone** — `site.phone` (must match your Google Business Profile exactly)
3. **Email** — `site.email`
4. **Address** — `site.address` (a real address strongly helps local ranking)
5. **Domain** — `site.url` (canonical URLs, sitemap, OG tags all derive from it)
6. **Social/GBP links** — `site.social` (feeds schema `sameAs`)
7. **Rates / stats / brands** — confirm `site.rates`, `site.stats`, `site.brands`
8. **Service-area cities** — trim/extend `src/lib/locations.ts` to where you work
9. **Contact form delivery** — `src/app/contact/actions.ts` currently logs the
   lead. Wire up Resend, a webhook, or a database (see the TODO there).

Then submit `sitemap.xml` in Google Search Console and validate the structured
data with Google's Rich Results Test.

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Deploy

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new),
or run `vercel` with the CLI. No environment variables are required until you
wire up the contact form.

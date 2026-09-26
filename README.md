# CRS Auto Repair — Concept Website

> **Concept website created for presentation purposes.**
> Unofficial demo for CRS Auto Repair (1901 Del Mar Ave, San Gabriel, CA 91776). Not the
> business's official website and not endorsed by or affiliated with the business.

A premium, mobile-first marketing site concept built for a local American auto repair shop.
Only publicly available information is asserted anywhere on the site — see
[Content rules](#content-rules).

---

## Tech stack

| Concern          | Choice                                                        |
| ---------------- | ------------------------------------------------------------- |
| Framework        | Next.js 15 (App Router, static rendering) + React 19           |
| Language         | TypeScript (strict)                                           |
| Styling          | Tailwind CSS v4 (CSS-first config, design tokens in `@theme`)   |
| Fonts            | Manrope variable woff2, **self-hosted** (`app/fonts`)          |
| Images           | `next/image` (AVIF/WebP, responsive `sizes`, lazy by default)  |
| Motion           | ~40 lines of IntersectionObserver CSS transitions, no library  |
| Deployment       | Vercel (zero-config; auto-detects Next.js)                     |

No UI kit, no animation library, no icon package, no client-side data fetching.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
```

### Environment

| Variable                 | Required | Purpose                                                        |
| ------------------------ | -------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`   | No       | Canonical origin used for metadata, sitemap, robots and JSON-LD. Falls back to `https://crs-auto-repair-website.vercel.app`. |

Copy `.env.example` to `.env.local` and set the deployed URL after the first Vercel deploy.

---

## Project structure

```
app/
  layout.tsx            Metadata, font, JSON-LD, header/footer, mobile action bar
  page.tsx              Single-page composition (all sections)
  globals.css           Design tokens (@theme), utilities, reveal animation
  fonts/                Self-hosted Manrope (SIL OFL 1.1)
  icon.svg              Text-based favicon mark
  robots.ts sitemap.ts  SEO routes
  not-found.tsx         404
components/
  layout/               SiteHeader, MobileActionBar, SiteFooter
  sections/             Hero, TrustStrip, About, Services, Why, Process,
                        Reviews, Gallery, Faq, Contact
  ui/                   Button, SectionHeading, Wordmark, Carousel
  motion/               Reveal (scroll entrance)
  icons.tsx             Minimal 1.25px-stroke line icons (no icon dependency)
lib/
  business.ts           All verified business facts + placeholder copy  ← edit first
  schema.ts             LocalBusiness / AutoRepair structured data
  nav.ts  cn.ts
public/images/          Replaceable photography
```

---

## Content rules

**Everything factual lives in `lib/business.ts`.** Never hard-code a business fact in a
component — the hero, FAQ, footer, contact block and JSON-LD all read from that one file.

### Verified (publicly listed)

* Name: CRS Auto Repair
* Address: 1901 Del Mar Ave, San Gabriel, CA 91776
* Phone: (626) 573-3922 (`tel:+16265733922`)
* Hours: Mon–Fri 8:00 AM–5:00 PM · Sat 9:00 AM–3:00 PM · Sun Closed
* Google rating: 4.2 / 5 from 131 reviews — displayed **as a Google rating only**, and
  deliberately **not** emitted as `aggregateRating` structured data.

### Not verified — rendered as placeholders

| Area             | Treatment                                                                       |
| ---------------- | ------------------------------------------------------------------------------- |
| Services         | Demo categories with a “pending owner confirmation” label and category-level copy |
| Reviews          | Clearly marked sample cards. **No reviews are fabricated and no names invented.** |
| Gallery          | Generic automotive photography, captioned as concept imagery                      |
| FAQ (unverified) | Answers fall back to `UNVERIFIED_ANSWER`                                          |

Do **not** add certifications, years in business, warranties, guarantees, staff names,
pricing or turnaround claims until the owner confirms them.

### Updating the site after owner confirmation

1. **Services** — edit the `services` array in `components/sections/Services.tsx`, then
   remove the “Demo categories — pending owner confirmation” pill.
2. **Reviews** — replace the `placeholders` array in `components/sections/Reviews.tsx`
   with verified review text (only with permission to publish).
3. **Photos** — drop files into `public/images/` and update the imports + `alt` text in
   `Hero.tsx`, `About.tsx`, `Gallery.tsx`, `Contact.tsx`. The layouts need no changes.
4. **Hours / phone / address** — edit `lib/business.ts` only.
5. **Logo** — replace `<Wordmark />` (`components/ui/Wordmark.tsx`) with the owner's file.

---

## Deployment (Vercel)

The project uses Vercel's zero-config Next.js detection — no `vercel.json` is required.

1. Import `StudentOSNayan/crs-auto-repair-website` in Vercel.
2. Framework preset: **Next.js** (auto-detected). Build: `npm run build`. Output: `.next`.
3. Add `NEXT_PUBLIC_SITE_URL` = the production URL, then redeploy so canonical URLs and
   structured data point at the live domain.

Every page is statically rendered; `npm run build` produces no server-only routes.

---

## Performance notes

* Hero image is `priority` + `fetchPriority="high"`; every other image is lazy-loaded.
* All images are served through `next/image` with responsive `sizes` and blur placeholders.
* One self-hosted variable font file (~25 KB, `font-display: swap`) — no third-party
  font connection.
* Client JS is limited to the header (scroll-spy + menu), FAQ accordion and the
  reviews carousel; all other sections are server components.
* `prefers-reduced-motion` disables smooth scrolling, transitions and reveals.

## Accessibility notes

* Skip link, semantic landmarks (`header` / `nav` / `main` / `footer`), one `h1` with an
  unbroken heading order.
* Visible focus rings everywhere (accent outline, offset).
* Accessible accordion (`aria-expanded` / `aria-controls` / labelled regions).
* Mobile menu is a labelled dialog: Escape closes it, focus moves in and back out,
  background scroll is locked, closed menu is removed from the tab order.
* Tap targets ≥ 44 px; the Call / Directions bar is fixed on mobile.
* Text contrast meets WCAG AA on both the light and dark surfaces.

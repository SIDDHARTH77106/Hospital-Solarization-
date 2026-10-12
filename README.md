# Surya Sangam — Next.js

Responsive Next.js App Router site for Surya Sangam. The site uses a shared blue, teal, amber and deep-navy design system with solution-specific page compositions, responsive media, accessible interaction effects, and SEO metadata for every published pathway. Built with React, TypeScript, and custom CSS; no animation package is required.

## Run

Requires Node.js 20.9 or newer. From this folder:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For a production check, run `npm run build`, then `npm start`.

## Experience included

- Shared Surya Sangam header, announcements, footer, loading state, error state, and 404 page
- Unique solution layouts for healthcare, campuses, industry, utilities, civic infrastructure, and agrivoltaics
- Typewriter, marquee, scroll reveal, staggered entrances, spring transitions, hover states, rings, glass panels, grid fields, and noise texture
- Deferred video and solution visuals for fast initial rendering
- Reduced-motion and keyboard-focus support

## Site structure

- `app/page.tsx` — home experience and SuryaCalc interaction
- `app/solutions/page.tsx` — solution directory
- `app/solutions/[...slug]/page.tsx` — SEO-ready, solution-specific detail routes
- `app/solutions/data.ts` and `app/solutions/visitor-content.ts` — solution content and visitor-facing summaries
- `app/components/` — shared chrome, navigation, media, motion, progress, and visual modules
- `app/globals.css` — design system, responsive layouts, page variants, and interaction states

## Main files

- `app/page.tsx` — content, project data, slideshow, and scroll reveals
- `app/globals.css` — theme, layout, responsiveness, and motion
- `app/layout.tsx` — root layout and page metadata
- `public/favicon.svg` — editable favicon

# Gas Safety and Plumbing Engineering — Website

A modern, multi-page marketing website for **Gas Safety and Plumbing Engineering Ltd**, built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui and Framer Motion.

## Pages

- `/` — Home
- `/about` — About the company
- `/services` — Services overview
- `/services/[slug]` — Individual service detail pages (8 services, statically generated)
- `/portfolio` — Project gallery with category filters and a lightbox
- `/emergency` — 24/7 emergency call-out landing page
- `/faq` — Frequently asked questions
- `/contact` — Contact form, map and business details
- `/privacy-policy`, `/terms-of-service` — Legal pages
- Custom 404 page

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Editing content

Almost all business content lives in two files, so you can update copy without touching components:

- `lib/site-config.ts` — business name, phone, email, address, opening hours, nav links, Google Maps embed URL.
- `lib/data.ts` — services, FAQs, testimonials, portfolio projects, process steps, stats and "why choose us" points.
- `lib/media.ts` — the Pexels photo/video IDs used throughout the site.

## Images & video

All photography and video are served directly from the [Pexels](https://www.pexels.com/) CDN (free stock media) using real photo/video IDs — no local image assets are required. If you'd rather self-host the media, download the files from Pexels and swap the URLs in `lib/media.ts` for local paths under `/public`.

## Before going live

- **Testimonials** (`lib/data.ts` → `testimonials`) are placeholder quotes in a realistic style — replace them with real customer reviews before publishing.
- **Team section** (`app/about/page.tsx`) uses generic role titles rather than named staff — update with real names/photos if you'd like.
- **Domain** — update `siteConfig.url` in `lib/site-config.ts` to your real domain once you have one (used for SEO metadata and the sitemap).
- **Contact form** currently opens the visitor's email client with a pre-filled message (no backend required). If you'd like it to submit directly from the page, wire `components/contact-form.tsx` up to an email service such as Formspree, Resend, or a Next.js API route.
- **Google Map** embed works without an API key; for a fully-featured map (custom pins, styling) you can switch to the official Google Maps Embed API with an API key.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) components (Radix UI primitives)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [lucide-react](https://lucide.dev/) for icons

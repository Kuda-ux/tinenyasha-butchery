# Tinenyasha Butchery & Farm-Fresh Produces

Premium, modern, mobile-first marketing site for **Tinenyasha Butchery & Farm-Fresh Produces** — Marondera, Zimbabwe. Built with **Next.js 14 (App Router)** + **Tailwind CSS**, optimized for **Vercel** deployment.

## Features

- World-class hero with parallax background and animated CTAs
- Sticky responsive header with mobile menu and persistent **Order on WhatsApp** CTA
- Full product grid (Beef, Pork, Goat, Chicken, Fish, Sausages, Polony, Burger Patties, Farm-Fresh Produce)
- Why-Choose-Us value props with animated icon cards
- Delivery section with animated truck and same-day delivery messaging
- Contact section with click-to-call buttons, mailto, embedded Google Map
- Real shop photo gallery from `images/`
- Floating WhatsApp button (pre-fills order message)
- SEO-optimised metadata, Open Graph, sitemap & robots
- Smooth scroll, fade-up reveal-on-scroll, hover micro-interactions

## Tech Stack

- Next.js 14 + React 18
- Tailwind CSS 3
- `lucide-react` icons
- `next/image` with AVIF/WebP

## Brand Colors (extracted from logo)

| Token | Hex |
|---|---|
| `brand.navy` | `#0B2A5B` |
| `brand.red` | `#C8102E` |
| `brand.green` | `#2E7D32` |
| `brand.cream` | `#FFF8F1` |

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & Deploy to Vercel

```bash
npm run build
```

1. Push the project to GitHub.
2. Import the repo on [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — click **Deploy**.

That's it. Images from `public/` and Unsplash are auto-optimized at the edge.

## Customisation

- **Brand info** (phones, address, email, WhatsApp number, pre-filled message): `lib/site.js`
- **Product list**: `products` array in `app/page.jsx`
- **Why-us list**: `reasons` array in `app/page.jsx`
- **Brand colors / fonts**: `tailwind.config.js`
- **Logo**: `public/logo.jpeg`
- **Real shop photos**: `public/gallery/g1.jpeg` … `g8.jpeg`

## Contact

- 📍 59A Carrington Avenue, Marondera, Zimbabwe
- 📞 +263 778 285 191 · +263 785 384 43 · +263 777 276 416
- 📧 tinenyashaagroproducts@gmail.com

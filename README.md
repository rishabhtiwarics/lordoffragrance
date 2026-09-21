# Sarkar UI Clone (Top Bar + Header + Hero)

React + Vite recreation of the sarkar.store top announcement bar, header, and hero section only.

## Run it

```bash
npm i
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## What's included
- `AnnouncementBar` — the "THE POWER MOVE / ENDS IN ..." live countdown strip
- `Header` — hamburger icon, SARKAR logo, Buy Now button, cart icon
- `MobileMenu` — slide-in nav (opens from the hamburger icon)
- `Hero` — full-height background photo, "THE POWER Move" headline, date range, CTA button
- `ShopCollection` — "SHOP THE COLLECTION" black section with a Swiper.js carousel of 4 product cards (image, name, price + struck-through MRP, Add To Cart)
- `Footer` — "LORD OF FRAGRANCE" heading, email signup, Fragrances/Company/Policy/Contact columns, social row, and a "© 2026 ... A unit of Devillia" copyright line

## Notes
- Countdown timer is functional (client-side, resets on page reload to ~11h 27m).
- Fonts: Archivo (sans) + Dancing Script (script accent) via Google Fonts.
- Hero background and the 4 product photos are all free-to-use Unsplash images (loaded live over HTTPS), used as stand-ins since Sarkar's actual product photography is their own copyrighted asset. Swap the image URLs in `src/components/Hero.jsx` and `src/components/ShopCollection.jsx` for your own hosted "Lord of Fragrance" product shots whenever you have them — just needs to be an https URL.
- Header logo and footer branding were switched to "LORD OF FRAGRANCE" / "A unit of Devillia" per your brand. Product names in the carousel (Legacy Set, Orion, Noble, Throne) are placeholders copied from the reference layout — rename them to your own line-up in `src/components/ShopCollection.jsx`.
- Carousel uses `swiper` (React components) with built-in prev/next arrows and responsive slides-per-view (1 on mobile, up to 4 on desktop).
- Header is sticky (`position: sticky; top: 0`) so it stays pinned while scrolling. The hamburger icon toggles in place into an X when the menu is open (no separate black bar) — matches the reference where the header itself stays visible and the nav panel slides in underneath it.
- The nav panel and its backdrop always start exactly at the header's bottom edge, computed live via `getBoundingClientRect()` (updated on scroll/resize). This keeps the panel correctly placed whether the page is at the very top (header sitting below the announcement bar) or scrolled down (header stuck at the very top) — fixes the earlier issue where opening the menu near the top of the page pushed the panel up over the header/announcement bar.

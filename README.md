# Muhammad Anees — Apple-caliber Portfolio

A premium, minimal portfolio for a WordPress Developer, designed to feel like an Apple product page within 3 seconds of opening.

<div align="center">

[![Live](https://img.shields.io/badge/Live-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://muhammad-anees-portfolio.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-MuhammadAnees110-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MuhammadAnees110)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammadanees-dev/)
[![License](https://img.shields.io/badge/License-MIT-0071e3?style=for-the-badge)](LICENSE)

</div>

---

> Building **Modern, Fast, Responsive & SEO-Friendly** WordPress Websites for international clients, agencies, and software houses.

Pure **HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no build step, zero dependencies beyond Font Awesome and Google Fonts (Inter).

---

## Live Demo

**[muhammad-anees-portfolio.vercel.app](https://muhammad-anees-portfolio.vercel.app/)**

---

## Design System

### Typography
- **Font:** Inter (with `-apple-system, SF Pro, system-ui` fallbacks)
- **Hero headline:** `clamp(2.75rem, 6vw, 5.5rem)` — weight 700, letter-spacing `-0.035em`
- **Section headlines:** `clamp(2.25rem, 4.5vw, 3.75rem)` — letter-spacing `-0.03em`
- **Body:** 17px, line-height 1.5, letter-spacing `-0.01em`

### Color — monochrome with single accent
| Token | Light | Dark |
|-------|-------|------|
| Background | `#fbfbfd` | `#000000` |
| Text | `#1d1d1f` | `#f5f5f7` |
| Secondary | `#6e6e73` | `#a1a1a6` |
| Accent (CTAs only) | `#0071e3` | `#2997ff` |
| Hairline | `#d2d2d7` | `#424245` |

No gradients. One accent. Hairlines instead of card borders.

### Spacing
- Section padding: `clamp(80px, 12vw, 160px)`
- Text column max-width: `980px`
- Hairline borders everywhere instead of elevated cards

### Motion
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Reveals: fade + 24px rise, 600ms, staggered (each child +80ms)
- Skill bars: 1.2s width transition
- Press state: `scale(0.97)` on buttons

---

## What's NOT in This Design (Intentional)

Apple pages feel instant, not busy. So we removed:

- ❌ Loading spinner
- ❌ Custom cursor
- ❌ Floating background shapes
- ❌ Typing effect
- ❌ Glassmorphism cards
- ❌ Dark navy / royal blue gradients
- ❌ Multiple accent colors

---

## Sections (11)

1. **Hero** — fluid headline, single CTA pair
2. **About** — narrative prose + hairline meta grid
3. **Skills** — list view with animated bars (95% WP, 90% Woo, 92% Elementor, etc.)
4. **Services** — 11 numbered rows (`01`–`11`) with hairline separators
5. **Projects** — sticky pinned showcase with crossfading info (9 projects)
6. **Experience** — clean vertical timeline (5 milestones)
7. **Why Hire Me** — 6-cell hairline grid + testimonial placeholders
8. **GitHub** — minimal stats row + profile link
9. **LinkedIn** — narrative + bullet list + connect CTA
10. **Contact** — two-column form with GA4 conversion tracking
11. **Footer** — 4-column Apple-style hairline footer

---

## Featured Projects (all live links preserved)

| Project              | URL                                                  |
|----------------------|------------------------------------------------------|
| Pet Supply Go        | https://petsupplygo.com/                             |
| Cafe Bethak          | https://cafebethak.com/                              |
| Best Midwest Realtor | https://bestmidwestrealtor.com/                      |
| FET Logistics        | https://www.fetlogistics.co.uk/                      |
| Her Soul Business    | https://www.hersoulbusiness.com/                     |
| Blue Booms           | https://www.bluebooms.de/en                          |
| RazTech Group        | https://raztechgroup.com/                            |
| Hostinger Project 01 | https://moccasin-fish-183093.hostingersite.com/      |
| Hostinger Project 02 | https://white-mink-442627.hostingersite.com/         |

---

## File Structure

```
portfolio-apple/
├── index.html        # Semantic HTML5 + JSON-LD + GA4 + GSC verification
├── style.css         # Apple design system (27 KB)
├── script.js         # Reveals, sticky showcase, theme toggle (14 KB)
├── profile.jpeg      # Profile photo
├── googlef991da6a18570419.html  # Google Search Console verification
├── vercel.json       # Cache headers + security headers
├── .gitignore        # Standard web project ignores
├── LICENSE           # MIT
└── README.md         # This file
```

---

## Integrations

- ✅ **Google Analytics 4** (Measurement ID: `G-VJHN4VHHEB`) — page view tracking
- ✅ **GA4 conversion event** (`generate_lead`) on contact form submit
- ✅ **Google Search Console verification** (meta tag + HTML file)
- ✅ **Schema.org Person JSON-LD** structured data
- ✅ **Open Graph + Twitter Card** meta tags
- ✅ **Dark / Light theme toggle** with `localStorage` persistence + OS preference sync
- ✅ **Reduced motion** respected throughout
- ✅ **Lighthouse 95+** target (zero frameworks, passive scroll listeners)

---

## Run Locally

Just open `index.html` in any modern browser, or serve with:

```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

No build step. No dependencies.

---

## Deploy to Vercel

1. Push this folder to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Vercel auto-detects it as a static site (the `vercel.json` handles all config)
5. Click **Deploy** — done in ~30 seconds

---

## Customize

### Change theme color
Edit CSS variables at the top of `style.css`:
```css
:root { --accent: #0071e3; }              /* light mode */
[data-theme="dark"] { --accent: #2997ff; } /* dark mode */
```

### Change hero headline
Find this in `index.html`:
```html
<h1 class="hero__title reveal" style="--i:1">
    Building modern,<br>fast, responsive<br>&amp; SEO-friendly websites.
</h1>
```

### Add a project
Duplicate any `<article class="showcase__item" data-project="...">` block in the projects section.

---

## Browser Support

Chrome / Edge 90+ · Firefox 88+ · Safari 14+ · iOS Safari 14+ · Chrome Android

---

## License

MIT — see [LICENSE](LICENSE)

---

## Author

**Muhammad Anees** — WordPress Developer

- 📧 [m.anees.dev0@gmail.com](mailto:m.anees.dev0@gmail.com)
- 🐙 [github.com/MuhammadAnees110](https://github.com/MuhammadAnees110)
- 💼 [linkedin.com/in/muhammadanees-dev](https://www.linkedin.com/in/muhammadanees-dev/)
- 📞 +92 312 7507168
- 📍 Karachi, Pakistan

---

<div align="center">

Designed with restraint. Built with vanilla HTML, CSS, and JS.

</div>

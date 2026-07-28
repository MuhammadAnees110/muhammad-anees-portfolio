# Muhammad Anees — WordPress Developer Portfolio

A premium, production-ready personal portfolio website built with pure **HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no build step, no dependencies beyond Font Awesome and Google Fonts.

---

## Folder Structure

```
portfolio/
├── index.html        # Main HTML document — all 11 sections, SEO, Schema.org JSON-LD
├── style.css         # All styles — themes, layouts, animations, responsive rules
├── script.js         # All interactivity — modular vanilla JS (15 modules)
├── profile.jpeg      # Profile photo (used in Hero, About, Favicon, OG image)
└── index.md          # This documentation file
```

**Total size:** ~221 KB (without external CDN assets)
- `index.html` — 61 KB
- `style.css` — 48 KB
- `script.js` — 20 KB
- `profile.jpeg` — 92 KB

---

## How To Run

### Option 1 — Open directly
Double-click `index.html` to open in any modern browser.

### Option 2 — Local server (recommended)
```bash
cd portfolio
python3 -m http.server 8080
# then open http://localhost:8080
```
A local server is recommended so that `localStorage`, lazy loading, and the
Schema.org JSON-LD all behave the same way they will in production.

### Deploy
Upload the entire `portfolio/` folder to any static host:
- **Netlify** — drag-and-drop the folder
- **Vercel** — `vercel deploy`
- **GitHub Pages** — push to a repo, enable Pages
- **Hostinger / cPanel** — upload via File Manager or FTP to `public_html/`

---

## Sections Included

The site contains **11 sections** in this order:

| # | Section        | ID           | Highlights                                                       |
|---|----------------|--------------|------------------------------------------------------------------|
| 1 | Hero           | `#hero`      | Full-screen, morphing photo, typing effect, floating shapes      |
| 2 | About Me       | `#about`     | Bio, meta info, stats counters, CV download button               |
| 3 | Skills         | `#skills`    | Animated progress bars + chip cloud + skill stats                |
| 4 | Services       | `#services`  | 11 animated service cards with hover lift                        |
| 5 | Featured Projects | `#projects` | 9 project cards with category filtering + live links            |
| 6 | Experience Timeline | `#experience` | 5 milestone cards with dot markers + glass cards             |
| 7 | Why Hire Me    | `#why-hire-me` | 6 reason cards + 3 testimonial placeholders                   |
| 8 | GitHub Section | `#github`    | Stats counters + code-snippet card + profile link               |
| 9 | LinkedIn Section | `#linkedin` | Animated LinkedIn icon + benefit list + connect CTA             |
| 10 | Contact       | `#contact`   | Contact info + validated form (name, email, subject, budget, message) |
| 11 | Footer        | —            | 4-column layout + socials + copyright                           |

Plus standalone components:
- Sticky navbar with scroll spy
- Loading animation (3-ring spinner)
- Custom cursor (desktop only)
- Scroll progress bar
- Back-to-top button
- Client logos strip
- Dark / Light theme toggle

---

## Design System

### Color Palette

| Token            | Hex        | Usage                                  |
|------------------|------------|----------------------------------------|
| Dark Navy        | `#071A2F`  | Primary background (dark theme)        |
| Navy 2           | `#0B2440`  | Surfaces, navbar                       |
| Navy 3           | `#102E50`  | Elevated surfaces                      |
| Royal Blue       | `#2563EB`  | Primary accent, buttons, links         |
| Royal Blue 2     | `#3B82F6`  | Hover state                            |
| Royal Blue 3     | `#60A5FA`  | Light accent, gradients                |
| White            | `#FFFFFF`  | Text on dark                           |
| Light Gray       | `#E5E9F0`  | Borders, muted text                    |
| Slate            | `#94A3B8`  | Secondary text                         |

### Typography
- **Font family:** Poppins (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700, 800, 900
- **Headings:** 700–800 weight, tight letter-spacing
- **Body:** 400 weight, 1.65 line-height

### Spacing & Radius
- Container max-width: `1200px`
- Section padding: `70px – 130px` (responsive)
- Card radius: `18px` (default), `28px` (large), `36px` (xl)
- Button radius: `999px` (pill)

### Effects
- Glassmorphism: `backdrop-filter: blur(14px)` + semi-transparent surface
- Soft shadows: 3-tier system (sm / md / lg)
- Smooth transitions: `cubic-bezier(0.22, 1, 0.36, 1)`
- Reveal animations: `IntersectionObserver` + CSS transitions

---

## JavaScript Modules

`script.js` is organised into 15 self-contained modules inside an IIFE:

| # | Module           | Responsibility                                                |
|---|------------------|---------------------------------------------------------------|
| 1 | `Loader`         | Hides the loading screen on `window.load`                     |
| 2 | `Cursor`         | Custom dot + follower cursor (desktop only)                   |
| 3 | `Navbar`         | Scroll state, mobile hamburger menu, body scroll lock         |
| 4 | `ScrollProgress` | Top progress bar tied to scroll position                      |
| 5 | `SectionSpy`     | Highlights active navbar link via IntersectionObserver        |
| 6 | `Typing`         | Cycles 6 role phrases with type / delete animation            |
| 7 | `Reveal`         | Adds `visible` class to `.reveal` elements in viewport        |
| 8 | `Counters`       | Animates numbers from 0 → `data-target` with easeOutExpo      |
| 9 | `SkillBars`      | Sets progress bar width from `data-progress` on scroll-in     |
| 10 | `ProjectFilter` | Filters `.project-card` by `data-category`                    |
| 11 | `Theme`         | Dark/light toggle, persists in `localStorage`                 |
| 12 | `ContactForm`   | Client-side validation + simulated submit with loading state  |
| 13 | `BackToTop`     | Shows/hides back-to-top button after 500px scroll             |
| 14 | `FooterYear`    | Auto-updates copyright year                                    |
| 15 | `init()`        | Boots all modules on `DOMContentLoaded`                       |

---

## Featured Projects

All 9 projects include category, tech stack, description, and a Live Website button:

| Project               | URL                                                          | Category            |
|-----------------------|--------------------------------------------------------------|---------------------|
| Pet Supply Go         | https://petsupplygo.com/                                     | E-Commerce          |
| Cafe Bethak           | https://cafebethak.com/                                      | Restaurant          |
| Best Midwest Realtor  | https://bestmidwestrealtor.com/                              | Real Estate         |
| FET Logistics         | https://www.fetlogistics.co.uk/                              | Logistics           |
| Her Soul Business     | https://www.hersoulbusiness.com/                             | Business            |
| Blue Booms            | https://www.bluebooms.de/en                                  | Corporate           |
| RazTech Group         | https://raztechgroup.com/                                    | Corporate           |
| Hostinger Project 01  | https://moccasin-fish-183093.hostingersite.com/              | Business            |
| Hostinger Project 02  | https://white-mink-442627.hostingersite.com/                 | Business            |

---

## Services Offered

1. WordPress Development
2. WooCommerce Development
3. Elementor Development
4. Custom Theme Customization
5. Plugin Customization
6. Website Redesign
7. Landing Pages
8. Website Migration
9. Website Maintenance
10. Website Speed Optimization
11. Technical Support

---

## Technical Skills

WordPress · WooCommerce · Elementor · HTML5 · CSS3 · JavaScript · PHP · MySQL · Git · GitHub · Bootstrap · Responsive Design · SEO · Website Security · Website Performance · Website Migration · Bug Fixing · cPanel · Hosting

---

## Personal Information

| Field          | Value                                      |
|----------------|--------------------------------------------|
| Name           | Muhammad Anees                             |
| Role           | WordPress Developer                        |
| Email          | muhammadanees1894@gmail.com                |
| Phone          | +92 312 7507168                            |
| Location       | Gulshan-e-Hadeed, Karachi, Pakistan        |
| GitHub         | https://github.com/MuhammadAnees110        |
| LinkedIn       | https://www.linkedin.com/in/muhammadanees-dev/ |
| Availability   | Open to freelance & remote work            |
| Working Hours  | Mon – Sat · 9 AM – 9 PM (PKT)              |

---

## SEO Features

- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Meta title, description, keywords, author, robots
- Open Graph tags (Facebook sharing)
- Twitter Card tags
- **Schema.org Person JSON-LD** structured data
- Canonical link
- Proper heading hierarchy (h1 → h2 → h3 → h4)
- `alt` text on all images
- `aria-label` on icon-only buttons
- `aria-expanded` on mobile menu toggle
- `aria-live="polite"` on form status
- Lazy loading (`loading="lazy"`) on non-critical images
- `fetchpriority="high"` on hero image

---

## Performance

- **No frameworks** — pure HTML/CSS/JS, zero bundler overhead
- **No jQuery** — vanilla JS only
- **Font Awesome** loaded via CDN with `referrerpolicy="no-referrer"`
- **Google Fonts** loaded with `preconnect` for faster TTFB
- **IntersectionObserver** for all scroll-triggered animations (no scroll listeners thrashing)
- **CSS transitions** instead of JS animations where possible
- **`will-change`** only on animated elements
- **`prefers-reduced-motion`** respected — disables all animations for users who request it
- Target Lighthouse score: **95+**

---

## Responsive Breakpoints

| Breakpoint | Target                | Changes                                       |
|------------|-----------------------|-----------------------------------------------|
| Default    | Desktop (>1100px)     | Full 2-column layouts, custom cursor active   |
| ≤ 1100px   | Laptop                | Hero, About, Skills, Contact stack to 1 col   |
| ≤ 900px    | Tablet                | Mobile nav drawer, hero centers, footer 2-col |
| ≤ 600px    | Mobile                | Single column everywhere, smaller paddings    |

---

## Extra Features

- Animated hero with morphing photo + floating shapes
- Project filtering by category (All, E-Commerce, Business, Restaurant, Real Estate, Logistics, Corporate)
- Animated counters (projects, satisfaction, tech stack, commits, etc.)
- Skill progress bars (8 bars with percentages)
- Testimonials placeholder section
- Client logos placeholder strip
- Download CV button (2 placements: hero + about)
- Email contact form with validation
- Dark / Light mode toggle (persists across sessions)
- Custom cursor effects (desktop only)
- Section reveal animations (staggered)
- Professional 4-column footer
- Back-to-top button
- Loading animation
- Scroll progress bar
- Sticky glass navbar with active section spy
- Smooth scrolling
- WhatsApp contact link

---

## Tech Stack

| Layer       | Technology                                     |
|-------------|------------------------------------------------|
| Markup      | HTML5                                          |
| Styling     | CSS3 (Custom Properties, Grid, Flexbox)        |
| Scripting   | Vanilla JavaScript (ES6+, IIFE modules)        |
| Icons       | Font Awesome 6.5.1 (CDN)                       |
| Fonts       | Poppins — Google Fonts                         |
| Build       | None — open and run                            |

---

## Customization Guide

### Change theme color
Edit the CSS variables at the top of `style.css`:
```css
:root {
    --royal:   #2563EB;  /* primary accent */
    --royal-2: #3B82F6;  /* hover */
    --royal-3: #60A5FA;  /* light */
}
```

### Add a new project
Copy any `<article class="project-card reveal" data-category="...">` block in `index.html`, then:
- Change `data-category` to one of: `ecommerce`, `business`, `restaurant`, `realestate`, `logistics`, `corporate`
- Update the `--hue` value on `.project-card__placeholder` for a different gradient color (0–360)
- Update title, description, tech stack, and the live URL

### Add a new skill bar
```html
<div class="skill-bar">
    <div class="skill-bar__head"><span>Skill Name</span><span>85%</span></div>
    <div class="skill-bar__track"><div class="skill-bar__fill" data-progress="85"></div></div>
</div>
```

### Wire up the contact form
The form currently uses simulated submission. To make it real, replace the `setTimeout` block in `script.js` → `ContactForm.handleSubmit` with a `fetch()` call to your endpoint (Formspree, WP REST API, Netlify Forms, etc.).

### Replace the CV download
Find `Download CV` buttons in `index.html` and update the `href` attribute to point to your real CV file (e.g., `href="Muhammad-Anees-CV.pdf"`).

---

## Browser Support

Tested and working on:
- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+
- Mobile Safari (iOS 14+)
- Chrome Android

---

## License

Personal portfolio for **Muhammad Anees**. You may freely use, modify, and deploy this code for personal/portfolio purposes.

---

## Credits

- **Design & Development:** Muhammad Anees
- **Icons:** [Font Awesome](https://fontawesome.com/)
- **Fonts:** [Poppins — Google Fonts](https://fonts.google.com/specimen/Poppins)
- **Built with:** HTML5, CSS3, Vanilla JavaScript — no frameworks

---

*Last updated: 2026*

<div align="center">

# Muhammad Anees

### WordPress Developer & WooCommerce Specialist

[![Live Site](https://img.shields.io/badge/Live-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![GitHub](https://img.shields.io/badge/GitHub-MuhammadAnees110-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MuhammadAnees110)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammadanees-dev/)
[![License](https://img.shields.io/badge/License-MIT-2563EB?style=for-the-badge)](LICENSE)

</div>

---

> Building **Modern, Fast, Responsive & SEO-Friendly** WordPress Websites for international clients, agencies, and software houses.

A premium, production-ready personal portfolio website built with **pure HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no build step, zero dependencies beyond Font Awesome and Google Fonts. Designed to impress on Awwwards, Fiverr, Upwork, LinkedIn, and university presentations.

---

## Live Demo

Once deployed on Vercel, your site will be live at:
```
https://<your-project-name>.vercel.app
```

---

## Tech Stack

| Layer       | Technology                                  |
|-------------|---------------------------------------------|
| Markup      | HTML5 (semantic)                            |
| Styling     | CSS3 (Custom Properties, Grid, Flexbox)     |
| Scripting   | Vanilla JavaScript (ES6+, IIFE modules)     |
| Icons       | Font Awesome 6.5.1 (CDN)                    |
| Fonts       | Poppins — Google Fonts                      |
| Build       | None — static files, deploy as-is           |

---

## Project Structure

```
portfolio/
├── index.html        # Main HTML — 11 sections, SEO, Schema.org JSON-LD
├── style.css         # All styles — themes, animations, responsive
├── script.js         # 15 modular vanilla JS modules
├── profile.jpeg      # Profile photo (hero, about, favicon, OG)
├── index.md          # Full in-project documentation
├── .gitignore        # Git ignore rules
├── LICENSE           # MIT License
└── README.md         # This file
```

---

## Features

### Sections (11)
Hero · About · Skills · Services · Featured Projects · Experience Timeline · Why Hire Me · GitHub · LinkedIn · Contact · Footer

### Premium UI/UX
- Dark Navy `#071A2F` + Royal Blue `#2563EB` palette
- Glassmorphism cards with backdrop blur
- Morphing hero photo with floating shapes
- Animated typing effect (6 role phrases)
- Loading animation with 3-ring spinner
- Custom cursor (desktop only)
- Scroll progress bar
- Back-to-top button
- Sticky glass navbar with active section spy

### Interactivity
- Project filtering by category (7 filters)
- Animated counters with easeOutExpo
- Skill progress bars (8 bars)
- Dark / Light theme toggle (persisted in localStorage)
- Contact form with client-side validation
- Smooth scroll + section reveal animations

### Performance & SEO
- Lighthouse 95+ target
- Zero frameworks, zero build step
- IntersectionObserver for all scroll animations
- `prefers-reduced-motion` respected
- Schema.org Person JSON-LD
- Open Graph + Twitter Card meta tags
- Semantic HTML5, accessible nav, alt text, lazy loading
- Mobile-first responsive (desktop / laptop / tablet / mobile)

---

## Featured Projects

| Project              | Category     | URL                                        |
|----------------------|--------------|--------------------------------------------|
| Pet Supply Go        | E-Commerce   | https://petsupplygo.com/                   |
| Cafe Bethak          | Restaurant   | https://cafebethak.com/                    |
| Best Midwest Realtor | Real Estate  | https://bestmidwestrealtor.com/            |
| FET Logistics        | Logistics    | https://www.fetlogistics.co.uk/            |
| Her Soul Business    | Business     | https://www.hersoulbusiness.com/           |
| Blue Booms           | Corporate    | https://www.bluebooms.de/en                |
| RazTech Group        | Corporate    | https://raztechgroup.com/                  |
| Hostinger Project 01 | Business     | https://moccasin-fish-183093.hostingersite.com/ |
| Hostinger Project 02 | Business     | https://white-mink-442627.hostingersite.com/   |

---

## Quick Start

### Run locally
```bash
# Clone the repository
git clone https://github.com/MuhammadAnees110/<repo-name>.git
cd <repo-name>

# Option A: just open index.html in your browser
open index.html      # macOS
xdg-open index.html  # Linux
start index.html     # Windows

# Option B: serve with a local dev server (recommended)
python3 -m http.server 8080
# then open http://localhost:8080
```

### Deploy on Vercel
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects it as a static site — **no configuration needed**
5. Click **Deploy**

Your site is live in under 60 seconds. ⚡

---

## Customization

### Change theme color
Edit CSS variables at the top of `style.css`:
```css
:root {
    --royal:   #2563EB;  /* primary accent */
    --royal-2: #3B82F6;  /* hover */
    --royal-3: #60A5FA;  /* light */
}
```

### Add a new project
Duplicate any `<article class="project-card">` block in `index.html` and update the `data-category`, title, description, tech stack, and live URL.

### Wire up the contact form
Replace the simulated `setTimeout` in `script.js` → `ContactForm.handleSubmit` with a real `fetch()` call to Formspree, Netlify Forms, or a WP REST API endpoint.

Full customization guide is in [`index.md`](index.md).

---

## Browser Support

Chrome / Edge 90+ · Firefox 88+ · Safari 14+ · Opera 76+ · iOS Safari 14+ · Chrome Android

---

## License

Released under the [MIT License](LICENSE). Free to use, modify, and deploy.

---

## Author

**Muhammad Anees** — WordPress Developer

- Email: [muhammadanees1894@gmail.com](mailto:muhammadanees1894@gmail.com)
- GitHub: [@MuhammadAnees110](https://github.com/MuhammadAnees110)
- LinkedIn: [muhammadanees-dev](https://www.linkedin.com/in/muhammadanees-dev/)
- Phone: +92 312 7507168
- Location: Karachi, Pakistan

---

<div align="center">

Designed & developed with ❤️ using HTML5, CSS3 & Vanilla JS.

</div>

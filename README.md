# 🌀 ILIV007 Portfolio — v2.0.1

> **AI Automation Engineer | Computer Engineering Student**
> A cosmic-themed, bilingual portfolio showcasing AI systems, automation workflows, and experimental software.

🔗 **Live Demo**: [https://iliv007-cv.pages.dev](https://iliv007-cv.pages.dev)

---

## ✨ What's New in v2.0.1

This is a **complete rebuild** with a clean, modular structure. Highlights:

- 🗂️ **Modular structure** — split the single 991-line HTML into focused CSS/JS files
- 🐛 **Critical bug fixes** — no-JS fallback, language persistence, broken toolkit grid
- ♿ **Accessibility overhaul** — `prefers-reduced-motion`, skip link, focus management, ARIA labels, better contrast
- ⚡ **Performance** — preconnect hints, immutable cache headers, optimized IntersectionObserver
- 🔍 **SEO** — JSON-LD `Person` schema, canonical URL, `robots.txt`, `sitemap.xml`
- 🛡️ **Security** — full `_headers` config (CSP, HSTS, X-Frame-Options, etc.)
- 🎨 **Polished UI** — scroll progress bar, back-to-top button, refined colors & motion
- 🖨️ **Print stylesheet** — CV is now print-friendly
- 📱 **PWA manifest** + custom 404 page
- 🌍 **OG image** (SVG) + favicon

See [CHANGELOG](#-changelog) below for the full list.

---

## 🚀 Featured Projects

| Project | Description | Tech Stack |
|---------|-------------|-----------|
| **IV \| AI** | Multi-model AI assistant on Cloudflare Workers with Prompt Master system | JavaScript, Cloudflare Workers, Telegram API, AI/LLM |
| **Warehouse DB** | SQL Server database with LIFO inventory & automated tracking | SQL Server, T-SQL, SSMS |
| **Crypto Tracker** | Automated crypto price alerts via CoinMarketCap API → Telegram | N8N, Docker, Telegram Bot |
| **Cafe Management** | Console app with dynamic menu & order processing | C++, Console UI |
| **This Portfolio** | Iterative conversational development, cosmic theme | HTML, CSS, JavaScript |

---

## 🛠️ Tech Stack

**Core:** Python · JavaScript · C++ · SQL · HTML/CSS
**AI & Automation:** OpenRouter · Cloudflare Workers · N8N · Telegram API · Prompt Engineering · Hugging Face
**Data & Infra:** SQL Server · SSMS · T-SQL · REST APIs · Docker · Cloudflare Pages
**Tools:** Git · GitHub · VS Code · Google Colab · WordPress

---

## 🗂️ Project Structure (v2.0.1)

```
Cv-website/
├── index.html              # Main HTML (semantic, ~480 lines)
├── 404.html                # Custom "Lost in space" 404 page
├── css/
│   ├── variables.css       # Design tokens (colors, spacing, motion)
│   ├── base.css            # Reset, typography, body, a11y utilities
│   ├── components.css      # Buttons, cards, tags, switches, widgets
│   ├── sections.css        # Hero, about, timeline, projects, toolkit…
│   ├── animations.css      # Keyframes + motion utility classes
│   └── responsive.css      # Breakpoints, RTL, print, reduced-motion
├── js/
│   ├── i18n.js             # Bilingual switching + localStorage persistence
│   ├── ui.js               # Stars, scroll reveal, progress bar, back-to-top
│   └── main.js             # Entry point — wires everything on DOM ready
├── assets/
│   ├── favicon.svg         # SVG favicon with "IV" monogram
│   ├── og-cover.svg        # Open Graph / Twitter card image (1200×630)
│   └── manifest.json       # PWA web app manifest
├── _headers                # Cloudflare security + cache headers
├── _redirects              # 404 → custom page
├── robots.txt              # Crawler rules
├── sitemap.xml             # Sitemap
├── .gitignore
├── README.md               # This file
└── LICENSE                 # MIT
```

> 💡 Still dependency-free — no build step required. Just static files.

---

## 📦 How to Use

### 1. Clone the Repository
```bash
git clone https://github.com/ILIV007/iliv007-cv.git
cd iliv007-cv
```

### 2. Run Locally
Open `index.html` directly in your browser, **or** serve it for a more accurate environment:
```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .

# Bun
bunx serve .
```

### 3. Deploy to Cloudflare Pages (Recommended)
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy .
```

> The `_headers` and `_redirects` files are picked up automatically by Cloudflare Pages.

### 4. Customization
- **Content** — edit bilingual text via `data-en` / `data-fa` attributes in `index.html`
- **Theme** — tweak CSS variables in `css/variables.css`
- **Links & projects** — edit directly in `index.html`
- **OG image / favicon** — replace files in `assets/`

---

## 🌍 Language Switching

- **EN** — English (LTR)
- **FA** — Persian (RTL with Vazirmatn font)

The selected language is **persisted in `localStorage`** and restored on next visit. First-time visitors with a Persian browser get Persian automatically.

Switching updates: all text content, text direction (`ltr`/`rtl`), font stack, and component alignment.

---

## ♿ Accessibility

- ✅ Semantic HTML5 (`header`, `main`, `section`, `article`, `nav`, `footer`)
- ✅ Skip-to-content link
- ✅ Keyboard-navigable with visible focus rings
- ✅ `prefers-reduced-motion` respected (animations disabled on request)
- ✅ ARIA labels on interactive controls; decorative icons hidden
- ✅ Color contrast tuned for WCAG AA
- ✅ No-JS fallback (all content visible without JavaScript)

---

## 🛡️ Security & Performance

- **CSP**, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS via `_headers`
- Immutable cache for CSS/JS/assets (1 year)
- `preconnect` to both Google Fonts hosts
- `IntersectionObserver` with `unobserve` to free memory
- `requestAnimationFrame`-throttled scroll handlers

---

## 📋 Changelog

### v2.0.1 — Rebuild
**Critical fixes**
- Fixed missing OG image & `.gitignore` (BUG-01)
- No-JS fallback: reveal content always visible without JS (BUG-02)
- Language preference persisted in `localStorage` (BUG-03)
- Toolkit grid rebuilt to fill 12 columns with zero gaps (BUG-04)
- Removed "0 GitHub Stars" stat; replaced with "3+ Years Coding" (BUG-05)

**Accessibility**
- `prefers-reduced-motion` support (A11Y-01)
- Skip-to-content link (A11Y-02)
- Focus management on anchor navigation (A11Y-03)
- Brighter `--text-muted` / `--text-dim` for WCAG AA (A11Y-04)
- ARIA labels on language buttons, `aria-hidden` on decorative SVGs (A11Y-05)
- Removed inline `onclick`; uses `addEventListener` (A11Y-06)

**Performance**
- `preconnect` to `fonts.gstatic.com` (PERF-01)
- Immutable cache headers for static assets (PERF-02)
- `IntersectionObserver` now `unobserve`s after reveal (PERF-03)

**SEO**
- JSON-LD `Person` structured data (SEO-01)
- Canonical URL (SEO-02)
- `robots.txt` + `sitemap.xml` (SEO-03)
- All OG/Twitter meta consistent

**Security**
- Full `_headers` config (CSP, HSTS, X-Frame-Options, etc.) (SEC-01)
- Custom 404 page via `_redirects` (SEC-02)

**Code quality**
- Email unified to `iliv007@proton.me` everywhere (CODE-02)
- Print stylesheet added (CODE-03)
- PWA `manifest.json` (CODE-04)
- 2026 timeline entry relabeled as "Roadmap" (CODE-05)
- Inline styles removed; moved to classes (CODE-01)

**New UI**
- Scroll progress indicator (top)
- Back-to-top floating button
- Refined color palette + violet accent
- Subtle hero entrance animations
- Sticky footer that never floats

### v1.0.0 — Initial release
- Single-file `index.html` portfolio, cosmic theme, bilingual EN/FA

---

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 📬 Contact

- **Telegram**: [@iliv007](https://t.me/iliv007)
- **Channel**: [t.me/ILIVIR3](https://t.me/ILIVIR3)
- **Email**: [iliv007@proton.me](mailto:iliv007@proton.me)
- **GitHub**: [@ILIV007](https://github.com/ILIV007)

---

> *"Built with curiosity, caffeine, and countless iterations."* ☕🚀

# 🌀 ILIV007 Portfolio — v2.0.8

> **AI Automation Engineer | Computer Engineering Student**
> A cosmic-themed, bilingual portfolio showcasing AI systems, automation workflows, and experimental software.

🔗 **Live Demo**: [https://iliv007-cv.pages.dev](https://iliv007-cv.pages.dev)

---

## ✨ What's New in v2.0.8

A **redesign & cleanup** release.

- 🗺️ **Timeline is now a true roadmap** — zigzag layout with cards alternating left/right around a central glowing road. Each milestone is a uniquely colored planet (blue → cyan → green → gold → violet). Mirrors automatically in RTL via CSS grid.
- 📦 **Toolkit restored to original** — 12-column bento grid with AI Systems as the large hero card (7 cols × 2 rows), Engineering/Cloud stacked beside it, Hardware/Workflow below, and Also Worked With full-width at the bottom.
- 🧹 **Full code audit** — verified all file paths, class references, and cross-file consistency. Codebase is clean and ready for new content.

---

## ✨ What's New in v2.0.7

A **bugfix** release for the PWA manifest.

- 🐛 **Fixed manifest icon 404** — the manifest referenced `assets/favicon.svg` (relative), which resolved to the broken `/assets/assets/favicon.svg`. Now uses the root-absolute `/assets/favicon.svg`.
- 🌀 **favicon.svg updated** — now renders the 🌀 emoji to match the browser tab icon.

---

## ✨ What's New in v2.0.6

A **quality** release. The toolkit bento layout is back, the timeline planets are bigger, and all Persian copy is rewritten to sound natural.

- 📦 **Toolkit bento layout** — AI card spans 2 columns (wide hero), 3 equal cards below, full-width footer card. Clean hierarchy, zero gaps.
- 🪐 **Bigger timeline planets** — orbs bumped from 56px to 76px with stronger glow, more dramatic cosmic feel
- ✍️ **Persian completely rewritten** — every `data-fa` string rewritten in natural, idiomatic Persian (not translated). Fixed the "ابهماشی" typo, clunky phrasings, and mismatched tone

---

## ✨ What's New in v2.0.5

The timeline ("Evolution") section is reborn as a **cosmic journey**.

- 🪐 **Glowing planet orbs** — each milestone is a luminous sphere with the year on its surface, complete with a rotating orbital ring
- ☄️ **Traveling comet** — a glowing comet falls down the connecting energy line on a loop
- ✨ **Scroll-activated** — each planet brightens and pulses when it scrolls into view
- 🟣 **Roadmap planet** — the 2026 milestone is a violet planet with a dashed orbital ring and a "Roadmap" badge
- 📱 **Mobile** — orbs slide to the side with cards next to them in a horizontal row

---

## ✨ What's New in v2.0.4

A **stability** release. The toolkit and 404 page are simplified to be bulletproof and instant.

- 📦 **Toolkit simplified** — clean auto-fit grid, all 6 cards equal size (3×2 on desktop, 1 column on mobile). Can't break.
- ⭐ **GitHub stars fixed** — shows the real number (0), not a star symbol
- 🚀 **404 page rebuilt** — removed the heavy 3D canvas; now a fast static CSS-only page with starry background. Loads instantly.
- 🧹 **Removed `galaxy.js`** — no longer needed

---

## ✨ What's New in v2.0.3

A **layout & robustness** release. The timeline and toolkit are completely rebuilt so they can never break in RTL, the 404 galaxy is now CSP-safe, and GitHub stars load live.

- 📋 **Timeline redesigned** — clean table-style rows (date column + content column). Unbreakable in both LTR and RTL. No vertical line or dots that can drift.
- 📦 **Toolkit simplified** — clean 3-column bento grid: AI (wide) + 3 equal cards + full-width footer card. Zero gaps, zero overflow.
- ⭐ **Live GitHub stars** — the hero stat now fetches the real star count from the GitHub API (falls back to ★ if rate-limited)
- 🌌 **404 galaxy fixed** — moved the 3D galaxy script to an external `js/galaxy.js` file so it works under the strict CSP on Cloudflare Pages
- 🎨 **Cleaner aesthetic** — tighter cards, mono labels, more minimal hover states (openclaw.ai-inspired)

---

## ✨ What's New in v2.0.2

A **content & UX polish** release focused on fixing the Persian timeline, professional copywriting, and a stunning 3D galaxy 404 page.

- 🌌 **3D galaxy 404 page** — a real-time Canvas spiral galaxy with 6,000+ stars, 4 spiral arms, colored nebulae, a glowing core, and mouse-driven 3D tilt
- 🐛 **Fixed Persian timeline** — rebuilt as a robust single-column layout using logical properties (no more RTL overflow)
- 🔀 **Timeline moved below Projects** — better narrative flow
- ✍️ **Professional copy rewrite** — all EN/FA text rewritten with correct spelling and a confident, direct tone
- ⚙️ **Toolkit deduplicated** — removed repeated/incorrect tech entries; each card now has distinct, accurate content
- 🌀 **Emoji favicon restored** — the 🌀 emoji is back as the tab icon

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

## 🗂️ Project Structure (v2.0.8)

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
│   ├── ui.js               # Stars, scroll reveal, progress bar, back-to-top, GitHub stars
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

### v2.0.8 — Roadmap Timeline & Toolkit Restore
**Timeline — true roadmap design**
- Replaced the single-column layout with a **zigzag**: cards alternate left/right around a central vertical road
- Uses a 3-column CSS grid (`1fr 110px 1fr`) — grid columns flow with `direction`, so the zigzag mirrors automatically in RTL with zero extra code
- The road has a thick gradient path (blue → violet) with dashed white center markings
- Each of the 5 milestones has a **uniquely colored planet**: 2022 blue, 2023 cyan, 2024 green, 2025 gold, 2026 violet (destination)
- Planets pulse and scale up when scrolled into view
- 2026 "Roadmap" milestone is a special violet destination star with a dashed orbital ring
- Mobile (≤720px): collapses to single-column with road on the left

**Toolkit — restored to v2.0.1 layout**
- Reverted to the original 12-column bento grid
- AI Systems: `span 7` × `span 2 rows` (large hero card)
- Engineering Core & Cloud: `span 5` each (stacked beside AI)
- Hardware & Workflow: `span 6` each (row below)
- Also Worked With: `span 12` (full width, bottom)
- Restored `tk-span-5`, `tk-span-6`, `tk-span-12` classes in HTML and CSS
- Mobile collapses all to single column

**Code audit**
- Verified all file paths in `index.html` resolve correctly
- Confirmed no orphaned class references (`tk-wide`, `tk-group-2`, `timeline-body`, `timeline-date` all removed)
- All 12 referenced files exist (6 CSS, 3 JS, 3 assets)
- Zero console errors in both LTR and RTL
- Print stylesheet updated for the new timeline structure
- Codebase is clean and ready for adding new content (projects, skills, timeline entries)

### v2.0.7 — Manifest Icon Fix
- Fixed the PWA manifest icon path: `assets/favicon.svg` → `/assets/favicon.svg` (root-absolute). The relative path was resolving to `/assets/assets/favicon.svg` (404) because the manifest itself lives in `/assets/`.
- Updated `assets/favicon.svg` to render the 🌀 emoji, matching the browser tab icon.

### v2.0.6 — Quality & Natural Persian
**Toolkit — bento layout restored**
- Replaced the flat auto-fit grid with a proper 3-column bento: AI Systems spans 2 cols (wide hero), Engineering/Cloud/Hardware/Workflow as single cards, Also Worked With spans 3 (full width)
- Added tablet breakpoint (2-column at 769–980px, AI and Also-Worked-With span 2)
- Mobile collapses to single column

**Timeline — bigger planets**
- Orb size increased from 56px → 76px (88px node), stronger glow halos
- Mobile orbs: 50px → 62px (72px node)

**Persian — complete rewrite**
- Rewrote all 34 `data-fa` strings in natural, idiomatic Persian
- Fixed the "ابهماشی" typo (was meant to be "ابزارهایی")
- Replaced clunky translation-style phrasings with natural speech (e.g. "متفاوت ساخته‌شده" → "ساختن در ذاتمه", "فناوری‌هایی که در سطح آشنایی کاوش کرده‌ام" → "فناوری‌هایی که باهاشون آشناام")
- Consistent tone: professional but personal, mixing formal headings with natural spoken-style descriptions

### v2.0.5 — Cosmic Journey Timeline
**Timeline redesigned as a cosmic journey**
- Each milestone is now a **glowing planet orb** with a radial-gradient surface, inner shadow for depth, and the year (e.g. `'22`) on its surface
- Each orb has a **rotating orbital ring** with a small moon dot that circles the planet (14s rotation)
- The connecting line is a **gradient energy beam** (blue → violet) with a **comet** that travels down it on a 7s loop
- **Scroll-activated**: each planet scales up and brightens (via a second IntersectionObserver) when scrolled into view
- The 2026 roadmap milestone is a **violet planet** with a dashed orbital ring and a `Roadmap` badge
- Cards are **glassmorphic** with a gradient top accent line
- Mobile (≤600px): orbs slide to the start edge, cards sit beside them in a horizontal row — works in both LTR and RTL
- Print stylesheet updated to hide the orbs/rings/comet and show clean cards

### v2.0.4 — Stability & Simplicity
**Toolkit — bulletproof grid**
- Replaced the fragile span-based bento grid with a simple `repeat(auto-fit, minmax(280px, 1fr))` grid
- All 6 cards are now equal size, arranged 3×2 on desktop, 1 column on mobile
- Removed all `tk-span-*` classes — no more layout edge cases

**GitHub stars**
- Default value is now `0` (a number), not the `★` symbol
- Fallback on API failure also shows `0`

**404 page — fast & simple**
- Removed the 3D canvas galaxy (was heavy and slow to load)
- Replaced with a pure CSS starry background (instant load, zero JS)
- Same cosmic theme, same messaging, fraction of the weight
- Deleted `js/galaxy.js`

### v2.0.3 — Layout & Robustness
**Timeline — complete redesign**
- Replaced the vertical-line + dot timeline (which broke in RTL) with a clean table-style row layout: date column + content column, separated by subtle borders
- Uses CSS Grid with `grid-template-columns: 100px 1fr` — automatically mirrors in RTL via logical properties
- On mobile (<560px), the date stacks above the content

**Toolkit — simplified grid**
- Replaced the fragile 12-column grid with a clean 3-column bento grid
- AI Systems spans 2 columns (wide), three cards fill row 2 (1 col each), Also Worked With spans 3 (full width)
- Added tablet breakpoint (2-column at 769–980px)

**GitHub stars**
- Replaced the "+3 Years Coding" stat with live GitHub star count
- Fetches `https://api.github.com/users/ILIV007/repos?per_page=100` and sums `stargazers_count`
- Falls back to ★ symbol if rate-limited (60 req/hour for unauthenticated)
- CSP updated to allow `connect-src https://api.github.com`

**404 page — CSP fix**
- Moved the 3D galaxy script from inline to external `js/galaxy.js`
- This fixes the galaxy not rendering when deployed to Cloudflare Pages (the global CSP blocks inline scripts)
- Removed the per-page CSP override for `/404.html` — no longer needed

**UI polish (openclaw.ai-inspired)**
- Tighter card padding, cleaner hover states
- Mono font for stack labels and timeline dates
- More minimal shadows

### v2.0.2 — Polish & 3D Galaxy
**Critical fixes**
- Fixed Persian (RTL) timeline overflow — rebuilt as single-column with `inset-inline-start` logical properties so it mirrors correctly in both LTR and RTL
- Moved the Evolution/Timeline section to below Projects for better narrative flow

**Content & copywriting**
- Complete professional rewrite of all English and Persian text (consistent formal Persian, correct spelling, direct tone inspired by modern AI product sites)
- Deduplicated the Systems & Technologies section — removed repeated entries (e.g. Telegram API appeared twice); each card now has distinct, accurate content
- Added short narrative lines under each toolkit card
- Relabeled the 2026 timeline entry as "Roadmap"

**404 page — 3D galaxy**
- Replaced the simple 404 with a real-time Canvas spiral galaxy: 6,000+ stars in 4 spiral arms, colored nebula clouds, a bright glowing core, differential rotation, and mouse-driven 3D tilt
- Additive blending + motion-blur trails for a luminous, cinematic look
- Respects `prefers-reduced-motion`
- CSP relaxed for `/404.html` to allow the self-contained inline script

**UI**
- Restored the 🌀 emoji favicon (replaces the SVG monogram)
- Footer version bumped to v2.0.2

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

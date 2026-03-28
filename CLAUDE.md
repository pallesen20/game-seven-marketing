# Game Seven Marketing - Project Briefing for Claude Code

## Project overview
Static multi-page marketing website for **Game Seven Marketing**, a niche consultancy specializing exclusively in SEO, AI Optimization (AEO), and CRO for Shopify e-commerce brands. Hosted on **GitHub Pages**. No build tools, no frameworks - pure HTML, CSS, and vanilla JS only.

---

## File structure
```
/
├── index.html          # Main one-page site
├── audits/
│   └── index.html      # Audit services page (served at /audits)
├── logo.png            # Brand logo (180×180, used for apple-touch-icon)
├── favicon.png         # Favicon (32×32)
└── CLAUDE.md           # This file
```

---

## Brand & design system

### Brand color
The entire color theme is controlled by a single CSS variable at the top of each file:
```css
:root {
  --brand: #00e87a;  /* ← change this one value to retheme everything */
}
```
All accents, gradients, glows, buttons, badges, and highlights derive from `--brand`. Never hardcode the brand color elsewhere - always use `var(--brand)`.

### Full design token reference
```css
--bg:           #080b0f      /* page background */
--bg-card:      #0f1318      /* card background */
--bg-card2:     #131820      /* card hover / featured background */
--border:       rgba(255,255,255,0.07)
--border-hover: rgba(255,255,255,0.15)
--text:         #f5f5f0
--text-muted:   #7a8394
--text-dim:     #4a5260
--grad:         linear-gradient(135deg, var(--brand) 0%, #a8ffdb 100%)
```

### Typography
- **Display / headings:** `Syne` (Google Fonts) - weights 700, 800
- **Body:** `DM Sans` (Google Fonts) - weights 300, 400, 500
- Never use Inter, Roboto, Arial, or system fonts

### Aesthetic
Dark, cinematic, editorial. Inspired by lyfto.com. Key elements:
- Noise texture overlay via `body::before` SVG filter
- Gaussian blur blobs for background glow (`.blob` class)
- Scroll reveal animations (`.reveal` / `.reveal.visible` via IntersectionObserver)
- Hero text animates in with `slideUp` keyframe on page load
- Bento-style card grids separated by `1.5px` gaps on `var(--border)` background

---

## Pages

### `/index.html` - Main one-pager
Sections in order (all smooth-scroll via anchor links):
1. `#hero` - headline, sub, CTA buttons, stat strip
2. `#logos` - scrolling marquee of service keywords
3. `#about` - founder story, brand positioning, slogan
4. `#pain` - 4 pain point cards
5. `#services` - bento grid: SEO (featured), AEO, CRO, Shopify
6. `#process` - 3-step numbered process
7. `#compare` - them vs. us comparison grid
8. `#roi` - tabbed ROI calculators (SEO, AEO, CRO)
9. `#testimonials` - 6 client quote cards
10. `#faq` - accordion FAQ
11. `#contact` - Formspree contact form + CTA
12. Footer

### `/audits/index.html` - Audit services page
Sections in order:
1. `#hero` - page intro
2. `#what-you-get` - 4-item benefits strip
3. `#audits` - 3 service cards (Stripe links)
4. `#how` - 3-step process
5. `#faq` - accordion FAQ
6. `#cta` - link back to free strategy call
7. Footer

---

## Key interactive components

### Marquee (index.html)
Seamless infinite scroll. Uses JS to clone the track and measure exact pixel width - do not use `translateX(-50%)` as it causes a jump.
```js
const track = document.querySelector('.marquee-track');
const original = track.innerHTML;
track.innerHTML = original + original;
const halfWidth = track.scrollWidth / 2;
track.style.setProperty('--marquee-distance', '-' + halfWidth + 'px');
```
Speed is controlled by animation duration on `.marquee-track` - currently `16s`.

### ROI Calculators (index.html `#roi`)
Three tabbed calculators. Tab switcher calls `switchCalc(id, btn)`. Each calculator has its own compute function: `calcSEO()`, `calcAEO()`, `calcCRO()`. The `.calc-wrapper` uses a two-column CSS grid with `grid-template-rows: auto 1fr` so the tabs sit at their natural height and `.calc-intro` sits flush underneath.

### FAQ accordion
Single-open accordion. `toggleFaq(el)` closes all items then opens the clicked one. Open state controlled by `.faq-item.open` class.

### Scroll reveal
`IntersectionObserver` watches all `.reveal` elements and adds `.visible` when they enter viewport. Transition is CSS: `opacity 0 → 1`, `translateY(40px) → 0`.

---

## Forms & integrations

### Contact form (index.html `#contact`)
Uses **Formspree**. Action URL: `https://formspree.io/f/[formid]` - replace `[formid]` with the actual ID from the Formspree dashboard. Submits name + email to `hello@gamesevenmarketing.com`.

---

## Navigation structure
Both pages share the same navbar pattern. Active page gets `class="active"` on its nav link (green color). Nav links:
- Home → `/`
- Services → `/#services`
- Process → `/#process`
- Audits → `/audits`
- FAQ → `/#faq`
- Book a Free Call → `/#contact` (styled as `.nav-cta` - green filled pill button, black text)

On mobile (`max-width: 960px`) the nav collapses to a hamburger. Links slide in as a fixed overlay.

---

## Head tags (both pages)
```html
<link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
<link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
<link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
<meta name="theme-color" content="#00e87a" />
```

---

## Schema markup (index.html)
Two separate JSON-LD blocks:
1. `@type: Organization` - includes `aggregateRating` and 9 `review` items
2. `@type: Service` - references the Organization as provider

Reviews and ratings must stay on `Organization`, not `Service` - Google does not support them on Service type.

---

## Company details

**Name:** Game Seven Marketing  
**Slogan:** "When you need the A-team."  
**URL:** gamesevenmarketing.com  
**Email:** hello@gamesevenmarketing.com  
**Founder:** Jesper Pallesen - 10+ years technical SEO and AI Optimization  
**Positioning:** Niche expert consultants (not a generalist agency). Exclusively SEO, AEO, and CRO for Shopify e-commerce brands.  
**Differentiators:** Built and sold e-commerce brands firsthand. Deep Shopify platform knowledge. Senior consultants on every account. Guaranteed results or work for free.  
**Platform focus:** Shopify and Shopify Plus primarily. WooCommerce/BigCommerce for SEO/CRO consulting only.

---

## Coding conventions
- **No frameworks.** Vanilla HTML, CSS, JS only.
- **No build steps.** Files are served directly by GitHub Pages.
- **Edits only.** When making changes, provide targeted code snippets - not full file rewrites.
- **Efficiency first.** Keep JS minimal and functional. No libraries unless strictly necessary.
- **CSS variables.** Always use design tokens. Never hardcode colors, fonts, or spacing that already has a variable.
- **Mobile-first breakpoints:** `960px` (main), `600px` (small mobile). `overflow-x: hidden` on both `html` and `body`. `.container` gets `max-width: 100%` inside the 960px breakpoint.
- **New pages** follow the same HTML shell: same `<head>`, same navbar, same footer, same CSS variable block.

# Software Requirements Specification (SRS)
## Niche Business Landing Page — Template System
### Based on: *Scoops Ice Cream* (Reference Implementation)

---

> **Document Version:** 1.0  
> **Date:** September 15, 2026  
> **Prepared By:** Antigravity IDE  
> **Reference Codebase:** `d:\website source codes\best demos\scoops-icecream rank 2`  
> **Purpose:** Define all requirements needed to replicate this website architecture for any niche (e.g., Supermarket, Bakery, Electronics, Pharmacy, etc.)

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [Technology Stack](#3-technology-stack)
4. [File Structure](#4-file-structure)
5. [Design System Requirements](#5-design-system-requirements)
6. [Page Sections — Functional Requirements](#6-page-sections--functional-requirements)
7. [Interaction & Animation Requirements](#7-interaction--animation-requirements)
8. [Responsive Design Requirements](#8-responsive-design-requirements)
9. [SEO & Performance Requirements](#9-seo--performance-requirements)
10. [Niche Adaptation Guide](#10-niche-adaptation-guide)
11. [Supermarket Adaptation Example](#11-supermarket-adaptation-example)
12. [Acceptance Criteria](#12-acceptance-criteria)
13. [Glossary](#13-glossary)

---

## 1. Introduction

### 1.1 Purpose
This SRS specifies all requirements for building a **premium niche business landing page** following the proven architecture of the *Scoops Ice Cream* reference implementation. It enables any developer to re-create a visually stunning, animated, fully responsive single-page marketing website for **any product-based niche**.

### 1.2 Scope
The system produces a **static single-page website** (HTML + CSS + Vanilla JS) that:
- Markets a niche product or service
- Showcases a product catalog with category filtering
- Collects email subscribers
- Requires **zero backend** or build tools
- Is deployable by opening `index.html` directly in a browser (or via a static host)

### 1.3 Intended Audience
| Audience | Use |
|---|---|
| Developers | Build new niche sites from this blueprint |
| Designers | Understand design token replacement rules |
| Project Managers | Scope estimation and feature checklist |
| Client / Business Owner | Understand what the final product contains |

### 1.4 Definitions
- **Niche** — A specific business vertical (ice cream, supermarket, bakery, spa, etc.)
- **Design Tokens** — CSS custom properties (variables) that control colors, spacing, fonts
- **Reveal Animation** — Scroll-triggered fade/slide-in effect applied to elements entering the viewport
- **Loader** — The branded full-screen animation shown on initial page load
- **Hero Section** — The above-the-fold primary landing area

---

## 2. Overall Description

### 2.1 Product Perspective
The website is a **self-contained marketing landing page** with no external database or CMS dependency. All content is hard-coded in HTML. Images are stored locally in an `/images/` directory.

### 2.2 Product Functions (High-Level)
| # | Function | Description |
|---|---|---|
| F1 | Branded Loader | Full-screen animated intro tied to the niche brand |
| F2 | Top Announcement Bar | Scrolling promotions, store finder, language toggle |
| F3 | Sticky Navigation | Logo, nav links, icon actions, mobile hamburger menu |
| F4 | Hero Section | Full visual impact landing area with CTA |
| F5 | Features/USP Section | 3-column product/service highlight cards |
| F6 | Indulge/About Banner | Full-width image+text split-layout promotional strip |
| F7 | Product Showcase | 2-column text + floating image with bullet points |
| F8 | Product Catalog | Filterable grid of product cards with add-to-cart |
| F9 | Email Subscription CTA | Gradient banner with email capture form |
| F10 | Multi-column Footer | Brand info, navigation columns, social links |
| F11 | Scroll-to-Top Button | Fixed FAB for smooth return to top |

### 2.3 User Classes and Characteristics
| User Type | Behavior |
|---|---|
| Visitor (Desktop) | Browses site with full animation experience |
| Visitor (Mobile) | Uses hamburger menu, single-column layouts |
| Potential Customer | Clicks "Shop Now", scrolls catalog, subscribes to email |

### 2.4 Constraints
- **No frameworks** — Pure HTML, CSS, and Vanilla JS only
- **No build step** — Files must work directly in a browser
- **External CDN** — Google Fonts and Font Awesome are loaded from CDN
- **Image format** — `.webp` is preferred for performance
- **Browser support** — Modern browsers (Chrome, Firefox, Safari, Edge — last 2 versions)

---

## 3. Technology Stack

| Layer | Technology | Details |
|---|---|---|
| Markup | HTML5 | Semantic elements: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>` |
| Styling | Vanilla CSS | CSS custom properties, Grid, Flexbox, `clamp()`, animations |
| Scripting | Vanilla JavaScript (ES6+) | IntersectionObserver, event listeners, DOM manipulation |
| Icons | Font Awesome 6.4.0 | CDN: `cdnjs.cloudflare.com` |
| Fonts | Google Fonts | Display font (script/serif) + Body font (sans-serif) |
| Images | Local `.webp` files | Stored in `/images/` directory |

### 3.1 External Dependencies
```html
<!-- Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

<!-- Fonts (example: Scoops used Pacifico + Playfair Display + Poppins) -->
<link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Playfair+Display:wght@600;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

> **NOTE FOR NICHE ADAPTATION:** Swap fonts to match the brand personality. See [Section 10](#10-niche-adaptation-guide).

---

## 4. File Structure

```
[project-name]/
│
├── index.html          ← All page HTML (single file)
├── README.txt          ← Developer notes
│
├── css/
│   └── style.css       ← All styles, tokens, animations, responsive rules
│
├── js/
│   └── script.js       ← All JavaScript interactions and animations
│
└── images/
    ├── hero.webp       ← Hero section main product image
    ├── feature1.webp   ← Feature card 1 image
    ├── feature2.webp   ← Feature card 2 image
    ├── feature3.webp   ← Feature card 3 image
    ├── indulge.webp    ← Indulge/About banner image
    ├── summer.webp     ← Seasonal/Showcase section image
    ├── flavor1.webp    ← Product card 1
    ├── flavor2.webp    ← Product card 2
    ├── flavor3.webp    ← Product card 3
    └── flavor4.webp    ← Product card 4
```

**Total minimum images required: 10**  
**Recommended image resolution:** 800×800px for product images, 1200×800px for hero/banner images.

---

## 5. Design System Requirements

### 5.1 CSS Custom Properties (Design Tokens)
All visual values MUST be defined as CSS variables in `:root {}`. This is the primary adaptation surface when cloning for a new niche.

```css
:root {
  /* Brand Colors */
  --primary:        #e8344e;    /* Main CTA color — buttons, accents, badges */
  --primary-dark:   #c41f37;    /* Darker variant for hover states */
  --primary-soft:   #fde8eb;    /* Light tint for backgrounds and cards */

  /* Palette Colors (card backgrounds, blobs) */
  --pink:    #fbd3dc;
  --peach:   #fcd9b5;
  --green:   #cfe7c4;
  --orange:  #ffd4b3;
  --cream:   #fff3e0;
  --rose:    #fbc4cf;

  /* Neutral Colors */
  --bg:      #fffaf6;   /* Page background */
  --text:    #1f1f25;   /* Primary text */
  --muted:   #6b6b75;   /* Secondary/subtext */
  --border:  #f0e6dd;   /* Subtle borders */

  /* Effects */
  --shadow:  0 20px 60px -20px rgba(232,52,78,.25);
  --radius:  16px;
  --ease:    cubic-bezier(.6,.05,.2,1);   /* Signature easing curve */
}
```

### 5.2 Typography Requirements
| Role | Font Family | Weight | Size |
|---|---|---|---|
| Brand / Logo | Script font (e.g., Pacifico) | 400 | 30px |
| Headline (H1/H2) | Serif font (e.g., Playfair Display) | 800–900 | `clamp(30px, 3.6vw, 48px)` |
| Body Text | Sans-serif (e.g., Poppins) | 300–600 | 14–17px |
| Sub-labels | Sans-serif | 500–600 | 12–14px |

### 5.3 Spacing & Layout
- **Container max-width:** `1240px` with `24px` side padding
- **Section padding:** `80px 0` (top and bottom)
- **Card border-radius:** `24px` (product cards), `30px` (feature cards), `32px` (CTA block)
- **Grid gap:** `30px` (cards), `60px` (two-column sections)

### 5.4 Color Palette Strategy
- **Light mode only** — No dark mode toggle required
- Page background is a **warm off-white** — never pure `#ffffff`
- Primary color drives ALL interactive elements consistently

---

## 6. Page Sections — Functional Requirements

---

### 6.1 Page Loader (Opening Animation)

**Purpose:** Create an unforgettable branded first impression on page load.

| Requirement | Detail |
|---|---|
| Trigger | `window` `load` event |
| Duration | ~1900ms before hiding |
| Visual | Niche-specific animated graphic (e.g., stacking scoops for ice cream) |
| Text animation | Brand name letters animate in one-by-one with `animation-delay` staggering |
| Progress bar | Horizontal fill bar animates from 0→100% over 1.6s |
| Exit | CSS opacity + visibility transition to `hidden` |
| Background | Warm gradient matching brand palette |

**CSS Classes Required:** `.loader`, `.loader.hidden`, `.loader-cone` (or niche equivalent), `.loader-text span`, `.loader-bar`, `.loader-bar-fill`

**JS Implementation:**
```javascript
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 1900);
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('in'));
  }, 2000);
});
```

---

### 6.2 Top Announcement Bar

**Purpose:** Promote offers, show utility links, maintain brand color at the top.

| Element | Requirement |
|---|---|
| Background | Brand `--primary` color |
| Left side | 2 utility links (e.g., "Find a Store", "Order Tracking") — hidden on mobile |
| Center | Promotional message with a `<a>` link (e.g., "FREE SHIPPING ON ORDERS OVER $X") |
| Right side | Language/region selector — hidden on smallest screens |
| Font size | 13px |

---

### 6.3 Sticky Navigation Header

**Purpose:** Persistent navigation that remains accessible as user scrolls.

| Element | Requirement |
|---|---|
| Position | `sticky`, `top: 0`, `z-index: 100` |
| Background | Semi-transparent with `backdrop-filter: blur(14px)` |
| Scroll effect | Adds `box-shadow` and `border-bottom` when `scrollY > 20` |
| Logo | Script font icon + brand name, links to `#home` |
| Nav Links | Home, Shop, Product, Pages, Blog, Buy Now |
| "Buy Now" | Pill-shaped button in `--primary` color |
| Active state | Underline indicator via `::after` pseudo-element |
| Icons | Search, User, Wishlist (with count badge), Cart (with count badge) |
| Mobile | Hamburger button (`display: none` until `max-width: 980px`) |

**Active Nav Tracking (JS):**
```javascript
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
});
```

---

### 6.4 Hero Section

**Purpose:** The primary above-the-fold marketing statement with immediate CTA.

| Element | Requirement |
|---|---|
| Layout | 2-column grid (text left, visual right) |
| Eyebrow text | Small label in brand color above headline |
| H1 headline | Serif font, `clamp(40px, 5.5vw, 72px)`, with `<span class="accent">` for colored word |
| Subtext | Muted paragraph, max-width ~460px |
| CTA Button | "Shop Now" with arrow icon, links to `#products` section |
| Visual | Circular background shape + floating product image |
| Background blob | Radial gradient blob top-right, `animation: blobFloat` |
| Floating dots | 3 decorative colored dots with `dotMove` animation |
| Parallax | Mouse-move parallax on product image |
| Reveal | All hero text elements have `.reveal` class with `data-delay` staggering |

**Mouse Parallax (JS):**
```javascript
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 14;
  const y = (e.clientY / window.innerHeight - 0.5) * 14;
  heroImg.style.transform = `translate(${x}px, ${y}px)`;
});
```

---

### 6.5 Features / USP Cards Section

**Purpose:** Highlight 3 core product/service selling points with rich card design.

| Element | Requirement |
|---|---|
| Layout | 3-column CSS Grid |
| Cards | 3 `<article class="feature-card">` elements |
| Card content | Background blob, circular product image, tag label, H3 title, description, "Shop More →" link |
| Card hover | `translateY(-10px)` + box-shadow elevation |
| Image hover | `scale(1.08) rotate(-6deg)` |
| Blob hover | `scale(1.2) rotate(15deg)` |
| Reveal | `.reveal-up` class (scrolls up into view) |
| Blob colors | 3 distinct palette colors (pink, green, orange) |

---

### 6.6 Indulge / About Banner

**Purpose:** A full-width promotional strip with image and descriptive text.

| Element | Requirement |
|---|---|
| Layout | 2-column grid (`1.1fr 1fr`) inside a rounded card |
| Card background | `var(--primary-soft)` |
| Card border-radius | `30px` with internal `60px` padding |
| Left | Product/food image with `4/3` aspect ratio, hover zoom `scale(1.05)` |
| Right | Script label, H2 headline, body paragraph, CTA button |
| Reveal | Left side: `.reveal-left`, Right side: `.reveal-right` |

---

### 6.7 Seasonal / Showcase Section

**Purpose:** Secondary product showcase with feature bullet points.

| Element | Requirement |
|---|---|
| Layout | 2-column grid (text left, visual right) |
| Text content | H2 headline, paragraph, feature bullet list, CTA button |
| Bullet list | `<ul class="bullets">` — each `<li>` has Font Awesome `fa-circle-check` icon |
| Bullet list items | 4 items (e.g., category names or USPs) |
| Visual | Circular gradient background + floating product image + 3 animated bubbles |
| Circle animation | `pulseGlow` — gentle scale pulse 1→1.04 |
| Bubble animation | `bubble` — vertical float with opacity change |
| Reveal | Text: `.reveal-left`, Visual: `.reveal-right` |

---

### 6.8 Product Catalog / Flavors Grid

**Purpose:** Display the product range with category filtering tabs.

| Element | Requirement |
|---|---|
| Section background | Gradient fade from white to `--bg` |
| Section header | Script label + H2 headline + tab buttons |
| Tabs | 3 category tabs (e.g., Gourmet, Artisan, Exotic) |
| Active tab style | `--primary` background, `scale(1.05)`, white text |
| Tab hover | `--primary-soft` background |
| Grid | 4-column CSS Grid (`repeat(4, 1fr)`) |
| Product card content | Color background blob, circular product image, brand/supplier name, product H4 title, price, add-to-cart button |
| Card hover | `translateY(-12px)` + shadow elevation |
| Image hover | `scale(1.1) rotate(5deg)` |
| Blob hover | `scale(1.15)` |
| Add-to-cart button | Hidden by default, visible on card hover (`.add-cart`) |
| Card entry animation | Staggered `cardIn` animation (fade + slide up) on each card |
| Tab switch | Re-triggers `cardIn` animation on all cards with `animation: none` → reflow → re-apply |

**Cart Interaction (JS):**
```javascript
btn.addEventListener('click', (e) => {
  e.stopPropagation();
  btn.innerHTML = '<i class="fa-solid fa-check"></i>';
  btn.style.background = '#2ecc71';
  // Increment badge counter
  const badge = document.querySelector('.fa-bag-shopping').parentElement.querySelector('span');
  if (badge) {
    badge.textContent = parseInt(badge.textContent || '0') + 1;
    badge.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.6)' }, { transform: 'scale(1)' }],
      { duration: 400, easing: 'ease-out' }
    );
  }
  setTimeout(() => { /* reset button */ }, 1400);
});
```

---

### 6.9 Email Subscription CTA Section

**Purpose:** Convert visitors to subscribers with a bold gradient call-to-action.

| Element | Requirement |
|---|---|
| Background | Gradient from `--primary` to a lighter variant (`#ff6b85`) |
| Border-radius | `32px` |
| Decorative orbs | 2 semi-transparent white circles (top-left and bottom-right) with `blobFloat` animation |
| Headline | White H2 with accent word in `#ffd966` (gold) |
| Subtext | White/near-white paragraph |
| Form | Email input (pill-shaped) + Submit button side-by-side, wraps on mobile |
| Input focus | `outline: 2px solid #ffd966` |
| Submit success | Button text changes to "✓ Subscribed" on form submit |
| Form behavior | `onsubmit` returns false (static site — no backend) |

---

### 6.10 Footer

**Purpose:** Standard multi-column footer with brand info, site links, and social icons.

| Element | Requirement |
|---|---|
| Background | Dark `#1f1f25` |
| Grid | 4-column: Brand (1.5fr), Shop links (1fr), Company links (1fr), Support links (1fr) |
| Column 1 | Logo (white variant), brand tagline, social media icons |
| Columns 2–4 | H5 heading + 4 text links each |
| Social icons | Circular dark (`#2a2a32`) background, hover: `--primary` background + `rotate(-8deg)` |
| Link hover | Brand primary color + `padding-left: 6px` slide |
| Footer bottom | Copyright text, top border, centered |

**Footer Column Structure:**
- **Shop:** All Products, Gift Cards, Bundles, New Arrivals
- **Company:** About, Stores, Careers, Contact
- **Support:** FAQ, Shipping, Returns, Privacy

---

### 6.11 Scroll-to-Top Button

| Element | Requirement |
|---|---|
| Position | `fixed`, bottom-right corner (`30px` offset) |
| Visibility | Hidden by default, appears when `scrollY > 400` |
| Style | Circular, `--primary` background, white up-arrow icon |
| Hover | `--primary-dark`, `translateY(-4px)` |
| Click | `window.scrollTo({ top: 0, behavior: 'smooth' })` |

---

## 7. Interaction & Animation Requirements

### 7.1 Complete Animation Inventory

| # | Animation | Type | Trigger | CSS Class / Keyframe |
|---|---|---|---|---|
| 1 | **Page Loader** | CSS keyframes | `window.load` | `scoopDrop`, `letterIn`, `loadFill` |
| 2 | **Loader Hide** | CSS transition | 1900ms timeout | `.loader.hidden` (opacity + visibility) |
| 3 | **Page Leave Overlay** | CSS transition | Outbound link click | `.page-leave-overlay.active` |
| 4 | **Hero Reveal** | CSS transition | 2000ms timeout | `.reveal.in` |
| 5 | **Scroll Reveal** | IntersectionObserver | Element enters viewport | `.reveal.in`, `.reveal-up.in`, `.reveal-left.in`, `.reveal-right.in` |
| 6 | **Hero Parallax** | JS transform | `mousemove` | `heroImg.style.transform` |
| 7 | **Hero Image Float** | CSS keyframes | Always | `@keyframes float` (Y oscillation, 5s) |
| 8 | **Background Blob Float** | CSS keyframes | Always | `@keyframes blobFloat` (translate+scale, 12s) |
| 9 | **Decorative Dots** | CSS keyframes | Always | `@keyframes dotMove` (translate, 4–6s) |
| 10 | **Animated Bubbles** | CSS keyframes | Always | `@keyframes bubble` (Y + opacity, 4s) |
| 11 | **Summer Circle Pulse** | CSS keyframes | Always | `@keyframes pulseGlow` (scale, 4s) |
| 12 | **Logo Rotation** | CSS keyframes | Always | `@keyframes rotate` (hero-circle, 28s) |
| 13 | **Sticky Header Shadow** | JS classList | Scroll > 20px | `.header.scrolled` |
| 14 | **Active Nav Tracking** | JS classList | Scroll | `.nav a.active` |
| 15 | **Mobile Nav Toggle** | JS classList | Hamburger click | `.nav.open`, `.hamburger.open` |
| 16 | **Feature Card Hover** | CSS transition | Hover | `translateY(-10px)` + shadow |
| 17 | **Feature Image Rotate** | CSS transition | Hover | `scale(1.08) rotate(-6deg)` |
| 18 | **Feature Blob Scale** | CSS transition | Hover | `scale(1.2) rotate(15deg)` |
| 19 | **Indulge Image Zoom** | CSS transition | Hover | `scale(1.05)` |
| 20 | **Flavor Card Hover** | CSS transition | Hover | `translateY(-12px)` + shadow |
| 21 | **Flavor Image Rotate** | CSS transition | Hover | `scale(1.1) rotate(5deg)` |
| 22 | **Flavor Blob Scale** | CSS transition | Hover | `scale(1.15)` |
| 23 | **Add-to-Cart Reveal** | CSS transition | Card hover | `.add-cart` opacity + Y slide |
| 24 | **Add-to-Cart Confirm** | JS | Button click | Icon change + green flash + revert |
| 25 | **Cart Badge Bounce** | Web Animations API | Cart add | `scale(1 → 1.6 → 1)` in 400ms |
| 26 | **Tab Switch Animation** | JS + CSS keyframes | Tab click | `cardIn` re-triggered on each card |
| 27 | **CTA Blob Float** | CSS keyframes | Always | `::before`/`::after` pseudo-elements |
| 28 | **Social Icon Hover** | CSS transition | Hover | `translateY(-3px) rotate(-8deg)` |
| 29 | **Footer Link Hover** | CSS transition | Hover | Color change + `paddingLeft: 6px` |
| 30 | **Scroll-to-Top FAB** | JS classList + CSS | Scroll > 400px / Click | `.to-top.show`, smooth scroll |
| 31 | **Button Arrow Slide** | CSS transition | Hover | `translateX(4px)` on `<i>` in `.btn-primary` |
| 32 | **Nav Buy Now Lift** | CSS transition | Hover | `translateY(-2px)` |
| 33 | **Header Icon Scale** | CSS transition | Hover | `scale(1.1)` + color change |

### 7.2 Signature Easing Curve
All major animations MUST use the custom easing variable:
```css
--ease: cubic-bezier(.6, .05, .2, 1);
```
This gives animations a "springy elastic" feel that differentiates the site from generic CSS.

### 7.3 IntersectionObserver Scroll Reveal
```javascript
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target); // animate once only
    }
  });
}, { threshold: 0.15 }); // triggers at 15% visibility

document.querySelectorAll('.reveal,.reveal-up,.reveal-left,.reveal-right')
        .forEach(el => io.observe(el));
```

---

## 8. Responsive Design Requirements

### 8.1 Breakpoints

| Breakpoint | Width | Key Behavior Changes |
|---|---|---|
| Desktop | > 980px | Full multi-column layouts |
| Tablet | ≤ 980px | Single-column layouts, side-drawer mobile nav, 2-col product grid |
| Small Tablet | ≤ 768px | Smaller fonts via `clamp()`, 1-col grids forced |
| Mobile | ≤ 520px | Single-column product grid, hidden extra header icons |
| Small Mobile | ≤ 480px | 14px base font, larger touch targets (44px min-height buttons) |

### 8.2 Mobile Navigation (Drawer)
At `≤ 980px`, the `.nav` becomes a **fixed right-side drawer**:
```css
.nav {
  position: fixed;
  top: 0;
  right: -100%;       /* hidden off-screen */
  height: 100vh;
  width: 280px;
  flex-direction: column;
  padding: 80px 30px;
  box-shadow: -20px 0 60px rgba(0,0,0,.15);
  transition: right .4s var(--ease);
  z-index: 99;
}
.nav.open { right: 0; }
```

### 8.3 Hamburger Animation
```css
.hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
```

### 8.4 Typography Scaling (clamp)
```css
h1 { font-size: clamp(40px, 5.5vw, 72px); }  /* Scales fluidly */
h2 { font-size: clamp(30px, 3.6vw, 48px); }
```

### 8.5 iOS-Specific Fixes
```css
input, select, textarea { font-size: 16px !important; } /* Prevents auto-zoom */
```

### 8.6 Overflow Safety
```css
html, body { max-width: 100% !important; overflow-x: hidden !important; }
img, video, canvas, svg { max-width: 100%; height: auto; }
```

---

## 9. SEO & Performance Requirements

### 9.1 Meta Tags (Required)
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>[Brand] — [Tagline]</title>
<meta name="description" content="[150-character max compelling description]" />
```

### 9.2 Semantic HTML Structure
| Element | Usage |
|---|---|
| `<header>` | Navigation container |
| `<nav>` | Navigation links |
| `<section>` | Each page section with `id` for anchor linking |
| `<article>` | Individual product and feature cards |
| `<footer>` | Footer container |
| Single `<h1>` | Only in Hero section |
| `<h2>` | One per section |
| `<h3>` / `<h4>` | Card headings |

### 9.3 Image Requirements
- All images must have descriptive `alt` attributes
- Use `.webp` format for 30–50% smaller file size vs JPG
- Hero image: max ~150KB
- Product images: max ~25KB each

### 9.4 Font Loading Performance
```html
<!-- Preconnect before font link to reduce latency -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

### 9.5 Anchor Navigation
Every `<section>` must have a unique `id` matching a nav `href`:
```html
<section id="home">    <!-- href="#home" -->
<section id="features"> <!-- href="#features" -->
<section id="indulge">  <!-- href="#indulge" -->
<section id="summer">   <!-- href="#summer" -->
<section id="flavors">  <!-- href="#flavors" (or #products) -->
<section id="cta">      <!-- href="#cta" -->
```

---

## 10. Niche Adaptation Guide

This section is the **core of the template system**. It defines exactly what to change when building a new niche site.

### 10.1 The Four Adaptation Layers

```
LAYER 1: Design Tokens     → Change colors, fonts in :root {}
LAYER 2: Content Text      → Change all copy/labels in HTML
LAYER 3: Images            → Replace all images in /images/
LAYER 4: Icon & Loader     → Change the branded loader graphic and icon
```

### 10.2 Layer 1 — Design Token Replacement Table

| Token | Ice Cream (Original) | Supermarket | Bakery | Electronics |
|---|---|---|---|---|
| `--primary` | `#e8344e` (red) | `#1a7c3e` (green) | `#c47a2b` (amber) | `#0a6ebd` (blue) |
| `--primary-dark` | `#c41f37` | `#135e2e` | `#9a5e1e` | `#0854a0` |
| `--primary-soft` | `#fde8eb` | `#e6f4ec` | `#fdf0e0` | `#e8f0fb` |
| `--bg` | `#fffaf6` | `#f7fdf8` | `#fdfaf4` | `#f5f8ff` |
| Body font | Poppins | Inter | Lato | Roboto |
| Display font | Playfair Display | Montserrat | Cormorant Garamond | Raleway |
| Logo/script font | Pacifico | Nunito | Dancing Script | Orbitron |

### 10.3 Layer 2 — Content Swap Checklist

Replace ALL of the following text elements in `index.html`:

| HTML Location | Ice Cream Value | → Replace With (Supermarket Example) |
|---|---|---|
| `<title>` | "Scoops — Freshly Scooped Happiness" | "FreshMart — Your Daily Grocery Store" |
| `<meta name="description">` | "Premium artisan ice cream..." | "Fresh groceries delivered to your door..." |
| Logo text | "Scoops" | "FreshMart" |
| Topbar left links | "Find a Store", "Order Tracking" | "Find a Store", "Weekly Flyer" |
| Topbar center promo | "FREE SHIPPING ON ALL ORDERS OVER $100" | "FREE DELIVERY ON ORDERS OVER $75" |
| Hero eyebrow | "— Chill & Indulge" | "— Fresh & Affordable" |
| Hero H1 | "Freshly Scooped Happiness" | "Freshness in Every Aisle" |
| Hero paragraph | Ice cream description | Grocery store description |
| Features section title | "Cool Off With Every Scoop" | "Why Shop With Us" |
| Feature 1 tag/title | "Taste the Difference / Fresh & Flavorful" | "Quality Guaranteed / Farm-Fresh Produce" |
| Feature 2 tag/title | "Scoop Up Happiness / Irresistibly Delicious" | "Best Value / Unbeatable Prices" |
| Feature 3 tag/title | "Unforgettable Flavors / Chilled to Perfection" | "Quick & Easy / Fast Checkout" |
| Indulge script label | "Satisfy Your Sweet Tooth" | "Nourish Your Family" |
| Indulge H2 | "Indulgence In Every Scoop" | "Quality In Every Product" |
| Summer H2 | "Cool Flavors For Hot Summer Days" | "Fresh Deals For Every Season" |
| Bullet list items | Artisan, Exotic, Gelato, Kids' Favorites | Organic, Local Farmers, Weekly Deals, Family Packs |
| Tabs | Gourmet, Artisan, Exotic | Fresh Produce, Pantry, Beverages |
| Product names | Caramel Toffee Crunch, etc. | Organic Apples, Whole Grain Bread, etc. |
| CTA H2 | "Ready to Scoop Some Happiness?" | "Ready to Shop Fresh?" |
| CTA subtext | "Join thousands of ice cream lovers..." | "Join thousands of happy families..." |
| Footer brand tagline | "Crafting joyful ice cream moments since 2010..." | "Delivering fresh groceries since 2015..." |
| Footer Shop links | All Flavors, Gift Cards, Bundles, New Arrivals | All Products, Gift Cards, Deals, New Arrivals |
| Footer copyright | "© 2025 Scoops. All rights reserved." | "© 2025 FreshMart. All rights reserved." |

### 10.4 Layer 3 — Image Replacement

| File Name | Dimensions | Content |
|---|---|---|
| `hero.webp` | ~800×800 | Primary product/category hero image |
| `feature1.webp` | ~400×400 | Feature highlight 1 |
| `feature2.webp` | ~400×400 | Feature highlight 2 |
| `feature3.webp` | ~400×400 | Feature highlight 3 |
| `indulge.webp` | ~800×600 | Lifestyle/about banner image |
| `summer.webp` | ~600×800 | Seasonal or secondary product image |
| `flavor1.webp` | ~300×300 | Product 1 |
| `flavor2.webp` | ~300×300 | Product 2 |
| `flavor3.webp` | ~300×300 | Product 3 |
| `flavor4.webp` | ~300×300 | Product 4 |

> **TIP:** For AI-generated placeholder images, use Antigravity IDE's `generate_image` tool directly in the conversation.

### 10.5 Layer 4 — Loader & Icon Adaptation

**Loader graphic** — In `index.html`, replace the `.loader-cone` block with a niche-relevant animated SVG or CSS shape:

| Niche | Loader Idea |
|---|---|
| Ice Cream | Stacking scoops on a cone (current) |
| Supermarket | Shopping cart filling with items |
| Bakery | Cupcake assembling with frosting |
| Electronics | Circuit board drawing itself |
| Pharmacy | Pill capsule/cross animation |

**Favicon/Logo icon** — Replace `fa-ice-cream` with the appropriate Font Awesome icon:

| Niche | Font Awesome Icon |
|---|---|
| Supermarket | `fa-cart-shopping` |
| Bakery | `fa-bread-slice` |
| Electronics | `fa-microchip` |
| Pharmacy | `fa-pills` |
| Coffee Shop | `fa-mug-hot` |
| Flower Shop | `fa-seedling` |

### 10.6 Google Fonts Pairing Recommendations by Niche

| Niche | Script/Brand Font | Headline Font | Body Font |
|---|---|---|---|
| Ice Cream | Pacifico | Playfair Display | Poppins |
| Supermarket | Fredoka One | Montserrat | Inter |
| Bakery | Dancing Script | Cormorant Garamond | Lato |
| Electronics | Orbitron | Rajdhani | Roboto |
| Pharmacy | Nunito | Merriweather | Open Sans |
| Coffee Shop | Sacramento | Libre Baskerville | Raleway |
| Flower Shop | Great Vibes | Josefin Sans | Lato |

---

## 11. Supermarket Adaptation Example

This section shows the complete adaptation plan for **FreshMart** — a supermarket landing page.

### 11.1 Color Palette
```css
:root {
  --primary:       #1a7c3e;   /* Fresh green */
  --primary-dark:  #135e2e;
  --primary-soft:  #e6f4ec;
  --pink:   #d4edda;    /* Light green tint for cards */
  --peach:  #fff3cd;    /* Yellow tint (deals) */
  --green:  #cce5ff;    /* Blue tint (beverages) */
  --orange: #ffe5d0;    /* Orange tint (produce) */
  --cream:  #f8f9fa;
  --rose:   #d1ecf1;
  --bg:     #f7fdf8;    /* Very light green-white */
  --text:   #1a2e1a;
  --muted:  #5a7a5a;
  --border: #c3e6cb;
  --shadow: 0 20px 60px -20px rgba(26,124,62,.25);
}
```

### 11.2 Section Mapping (Ice Cream → Supermarket)

| Original Section | Supermarket Equivalent |
|---|---|
| Hero: "Freshly Scooped Happiness" | Hero: "Farm-Fresh to Your Doorstep" |
| Feature: "Fresh & Flavorful" | Feature: "Certified Organic" |
| Feature: "Irresistibly Delicious" | Feature: "Best Price Guarantee" |
| Feature: "Chilled to Perfection" | Feature: "Same-Day Delivery" |
| Indulge: "Satisfy Your Sweet Tooth" | Indulge: "Handpicked For You" |
| Summer: "Cool Flavors for Hot Summer Days" | Summer: "Fresh Picks This Season" |
| Tabs: Gourmet / Artisan / Exotic | Tabs: Produce / Bakery / Dairy |
| Products: Ice cream flavors | Products: Vegetables, Bread, Milk, Fruits |
| CTA: "Scoop Some Happiness" | CTA: "Start Shopping Fresh Today" |

### 11.3 Loader Change
Replace the ice cream cone loader with a cart animation:
```html
<div class="loader" id="loader">
  <div class="loader-cart">
    <!-- CSS-drawn supermarket cart that fills with items -->
  </div>
  <div class="loader-text">
    <span>F</span><span>r</span><span>e</span><span>s</span><span>h</span>
    <span>M</span><span>a</span><span>r</span><span>t</span>
  </div>
  <div class="loader-bar"><div class="loader-bar-fill"></div></div>
</div>
```

### 11.4 Topbar
```html
<div class="topbar-center">🛒 FREE DELIVERY ON ALL ORDERS OVER $75 — <a href="#">SHOP NOW</a></div>
```

---

## 12. Acceptance Criteria

A niche website built from this SRS is considered **complete** when ALL of the following criteria are met:

### 12.1 Visual Criteria
- [ ] Page loader animates for ~2 seconds with brand name revealing letter-by-letter
- [ ] Hero section is visually striking with floating animated product image
- [ ] All sections use the brand primary color consistently for buttons, accents, and icons
- [ ] Feature cards display hover lift + image transform animations
- [ ] No generic placeholder images remain (all images are niche-appropriate)
- [ ] Color palette is distinct from the ice cream reference — no pink/red tones visible in non-ice-cream niches

### 12.2 Functional Criteria
- [ ] Navigation is sticky and shows shadow on scroll
- [ ] Active nav link updates as user scrolls through sections
- [ ] Mobile hamburger menu opens/closes correctly as a slide-in drawer
- [ ] All 3 product category tabs switch correctly with re-animation
- [ ] "Add to Cart" button triggers: icon change → badge increment → bounce animation → reset
- [ ] Email subscription form shows success state on submit
- [ ] Scroll-to-top button appears after scrolling 400px and smoothly scrolls back to top
- [ ] Page-leave overlay animates on outbound link clicks

### 12.3 Responsive Criteria
- [ ] Desktop (1200px+): All multi-column layouts intact
- [ ] Tablet (768–980px): 2-column product grid, hamburger menu visible
- [ ] Mobile (< 520px): Single-column grid, compact header
- [ ] No horizontal scroll on any screen size
- [ ] Touch targets (buttons, nav links) are minimum 44px tall on mobile

### 12.4 SEO Criteria
- [ ] Page has a unique, descriptive `<title>` tag
- [ ] Page has a `<meta name="description">` under 160 characters
- [ ] Page has exactly one `<h1>` in the Hero section
- [ ] All images have appropriate `alt` attributes
- [ ] All sections have semantic HTML (`<header>`, `<section>`, `<article>`, `<footer>`)

### 12.5 Performance Criteria
- [ ] All images are in `.webp` format
- [ ] Google Fonts uses `preconnect` links
- [ ] Page loads and is interactive in under 3 seconds on a standard connection
- [ ] No JavaScript errors in browser console

---

## 13. Glossary

| Term | Definition |
|---|---|
| **SRS** | Software Requirements Specification — a document describing what a system should do |
| **Design Token** | A named CSS variable (e.g., `--primary`) that stores a reusable design value |
| **Niche** | A specific business category or vertical (ice cream, supermarket, bakery, etc.) |
| **Landing Page** | A single-page marketing website focused on conversion |
| **Hero Section** | The first visible area of a webpage, above the fold |
| **IntersectionObserver** | A browser API that detects when elements enter the viewport |
| **clamp()** | A CSS function that sets a value between a minimum and maximum based on viewport |
| **FAB** | Floating Action Button — a fixed-position button overlaid on the page (scroll-to-top) |
| **webp** | A modern image format with superior compression compared to JPG/PNG |
| **Reveal Animation** | An element that starts hidden and animates into view when scrolled to |
| **Parallax** | A visual effect where the background moves at a different speed than foreground |
| **Hamburger Menu** | A mobile navigation toggle button consisting of 3 horizontal lines |
| **Easing Curve** | A mathematical function controlling animation acceleration/deceleration |
| **Semantic HTML** | Using HTML elements for their intended meaning (e.g., `<article>` for independent content) |

---

*End of SRS Document*  
*Version 1.0 — September 2026*  
*Reference: [index.html](file:///d:/website%20source%20codes/best%20demos/scoops-icecream%20rank%202/index.html) | [style.css](file:///d:/website%20source%20codes/best%20demos/scoops-icecream%20rank%202/css/style.css) | [script.js](file:///d:/website%20source%20codes/best%20demos/scoops-icecream%20rank%202/js/script.js)*

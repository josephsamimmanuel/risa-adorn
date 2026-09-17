# Software Requirements Specification (SRS)
## Risa Adorn — Silk Thread Bangles & Skill Academy
### Niche Adaptation of the Premium Business Landing Page Template
### Based on: *Scoops Ice Cream* architecture (reference implementation)

---

> **Document Version:** 1.0  
> **Date:** September 17, 2026  
> **Prepared For:** Risa Adorn, Tenkasi, Tamil Nadu  
> **Prepared By:** Cursor Agent  
> **Reference Template:** `SRS_NicheWebsiteTemplate.md`  
> **Reference Codebase:** Scoops Ice Cream rank-2 landing page  
> **Source Content:** Client flyers in `/content/`  
> **Purpose:** Specify every requirement needed to build, accept, and maintain the Risa Adorn marketing website.

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [Business & Content Inventory](#3-business--content-inventory)
4. [Technology Stack](#4-technology-stack)
5. [File Structure](#5-file-structure)
6. [Design System Requirements](#6-design-system-requirements)
7. [Page Sections — Functional Requirements](#7-page-sections--functional-requirements)
8. [Image Asset Requirements](#8-image-asset-requirements)
9. [Interaction & Animation Requirements](#9-interaction--animation-requirements)
10. [Responsive Design Requirements](#10-responsive-design-requirements)
11. [SEO, Performance & Accessibility](#11-seo-performance--accessibility)
12. [Niche Adaptation Mapping](#12-niche-adaptation-mapping)
13. [Contact, Commerce & Integrations](#13-contact-commerce--integrations)
14. [Acceptance Criteria](#14-acceptance-criteria)
15. [Glossary](#15-glossary)
16. [Appendix A — Full Copy Deck](#16-appendix-a--full-copy-deck)
17. [Appendix B — Course & Product Catalog](#17-appendix-b--course--product-catalog)

---

## 1. Introduction

### 1.1 Purpose
This SRS defines all functional, visual, content, and quality requirements for the **Risa Adorn** website — a premium single-page marketing site for a silk-thread bangle atelier and women’s skill academy in Tenkasi.

It is a full niche adaptation of the *Scoops Ice Cream* landing-page architecture (HTML + CSS + Vanilla JS, no backend). A developer following this document must be able to reproduce the site without guessing brand copy, colors, sections, or image roles.

### 1.2 Scope
The system produces a **static single-page website** (`index.html` + `css/style.css` + `js/script.js`) that:

- Markets handmade **silk-thread bangles**, bridal/engagement pre-booking, hair accessories, and invisible-chain jewellery
- Markets **online courses** (bangle making, invisible chain, hair accessories) with prices and WhatsApp enrolment
- Collects email interest and routes purchase/enrolment to **WhatsApp**
- Requires **zero backend** or build tools
- Opens directly in a browser or on any static host

**Out of scope (v1.0):**
- Payment gateway / cart checkout
- User accounts, LMS video player, or course delivery
- Multi-page blog or CMS
- Dark mode
- Multilingual toggle (English is primary; selected Tamil phrases appear as accent copy)

### 1.3 Intended Audience

| Audience | Use |
|---|---|
| Developer | Implement HTML/CSS/JS from this blueprint |
| Designer | Apply design tokens, typography, and image direction |
| Business owner (Risa Adorn) | Confirm that the site matches flyers, prices, and offers |
| QA / reviewer | Execute the acceptance checklist in Section 14 |

### 1.4 Definitions

| Term | Meaning in this project |
|---|---|
| **Niche** | Women’s handmade jewellery + home-based skill training |
| **Design tokens** | CSS custom properties that store brand colors, radius, easing |
| **Reveal animation** | Scroll-triggered fade/slide-in when an element enters the viewport |
| **Loader** | Full-screen branded intro shown on first load |
| **Hero** | Above-the-fold landing area |
| **Silk-thread bangle** | Traditional Indian bangle wrapped in silk thread and finished with kundan, pearls, or beads |
| **Invisible chain** | Fine almost-invisible necklace/chain jewellery taught as Course 2 |
| **Pre-booking** | Advance order for engagement or bridal bangle sets |
| **Tenkasu / Tenkasi** | Client location given as *Tenkasu*; implemented as **Tenkasi, Tamil Nadu** (standard place name) |

---

## 2. Overall Description

### 2.1 Product Perspective
The website is a self-contained marketing landing page. All copy is hard-coded in HTML. Images live in `/images/` as `.webp`. There is no CMS and no database. Primary conversion is **WhatsApp** (`+91 87781 61826`). Secondary conversion is an email subscribe form that shows a client-side success state only.

### 2.2 Product Functions (High-Level)

| # | Function | Description |
|---|---|---|
| F1 | Branded Loader | Full-screen intro: stacking gold/magenta bangle rings + “Risa Adorn” letter reveal |
| F2 | Top Announcement Bar | WhatsApp enrolment, Tenkasi location, demo-class promo |
| F3 | Sticky Navigation | Logo, section links, cart/wishlist badges, Enroll CTA, mobile drawer |
| F4 | Hero Section | Brand promise: Learn · Create · Earn, with floating bangle image |
| F5 | Features / USP Cards | Learn from home, bridal handmade, skill-to-income |
| F6 | About / Indulge Banner | Brand story, Tenkasi, handmade-with-love |
| F7 | Courses Showcase | Course benefits, bullet list, visual of making bangles |
| F8 | Catalog Grid | Filterable Courses / Bangles / Accessories cards with add-to-enquiry |
| F9 | Email Subscription CTA | Gradient banner capturing emails for class updates |
| F10 | Multi-column Footer | Brand, shop, academy, support, social, copyright |
| F11 | Scroll-to-Top Button | Fixed FAB after 400px scroll |
| F12 | WhatsApp FAB | Persistent green WhatsApp button (niche addition beyond Scoops) |

### 2.3 User Classes

| User Type | Behavior |
|---|---|
| Visitor (Desktop) | Full animation experience, catalog browsing, WhatsApp click |
| Visitor (Mobile) | Hamburger drawer, single-column layouts, large tap targets |
| Learner (women: school students to housewives) | Reads course cards, demo price ₹29, taps Enroll / WhatsApp |
| Bridal / engagement customer | Reads pre-booking benefits, enquires for custom sets |
| Returning visitor | Uses nav, catalog tabs, email subscribe |

### 2.4 Constraints

- **No frameworks** — Pure HTML5, CSS, Vanilla JS only
- **No build step** — Files must work by opening `index.html`
- **External CDN** — Google Fonts and Font Awesome 6.4.0
- **Image format** — `.webp` preferred
- **Browsers** — Chrome, Firefox, Safari, Edge (last 2 versions)
- **Currency** — Indian Rupee (₹)
- **Primary CTA channel** — WhatsApp, not a payment cart
- **Audience** — Courses marketed as **only for women** (school students to housewives), matching client flyers

### 2.5 Assumptions

- Phone `87781 61826` is the live WhatsApp business number
- Course prices on flyers are current: ₹799 / ₹299 / ₹149 / demo ₹29
- Government-registered printed certificate is **extra charge**
- Professional bangle course ₹799 is **registration fees only**
- Location “Tenkasu” means Tenkasi, Tamil Nadu
- “Add to cart” in the template is adapted to **Add to enquiry** (increments bag badge; actual order is via WhatsApp)

---

## 3. Business & Content Inventory

All marketing claims below are taken from the six client assets in `/content/`.

### 3.1 Brand Identity

| Field | Value |
|---|---|
| Legal / shop name | **Risa Adorn** |
| Taglines | Learn · Create · Earn · Handmade with Passion · Handmade with Love · Where Passion Meets Profession |
| Offer | Silk-thread bangle making **and** teaching |
| City | Tenkasi, Tamil Nadu (client: Tenkasu) |
| WhatsApp / call | **87781 61826** |
| WhatsApp URL | `https://wa.me/918778161826` |
| Audience | Women — school students to housewives |
| Positioning | Home-based creative skill + handmade jewellery boutique |

### 3.2 Dual Business Model
The site must sell **two** related offers with equal visual weight:

1. **Academy** — online / from-home courses (pre-recorded + practice + WhatsApp group)
2. **Atelier** — handmade silk-thread bangles, bridal pre-booking, hair accessories, invisible-chain jewellery

### 3.3 Course Offerings

| Course | Price | Notes |
|---|---|---|
| Professional Bangle Making Course | ₹799 | Registration fees only. Pre-recorded videos, practice, WhatsApp doubt group, record work, free-time learning, video collab for first order, Govt certificate extra |
| Invisible Chain Master Course | ₹299 | Pre-recorded videos, record work, free-time learning, practice, WhatsApp group, Govt certificate extra |
| Hair Accessories Course | ₹149 | Same delivery model as Course 2 |
| Demo class | ₹29 | 1-hour live intro (flyer date July 3, 12:00–1:00 PM — treat as sample; site must not hard-lock a past date as the only CTA) |
| Free-course campaign | 100% free (campaign flyer) | “Nangale conduct pandrom” — optional promo line, not a catalog SKU |

### 3.4 Course Inclusions (common)

- Lifetime access
- WhatsApp support / doubt-clearance group
- Learn at your own pace / flexible time
- Beginner-friendly, step-by-step
- Practice session + record work
- No qualification / no age limit (per flyer)
- House-made / learn-from-home
- Government-registered printed certificate (**extra charge**)
- Useful for personal wear & gifting
- Skill-to-income path (“learn today, success tomorrow”)

### 3.5 Product / Service Lines (atelier)

| Line | Description |
|---|---|
| Everyday silk-thread bangles | Colorful handmade stacks for daily wear |
| Bridal & engagement sets | Maroon/gold and custom wedding stacks; pre-booking |
| Custom designs | Made-to-order for outfits and events |
| Invisible-chain jewellery | Fine chain necklaces with crystal/heart pendants |
| Hair accessories | Floral clips, bows, kundan barrettes, coin clips |

### 3.6 Bridal Pre-Booking Benefits

- Free gift for early bookings
- Special discount for pre-booking
- Priority delivery for the event date
- Engagement special, bridal collection, custom designs, premium quality
- Why choose Risa Adorn: premium silk thread, exclusive designs, perfect finishing, comfort fit, made with love

### 3.7 Tamil Accent Lines (optional on page, required in SRS so they are not lost)

| Language | Line | Use |
|---|---|---|
| TA | பெண் ஒருத்தி நினைத்தால் முடியாதது எதுவும் இல்லை! | Hero / about quote |
| TA | உழைப்பு உன் வசம், வெற்றி உன் கையில்! | Motivation strip |
| TA | நான் செய்தேன், நீங்களும் செய்யலாம்! | Teaching showcase |
| TA | வீட்டிலிருந்தே கற்று, உங்கள் திறமையை வருமானமாக மாற்றுங்கள்! | Course subhead |
| TA | அதே கற்றிடுங்கள்… அதே சம்பாதியுங்கள்! | Skill-to-income |

English translations must appear beside or instead of Tamil on the live page so non-Tamil visitors still understand.

---

## 4. Technology Stack

| Layer | Technology | Details |
|---|---|---|
| Markup | HTML5 | Semantic: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>` |
| Styling | Vanilla CSS | Custom properties, Grid, Flexbox, `clamp()`, keyframes |
| Scripting | Vanilla JS (ES6+) | IntersectionObserver, events, DOM |
| Icons | Font Awesome 6.4.0 | CDN `cdnjs.cloudflare.com` |
| Fonts | Google Fonts | **Great Vibes** (script/logo) + **Playfair Display** (headlines) + **Poppins** (body) |
| Images | Local `.webp` | `/images/` |
| Contact | `wa.me` deep link | No backend |

### 4.1 External Dependencies
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@600;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

---

## 5. File Structure

```
boutique/
├── index.html
├── README.txt
├── SRS_NicheWebsiteTemplate.md      ← original template (unchanged)
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── hero.webp
│   ├── feature1.webp
│   ├── feature2.webp
│   ├── feature3.webp
│   ├── indulge.webp
│   ├── summer.webp
│   ├── flavor1.webp
│   ├── flavor2.webp
│   ├── flavor3.webp
│   ├── flavor4.webp
│   ├── product5.webp
│   └── product6.webp
│
├── docs/
│   └── SRS_RisaAdorn.md             ← this document
│
└── content/                         ← original client flyers (source only)
    └── Screenshot_*.jpg
```

**Minimum images:** 10 (template). **This project:** 12 generated assets, all `.webp`.

**Recommended resolution:** product ~800×800, banners ~1200×800, teaching visual ~900×1200.

---

## 6. Design System Requirements

### 6.1 CSS Custom Properties (must use)

```css
:root {
  --primary:        #c2185b;    /* Magenta from flyers — CTAs, accents */
  --primary-dark:   #9c1449;
  --primary-soft:   #fce4ec;
  --gold:           #c9a227;    /* Luxury jewellery gold */
  --gold-soft:      #f8e9b0;
  --pink:           #f8c1d4;
  --peach:          #f8dcc8;
  --green:          #e4d4f5;    /* Soft lilac (not ice-cream green) */
  --orange:         #f3d5a3;
  --cream:          #fbf3e6;
  --rose:           #f5b8c8;
  --bg:             #fdf8f5;    /* Warm ivory, never pure white */
  --text:           #2a1a22;
  --muted:          #6d5660;
  --border:         #f0ddd4;
  --shadow:         0 20px 60px -20px rgba(194,24,91,.28);
  --radius:         16px;
  --ease:           cubic-bezier(.6,.05,.2,1);
}
```

**Palette rule:** Magenta + gold + ivory. Do **not** reuse Scoops ice-cream red/pink scoops or mint-green ice-cream blobs as the brand story. Soft blush tints are allowed because they match the jewellery flyers.

### 6.2 Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Brand / logo | Great Vibes | 400 | 32–36px |
| Headline H1/H2 | Playfair Display | 800–900 | `clamp(30px, 3.6vw, 48px)` (H1 up to 72px) |
| Body | Poppins | 300–600 | 14–17px |
| Sub-labels / tags | Poppins | 500–600 | 12–14px |
| Gold script accents | Great Vibes | 400 | 20–28px |

### 6.3 Spacing & Layout
- Container max-width: `1240px`, side padding `24px`
- Section padding: `80px 0`
- Card radius: `24px` products, `30px` features, `32px` CTA
- Grid gap: `30px` cards, `60px` two-column sections

### 6.4 Color Strategy
- Light mode only
- Page background warm ivory `--bg`
- Primary magenta on **all** interactive elements
- Gold (`--gold`) for script labels, accent words in CTA, and loader rings
- Footer `#1f1f25`

---

## 7. Page Sections — Functional Requirements

---

### 7.1 Page Loader

| Requirement | Detail |
|---|---|
| Trigger | `window` `load` |
| Duration | ~1900ms then hide |
| Visual | 3 concentric bangle rings (gold / magenta / blush) dropping into place |
| Text | Letters of **Risa Adorn** (including space) animate in with staggered delay |
| Progress bar | Fill 0→100% over 1.6s in `--primary` |
| Exit | Opacity + visibility to hidden |
| Background | Ivory → blush gradient |

CSS: `.loader`, `.loader.hidden`, `.loader-bangles`, `.loader-ring`, `.loader-text span`, `.loader-bar`, `.loader-bar-fill`

### 7.2 Top Announcement Bar

| Element | Requirement |
|---|---|
| Background | `--primary` |
| Left | “Tenkasi studio” + “WhatsApp 87781 61826” (hidden on mobile) |
| Center | “DEMO CLASS ₹29 · LEARN FROM HOME — ENROLL NOW” linking to `#courses` or WhatsApp |
| Right | “English · தமிழ்” label (display only; no language engine in v1) |
| Font | 13px, white |

### 7.3 Sticky Navigation

| Element | Requirement |
|---|---|
| Position | Sticky, `z-index: 100`, blur backdrop |
| Scroll | Shadow when `scrollY > 20` |
| Logo | Crown / ring icon + “Risa Adorn” in Great Vibes, links to `#home` |
| Links | Home, Shop, Courses, About, Contact |
| Enroll CTA | Pill button `--primary`, WhatsApp or `#cta` |
| Icons | Search (visual), User (visual), Wishlist badge, Bag badge |
| Mobile | Hamburger → right drawer 280px at `≤980px` |

Nav IDs: `#home` `#features` `#about` `#courses` `#shop` `#cta`

### 7.4 Hero Section (`#home`)

| Element | Requirement |
|---|---|
| Layout | 2-column: copy left, circular product visual right |
| Eyebrow | “— Learn · Create · Earn · Tenkasi” |
| H1 | “Silkthread Bangles, Handmade to **Shine**” (accent word in `--primary`) |
| Subtext | Learn a creative skill from home and wear (or sell) jewellery made with love. Women from school students to housewives. |
| CTAs | Primary: “Shop Bangles” → `#shop`; Secondary optional: “View Courses” → `#courses` |
| Visual | `hero.webp` circular, float animation, mouse parallax |
| Decor | Radial blob, 3 animated dots (magenta, gold, blush) |
| Reveal | `.reveal` with `data-delay` stagger |

### 7.5 Features / USP (`#features`)

3 cards:

| Card | Tag | Title | Image | Copy |
|---|---|---|---|---|
| 1 | Learn From Home | Skill Academy | `feature1.webp` | Pre-recorded lessons, WhatsApp doubt group, lifetime access. |
| 2 | Bridal & Engagement | Handmade Atelier | `feature2.webp` | Pre-book silk-thread sets for your special day. |
| 3 | Learn · Create · Earn | Skill to Income | `feature3.webp` | Make hair accessories & jewellery; start a home business. |

Hover: `translateY(-10px)`, image `scale(1.08) rotate(-6deg)`, blob `scale(1.2) rotate(15deg)`.

### 7.6 About / Indulge Banner (`#about`)

| Element | Requirement |
|---|---|
| Layout | 2-col (`1.1fr 1fr`) inside rounded `--primary-soft` card |
| Image | `indulge.webp` 4:3, hover zoom 1.05 |
| Script | “Handmade with love, designed for your memories” |
| H2 | “Every Bangle Tells a **Story**” |
| Body | Risa Adorn, Tenkasi — silk-thread bangles made and taught with passion. Premium silk thread, exclusive designs, comfort fit. |
| CTA | “Know Our Story” or WhatsApp “Chat With Us” |

### 7.7 Courses Showcase (`#courses`) — maps to template “Summer” section

| Element | Requirement |
|---|---|
| H2 | “Learn From Home. **Earn Your Dream.**” |
| Body | Professional silk-thread bangle making for women. Beginner-friendly, step by step, flexible time. |
| Bullets | Lifetime access · WhatsApp doubt clearance · Govt. certificate (extra) · No age / qualification limit |
| CTA | “See All Courses” → `#shop` courses tab or WhatsApp |
| Visual | `summer.webp` + pulse circle + 3 bubbles |

### 7.8 Catalog Grid (`#shop`) — maps to template “Flavors”

| Element | Requirement |
|---|---|
| Script | “Made & Taught With Passion” |
| H2 | “Pieces & Courses That **Steal** The Show” |
| Tabs | **Courses** · **Bangles** · **Accessories** |
| Grid | 4 columns desktop, 2 tablet, 1 mobile |
| Card | Color blob, circular image, line name, title, ₹ price, add-to-enquiry button |
| Tabs | Must **filter** cards by `data-category` AND retrigger `cardIn` |
| Add button | Hidden until hover; click → check icon, green flash, bag badge +1, bounce, reset ~1400ms |

Catalog rows: see [Appendix B](#17-appendix-b--course--product-catalog).

### 7.9 Email CTA (`#cta`)

| Element | Requirement |
|---|---|
| Background | Gradient `--primary` → `#e91e63` |
| Headline | “Ready to Learn, Create & **Earn**?” (gold accent word) |
| Subtext | Join women across Tamil Nadu learning silk-thread art from home. |
| Form | Email + Subscribe; `preventDefault`; button becomes “✓ Subscribed” |
| Orbs | Two floating white translucent circles |

### 7.10 Footer

4 columns:

| Column | Content |
|---|---|
| Brand | Logo, tagline “Where passion meets profession. Tenkasi.”, Instagram/Facebook/Pinterest/WhatsApp icons |
| Shop | All Bangles, Bridal Pre-Booking, Hair Accessories, Custom Designs |
| Academy | Bangle Course, Invisible Chain, Hair Accessories Course, Demo Class |
| Support | WhatsApp, Shipping (Tenkasi / India), FAQ, Privacy |

Copyright: `© 2026 Risa Adorn. All rights reserved.`

Footer shop/academy links must scroll to `#shop` or `#courses`. WhatsApp uses `wa.me`.

### 7.11 Scroll-to-Top
Fixed bottom-right, show after 400px, `--primary`, smooth scroll to top.

### 7.12 WhatsApp Floating Button (additional)
Fixed bottom-left (or left of to-top), Font Awesome WhatsApp icon, `#25D366` background, `aria-label="Chat on WhatsApp"`, opens `https://wa.me/918778161826` with a prefilled English message:

> Hi Risa Adorn, I would like to know about silk-thread bangles / courses.

---

## 8. Image Asset Requirements

All generated for this project. No ice-cream or generic placeholders.

| File | Size role | Subject | Alt text |
|---|---|---|---|
| `hero.webp` | 1:1 hero | Pink & gold silk-thread bangle stack | Stack of pink and gold silk-thread bangles |
| `feature1.webp` | 1:1 USP | Hands wrapping silk thread on a bangle | Hands making a silk-thread bangle |
| `feature2.webp` | 1:1 USP | Bride wearing bridal silk-thread bangles | Bride wearing Risa Adorn bridal bangles |
| `feature3.webp` | 1:1 USP | Handmade hair clips on marble | Handmade hair accessories |
| `indulge.webp` | 4:3 about | Artisan at a sunlit making table | Risa Adorn artisan making silk-thread bangles |
| `summer.webp` | 3:4 courses | Woman in saree wrapping a bangle | Instructor demonstrating silk-thread bangle making |
| `flavor1.webp` | 1:1 product | Multicolor traditional bangle stack | Colourful silk-thread bangle set |
| `flavor2.webp` | 1:1 product | Invisible chain with heart pendants | Gold invisible-chain necklace |
| `flavor3.webp` | 1:1 product | Bows and floral hair clips | Handmade hair bows and clips |
| `flavor4.webp` | 1:1 product | Maroon-gold bridal set | Bridal maroon and gold silk-thread bangles |
| `product5.webp` | 1:1 product | Magenta floral kundan stack | Pink floral silk-thread bangles |
| `product6.webp` | 1:1 product | Champagne gold silk bangles | Gold silk-thread bangles with pearls |

**Performance caps (from template):** hero ideally ≤150KB; product cards ideally ≤25–40KB; all `.webp`; descriptive `alt` on every `<img>`.

**Source flyers** in `/content/` are **not** used as live page images (they contain heavy text overlays). They are content reference only.

---

## 9. Interaction & Animation Requirements

All 33 template animations apply, with these niche substitutions:

| Template | Risa Adorn |
|---|---|
| `scoopDrop` ice-cream scoops | `bangleDrop` concentric rings |
| Pacifico loader letters “Scoops” | Great Vibes “Risa Adorn” |
| Ice-cream cone | Three CSS rings |

Required behaviours (must pass QA):

1. Loader ~2s then hide  
2. Hero reveals after loader  
3. IntersectionObserver reveals (once, threshold 0.15)  
4. Sticky header shadow  
5. Active nav by section id  
6. Mobile drawer open/close + link close  
7. Hero mouse parallax  
8. Tab filter + `cardIn` reflow  
9. Add-to-enquiry badge bounce  
10. Subscribe success text  
11. Scroll-to-top  
12. Page-leave overlay on same-tab external links  
13. Signature easing `--ease: cubic-bezier(.6,.05,.2,1)`

---

## 10. Responsive Design Requirements

| Breakpoint | Behavior |
|---|---|
| > 980px | Full 2-col hero/about/courses, 3-col features, 4-col catalog |
| ≤ 980px | Single-column sections, 2-col catalog, hamburger drawer |
| ≤ 768px | Fluid type via `clamp()`, tighter padding |
| ≤ 520px | 1-col catalog and footer, hide extra header icons except bag |
| ≤ 480px | 14px base, buttons min-height 44px, inputs 16px (iOS zoom) |

Overflow: `html, body { overflow-x: hidden }`. Images `max-width: 100%`.

---

## 11. SEO, Performance & Accessibility

### 11.1 Meta
```html
<title>Risa Adorn — Silk Thread Bangles & Courses in Tenkasi</title>
<meta name="description" content="Handmade silk-thread bangles, bridal pre-booking, and from-home courses for women in Tenkasi. Learn, create, earn. WhatsApp 87781 61826." />
```
Description must stay ≤160 characters.

### 11.2 Semantic rules
- Exactly one `<h1>` (hero)
- One `<h2>` per major section
- `<article>` for feature and product cards
- Every section has an `id` matching nav `href`

### 11.3 Accessibility
- Loader should not trap keyboard after hide (`visibility: hidden`)
- WhatsApp and to-top buttons have `aria-label`
- Form input has an associated label or `aria-label="Email"`
- Color contrast: white text on `--primary` is acceptable; muted text on ivory must remain readable
- Decorative blobs/dots: no extra alt text needed

### 11.4 Performance
- Font `preconnect`
- WebP images
- Interactive in under 3s on a standard connection
- No console JavaScript errors

---

## 12. Niche Adaptation Mapping

### 12.1 Four Adaptation Layers (completed)

| Layer | Ice Cream | Risa Adorn |
|---|---|---|
| 1 Design tokens | `#e8344e` red, Pacifico | Magenta `#c2185b` + gold, Great Vibes |
| 2 Content | Scoops flavors | Courses, bangles, accessories, Tenkasi |
| 3 Images | Ice cream cones | Silk-thread jewellery & making process |
| 4 Loader / icon | Cone + `fa-ice-cream` | Bangle rings + `fa-crown` |

### 12.2 Section Mapping

| Scoops section | Risa Adorn section | ID |
|---|---|---|
| Hero: Freshly Scooped Happiness | Hero: Silkthread Bangles, Handmade to Shine | `#home` |
| Features: 3 flavor USPs | Learn from home / Bridal atelier / Skill to income | `#features` |
| Indulge banner | About Risa Adorn / every bangle tells a story | `#about` |
| Summer flavors | Courses: learn from home, earn your dream | `#courses` |
| Flavors tabs Gourmet/Artisan/Exotic | Courses / Bangles / Accessories | `#shop` |
| CTA Scoop Happiness | Ready to Learn, Create & Earn | `#cta` |
| Footer | Shop + Academy + Support | footer |

### 12.3 Icon Mapping

| Use | Font Awesome |
|---|---|
| Logo | `fa-crown` |
| Location | `fa-location-dot` |
| WhatsApp | `fa-whatsapp` / `fa-brands fa-whatsapp` |
| Lifetime | `fa-infinity` |
| Certificate | `fa-certificate` |
| Home learning | `fa-house` |
| Bridal | `fa-gem` |
| Cart/enquiry | `fa-bag-shopping` |

---

## 13. Contact, Commerce & Integrations

| Item | Spec |
|---|---|
| Phone | 87781 61826 |
| International | +91 87781 61826 |
| WhatsApp link | `https://wa.me/918778161826` |
| Prefill | Courses vs bridal vs general (query `?text=` URL-encoded) |
| Email form | Client-side only; no server POST |
| Payments | Not in v1 — prices shown; fulfilment via WhatsApp |
| Shipping copy | Handmade in Tenkasi; India-wide dispatch discussed on WhatsApp |
| Store finder | Single studio city: Tenkasi (no multi-store map) |

Enquiry button on catalog **does not** persist cart items. It only animates the bag badge. Real orders go to WhatsApp.

---

## 14. Acceptance Criteria

### 14.1 Visual
- [ ] Loader animates ~2s with brand name letter-by-letter and bangle rings
- [ ] Hero is striking with floating silk-thread bangle image
- [ ] Magenta + gold used consistently; no Scoops ice-cream cone art
- [ ] Feature cards lift and rotate images on hover
- [ ] All 12 images are jewellery/craft appropriate
- [ ] Warm ivory background, not pure white

### 14.2 Content
- [ ] Business name **Risa Adorn** everywhere the brand appears
- [ ] Location Tenkasi visible (top bar and/or footer)
- [ ] WhatsApp 87781 61826 visible and clickable
- [ ] Three course prices ₹799, ₹299, ₹149 present
- [ ] Demo ₹29 mentioned in promo or catalog
- [ ] “Only for women / school students to housewives” appears at least once
- [ ] Bridal pre-booking benefits appear in about or bullets
- [ ] Tagline Learn · Create · Earn present
- [ ] No lorem ipsum

### 14.3 Functional
- [ ] Sticky header shadow on scroll
- [ ] Active nav updates per section
- [ ] Mobile hamburger drawer works
- [ ] Three catalog tabs filter cards and re-animate
- [ ] Add-to-enquiry: icon → badge increment → bounce → reset
- [ ] Email form shows subscribed state
- [ ] Scroll-to-top after 400px
- [ ] WhatsApp FAB opens `wa.me` with message
- [ ] Page-leave overlay on outbound same-tab links
- [ ] No JS errors in console

### 14.4 Responsive
- [ ] Desktop 1200px+: multi-column intact
- [ ] Tablet 768–980: 2-col catalog, hamburger
- [ ] Mobile <520: single column, compact header
- [ ] No horizontal scroll
- [ ] Buttons ≥44px tall on small screens

### 14.5 SEO / performance
- [ ] Unique title and meta description ≤160 chars
- [ ] Single H1
- [ ] All images have alt
- [ ] Semantic header/section/article/footer
- [ ] WebP images
- [ ] Font preconnect

---

## 15. Glossary

| Term | Definition |
|---|---|
| SRS | Software Requirements Specification |
| Design token | Named CSS variable such as `--primary` |
| Landing page | Single-page marketing site focused on conversion |
| FAB | Floating action button |
| WebP | Compressed image format used in `/images/` |
| IntersectionObserver | API that detects elements entering the viewport |
| Kundan | Traditional Indian stone-setting used on bangles |
| Pre-recorded vedios | Flyer spelling of “videos”; site copy must use **videos** |
| Enquiry cart | Visual bag badge; not a checkout system |

---

## 16. Appendix A — Full Copy Deck

### Title & meta
- Title: `Risa Adorn — Silk Thread Bangles & Courses in Tenkasi`
- Description: `Handmade silk-thread bangles, bridal pre-booking, and from-home courses for women in Tenkasi. Learn, create, earn. WhatsApp 87781 61826.`

### Top bar
- Left: Tenkasi Studio · WhatsApp 87781 61826
- Center: DEMO CLASS ₹29 · LEARN FROM HOME — ENROLL NOW
- Right: English · தமிழ்

### Hero
- Eyebrow: — Learn · Create · Earn
- H1: Silkthread Bangles, Handmade to Shine
- Body: From Tenkasi, Risa Adorn teaches silk-thread bangle making from home and crafts bridal-ready jewellery. Every woman can learn, create, and shine.
- Button: Shop Now

### Features head
- Script: Refreshingly Beautiful
- H2: Learn, Create & Earn With Every Thread

### About
- Script: Handmade with love
- H2: Every Bangle Tells a Story
- Body: Designed for your memories. Premium silk thread, exclusive designs, perfect finishing, comfort fit — made with love in Tenkasi.

### Courses
- H2: Learn From Home. Earn Your Dream.
- Body: Beginner-friendly silk-thread training for school students to housewives. Practice sessions, recorded lessons, and WhatsApp doubt clearance.
- Bullets: Lifetime access; WhatsApp support; Learn at your pace; Skill today, success tomorrow

### Catalog head
- Script: Freshly made just for you
- H2: Courses & Jewels That Steal The Show

### CTA
- H2: Ready to Learn, Create & Earn?
- Body: Join women building a beautiful skill — and a home income — with Risa Adorn.
- Button: Subscribe / Enroll via WhatsApp nearby

### Footer tagline
Crafting joyful handmade jewellery and skills from Tenkasi. Where passion meets profession.

---

## 17. Appendix B — Course & Product Catalog

Cards shown in `#shop`. Tabs filter on `data-category`.

### Tab: Courses (`data-category="courses"`)

| Title | Subline | Price | Image |
|---|---|---|---|
| Professional Bangle Making | Registration fees only · lifetime access | ₹799 | `flavor1.webp` |
| Invisible Chain Master | Pre-recorded + WhatsApp group | ₹299 | `flavor2.webp` |
| Hair Accessories Course | Bows, clips & florals | ₹149 | `flavor3.webp` |
| Live Demo Class | 1-hour beginner intro | ₹29 | `summer.webp` |

### Tab: Bangles (`data-category="bangles"`)

| Title | Subline | Price | Image |
|---|---|---|---|
| Bridal Silk Thread Set | Pre-book for your wedding date | ₹1,499 | `flavor4.webp` |
| Pink Floral Kundan Stack | Everyday & festive wear | ₹899 | `product5.webp` |
| Gold Pearl Silk Bangles | Champagne silk with pearls | ₹999 | `product6.webp` |
| Traditional Multicolor Set | Temple & celebration colours | ₹799 | `flavor1.webp` |

*Atelier prices are suggested catalog prices for the static demo (flyers did not list bangle SKU prices). They must be easy to edit in HTML. WhatsApp confirmation is the source of truth.*

### Tab: Accessories (`data-category="accessories"`)

| Title | Subline | Price | Image |
|---|---|---|---|
| Invisible Chain Necklace | Crystal heart pendants | ₹299 | `flavor2.webp` |
| Floral Hair Clip Set | Handmade roses & pearls | ₹249 | `feature3.webp` |
| Kundan Butterfly Barrette | Party & bridal hair | ₹349 | `flavor3.webp` |
| Custom Hair Accessory | Made to match your outfit | ₹199 | `product5.webp` |

---

## 18. Open Items / Future (not v1)

- Real payment checkout
- Tamil language toggle
- Embedded course player
- Live demo calendar (replace flyer date July 3)
- Instagram shop feed
- Certificate e-commerce add-on

---

*End of SRS Document*  
*Version 1.0 — 17 September 2026*  
*Brand: Risa Adorn · Location: Tenkasi · WhatsApp: 87781 61826*  
*Architecture reference: Scoops Ice Cream niche landing template*

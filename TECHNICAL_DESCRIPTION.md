# Technical Description — RV Portfolio

Single-page portfolio/coaching website. Use this to recreate the project from scratch.

---

## Stack

- React 18 + TypeScript 5, Vite 5, Tailwind CSS 3
- Vercel deployment (frontend + serverless API)

## Architecture

- SPA, anchor-based navigation (no router library)
- Context API for i18n (no external i18n library)
- Serverless email handler at `/api/send-email`

---

## Key Packages

```
react@18
typescript@5
vite@5
tailwindcss@3
lucide-react
react-google-recaptcha
@vercel/node
```

Email delivery via **Resend** API.

---

## File Layout

```
src/
  App.tsx                  — root, mounts all sections, IntersectionObserver scroll reveals
  LanguageContext.tsx      — Context + hook, browser lang detection, localStorage persist
  translations.ts          — all copy keyed by section + language (cs/en)
  index.css                — CSS variables (colors, transitions), utility classes, keyframes
  main.tsx                 — React entry point
  components/
    Header.tsx             — sticky nav, backdrop blur, mobile hamburger, lang switcher
    Hero.tsx               — full-height, parallax photo scroll, staggered entrance anims
    About.tsx              — multi-card grid with icons (lucide-react)
    Services.tsx           — 2 offering cards with bullet lists
    Contact.tsx            — form, reCAPTCHA v3, success state, contact details
    Footer.tsx             — copyright with new Date().getFullYear()
    LanguageSwitcher.tsx   — CZ/EN toggle buttons
api/
  send-email.ts            — POST handler: validate → verify reCAPTCHA → send via Resend
```

---

## Styling System

- **CSS variables**: `--c-orange`, `--c-cream`, `--c-cream-alt`, etc.
- **Fonts**: Oswald (headings), Inter (body) — loaded via Google Fonts
- **Transitions**: `--transition-smooth` (0.3s), `--transition-spring` (0.45s)
- **Utility classes**: `.flat-card`, `.btn-pill`, `.btn-sporty`
- **Animations**:
  - `heroSlideIn`, `heroFadeUp` keyframes with staggered delays
  - `.animate-on-scroll` + `.is-visible` pattern driven by IntersectionObserver
  - Hero parallax: photo offset by `scrollY * 0.15`
  - Nav hover: orange underline sweep (`.nav-link::after`)
- `prefers-reduced-motion` respected — disables animations if set

---

## i18n Implementation

- `LanguageProvider` wraps the app, exposes `useLanguage()` hook
- Detects browser language via `getBrowserLanguage()`
- Persists selected language to `localStorage`
- Two language keys: `cs` (Czech, primary), `en` (English)
- All UI text lives in `translations.ts`

---

## Components

| Component | Notes |
|-----------|-------|
| **Header** | Sticky (z-50), backdrop blur, mobile hamburger menu, lang switcher, smooth scroll nav links |
| **Hero** | Full-height section, parallax background on mobile, staggered text entrance animations, CTA buttons |
| **About** | 7 sub-sections (Who Am I, Mission, Why, Qualifications, How I Work, Goal), card grid with lucide icons |
| **Services** | 2 cards (Hybrid & Online coaching), includes/ideal-for bullets, acceptance criteria |
| **Contact** | Form (name/email/message), reCAPTCHA v3, success message on submit, contact card (email/phone/IG/location) |
| **Footer** | Simple copyright line with dynamic year |
| **LanguageSwitcher** | Button group (CZ/EN), active state highlight |

---

## API Endpoint

```
POST /api/send-email
```

**Request body:**
```json
{ "name": "", "email": "", "message": "", "captchaToken": "" }
```

**Flow:**
1. Validate inputs (name ≤ 200, email ≤ 254 + regex, message ≤ 5000)
2. Escape HTML to prevent injection
3. Verify reCAPTCHA v3 token — score must be ≥ 0.5
4. Send email via Resend to `romana.vitkova.coach@gmail.com`, reply-to = user email
5. Returns 400 on validation failure, 500 on server error

**CORS**: Locked to production domain (`https://rv-portfolio-sigma.vercel.app`)

---

## Environment Variables

| Variable | Scope | Purpose |
|----------|-------|---------|
| `VITE_RECAPTCHA_SITE_KEY` | Frontend (Vite) | reCAPTCHA site key |
| `RECAPTCHA_SECRET_KEY` | Serverless (Vercel) | reCAPTCHA secret for verification |
| `RESEND_API_KEY` | Serverless (Vercel) | Resend email service key |

---

## Deployment

- **Vercel**: frontend auto-builds from `/`; `api/` folder auto-deployed as Node serverless functions
- No custom server — fully static + serverless

---

## Config Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | React plugin, `optimizeDeps.exclude: ['lucide-react']` |
| `tailwind.config.js` | Content paths, Oswald + Inter font families |
| `postcss.config.js` | Tailwind + Autoprefixer |
| `tsconfig.app.json` | ESNext target, DOM libs, strict mode |
| `index.html` | OG/Twitter meta tags, Google Fonts preconnect |
| `eslint.config.js` | React Refresh + React Hooks rules |

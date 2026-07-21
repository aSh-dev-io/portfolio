# Ashwin Moorthy — Portfolio (Recreation)

A from-scratch recreation of the reference Framer site, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React. All copy is preserved from the original page; no proprietary images/assets were copied — the hero/media blocks use original iconography instead.

## Stack
- **Next.js 15** (App Router, React 18)
- **TypeScript**
- **Tailwind CSS** — design tokens (colors, radii) defined in `tailwind.config.ts`
- **Framer Motion** — scroll-reveal + interaction animations
- **Lucide React** — icon set

## Structure
```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css        Base styles + utility classes (.card, .chip, .btn-primary, etc.)
components/
  Navbar.tsx          Sticky pill nav with mobile menu
  Hero.tsx            Intro section
  About.tsx
  Skills.tsx          Animated proficiency bars
  Projects.tsx        Project cards grid
  Achievements.tsx
  Certifications.tsx
  Experience.tsx
  Publications.tsx
  Education.tsx       Timeline layout
  Resume.tsx          CTA banner
  Contact.tsx         Contact links + form
  Footer.tsx
  ui/
    SectionHeading.tsx  Reusable eyebrow + title + description
    FadeIn.tsx          Reusable scroll-in-view animation wrapper
lib/
  data.ts             All page content/copy centralized here
```

## Optional: Load Inter via next/font
This project ships with a system-font fallback so it builds without network access. To use Google's Inter font (closer to the source site's typography), restore it in `app/layout.tsx`:
```tsx
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
// then add className={inter.variable} to <html>, and "var(--font-inter)" as the first entry
// in tailwind.config.ts -> theme.extend.fontFamily.sans
```

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Notes
- All content (skills, projects, achievements, certifications, experience, education, publications, contact info) lives in `lib/data.ts` — update it to re-purpose the template for another profile.
- Color palette: dark background (`#0A0D0C`) with a turquoise accent (`#3ECFB2`), matching the source site's theme, implemented independently via Tailwind tokens.
- Fully responsive: single-column stacking on mobile, multi-column grids from `sm`/`lg` breakpoints up.

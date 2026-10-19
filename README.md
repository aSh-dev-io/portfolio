# ⚡ Ashwin Moorthy — Engineering Portfolio

<p align="center">
  <a href="https://ashwin-moorthy-portfolio.vercel.app/">
    <strong>🌐 Explore My Live Portfolio →</strong>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-Styled-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animated-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## 🚀 About the Project

Welcome to my personal engineering portfolio — a digital space showcasing my technical interests, projects, academic journey, achievements, and engineering experience.

Built with **Next.js, TypeScript, Tailwind CSS, and Framer Motion**, the portfolio combines a clean, responsive interface with subtle animations and a distinctive engineering-inspired visual identity.

The goal is to present my work in **Embedded Systems, Electronics, IoT, PCB Design, Instrumentation, Industrial Automation, and related technologies** through a professional and accessible experience.

🔗 **Live Website:** https://ashwin-moorthy-portfolio.vercel.app/

## 🎨 Design Philosophy

The portfolio follows a minimal, technical aesthetic designed around precision, readability, and subtle motion.

- 🖤 **Charcoal Grey (`#2E2E2E`)** — the primary background.
- 💛 **Neon Yellow (`#FFFA00`)** — accent color for highlights and interactions.
- ✨ **Soft Yellow (`#FFEF44`)** — secondary accent for restrained visual emphasis.
- 🤍 **White (`#FFFFFF`)** — primary text and contrast.

The visual design uses **simple 2D geometric shapes, subtle live effects, clean typography, and responsive layouts** rather than a heavy 3D environment.

## ✨ Features

- 🏠 **Hero Section** — introduction, primary actions, and resume access.
- 👤 **About** — professional introduction and engineering interests.
- 🛠️ **Skills** — organized technical skills and areas of expertise.
- 💻 **Projects** — project cards and detailed project information.
- 🏆 **Achievements** — highlights and accomplishments.
- 📜 **Certifications** — certification information and credential links where available.
- 💼 **Experience** — professional and practical experience.
- 🎓 **Education** — academic journey and qualifications.
- 📚 **Publications** — research and technical publications.
- 📄 **Resume** — convenient access to the resume.
- ✉️ **Contact** — contact information and communication options.
- 🧭 **Responsive Navigation** — desktop navigation and a mobile menu.
- 🎬 **Subtle Animations** — restrained transitions and scroll-based reveals.
- 📱 **Responsive Design** — layouts adapted for desktop, tablet, and mobile.
- ⚡ **Performance-Focused UI** — lightweight 2D effects and reusable components.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ Next.js 15 | React framework and App Router |
| 📘 TypeScript | Type safety and maintainable code |
| 🎨 Tailwind CSS | Styling and responsive design |
| 🎞️ Framer Motion | UI transitions and scroll animations |
| 🎯 Lucide React | Icons |
| 🚀 Vercel | Deployment and hosting |

## 📂 Project Structure

```text
ashwin-moorthy-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Achievements.tsx
│   ├── Certifications.tsx
│   ├── Experience.tsx
│   ├── Publications.tsx
│   ├── Education.tsx
│   ├── Resume.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── SectionHeading.tsx
│       └── FadeIn.tsx
├── lib/
│   └── data.ts
├── public/
├── package.json
├── tailwind.config.ts
└── README.md
```

*Note: This tree represents the documented project structure. Individual filenames may differ in the current repository.*

## ⚙️ Getting Started

### Prerequisites

- Node.js compatible with your Next.js version
- npm
- Git (recommended)

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd ashwin-moorthy-portfolio
```

Replace the placeholder with your actual GitHub repository URL.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### 4. Create a Production Build

```bash
npm run build
```

### 5. Run the Production Server

```bash
npm run start
```

Run `npm run build` successfully before starting the production server.

## 📝 Customization

### Update Portfolio Content

The documented project structure centralizes portfolio content in:

```text
lib/data.ts
```

Use the existing data structures to update skills, projects, achievements, certifications, experience, education, publications, and contact information.

Keep project details and credential links accurate. Do not add placeholder URLs as working links.

### Customize the Theme

Update the global CSS variables, Tailwind configuration, and component styles to maintain a consistent design system.

Current primary colors:

```css
:root {
  --background: #2E2E2E;
  --surface: #383838;
  --accent: #FFFA00;
  --accent-soft: #FFEF44;
  --foreground: #FFFFFF;
  --muted: #C6C6C6;
}
```

Adapt the variable names to match those already used by the application.

### Add Images and Assets

Place static assets inside the `public/` directory and reference them using root-relative paths, for example:

```tsx
<img src="/project-image.png" alt="Project preview" />
```

For production images, consider using Next.js Image where appropriate.

## 🌐 Deployment

The portfolio is deployed on Vercel.

**Visit the live website:** [ashwin-moorthy-portfolio.vercel.app](https://ashwin-moorthy-portfolio.vercel.app/)

To deploy your own changes:

1. Commit and push the changes to your connected Git repository.
2. Allow Vercel to build and deploy the project.
3. Check the deployment logs for errors.
4. Verify that the production URL displays the latest version.

## 🛣️ Development Goals

- 🎨 Continue refining the visual design and consistency.
- ⚡ Improve loading speed and rendering performance.
- 📱 Maintain a polished mobile experience.
- 🔗 Keep project and certification links functional.
- ♿ Improve accessibility and keyboard navigation.
- 🧹 Maintain clean, reusable, and type-safe components.

## 👨‍💻 Author

**Ashwin Moorthy**

Electronics & Communication Engineering | Embedded Systems | IoT | PCB Design | Instrumentation & Automation

🔗 **Portfolio:** https://ashwin-moorthy-portfolio.vercel.app/

---

<p align="center">
  <strong>⚙️ Engineering ideas into reliable solutions.</strong>
</p>

<p align="center">
  ⭐ If you find this project useful or inspiring, consider giving the repository a star!
</p>

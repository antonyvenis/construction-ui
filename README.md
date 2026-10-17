<div align="center">

# 🏗️ XTRA Construction – Home Page UI

**A pixel-faithful, fully responsive recreation of the _Construction 2_ home page**
built for the **Front-End UI Development Task**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://construction-ui-lemon.vercel.app/)
[![Repository](https://img.shields.io/badge/GitHub-antonyvenis%2Fconstruction--ui-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/antonyvenis/construction-ui)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Desktop%20%7C%20Tablet%20%7C%20Mobile-F4C03B?style=for-the-badge)

### 🔗 [**Live Website**](https://construction-ui-lemon.vercel.app/) &nbsp;•&nbsp; 📦 [**GitHub Repository**](https://github.com/antonyvenis/construction-ui)

**Reference:** <https://xtratheme.com/elementor/construction-2/>

</div>

---

## 📑 Table of Contents
1. [Project Overview](#-project-overview)
2. [Features](#-features)
3. [Technology Used](#-technology-used)
4. [Project Structure](#-project-structure)
5. [Installation Instructions](#-installation-instructions)
6. [Development Command](#-development-command)
7. [Build Command](#-build-command)
8. [Deployment Instructions](#-deployment-instructions)
9. [Dependencies](#-dependencies)
10. [Environment Configuration & API](#-environment-configuration--api)
11. [Assumptions](#-assumptions)
12. [Known Limitations](#-known-limitations)
13. [Author](#-author)

---

## 🎯 Project Overview
This project recreates the **complete first page / home page** of the XTRA *Construction 2* theme demo as a modern **React + Vite** single-page application. It follows the reference closely in **layout, design, sections, typography, colours, images, icons, spacing, buttons, components, animations, interactions and responsive behaviour**, and works on **desktop, tablet and mobile** with no horizontal scrolling.

## ✨ Features

| Area | What's implemented |
|---|---|
| **Header** | Navy top bar with call number and brand-coloured social icons (hover tooltips), transparent header over the hero, active/hover underline, animated **Pages** dropdown with nested submenu, "Free Consultation" button |
| **Hero slider** | Auto-rotating 2-slide slider, next/prev arrows, dots, entrance animations (photo slides in from the right, text from the left, slide-2 boxes rise from below) |
| **Features at a glance** | 3D rotate-in cards, yellow hover overlay with description and "Learn More" |
| **About** | Image with yellow offset block, ✓ list items that flip into yellow boxes on hover |
| **Services** | Three cards (wider centre card), yellow hover state, icon rotation, white "Read More" button + CTA band |
| **Process** | Large watermark heading, navy panel with numbered steps that flip to white on hover |
| **Latest projects** | 8-image grid with yellow overlay, ↗ icon and title on hover |
| **Quote form** | Client-side validation (name + valid e-mail) with success message |
| **Testimonials** | Auto-sliding carousel with photo, offset yellow block and quote mark, dots |
| **Client logos** | Yellow band with hover tooltip |
| **Footer** | Logo, brand text, yellow social squares (hover brand colours), legal links |
| **Utilities** | Cookie-consent card (remembered in `localStorage`), back-to-top button, sticky mobile call bar |
| **Mobile** | Right-hand **slide-in drawer menu** with overlay, ✕ close button and accordion **Pages → Dropdown menu** |
| **Accessibility** | Semantic landmarks, `aria-label`s on icon buttons, focus-visible form fields, `prefers-reduced-motion` support |

## 🛠 Technology Used
- **React 18** (hooks: `useState`, `useEffect`, `useRef`)
- **Vite 5** – dev server and production build
- **Plain CSS** (custom properties, Grid, Flexbox, keyframe animations, media queries) – no UI library
- **Google Fonts** – Poppins & Roboto
- **IntersectionObserver** for scroll-reveal animations
- **Vercel** for hosting

## 📂 Project Structure
```
construction-ui/
├── public/
│   └── images/            # reference photos, logos and icons
├── scripts/
│   └── download-images.mjs   # re-downloads images if missing
├── src/
│   ├── App.jsx            # all sections and interactions
│   ├── main.jsx           # React entry point
│   └── styles.css         # global + responsive styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation Instructions
**Requirements:** Node.js **18+** and npm.

```bash
# 1. Clone the repository
git clone https://github.com/antonyvenis/construction-ui.git

# 2. Enter the project folder
cd construction-ui

# 3. Install dependencies
npm install
```

> 🖼 Images already live in `public/images`. If any are missing, run `npm run images` to download them again.

## ▶️ Development Command
```bash
npm run dev
```
Opens the app at **http://localhost:5173** with hot reload.

## 📦 Build Command
```bash
npm run build      # production build in /dist
npm run preview    # preview the production build locally
```

## 🚀 Deployment Instructions
**Vercel (used for the live site)**
1. Push the project to GitHub.
2. On [vercel.com](https://vercel.com) choose **Add New → Project** and import the repository.
3. Framework preset: **Vite** · Build command: `npm run build` · Output directory: `dist`.
4. Click **Deploy**. Every `git push` to `main` redeploys automatically.

**Netlify (alternative)** – Build command `npm run build`, publish directory `dist`.

## 📚 Dependencies

| Package | Type | Purpose |
|---|---|---|
| `react`, `react-dom` | runtime | UI library |
| `vite` | dev | dev server and bundler |
| `@vitejs/plugin-react` | dev | React fast-refresh / JSX support |

## 🔐 Environment Configuration & API
- **Environment variables:** none required.
- **API documentation:** none – the app is front-end only. The quote form validates input in the browser and shows a success message; no network request is made.

## 📝 Assumptions
- Text, section order, menu items and colours follow the reference home page (brand yellow `#f4c03b`, navy `#243344`).
- Only the **home page** is in scope; menu items such as *Shop, Cart, Wishlist, My account* are placeholders and show a short notice instead of navigating.
- Images are the reference theme's demo images, used for this assessment only.
- Fonts: **Poppins** (body/headings) and **Roboto** (slide-2 captions).

## ⚠️ Known Limitations
- Spacing, sizes and icons were matched visually (the theme's original CSS is not available), so a few pixel-level differences may remain.
- The hero uses a custom React slider; it approximates, but is not identical to, the reference's *Slider Revolution* animation.
- Envato demo widgets (right-hand floating toolbar, "Buy theme" bar) are intentionally not reproduced.
- The contact form does not send e-mail (no backend).

## 👤 Author
**Antony Venis T** – Python Full Stack Developer (Django · React.js · PostgreSQL)

[![GitHub](https://img.shields.io/badge/GitHub-antonyvenis-181717?logo=github)](https://github.com/antonyvenis)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-antony--venis--t-0A66C2?logo=linkedin)](https://www.linkedin.com/in/antony-venis-t)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-F4C03B)](https://antony-venis-t-portfolio.vercel.app)

<div align="center">

⭐ Thank you for reviewing this project!

</div>
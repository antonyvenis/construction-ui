# Construction 2 – Home Page (UI Development Task)

## Project overview
Responsive recreation of the home page of https://xtratheme.com/elementor/construction-2/
Sections: top bar, sticky header + mobile menu, hero slider, features, about, services + CTA, process, latest projects (hover overlay), quote form, testimonials slider, footer, cookie bar.

## Technology used
React 18, Vite 5, plain CSS (no UI library).

## Dependencies
`react`, `react-dom` (runtime); `vite`, `@vitejs/plugin-react` (dev). Node.js 18+ required.

## Installation
```bash
git clone <repo-url>
cd construction-ui
npm install
npm run images   # downloads the reference images into public/images (run once)
```

## Development command
```bash
npm run dev      # http://localhost:5173
```

## Build command
```bash
npm run build    # output in /dist
npm run preview  # preview the production build
```

## Deployment (Vercel / Netlify)
- Import the GitHub repo. Framework preset: **Vite**.
- Build command: `npm run build`; Output directory: `dist`.
- No environment variables or backend API are needed.

## Environment configuration / API
None. The quote form is front-end only (validates name + email and shows a success message); no API is called.

## Assumptions
- Text, section order, menu and links follow the reference page content.
- Brand yellow `#f4c03b` taken from the reference theme colour; fonts: Poppins.

## Known limitations
- Images are the reference theme's demo images, fetched by `npm run images` into `public/images` (they are not committed to the source tarball). If a file is missing, the layout falls back to a plain colour block.
- Pixel-level spacing and icons are approximated, not copied from the reference CSS.
- Pages linked in the menu (About, Services, Shop...) are not built; links scroll to sections or are placeholders.

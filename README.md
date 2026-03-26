# SaQiB Zafar — Portfolio

A modern, dark-first developer portfolio showcasing 5+ years of work in **Frontend Development** and **QA Automation Engineering**.

**Live:** [saqi21.github.io/saqib-portfolio](https://saqi21.github.io/saqib-portfolio)

---

## Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS 4, CSS custom properties |
| **Animations** | Framer Motion, Lenis (smooth scroll) |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Forms** | React Hook Form, EmailJS |
| **Deployment** | GitHub Pages (static export) |

## Features

- **Dark/Light mode** with flash-free persistence and SSR-safe hydration
- **3D particle hero** with interactive mouse tracking and WebGL fallback
- **Case study projects** with Problem → Solution → Impact structure
- **Blog system** with full articles, reading progress, and social sharing
- **Testimonials slider** with auto-play and pause on hover
- **Printable resume** with PDF generation (html2pdf.js)
- **Contact form** with EmailJS integration and auto-reply
- **SEO optimized** with JSON-LD schema, OpenGraph, and Twitter cards
- **Fully responsive** across mobile, tablet, and desktop
- **Accessible** with skip-to-content, ARIA labels, and keyboard navigation

## Project Structure

```
app/                    # Next.js App Router pages
  blog/                 # Blog listing + dynamic article pages
  projects/             # Projects listing + dynamic detail pages
  resume/               # Printable/downloadable resume
  contact/              # Contact form with EmailJS
components/
  layout/               # Navbar, Footer
  sections/             # Homepage sections (Hero, About, Projects, etc.)
  shared/               # Reusable components (ScrollReveal, SectionHeader)
  three/                # Three.js scene, particles, geometry
  blog/                 # Reading progress, share buttons
data/                   # Content data (experience, skills, works, articles)
hooks/                  # Custom hooks (useTheme, useMediaQuery, useWebGL)
lib/                    # Utilities (constants, emailjs, icons, pdf generation)
types/                  # TypeScript interfaces
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Environment Variables

Create a `.env.local` file for the contact form:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Author

**SaQiB Zafar** — Frontend Engineer & QA Automation Architect

- [LinkedIn](https://www.linkedin.com/in/saqibzafar-sqa/)
- [GitHub](https://github.com/saqi21)
- [Portfolio](https://saqi21.github.io/saqib-portfolio)

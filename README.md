# Damien Nsoh Ayine - Portfolio Website

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **Dark theme** with teal accent color (`#14b8a6`)
- **Smooth scroll animations** powered by Framer Motion
- **Responsive design** - mobile-first approach
- **Interactive timeline** for work experience (click to expand)
- **Contact form** with API route and validation
- **Resume download** functionality
- **SEO optimized** with metadata
- **Glass morphism** UI elements
- **Animated hero section** with floating elements

## 📁 Project Structure

```
damien-portfolio/
├── app/                      # Next.js App Router
│   ├── api/contact/          # Contact form API endpoint
│   ├── globals.css           # Global styles, animations, custom classes
│   ├── layout.tsx            # Root layout with metadata/SEO
│   └── page.tsx              # Home page assembling all sections
├── components/
│   ├── Navbar.tsx            # Sticky navigation with mobile hamburger
│   └── sections/
│       ├── Hero.tsx          # Full-screen hero with animated profile
│       ├── About.tsx         # Story + impact stats grid
│       ├── Experience.tsx    # Interactive timeline
│       ├── Projects.tsx      # Project cards with hover effects
│       ├── Skills.tsx        # Skills grid + education & certs
│       ├── Resume.tsx        # Resume download section
│       ├── Contact.tsx       # Contact form + info
│       └── Footer.tsx        # Footer with social links
├── lib/
│   ├── data.ts               # All portfolio data (experience, projects, skills, etc.)
│   └── utils.ts              # Utility helper (cn function)
├── public/
│   ├── resume.pdf            # Your resume (replace this!)
│   └── images/               # Add your profile photo here
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd damien-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory (configured in `next.config.js`).

## 📝 Customization Guide

### 1. Replace Placeholder Images
- Add your profile photo to `public/images/profile.jpg`
- Update `components/sections/Hero.tsx` to use your image instead of initials

### 2. Update Resume
- Replace `public/resume.pdf` with your actual resume PDF

### 3. Update Project Links
- In `lib/data.ts`, update `liveUrl` and `githubUrl` for each project

### 4. Add Real Project Images
- Add screenshots to `public/images/projects/`
- Update project cards to display images

### 5. Configure Contact Form
- The contact form currently logs to console
- Integrate with an email service (SendGrid, Resend, Nodemailer) in `app/api/contact/route.ts`

### 6. Update Personal Info
- Edit `lib/data.ts` to update any personal information, stats, or content

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project is configured for static export. The build output is in the `out/` directory.

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0a0a` | Page background |
| Surface | `#171717` | Cards, panels |
| Accent | `#14b8a6` | CTAs, highlights, borders |
| Foreground | `#f5f5f5` | Primary text |
| Muted | `#737373` | Secondary text |

## 📄 License

MIT License - feel free to use this template for your own portfolio.

---

**Built with ❤️ by Damien Nsoh Ayine**

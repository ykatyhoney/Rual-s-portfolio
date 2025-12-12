# 🚀 Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, animated portfolio website built with Next.js 15, React 19, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern Design** - Clean, minimal aesthetic inspired by Linear, Vercel, and Josh W Comeau
- ✨ **Smooth Animations** - Framer Motion animations for engaging user experience
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🚀 **Performance Optimized** - Built with Next.js 15 App Router for optimal performance
- 🎯 **SEO Friendly** - Comprehensive metadata and Open Graph tags
- ♿ **Accessible** - ARIA labels and semantic HTML throughout
- 🔒 **Type Safe** - Full TypeScript coverage
- 🎭 **Component Library** - Reusable UI components

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Utilities:** clsx, tailwind-merge

## 📁 Project Structure

```
├── app/
│   ├── data/              # Data files (projects, experience, skills, testimonials)
│   ├── projects/          # Individual project pages
│   ├── types/             # TypeScript type definitions
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error boundary
│   └── not-found.tsx      # 404 page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── section.tsx
│   │   ├── section-header.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Timeline.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── loading.tsx
│   └── error-boundary.tsx
├── hooks/                 # Custom React hooks
│   ├── use-scroll-position.ts
│   └── use-intersection-observer.ts
├── lib/                   # Utility functions and constants
│   ├── constants.ts
│   └── utils.ts
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Site Configuration

Edit `lib/constants.ts` to update:
- Site name, title, and description
- Social media links
- Contact email
- Site URL

### Update Content

- **Projects:** `app/data/projects.ts`
- **Experience:** `app/data/experience.ts`
- **Skills:** `app/data/skills.ts`
- **Testimonials:** `app/data/testimonials.ts`

### Customize Styling

- **Colors:** Edit `tailwind.config.ts`
- **Global Styles:** Edit `app/globals.css`
- **Component Styles:** Edit individual component files

### Update Metadata

Edit `app/layout.tsx` to update:
- SEO metadata
- Open Graph tags
- Twitter cards
- Verification codes

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically!

The project is optimized for Vercel's platform.

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🎨 Component Usage

### Section Component

```tsx
import { Section } from '@/components/ui/section'

<Section id="about" className="bg-black">
  {/* Content */}
</Section>
```

### Button Component

```tsx
import { Button } from '@/components/ui/button'

<Button href="#contact" variant="primary">
  Get in Touch
</Button>
```

### Card Component

```tsx
import { Card } from '@/components/ui/card'

<Card delay={0.1}>
  {/* Content */}
</Card>
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Acknowledgments

- Design inspiration from [Linear](https://linear.app), [Vercel](https://vercel.com), and [Josh W Comeau](https://www.joshwcomeau.com/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

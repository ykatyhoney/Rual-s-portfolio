export const SITE_CONFIG = {
  name: 'Portfolio',
  title: 'Full-Stack Developer | AI Automation Specialist',
  description: 'Full-stack developer focused on AI automation, scrapers, and fast apps. 5+ years building Apple Watch apps and intelligent systems.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com',
  ogImage: '/og-image.jpg',
  links: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com',
    github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com',
  },
} as const

export const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
] as const

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
} as const

export const SECTION_IDS = {
  about: 'about',
  projects: 'projects',
  skills: 'skills',
  experience: 'experience',
  testimonials: 'testimonials',
  contact: 'contact',
} as const


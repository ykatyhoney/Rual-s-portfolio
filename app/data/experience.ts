import { Experience } from '../types'

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Full-Stack Developer',
    company: 'Freelance / Contract',
    period: '2019 - Present',
    description: [
      'Built AI-powered automation systems for trading, lead generation, and business intelligence',
      'Developed large-scale web scraping platforms processing 100K+ businesses across multiple industries',
      'Created native watchOS and iOS applications with seamless cross-device communication',
      'Designed and implemented enterprise SaaS dashboards with real-time analytics',
    ],
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Python', 'Swift', 'watchOS'],
  },
  {
    id: '2',
    title: 'Apple Watch Developer',
    company: 'Independent Projects',
    period: '2019 - 2024',
    description: [
      'Specialized in native watchOS app development with 5 years of focused experience',
      'Built complex watchOS → iPhone communication systems using WatchConnectivity',
      'Optimized apps for battery life and performance on Apple Watch hardware',
      'Published multiple apps to the App Store with high user ratings',
    ],
    tech: ['Swift', 'SwiftUI', 'watchOS', 'iOS', 'Core Data', 'HealthKit'],
  },
  {
    id: '3',
    title: 'AI & Automation Engineer',
    company: 'Various Clients',
    period: '2020 - Present',
    description: [
      'Developed AI bots for arbitrage trading with real-time decision making',
      'Built automated lead generation systems using NLP and machine learning',
      'Created custom automation tools for business process optimization',
      'Integrated OpenAI and other AI services into production applications',
    ],
    tech: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
]


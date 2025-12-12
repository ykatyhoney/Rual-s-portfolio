export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  link?: string
  github?: string
  featured: boolean
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string[]
  tech: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'ai'
  level: 'expert' | 'advanced' | 'intermediate'
}


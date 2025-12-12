'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function Card({ children, className, hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-gray-900/50 border border-white/10 rounded-2xl overflow-hidden',
        hover && 'hover:border-white/20 transition-all duration-300',
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -8 } : undefined}
    >
      {children}
    </motion.div>
  )
}


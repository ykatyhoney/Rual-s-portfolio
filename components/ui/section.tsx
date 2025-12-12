'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Section({ id, children, className, delay = 0 }: SectionProps) {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-100px',
    triggerOnce: true,
  })

  return (
    <motion.section
      ref={elementRef as React.RefObject<HTMLElement>}
      id={id}
      className={cn('py-24 px-6 sm:px-8', className)}
      initial={{ opacity: 0, y: 50 }}
      animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  )
}


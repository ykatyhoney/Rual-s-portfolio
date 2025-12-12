'use client'

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', className)}>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mb-4" />
      {subtitle && <p className="text-lg text-gray-400 max-w-2xl">{subtitle}</p>}
    </div>
  )
}


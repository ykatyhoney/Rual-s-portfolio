'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<HTMLMotionProps<'a'>, 'href'> {
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  href,
  variant = 'primary',
  children,
  className,
  disabled,
  type,
  ...props
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100',
    secondary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600',
    outline: 'border border-white/20 text-white hover:bg-white/5',
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        whileHover={!disabled ? { scale: 1.05 } : undefined}
        whileTap={!disabled ? { scale: 0.95 } : undefined}
        {...(props as HTMLMotionProps<'a'>)}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type || 'button'}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], className)}
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      {...(props as HTMLMotionProps<'button'>)}
    >
      {children}
    </motion.button>
  )
}


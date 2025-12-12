'use client'

import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { motion } from 'framer-motion'

const paragraphs = [
  "I'm a full-stack developer who's spent the last five years building things that matter. My focus? Creating intelligent systems that automate complex processes and solve real business problems.",
  "My journey started with Apple Watch development—five years of crafting native watchOS apps that seamlessly communicate with iPhone. This taught me the importance of performance, reliability, and creating experiences that feel magical. I've built apps that handle real-time data synchronization, background processing, and complex state management across devices.",
  "But I didn't stop there. I saw opportunities to automate entire workflows using AI and intelligent scraping. I built trading bots that identify arbitrage opportunities in real-time. I created lead generation systems that use NLP to qualify prospects automatically. I developed scraping platforms that systematically collect business data across entire industries—HVAC, plumbing, painting, flooring—processing hundreds of thousands of businesses with precision and reliability.",
  "What drives me? Building fast, reliable systems that deliver measurable value. Whether it's a Next.js dashboard that handles millions of data points, a FastAPI backend that processes requests in milliseconds, or a PostgreSQL database optimized for complex queries—I care about the details that make software exceptional.",
  "I'm always exploring new ways to combine AI, automation, and clean code to solve problems that haven't been solved yet.",
]

export default function About() {
  return (
    <Section id="about" className="bg-black">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="About Me" />
        
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={index === paragraphs.length - 1 ? 'text-white font-medium' : ''}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </Section>
  )
}

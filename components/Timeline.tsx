'use client'

import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { experience } from '@/app/data/experience'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function Timeline() {
  return (
    <Section id="experience" className="bg-black">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Experience"
          subtitle="My professional journey building intelligent systems"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-4 border-black" />

                {/* Content */}
                <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-300">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-2" aria-hidden="true">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

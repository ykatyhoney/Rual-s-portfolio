'use client'

import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { Card } from '@/components/ui/card'
import { skills } from '@/app/data/skills'
import { motion } from 'framer-motion'

const categoryColors = {
  frontend: 'from-blue-400 to-cyan-400',
  backend: 'from-purple-400 to-pink-400',
  mobile: 'from-green-400 to-emerald-400',
  ai: 'from-yellow-400 to-orange-400',
  tools: 'from-gray-400 to-gray-600',
}

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  ai: 'AI & ML',
  tools: 'Tools',
}

export default function Skills() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <Section id="skills" className="bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Skills & Tech Stack"
          subtitle="Technologies and tools I use to build exceptional products"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <Card key={category} delay={categoryIndex * 0.1} hover={false}>
              <div className="p-6">
                <h3
                  className={`text-lg font-semibold mb-4 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} bg-clip-text text-transparent`}
                >
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                        skill.level === 'expert'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : skill.level === 'advanced'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                      }`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

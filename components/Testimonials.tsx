'use client'

import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { Card } from '@/components/ui/card'
import { testimonials } from '@/app/data/testimonials'
import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <Section className="bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Testimonials"
          subtitle="What clients and collaborators say about working with me"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} delay={index * 0.1}>
              <div className="p-6">
                <Quote className="w-8 h-8 text-blue-400 mb-4" aria-hidden="true" />
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

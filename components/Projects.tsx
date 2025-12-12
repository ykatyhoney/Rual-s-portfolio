'use client'

import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '@/app/data/projects'
import Image from 'next/image'

export default function Projects() {
  return (
    <Section id="projects" className="bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A selection of projects showcasing my expertise in AI automation, web scraping, and full-stack development"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} delay={index * 0.1}>
              <Link
                href={`/projects/${project.id}`}
                className="group relative block h-full"
                aria-label={`View ${project.title} project`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        aria-label={`Visit ${project.title} live site`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        <span>Live</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        aria-label={`View ${project.title} source code`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" aria-hidden="true" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

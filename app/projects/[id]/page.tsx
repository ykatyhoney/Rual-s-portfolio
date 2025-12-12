import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects } from '@/app/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | ${SITE_CONFIG.name}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      {/* Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 pb-12">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6"
              aria-label="Back to projects"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Projects</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          {project.link && (
            <Button
              href={project.link}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live site`}
            >
              <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
              View Live
            </Button>
          )}
          {project.github && (
            <Button
              href={project.github}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code`}
            >
              <Github className="w-4 h-4 mr-2" aria-hidden="true" />
              View Code
            </Button>
          )}
        </div>

        {/* Description */}
        <article className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </article>

        {/* Tech Stack */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-900 border border-white/10 text-gray-300 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

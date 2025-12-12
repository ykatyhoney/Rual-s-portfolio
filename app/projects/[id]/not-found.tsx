import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">
          The project you're looking for doesn't exist.
        </p>
        <Link
          href="/#projects"
          className="inline-block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    </main>
  )
}


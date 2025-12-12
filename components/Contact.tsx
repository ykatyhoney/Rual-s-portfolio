'use client'

import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: SITE_CONFIG.links.github, label: 'GitHub' },
  { icon: Linkedin, href: SITE_CONFIG.links.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: SITE_CONFIG.links.twitter, label: 'Twitter' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Handle form submission
    // In a real app, you'd send this to an API endpoint
    console.log('Form submitted:', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Section id="contact" className="bg-black">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Get in Touch"
          subtitle="Have a project in mind? Let's build something amazing together."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              <a
                href={`mailto:${SITE_CONFIG.links.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                aria-label={`Send email to ${SITE_CONFIG.links.email}`}
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>{SITE_CONFIG.links.email}</span>
              </a>

              <div className="flex items-center gap-4 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-gray-900 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Visit ${social.label} profile`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5 text-gray-300" aria-hidden="true" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                placeholder="Your name"
                required
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                placeholder="your.email@example.com"
                required
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
                aria-required="true"
              />
            </div>

            <Button
              type="submit"
              variant="secondary"
              className="w-full"
              disabled={isSubmitting}
            >
              <Send className="w-5 h-5 mr-2" aria-hidden="true" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </Button>
          </motion.form>
        </div>
      </div>
    </Section>
  )
}

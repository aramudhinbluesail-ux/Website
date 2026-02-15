import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimateIn } from './AnimateIn'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    const form = e.target
    const data = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value || '—',
      industry: form.industry.value || '—',
      message: form.message.value,
    }
    try {
      const res = await fetch('https://formsubmit.co/ajax/aramudhin@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus("Thanks. We'll be in touch.")
        form.reset()
      } else throw new Error()
    } catch {
      setStatus('Error. Email aramudhin@gmail.com directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-2xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Contact
          </h2>
          <div className="flex flex-wrap gap-6 mb-12">
            <a href="mailto:aramudhin@gmail.com" className="text-neutral-400 hover:text-white font-medium transition-colors">
              aramudhin@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/amar-ramudhin-356bb22/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white font-medium transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" required placeholder="Name" className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-transparent transition-all" />
            <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-transparent transition-all" />
            <input name="company" placeholder="Company" className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-transparent transition-all" />
            <select name="industry" className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-transparent transition-all">
              <option value="">Industry</option>
              <option value="pharmaceutical">Pharmaceutical</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="other">Other</option>
            </select>
            <textarea name="message" required rows={3} placeholder="Message" className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-transparent resize-none transition-all" />
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="w-full py-4 bg-white text-neutral-950 font-semibold rounded-xl hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send'}
            </motion.button>
          </form>
          {status && <p className={`text-sm mt-4 ${status.includes('Thanks') ? 'text-neutral-400' : 'text-amber-400'}`}>{status}</p>}
        </AnimateIn>
      </div>
    </section>
  )
}

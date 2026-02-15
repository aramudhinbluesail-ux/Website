import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/projects-content.json')
      .then((r) => r.json())
      .then((d) => setProjects(d.projects || []))
      .catch(() => setProjects([]))
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  }, [projects])

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 22 }}
        >
          <Link to="/" className="text-neutral-500 hover:text-neutral-950 text-sm font-medium mb-12 inline-block transition-colors">
            ← Back
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-950 mb-16">Projects</h1>
        </motion.div>

        <div className="space-y-24">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px', amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 80, damping: 22, delay: i * 0.06 }}
              className="scroll-mt-24"
            >
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                {p.category}
              </span>
              <h2 className="text-2xl font-semibold text-neutral-950 mt-2 mb-4">{p.title}</h2>
              <p className="text-neutral-600 mb-6">{p.shortDescription}</p>

              {(p.client || p.duration) && (
                <p className="text-sm text-neutral-500 mb-6">
                  {[p.client, p.duration].filter(Boolean).join(' • ')}
                </p>
              )}

              {p.overview && !p.overview.includes('[Project Overview') && (
                <div className="mb-6">
                  <h3 className="font-semibold text-neutral-950 mb-2">Overview</h3>
                  <p className="text-neutral-600">{p.overview}</p>
                </div>
              )}

              {p.results?.length > 0 && (
                <ul className="space-y-2 mb-8">
                  {p.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-neutral-600">
                      <span className="text-green-500">✓</span> {r}
                    </li>
                  ))}
                </ul>
              )}

              {p.keyMetrics?.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {p.keyMetrics.map((m) => (
                    <div key={m.metric} className="p-4 bg-neutral-50 rounded-xl">
                      <div className="text-2xl font-semibold text-neutral-950">{m.value}</div>
                      <div className="text-sm text-neutral-600">{m.metric}</div>
                    </div>
                  ))}
                </div>
              )}

              {p.images?.length > 0 && (
                <div className="grid gap-4 mb-8">
                  {p.images.map((img) => (
                    <div key={img.alt}>
                      <img
                        src={'/' + img.url}
                        alt={img.alt}
                        className="w-full rounded-xl object-cover max-h-80"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          const fallback = e.target.nextElementSibling
                          if (fallback) fallback.classList.remove('hidden')
                        }}
                      />
                      <div className="hidden h-48 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-400 text-sm">
                        Image: {img.alt}
                      </div>
                      {img.caption && !img.caption.includes('[Image caption') && (
                        <p className="text-sm text-neutral-500 mt-2">{img.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {p.blockDiagrams?.length > 0 && (
                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-neutral-950">Block Diagrams</h3>
                  {p.blockDiagrams.map((d) => (
                    <div key={d.title}>
                      <img
                        src={'/' + d.url}
                        alt={d.alt}
                        className="w-full rounded-xl max-h-64 object-contain bg-neutral-50"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          const fb = e.target.nextElementSibling
                          if (fb) fb.classList.remove('hidden')
                        }}
                      />
                      <div className="hidden h-40 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-400 text-sm">
                        Diagram: {d.title}
                      </div>
                      {d.title && !d.title.includes('[Diagram') && (
                        <p className="text-sm font-medium text-neutral-700 mt-2">{d.title}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {p.graphs?.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-neutral-950">Results & Analytics</h3>
                  {p.graphs.map((g) => (
                    <div key={g.title}>
                      <img
                        src={'/' + g.url}
                        alt={g.alt}
                        className="w-full rounded-xl max-h-64 object-contain bg-neutral-50"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          const fb = e.target.nextElementSibling
                          if (fb) fb.classList.remove('hidden')
                        }}
                      />
                      <div className="hidden h-40 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-400 text-sm">
                        Graph: {g.title}
                      </div>
                      {g.title && !g.title.includes('[Graph') && (
                        <p className="text-sm font-medium text-neutral-700 mt-2">{g.title}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimateIn, StaggerChildren, StaggerItem } from './AnimateIn'

const projects = [
  { id: 'supply-chain-optimization', category: 'Pharma', title: 'Supply Chain', result: '25%' },
  { id: 'hospital-resource-allocation', category: 'Healthcare', title: 'Resource Allocation', result: '40%' },
  { id: 'risk-management-system', category: 'Finance', title: 'Risk Management', result: '—' },
  { id: 'clinical-trial-optimization', category: 'Pharma', title: 'Clinical Trials', result: '20%' },
]

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <AnimateIn>
            <h2 className="text-3xl md:text-5xl font-semibold text-neutral-950 mb-2">
              Projects
            </h2>
            <p className="text-neutral-500 text-lg">
              Success stories across industries.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <Link to="/projects" className="text-neutral-600 hover:text-neutral-950 font-medium transition-colors">
              View all →
            </Link>
          </AnimateIn>
        </div>

        <StaggerChildren className="grid md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <StaggerItem key={p.id}>
              <Link to={`/projects#${p.id}`}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  whileTap={{ scale: 0.98 }}
                  className="group block p-8 rounded-2xl bg-white hover:bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors duration-300"
                >
                  <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-950 mt-2 group-hover:text-neutral-700">
                    {p.title}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-1">{p.result}</p>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

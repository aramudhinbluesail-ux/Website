import { motion } from 'framer-motion'
import { AnimateIn } from './AnimateIn'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-5xl font-semibold text-neutral-950 mb-6">
              About
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Dr. Amar Ramudhin leads Blue Sail Solutions—combining academic expertise with industry practice to deliver analytics-driven solutions for pharma, healthcare, and finance.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative"
            >
              <img
                src="/profile.png"
                alt="Dr. Amar Ramudhin"
                className="rounded-2xl w-full max-w-sm aspect-square object-cover"
              />
              <div className="absolute -inset-4 rounded-3xl border border-neutral-200 -z-10" />
            </motion.div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

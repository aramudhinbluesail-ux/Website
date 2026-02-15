import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
      {/* Gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.35),transparent_50%)]"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-[radial-gradient(ellipse_60%_60%_at_70%_30%,rgba(59,130,246,0.2),transparent_70%)]"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 22, delay: 0.3 }}
          >
            Blue Sail Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 22, delay: 0.45 }}
            className="text-xl md:text-2xl text-neutral-400 mb-12"
          >
            Operations optimization & data analytics for pharma, healthcare, and finance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 22, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-colors"
              >
                Explore services
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-600 text-white font-medium hover:bg-white/5 hover:border-neutral-500 transition-colors"
              >
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

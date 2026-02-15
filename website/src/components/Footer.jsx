import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-500 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <Link to="/">
          <img src="/BlueSailSolutions.png" alt="Blue Sail Solutions" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity" />
        </Link>
        <p className="text-sm">© {new Date().getFullYear()} Blue Sail Solutions</p>
      </motion.div>
    </footer>
  )
}

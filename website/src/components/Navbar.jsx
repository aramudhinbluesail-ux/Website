import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/#about', label: 'About' },
  { to: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = !scrolled && location.pathname === '/' && !location.hash

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isDark ? 'bg-transparent' : 'bg-white/80 backdrop-blur-xl border-b border-neutral-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/BlueSailSolutions.png"
            alt="Blue Sail Solutions"
            className={`h-16 md:h-20 w-auto ${isDark ? 'drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]' : ''}`}
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => {
            const isHash = to.startsWith('/#')
            const isActive = to === '/' ? location.pathname === '/' : (location.pathname + location.hash) === to
            const Comp = isHash ? 'a' : Link
            const props = isHash ? { href: to } : { to }
            return (
              <li key={to}>
                <Comp
                  {...props}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isDark ? 'text-white/80 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'
                  } ${isActive ? (isDark ? 'text-white' : 'text-neutral-950') : ''}`}
                >
                  {label}
                </Comp>
              </li>
            )
          })}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <div className={`w-6 h-5 flex flex-col justify-between ${isDark ? 'text-white' : 'text-neutral-700'}`}>
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
              className="block h-0.5 bg-current origin-center"
            />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-0.5 bg-current" />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
              className="block h-0.5 bg-current origin-center"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-neutral-100"
          >
            <ul className="py-4 px-6 flex flex-col gap-4">
              {navLinks.map(({ to, label }) => {
                const isHash = to.startsWith('/#')
                const Comp = isHash ? 'a' : Link
                const props = isHash ? { href: to } : { to }
                return (
                  <li key={to}>
                    <Comp {...props} onClick={() => setOpen(false)} className="block text-neutral-600 font-medium hover:text-neutral-950">
                      {label}
                    </Comp>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

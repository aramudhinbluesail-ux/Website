import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 100, damping: 20 }
const springSoft = { type: 'spring', stiffness: 80, damping: 18 }
const fadeUp = { opacity: 0, y: 32 }
const fadeUpEnd = { opacity: 1, y: 0 }

export function AnimateIn({ children, className = '', delay = 0, y = 32 }) {
  return (
    <motion.div
      initial={{ ...fadeUp, y }}
      whileInView={fadeUpEnd}
      viewport={{ once: true, margin: '-60px', amount: 0.2 }}
      transition={{ ...springSoft, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({ children, className = '', staggerDelay = 0.06 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px', amount: 0.1 }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: 0.1 } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={spring}
      className={className}
    >
      {children}
    </motion.div>
  )
}

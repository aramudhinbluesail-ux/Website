import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import ProjectsPreview from '../components/ProjectsPreview'
import About from '../components/About'
import Contact from '../components/Contact'

export default function HomePage() {
  const location = useLocation()
  useEffect(() => {
    const hash = location.hash || window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])

  return (
    <>
      <Hero />
      <Services />
      <ProjectsPreview />
      <About />
      <Contact />
    </>
  )
}

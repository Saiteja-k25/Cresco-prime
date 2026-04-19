import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    // Stop Lenis smooth scroll during navigation
    if (window.__lenis) {
      window.__lenis.stop()
    }
    
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Resume Lenis after scroll reset
    setTimeout(() => {
      if (window.__lenis) {
        window.__lenis.start()
      }
    }, 50)
  }, [pathname])
  
  return null
}

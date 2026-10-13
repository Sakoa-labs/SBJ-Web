import { useEffect } from 'react'

// Fades decorative foliage and objects (marked with data-reveal) in as they scroll into view.
// Only elements still below the fold are hidden, so nothing visible on arrival ever flickers,
// and nothing stays hidden if this never runs.
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.remove('reveal-pending')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    for (const element of document.querySelectorAll('[data-reveal]')) {
      if (element.getBoundingClientRect().top <= window.innerHeight) continue
      element.classList.add('reveal-pending')
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return null
}

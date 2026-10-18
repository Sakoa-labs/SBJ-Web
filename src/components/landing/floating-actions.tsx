import { useEffect, useRef, useState } from 'react'
import { ServiceFinder } from '#/components/landing/service-finder'
import { Button } from '#/components/ui/button'

// Space kept between the floating CTA and the footer legal row.
const LEGAL_GAP = 16

export function FloatingActions() {
  const ref = useRef<HTMLDivElement>(null)
  const [lift, setLift] = useState(0)

  // Push the floating CTA up when the footer legal row scrolls into view so it never covers the links.
  useEffect(() => {
    const legal = document.querySelector('[data-footer-legal]')
    const cta = ref.current
    if (!legal || !cta) return

    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const restingBottom = window.innerHeight - parseFloat(getComputedStyle(cta).bottom)
        const overlap = restingBottom - legal.getBoundingClientRect().top + LEGAL_GAP
        setLift(Math.max(0, overlap))
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{ transform: `translateY(${-lift}px)` }}
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-40 sm:bottom-6 sm:right-6"
    >
      <ServiceFinder
        trigger={
          <Button
            type="button"
            size="lg"
            className="embossed-dark-cta h-10 rounded-sm border border-[#d4af37]/85 px-3 text-[0.58rem] font-bold uppercase tracking-[0.11em] text-[#fff9ec] shadow-xl transition-[transform,box-shadow,border-color,filter] hover:border-[#e5bd42] hover:text-[#fff9ec] sm:h-12 sm:px-6 sm:text-[0.68rem] sm:tracking-[0.16em]"
          >
            Quelle prestation pour moi&nbsp;?
          </Button>
        }
      />
    </div>
  )
}

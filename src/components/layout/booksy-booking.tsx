import { useEffect, useRef } from 'react'

const BOOKSY_SCRIPT = 'https://booksy.com/widget/code.js?id=12322&country=fr&lang=fr'
const BOOKSY_PAGE = 'https://booksy.com/fr-fr/dl/show-business/12322'

// Every "Réserver" link on the site points to #reserver.
const BOOKING_LINK = 'a[href="#reserver"]'

// Opens Sabrina's Booksy booking window from the site's own "Réserver" buttons.
// Booksy's script renders its own green button next to itself: it is loaded into a hidden
// container and that button is clicked for it, so the booking flow stays Booksy's own.
export function BooksyBooking() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let loading: Promise<void> | undefined
    const load = () => {
      loading ??= new Promise((resolve, reject) => {
        if (container.querySelector('script')) return resolve()
        const script = document.createElement('script')
        script.src = BOOKSY_SCRIPT
        script.async = true
        script.onload = () => resolve()
        script.onerror = () => {
          loading = undefined
          script.remove()
          reject(new Error('Booksy widget failed to load'))
        }
        container.appendChild(script)
      })
      return loading
    }

    // Close the window ourselves on Escape or a click outside it; Booksy only closes it
    // from its own button inside the frame.
    const close = () => {
      document.querySelectorAll('.booksy-widget-dialog, .booksy-widget-overlay').forEach((el) => el.remove())
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    // Lock the page behind the window while it is open.
    const observer = new MutationObserver(() => {
      const isOpen = document.querySelector('.booksy-widget-dialog') !== null
      document.documentElement.classList.toggle('booksy-open', isOpen)
    })
    observer.observe(document.body, { childList: true })

    const open = async () => {
      try {
        await load()
      } catch {
        // Booksy's script is unreachable: send the visitor to the business page instead.
        window.location.assign(BOOKSY_PAGE)
        return
      }
      const button = container.querySelector<HTMLElement>('.booksy-widget-button')
      if (!button) return
      // Booksy scrolls the page to its window; keep the visitor where they were instead.
      const scrollY = window.scrollY
      button.click()
      window.scrollTo(0, scrollY)
      document.querySelector('.booksy-widget-overlay')?.addEventListener('click', close)
    }

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (!(event.target instanceof Element) || !event.target.closest(BOOKING_LINK)) return
      event.preventDefault()
      void open()
    }

    // Fetch the script once the page is idle, so the first click opens without waiting.
    const preload = () => void load().catch(() => {})
    const idle =
      'requestIdleCallback' in window ? window.requestIdleCallback(preload) : undefined
    const timer = idle === undefined ? window.setTimeout(preload, 2000) : undefined

    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      if (idle !== undefined) window.cancelIdleCallback(idle)
      window.clearTimeout(timer)
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKeyDown)
      observer.disconnect()
    }
  }, [])

  return <div ref={containerRef} hidden />
}

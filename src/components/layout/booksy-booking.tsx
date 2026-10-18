import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const BOOKSY_ORIGIN = 'https://booksy.com'
const BUSINESS_ID = 12322

// Every "Réserver" link on the site points to #reserver. A link carrying
// data-booksy-variant opens Booksy straight on that option's calendar.
const BOOKING_LINK = 'a[href="#reserver"]'

// The events Booksy's frame posts to its host page, as handled by Booksy's own widget
// script (booksy.com/widget/code.js), which does not let us pick a service.
type BooksyEvents = {
  resize?: { height: number }
  close?: unknown
  goToUrl?: { url: string }
  sendPost?: { action: string; data: Record<string, string> }
}

function bookingUrl(uniqueId: string, variantId?: number) {
  const params = new URLSearchParams({
    id: String(BUSINESS_ID),
    lang: 'fr',
    country: 'fr',
    mode: 'dialog',
    theme: 'default',
    uniqueId,
  })
  if (variantId) params.set('variantId', String(variantId))
  return `${BOOKSY_ORIGIN}/widget/index.html?${params}`
}

// Booksy asks the host page to POST a form for some payment steps.
function submitPost(action: string, data: Record<string, string>) {
  const form = document.createElement('form')
  form.method = 'post'
  form.action = action
  for (const [name, value] of Object.entries(data)) {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = name
    input.value = value
    form.appendChild(input)
  }
  document.body.appendChild(form)
  form.submit()
}

type Booking = { uniqueId: string; variantId?: number; trigger: HTMLElement }

// Sabrina's Booksy booking flow in a window over the page, opened by every "Réserver" button.
// Booksy's frame has its own close button; Escape and a click outside close it too.
export function BooksyBooking() {
  const [booking, setBooking] = useState<Booking | null>(null)

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (!(event.target instanceof Element)) return
      const link = event.target.closest<HTMLElement>(BOOKING_LINK)
      if (!link) return
      event.preventDefault()
      const variantId = Number(link.dataset.booksyVariant) || undefined
      setBooking({ uniqueId: crypto.randomUUID().slice(0, 10), variantId, trigger: link })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  if (!booking) return null
  return createPortal(
    <BooksyDialog
      key={booking.uniqueId}
      booking={booking}
      onClose={() => {
        booking.trigger.focus()
        setBooking(null)
      }}
    />,
    document.body,
  )
}

function BooksyDialog({ booking, onClose }: { booking: Booking; onClose: () => void }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(660)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    const scroller = scrollerRef.current
    const frame = frameRef.current
    if (!scroller || !frame) return

    document.documentElement.classList.add('booksy-open')
    frame.focus()

    // Booksy places its own pop-ups within the visible part of the frame, so it is told
    // where the frame sits whenever the window scrolls or resizes.
    let timer: number | undefined
    const reportPosition = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        frame.contentWindow?.postMessage(
          {
            uniqueId: booking.uniqueId,
            name: 'scroll',
            data: {
              container: frame.getBoundingClientRect(),
              window: { width: window.innerWidth, height: window.innerHeight },
            },
          },
          BOOKSY_ORIGIN,
        )
      }, 100)
    }

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== BOOKSY_ORIGIN) return
      const message = event.data as { uniqueId?: string; events?: BooksyEvents }
      if (message?.uniqueId !== booking.uniqueId || !message.events) return
      const { resize, close, goToUrl, sendPost } = message.events
      if (sendPost) submitPost(sendPost.action, sendPost.data)
      if (goToUrl) window.location.replace(goToUrl.url)
      if (close) onCloseRef.current()
      if (resize) {
        setHeight(resize.height)
        reportPosition()
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current()
    }

    window.addEventListener('message', onMessage)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', reportPosition)
    scroller.addEventListener('scroll', reportPosition, { passive: true })
    frame.addEventListener('load', reportPosition)
    return () => {
      window.clearTimeout(timer)
      document.documentElement.classList.remove('booksy-open')
      window.removeEventListener('message', onMessage)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', reportPosition)
      scroller.removeEventListener('scroll', reportPosition)
      frame.removeEventListener('load', reportPosition)
    }
  }, [booking.uniqueId])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#031f1a]/75 backdrop-blur-[3px] duration-200 animate-in fade-in motion-reduce:animate-none sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Réserver avec Booksy"
        className="relative flex size-full flex-col overflow-hidden bg-white shadow-[0_30px_80px_rgba(2,20,16,0.45)] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] animate-in fade-in zoom-in-[0.97] motion-reduce:animate-none sm:h-auto sm:max-h-full sm:w-[48rem] sm:rounded-2xl sm:border sm:border-[#d4af37]/60"
      >
        <div ref={scrollerRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <iframe
            ref={frameRef}
            title="Réservation Booksy de Sabrina Joie d’Être"
            src={bookingUrl(booking.uniqueId, booking.variantId)}
            className="block w-full border-0"
            style={{ height }}
            allow="payment"
          />
        </div>
      </div>
    </div>
  )
}

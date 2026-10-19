import type { FormEvent } from 'react'
import { Bus, Navigation } from 'lucide-react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { usePhotoLightbox, ZoomablePhoto } from '#/components/layout/photo-lightbox'
import { RichTitle, WideScreenBreaks } from '#/components/ui/rich-text'
import { contact, mapsLink } from '#/data/contact'
import { withCaptions } from '#/data/pages/contact'
import type { ContactFormContent } from '#/data/pages/contact'
import { cn } from '#/lib/utils'

// The Google Maps app icon (2020 pin).
function GoogleMapsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 92.3 132.3" className={className} aria-hidden="true">
      <path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z" />
      <path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z" />
      <path fill="#4285f4" d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3" />
      <path fill="#fbbc04" d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3" />
      <path fill="#34a853" d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2" />
    </svg>
  )
}

const field =
  'mt-2 w-full rounded-xl border border-[#d4af37]/45 bg-[#fffdf8] px-4 py-3 text-base text-[#0d3a2f] shadow-[inset_0_1px_2px_rgba(103,70,31,0.06)] outline-none transition-[border-color,box-shadow] placeholder:text-[#8a958f] focus:border-[#c09027] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)]'
const label = 'text-xs font-bold uppercase tracking-[0.16em] text-[#40574f]'

// The site has no mail server yet: the form opens the visitor's mail app with the message
// written out, addressed to Sabrina.
function sendByEmail(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  const name = String(data.get('nom') ?? '')
  const email = String(data.get('email') ?? '')
  const subject = String(data.get('objet') ?? '') || 'Demande de contact'
  const message = String(data.get('message') ?? '')
  const body = `${message}\n\n${name}\n${email}`
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

// The contact form next to the directions: GPS, bus lines and the three photos that show
// where to park and which gate to ring at, each opening larger on click.
export function ContactFormSection({
  formTitle,
  nameLabel,
  emailLabel,
  subjectLabel,
  subjectPlaceholder,
  messageLabel,
  submitButton,
  accessTitle,
  carTitle,
  carText,
  mapsButton,
  busTitle,
  busLines,
  onSiteTitle,
  arrivalSteps: steps,
}: ContactFormContent) {
  const arrivalSteps = withCaptions(steps)
  const { openAt, lightbox } = usePhotoLightbox(arrivalSteps)

  return (
    <section
      className="relative isolate border-t border-[#d4af37]/30 bg-[#fffdf8] py-16 text-[#0d3a2f] sm:py-20 lg:py-24"
      aria-label="Écrire à Sabrina et venir au cabinet"
    >
      <div className="mx-auto grid w-full max-w-[84rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div>
          <h2 className="text-[clamp(2rem,6vw,3rem)] font-normal leading-[1.08] tracking-[-0.025em]">
            <RichTitle text={formTitle} accentClassName="text-[#c09027]" />
          </h2>
          <form
            onSubmit={sendByEmail}
            className="mt-8 rounded-[1.75rem] border border-[#d4af37]/60 bg-[linear-gradient(180deg,#fffefb_0%,#fff8ea_100%)] p-5 shadow-[inset_0_1px_0_#fff,0_24px_60px_rgba(103,70,31,0.1)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className={label}>{nameLabel}</span>
                <input name="nom" type="text" autoComplete="name" required className={field} />
              </label>
              <label className="block">
                <span className={label}>{emailLabel}</span>
                <input name="email" type="email" autoComplete="email" required className={field} />
              </label>
            </div>
            <label className="mt-5 block">
              <span className={label}>{subjectLabel}</span>
              <input name="objet" type="text" placeholder={subjectPlaceholder} className={field} />
            </label>
            <label className="mt-5 block">
              <span className={label}>{messageLabel}</span>
              <textarea name="message" rows={5} required className={cn(field, 'resize-y')} />
            </label>
            <button
              type="submit"
              data-slot="button"
              className="embossed-gold-cta mt-6 inline-flex h-13 w-full items-center justify-center rounded-sm border border-[#e5bd42]/95 px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#14221e] transition-[transform,box-shadow,border-color,filter] sm:w-auto sm:min-w-64"
            >
              {submitButton}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-[clamp(2rem,6vw,3rem)] font-normal leading-[1.08] tracking-[-0.025em]">
            <RichTitle text={accessTitle} accentClassName="text-[#c09027]" />
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#d4af37]/45 bg-[#fff9ec] p-5">
              <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#9a6d2c]">
                <Navigation aria-hidden="true" className="size-4" strokeWidth={1.6} />
                {carTitle}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#40574f]">
                <WideScreenBreaks text={carText.replace('{gps}', contact.mapsQuery)} />
              </p>
              <EmbossedCta
                href={mapsLink}
                tone="light"
                target="_blank"
                rel="noreferrer"
                className="mt-4 h-11 gap-2.5 px-5 text-[0.66rem] tracking-[0.14em]"
              >
                <GoogleMapsIcon className="size-5" />
                {mapsButton}
              </EmbossedCta>
            </div>
            <div className="rounded-2xl border border-[#d4af37]/45 bg-[#fff9ec] p-5">
              <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#9a6d2c]">
                <Bus aria-hidden="true" className="size-4" strokeWidth={1.6} />
                {busTitle}
              </p>
              <ul className="mt-2 space-y-1.5 text-sm leading-6 text-[#40574f]">
                {busLines.map((bus) => (
                  <li key={bus._key}>
                    <strong className="font-semibold text-[#0d3a2f]">{bus.line}</strong>, arrêt «&nbsp;{bus.stop}&nbsp;»
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#9a6d2c]">{onSiteTitle}</p>
          <ol className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
            {arrivalSteps.map((step, index) => (
              <li key={step._key}>
                <figure>
                  <ZoomablePhoto
                    photo={step}
                    onOpen={() => openAt(index)}
                    className="aspect-square rounded-xl border border-[#d4af37]/50 shadow-[0_12px_28px_rgba(103,70,31,0.12)]"
                    width={step.width}
                    height={step.height}
                  >
                    <span className="absolute left-2 top-2 grid size-7 place-items-center rounded-full bg-[#0d3a2f] font-heading text-sm text-[#e5bd42] shadow-md">
                      {index + 1}
                    </span>
                  </ZoomablePhoto>
                  <figcaption className="mt-2 text-xs leading-5 text-[#40574f] sm:text-sm">{step.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {lightbox}
    </section>
  )
}

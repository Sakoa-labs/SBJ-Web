import type { FormEvent } from 'react'
import { Bus, Navigation } from 'lucide-react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { contact, mapsLinks } from '#/data/contact'
import { cn } from '#/lib/utils'
import parkingImage from '../../../design/contact/acces-parking.jpg'
import bannerImage from '../../../design/contact/acces-banniere.jpg'
import gateImage from '../../../design/contact/acces-portail.jpg'

const arrivalSteps = [
  { image: parkingImage, alt: 'Le chemin d’accès, la place de parking et l’entrée signalées par des flèches', caption: 'Garez-vous sur la place de parking' },
  { image: bannerImage, alt: 'La bannière violette « Votre praticienne bien-être » sur le mur d’entrée', caption: 'Repérez la bannière Joie d’Être' },
  { image: gateImage, alt: 'Le portail gris de la maison', caption: 'Entrez par le portail' },
] as const

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
// where to park and which gate to ring at.
export function ContactFormSection() {
  return (
    <section
      className="relative isolate border-t border-[#d4af37]/30 bg-[#fffdf8] py-16 text-[#0d3a2f] sm:py-20 lg:py-24"
      aria-label="Écrire à Sabrina et venir au cabinet"
    >
      <div className="mx-auto grid w-full max-w-[84rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div>
          <SectionEyebrow label="Écrire à Sabrina" className="items-start [&>img]:self-start" />
          <h2 className="mt-4 text-[clamp(2rem,6vw,3rem)] font-normal leading-[1.08] tracking-[-0.025em]">
            Un message, <em className="font-normal text-[#c09027]">une question</em>
          </h2>
          <form
            onSubmit={sendByEmail}
            className="mt-8 rounded-[1.75rem] border border-[#d4af37]/60 bg-[linear-gradient(180deg,#fffefb_0%,#fff8ea_100%)] p-5 shadow-[inset_0_1px_0_#fff,0_24px_60px_rgba(103,70,31,0.1)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className={label}>Votre nom</span>
                <input name="nom" type="text" autoComplete="name" required className={field} />
              </label>
              <label className="block">
                <span className={label}>Votre email</span>
                <input name="email" type="email" autoComplete="email" required className={field} />
              </label>
            </div>
            <label className="mt-5 block">
              <span className={label}>Objet</span>
              <input name="objet" type="text" placeholder="Réservation, formation, bon cadeau…" className={field} />
            </label>
            <label className="mt-5 block">
              <span className={label}>Votre message</span>
              <textarea name="message" rows={5} required className={cn(field, 'resize-y')} />
            </label>
            <button
              type="submit"
              data-slot="button"
              className="embossed-gold-cta mt-6 inline-flex h-13 w-full items-center justify-center rounded-sm border border-[#e5bd42]/95 px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#14221e] transition-[transform,box-shadow,border-color,filter] sm:w-auto sm:min-w-64"
            >
              Envoyer le message
            </button>
            <p className="mt-4 text-sm leading-6 text-[#40574f]">
              Votre messagerie s’ouvre avec le message prêt à partir. Pour une réponse rapide,
              appelez le{' '}
              <a href={contact.phoneHref} className="font-semibold text-[#9a6d2c] hover:text-[#0d3a2f]">
                {contact.phone}
              </a>
              .
            </p>
          </form>
        </div>

        <div>
          <SectionEyebrow label="Venir au cabinet" className="items-start [&>img]:self-start" />
          <h2 className="mt-4 text-[clamp(2rem,6vw,3rem)] font-normal leading-[1.08] tracking-[-0.025em]">
            Comment <em className="font-normal text-[#c09027]">venir&nbsp;?</em>
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#d4af37]/45 bg-[#fff9ec] p-5">
              <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#9a6d2c]">
                <Navigation aria-hidden="true" className="size-4" strokeWidth={1.6} />
                En voiture
              </p>
              <p className="mt-2 text-sm leading-6 text-[#40574f]">
                Dans votre GPS, cherchez «&nbsp;{contact.mapsQuery}&nbsp;».
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <EmbossedCta href={mapsLinks.google} tone="light" target="_blank" rel="noreferrer" className="h-10 px-3 text-[0.62rem] tracking-[0.12em]">
                  Google Maps
                </EmbossedCta>
                <EmbossedCta href={mapsLinks.waze} tone="light" target="_blank" rel="noreferrer" className="h-10 px-3 text-[0.62rem] tracking-[0.12em]">
                  Waze
                </EmbossedCta>
              </div>
            </div>
            <div className="rounded-2xl border border-[#d4af37]/45 bg-[#fff9ec] p-5">
              <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#9a6d2c]">
                <Bus aria-hidden="true" className="size-4" strokeWidth={1.6} />
                En bus
              </p>
              <ul className="mt-2 space-y-1.5 text-sm leading-6 text-[#40574f]">
                <li>
                  <strong className="font-semibold text-[#0d3a2f]">Ligne 27</strong>, arrêt «&nbsp;Case Bretagne&nbsp;»
                </li>
                <li>
                  <strong className="font-semibold text-[#0d3a2f]">Ligne 26a</strong>, arrêt «&nbsp;Mairie annexe&nbsp;»
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#9a6d2c]">Sur place</p>
          <ol className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
            {arrivalSteps.map((step, index) => (
              <li key={step.caption}>
                <figure>
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-[#d4af37]/50 shadow-[0_12px_28px_rgba(103,70,31,0.12)]">
                    <img src={step.image} alt={step.alt} className="size-full object-cover" width={1600} height={1200} loading="lazy" />
                    <span className="absolute left-2 top-2 grid size-7 place-items-center rounded-full bg-[#0d3a2f] font-heading text-sm text-[#e5bd42] shadow-md">
                      {index + 1}
                    </span>
                  </div>
                  <figcaption className="mt-2 text-xs leading-5 text-[#40574f] sm:text-sm">{step.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

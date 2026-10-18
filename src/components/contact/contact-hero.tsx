import { Clock, CreditCard, Mail, MapPin, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { GoldDivider } from '#/components/landing/section-ornaments'
import { SiteHeader } from '#/components/layout/site-header'
import { LeafShadow } from '#/components/services/leaf-shadow'
import { contact, openingHours } from '#/data/contact'
import lotusOrnament from '#/assets/formation-icons/massage-wellness.png'

function InfoRow({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 border-b border-[#d4af37]/20 py-4 last:border-b-0">
      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#d4af37]/55 bg-[#d4af37]/10 text-[#e5bd42]">
        <Icon aria-hidden="true" className="size-[1.1rem]" strokeWidth={1.5} />
      </span>
      <div className="min-w-0 flex-1">
        <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#e5bd42]">{label}</dt>
        <dd className="mt-1 text-[0.95rem] leading-6 text-[#fff9ec]/90">{children}</dd>
      </div>
    </div>
  )
}

// First screen of the contact page: an invitation to call or book on the left, the
// practical details (hours, address, phone, email, payment) on a deep green card.
export function ContactHero() {
  return (
    <>
      <SiteHeader activeHref="/contact" onLight />
      <section
        className="relative isolate overflow-hidden bg-[#fff9ec] text-[#0d3a2f]"
        aria-labelledby="contact-title"
      >
        <div
          className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_30%,#fffdf8_58%,#fff9ec_100%)]"
          aria-hidden="true"
        />
        <LeafShadow leaf="monstera" className="-left-48 -top-40 w-[44rem] rotate-[18deg]" />

        <div className="mx-auto grid w-full max-w-[84rem] items-center gap-12 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:pb-24 lg:pt-40 xl:gap-24">
          <div className="hero-stagger">
            <h1
              id="contact-title"
              className="text-[clamp(2.4rem,9vw,4.4rem)] font-normal leading-[1.06] tracking-[-0.03em]"
            >
              <span className="block font-medium">Parlons de</span>
              <em className="block pb-1 font-normal text-[#c09027]">votre bien-être.</em>
            </h1>
            <p className="mt-8 max-w-[34rem] border-l-2 border-[#d4af37]/70 pl-5 text-pretty text-base leading-7 text-[#1f3a32] sm:pl-6 sm:text-lg sm:leading-8">
              Une question, un conseil, une réservation&nbsp;? Sabrina vous répond et vous accueille
              à La Bretagne, à Saint-Denis.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <EmbossedCta href="#reserver" tone="gold" className="sm:h-14 sm:min-w-60 sm:text-[0.8rem]">
                Réserver en ligne
              </EmbossedCta>
              <EmbossedCta href={contact.phoneHref} className="gap-3 sm:h-14 sm:min-w-60 sm:text-[0.8rem]">
                <Phone aria-hidden="true" className="size-4" strokeWidth={1.6} />
                Appeler Sabrina
              </EmbossedCta>
            </div>
            <p className="mt-6 max-w-[34rem] text-sm leading-6 text-[#40574f]">
              Pendant un soin, Sabrina ne peut pas décrocher&nbsp;: laissez-lui un SMS avec vos
              coordonnées et vos disponibilités, elle vous rappelle.
            </p>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-[#d4af37]/80 bg-[linear-gradient(160deg,#164a3c_0%,#0d3a2f_45%,#062b23_100%)] px-6 pb-4 pt-8 text-[#fff9ec] shadow-[0_30px_70px_rgba(6,43,35,0.28),inset_0_1px_0_rgba(255,249,236,0.16)] sm:px-9 sm:pt-10">
            <div className="flex flex-col items-center text-center">
              <img src={lotusOrnament} alt="" aria-hidden="true" className="size-12 object-contain" width={256} height={256} />
              <h2 className="mt-1 font-heading text-[1.9rem] font-normal leading-tight text-[#fff5df]">
                Infos <em className="font-normal text-[#e5bd42]">pratiques</em>
              </h2>
              <GoldDivider compact className="mt-3" />
            </div>
            <dl className="mt-4">
              <InfoRow icon={Clock} label="Horaires">
                <ul>
                  {openingHours.map((slot) => (
                    <li key={slot.days} className="flex justify-between gap-4">
                      <span>{slot.days}</span>
                      <span className="text-[#fff9ec]">{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </InfoRow>
              <InfoRow icon={MapPin} label="Adresse">
                {contact.address}
              </InfoRow>
              <InfoRow icon={Phone} label="Téléphone">
                <a href={contact.phoneHref} className="transition-colors hover:text-[#e5bd42]">
                  {contact.phone}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-[#e5bd42]">
                  {contact.email}
                </a>
              </InfoRow>
              <InfoRow icon={CreditCard} label="Règlement">
                En ligne à la réservation, ou sur place par carte bancaire, espèces ou virement.
              </InfoRow>
            </dl>
          </aside>
        </div>
      </section>
    </>
  )
}

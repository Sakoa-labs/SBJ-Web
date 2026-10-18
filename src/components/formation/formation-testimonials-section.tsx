import { Star } from 'lucide-react'

import { GoldDivider, SectionEyebrow } from '#/components/landing/section-ornaments'
import { DecorObject } from '#/components/services/decor-object'
import { LeafShadow } from '#/components/services/leaf-shadow'
import serviettesRoulees from '#/assets/decor/serviettes-roulees.png'
import defaultAvatar from '#/assets/testimonials/avatar-defaut.jpg'

// Placeholders: to be replaced by real quotes from Sabrina's students, with their consent.
const testimonials = [
  {
    name: 'Camille',
    format: 'Formation massage bien-être',
    text: 'Une formation claire et une pratique accompagnée avec douceur.',
  },
  {
    name: 'Julie',
    format: 'Ateliers en présentiel',
    text: 'J’ai trouvé la confiance pour me lancer.',
  },
  {
    name: 'Élodie',
    format: 'E-learning premium',
    text: 'Des modules accessibles, à mon rythme.',
  },
] as const

export function FormationTestimonialsSection() {
  return (
    <section
      id="temoignages"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#fff9ec] py-16 text-[#0d3a2f] sm:scroll-mt-28 sm:py-24 lg:py-28"
      aria-labelledby="temoignages-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(to_bottom,#fff9ec_0%,#fffdf8_55%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <LeafShadow leaf="palme" className="-right-40 -top-32 w-[42rem] rotate-[96deg]" />
      <DecorObject src={serviettesRoulees} className="-left-20 bottom-[12%] w-40 rotate-[10deg]" />

      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8">
        <SectionEyebrow label="Témoignages" />
        <h2
          id="temoignages-title"
          className="mt-5 text-center text-[clamp(2.2rem,9vw,3.1rem)] font-normal leading-[1.08] tracking-[-0.025em] sm:text-[clamp(3rem,5.2vw,4.2rem)]"
        >
          Elles se sont formées{' '}
          <em className="inline-block pb-1 font-normal text-[#c09027]">avec Sabrina</em>
        </h2>

        <ul className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3 xl:gap-6">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className="flex flex-col rounded-[1.5rem] border border-[#c99442]/55 bg-[#fffdf8] p-6 shadow-[0_18px_40px_rgba(77,51,22,0.06)] sm:p-7"
            >
              <figure className="flex h-full flex-col">
                <div className="flex items-center gap-4">
                  <img
                    src={defaultAvatar}
                    alt=""
                    className="size-14 shrink-0 rounded-full border border-[#d4af37]/50 object-cover"
                    width={512}
                    height={512}
                    loading="lazy"
                  />
                  <figcaption className="min-w-0">
                    <p className="font-heading text-[1.6rem] leading-none text-[#173c32]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.13em] text-[#9a6d2c]">
                      {testimonial.format}
                    </p>
                  </figcaption>
                </div>
                <GoldDivider compact className="mt-5 self-center" />
                <blockquote className="mt-5 flex-1 font-heading text-xl italic leading-snug text-[#29443c]">
                  « {testimonial.text} »
                </blockquote>
                <span className="mt-5 flex gap-0.5" role="img" aria-label="5 étoiles sur 5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="size-3.5 fill-[#d4af37] text-[#d4af37]"
                      strokeWidth={1.2}
                    />
                  ))}
                </span>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

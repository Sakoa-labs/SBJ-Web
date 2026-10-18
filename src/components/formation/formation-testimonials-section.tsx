import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { TestimonialsMarquee } from '#/components/landing/testimonials-section'
import type { Testimonial } from '#/components/landing/testimonials-section'
import { LeafShadow } from '#/components/services/leaf-shadow'

// Placeholders: to be replaced by real quotes from Sabrina's students, with their consent.
// Six cards so the scrolling band stays wider than the screen.
const testimonials: ReadonlyArray<Testimonial> = [
  {
    name: 'Camille',
    service: 'Formation massage bien-être',
    text: 'Une formation claire et une pratique accompagnée avec douceur. Sabrina prend le temps de corriger chaque geste.',
  },
  {
    name: 'Julie',
    service: 'Atelier en présentiel',
    text: 'Une journée en petit groupe qui m’a donné la confiance pour me lancer.',
  },
  {
    name: 'Élodie',
    service: 'E-learning premium',
    text: 'Des modules accessibles, à mon rythme, et des supports PDF que je relis avant chaque séance.',
  },
  {
    name: 'Sarah',
    service: 'Formation massage bien-être',
    text: 'J’ai appris la posture autant que les gestes. Je termine mes massages sans fatigue.',
  },
  {
    name: 'Nadia',
    service: 'Atelier en présentiel',
    text: 'Une ambiance bienveillante et beaucoup de pratique. Je suis repartie avec un vrai protocole.',
  },
  {
    name: 'Laura',
    service: 'E-learning premium',
    text: 'Les vidéos sont précises et faciles à suivre, même après une journée de travail.',
  },
]

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

      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <SectionEyebrow label="Témoignages" />
        <h2
          id="temoignages-title"
          className="mt-5 text-center text-[clamp(2.2rem,9vw,3.1rem)] font-normal leading-[1.08] tracking-[-0.025em] sm:text-[clamp(3rem,5.2vw,4.2rem)]"
        >
          Elles se sont formées{' '}
          <em className="inline-block pb-1 font-normal text-[#c09027]">avec Sabrina</em>
        </h2>

        <TestimonialsMarquee
          items={testimonials}
          label="Témoignages d’élèves"
          className="mt-12 sm:mt-14"
        />
      </div>
    </section>
  )
}

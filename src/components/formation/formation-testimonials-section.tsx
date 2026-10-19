import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { TestimonialsMarquee } from '#/components/landing/testimonials-section'
import { LeafShadow } from '#/components/services/leaf-shadow'
import { RichTitle } from '#/components/ui/rich-text'
import type { FormationReviewsContent } from '#/data/pages/learning'

// Six cards at least, so the scrolling band stays wider than the screen.
export function FormationTestimonialsSection({ eyebrow, title, testimonials }: FormationReviewsContent) {
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
        <SectionEyebrow label={eyebrow} />
        <h2
          id="temoignages-title"
          className="mt-5 text-center text-[clamp(2.2rem,9vw,3.1rem)] font-normal leading-[1.08] tracking-[-0.025em] sm:text-[clamp(3rem,5.2vw,4.2rem)]"
        >
          <RichTitle text={title} accentClassName="inline-block pb-1 text-[#c09027]" />
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

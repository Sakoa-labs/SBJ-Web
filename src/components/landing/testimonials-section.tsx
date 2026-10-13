import amandinePortrait from '#/assets/testimonials/amandine.png'
import camillePortrait from '#/assets/testimonials/camille.png'
import louisePortrait from '#/assets/testimonials/louise.png'
import {
  GoldDivider,
  SectionEyebrow,
} from '#/components/landing/section-ornaments'
import foliageLeft from '../../../design/section temoignages/ChatGPT Image 24 août 2026, 22_13_34.png'
import foliageRight from '../../../design/section temoignages/ChatGPT Image 24 août 2026, 22_16_37.png'

const testimonials = [
  {
    name: 'Camille',
    context: 'Formation massage bien-être',
    portrait: camillePortrait,
    quote:
      'La formation m’a apporté une vraie philosophie du toucher et une confiance nouvelle dans ma pratique.',
  },
  {
    name: 'Louise',
    context: 'Lectrice des guides',
    portrait: louisePortrait,
    quote:
      'Les guides sont clairs, concrets et inspirants. Je les utilise au quotidien et gagne un temps précieux.',
  },
  {
    name: 'Amandine',
    context: 'Atelier en présentiel',
    portrait: amandinePortrait,
    quote:
      'Un atelier bienveillant, professionnel et motivant. Je repars avec des clés concrètes et beaucoup de confiance.',
  },
]

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  return (
    <article className="testimonial-card relative flex min-h-[22rem] w-[min(82vw,24rem)] shrink-0 snap-start flex-col rounded-[1.75rem] border border-[#c99442]/55 bg-[#fffdf8] px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] sm:w-[24rem] sm:px-7 sm:py-7 lg:w-[27rem]">
      <span
        className="absolute right-7 top-7 font-heading text-5xl leading-none text-[#b98232]"
        aria-hidden="true"
      >
        “
      </span>

      <div className="flex items-center gap-5 pr-12">
        <div className="size-24 shrink-0 overflow-hidden rounded-full border border-[#d4af37]/40 shadow-[0_10px_26px_rgba(72,51,25,0.12)] sm:size-28">
          <img
            src={testimonial.portrait}
            alt={`Portrait de ${testimonial.name}`}
            className="size-full object-cover object-center"
            width={1254}
            height={1254}
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-heading text-[2rem] font-medium leading-none text-[#173c32] sm:text-[2.15rem]">
            {testimonial.name}
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#9a6d2c]">
            {testimonial.context}
          </p>
        </div>
      </div>

      <GoldDivider compact className="mt-5 self-center" />

      <blockquote className="mt-5 text-[1rem] leading-7 text-[#29443c] sm:text-[1.04rem]">
        « {testimonial.quote} »
      </blockquote>
    </article>
  )
}

export function TestimonialsSection() {
  return (
    <section
      id="temoignages"
      className="relative isolate -mt-px scroll-mt-24 overflow-hidden bg-[#fff9ec] px-5 py-20 text-[#0d3a2f] sm:scroll-mt-28 sm:px-8 sm:py-24 lg:py-32"
      aria-labelledby="testimonials-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_50%_42%,rgba(255,255,255,0.95)_0%,rgba(255,251,243,0.78)_42%,transparent_72%),linear-gradient(to_bottom,#fff9ec_0%,#fffaf0_13%,#fffdf8_58%,#f5e7d1_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_87%_32%,rgba(185,130,50,0.06),transparent_28%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-[15] h-24 bg-gradient-to-b from-[#fff9ec] via-[#fff9ec]/55 to-transparent sm:h-28"
        aria-hidden="true"
      />

      <img
        data-reveal="left"
        src={foliageLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -left-16 -top-px -z-10 hidden h-[calc(100%+2px)] w-auto max-w-none object-fill lg:block xl:-left-10"
        width={1024}
        height={1536}
        loading="lazy"
      />
      <img
        data-reveal="right"
        src={foliageRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -right-16 -top-px -z-10 hidden h-[calc(100%+2px)] w-auto max-w-none object-fill lg:block xl:-right-10"
        width={1024}
        height={1536}
        loading="lazy"
      />

      <div className="relative z-10 mx-auto w-full max-w-[88rem]">
        <header className="mx-auto max-w-[72rem] text-center">
          <SectionEyebrow label="Témoignages" />
          <h2
            id="testimonials-title"
            className="mt-6 text-balance text-[clamp(2.45rem,12vw,2.85rem)] font-normal leading-[1.02] tracking-[-0.025em] sm:text-[clamp(3.8rem,6.5vw,5.5rem)] lg:whitespace-nowrap lg:text-[clamp(4.25rem,5vw,5.35rem)]"
          >
            Elles en parlent{' '}
            <em className="inline-block pb-1 font-normal text-[#d4af37]">
              mieux
            </em>{' '}
            que nous
          </h2>
          <p className="mx-auto mt-6 max-w-[43rem] text-pretty text-base leading-7 text-[#355149] sm:text-lg sm:leading-8">
            Des femmes inspirées qui ont transformé leur pratique et leur quotidien
            grâce aux formations, guides et ateliers.
          </p>
        </header>

        <div
          className="testimonials-marquee mt-12 sm:mt-14"
          aria-label="Témoignages de clientes"
        >
          <div className="testimonials-track py-4">
            <div className="flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
            <div
              className="testimonials-copy flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6"
              aria-hidden="true"
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={`copy-${testimonial.name}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

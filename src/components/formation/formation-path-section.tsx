import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { DecorObject } from '#/components/services/decor-object'
import { LeafShadow } from '#/components/services/leaf-shadow'
import frangipanier from '#/assets/decor/frangipanier.png'
import pierresDuo from '#/assets/decor/pierres-duo.png'
import { RichTitle } from '#/components/ui/rich-text'
import type { FormationPathContent } from '#/data/pages/learning'
import lotusOrnament from '#/assets/formation-icons/massage-wellness.png'

// The four steps from a first workshop to a first client, each tied to one of Sabrina's formats.
export function FormationPathSection({ eyebrow, title, steps }: FormationPathContent) {
  return (
    <section
      id="parcours"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#fff9ec] py-16 text-[#0d3a2f] sm:scroll-mt-28 sm:py-24 lg:py-28"
      aria-labelledby="parcours-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_24%,#fffdf8_55%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <LeafShadow leaf="monstera" className="-left-48 -top-40 w-[44rem] rotate-[18deg]" />
      <DecorObject src={frangipanier} className="-left-12 top-[58%] w-28 rotate-[18deg]" />
      <DecorObject src={pierresDuo} className="-right-14 top-[30%] w-36 -rotate-[12deg]" />

      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 xl:px-16">
        <SectionEyebrow label={eyebrow} />
        <h2
          id="parcours-title"
          className="mt-5 text-center text-[clamp(2.4rem,10vw,3.1rem)] font-normal leading-[1.08] tracking-[-0.025em] sm:text-[clamp(3.2rem,5.6vw,4.4rem)]"
        >
          <RichTitle text={title} accentClassName="inline-block pb-1 text-[#c09027]" />
        </h2>

        <ol className="mt-12 grid gap-12 [--step-gap:1.5rem] sm:mt-14 sm:grid-cols-2 sm:gap-x-(--step-gap) lg:mt-16 lg:grid-cols-4 xl:[--step-gap:2rem]">
          {steps.map((step, index) => (
            <li key={step._key} className="relative flex flex-col items-center text-center">
              {/* Lotus marker, joined to the next step's by a gold thread stopping short of both. */}
              <span className="hidden lg:block" aria-hidden="true">
                <img
                  src={lotusOrnament}
                  alt=""
                  className="size-9 object-contain"
                  width={256}
                  height={256}
                  loading="lazy"
                />
                {index < steps.length - 1 && (
                  <span className="absolute left-[calc(50%+1.75rem)] top-[1.1rem] h-px w-[calc(100%+var(--step-gap)-3.5rem)] bg-[#d4af37]/60" />
                )}
              </span>
              <figure className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#e8dcc8] shadow-[0_18px_40px_rgba(77,51,22,0.1)] lg:mt-6">
                <img
                  src={step.photo.src}
                  alt={step.photo.alt}
                  className="size-full object-cover"
                  width={step.photo.width}
                  height={step.photo.height}
                  loading="lazy"
                />
              </figure>
              <span className="mt-6 font-heading text-[2.6rem] leading-none text-[#c09027]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-[1.75rem] font-normal leading-tight tracking-[-0.015em] xl:text-[1.9rem]">
                {step.title}
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#9a6d2c]">
                {step.format}
              </p>
              <p className="mt-3 max-w-[18rem] text-pretty text-sm leading-6 text-[#355149] sm:text-base sm:leading-7">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

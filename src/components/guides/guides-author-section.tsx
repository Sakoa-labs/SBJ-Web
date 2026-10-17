import { ArrowRight } from 'lucide-react'

import { LeafShadow } from '#/components/services/leaf-shadow'
import signature from '#/assets/guides/signature-sabrina.png'
import sabrinaPortrait from '../../../design/guides/sabrina.png'

export function GuidesAuthorSection() {
  return (
    <section
      id="auteure"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#fff9ec] py-16 text-[#0d3a2f] sm:scroll-mt-28 sm:py-24 lg:py-28"
      aria-labelledby="auteure-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_30%,#fffdf8_58%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <LeafShadow leaf="palme" className="-left-24 -top-32 w-[40rem] rotate-[200deg]" />
      <LeafShadow leaf="palme" className="-bottom-40 right-[30%] w-[36rem] rotate-[20deg]" />

      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:px-16">
        <div className="lg:pl-4">
          <p
            id="auteure-title"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c09027]"
          >
            Écrits par Sabrina
          </p>
          <figure className="mt-7">
            <blockquote className="relative pl-14 sm:pl-20">
              <span
                className="absolute -top-3 left-0 font-heading text-[5rem] leading-none text-[#d4af37] sm:-top-4 sm:text-[7rem]"
                aria-hidden="true"
              >
                “
              </span>
              <p className="font-heading text-[clamp(1.75rem,6vw,2.4rem)] italic leading-[1.18] tracking-[-0.015em] sm:text-[clamp(2.4rem,4.4vw,3.4rem)] lg:text-[clamp(2.4rem,3.4vw,3.6rem)]">
                J’ai écrit ces guides pour que vous retrouviez chez vous les gestes que je
                transmets en cabine et en formation.
              </p>
            </blockquote>
            <figcaption className="mt-6 pl-14 sm:pl-20">
              <img
                src={signature}
                alt="Sabrina"
                className="-ml-3 h-auto w-56 sm:w-72"
                width={900}
                height={233}
                loading="lazy"
              />
              <p className="mt-3 text-sm text-[#355149] sm:text-base">
                Praticienne bien-être et formatrice à La Réunion
              </p>
            </figcaption>
          </figure>
          <a
            href="/#formation"
            className="ml-14 mt-6 inline-flex items-center gap-2 border-b border-[#0d3a2f]/60 pb-0.5 text-base text-[#0d3a2f] transition-colors duration-200 hover:border-[#c09027] hover:text-[#8a6417] sm:ml-20"
          >
            Découvrir les formations
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
          </a>
        </div>

        <figure className="mx-auto w-full max-w-[30rem] lg:max-w-none">
          <div className="overflow-hidden rounded-t-full border-[3px] border-[#d4af37] bg-[#e8dcc8] shadow-[0_28px_60px_rgba(77,51,22,0.16)]">
            <img
              src={sabrinaPortrait}
              alt="Sabrina, souriante, dans son espace de soin"
              className="aspect-[3/4] size-full object-cover object-top"
              width={1086}
              height={1448}
              loading="lazy"
            />
          </div>
        </figure>
      </div>
    </section>
  )
}

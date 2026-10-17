import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { DecorObject } from '#/components/services/decor-object'
import { LeafShadow } from '#/components/services/leaf-shadow'
import bougieLaiton from '#/assets/decor/bougie-laiton.png'
import pipetteHuile from '#/assets/decor/pipette-huile.png'
import serviettesRoulees from '#/assets/decor/serviettes-roulees.png'
import signature from '#/assets/guides/signature-sabrina.png'
import sabrinaPortrait from '../../../design/guides/sabrina.png'
import foliageRight from '../../../design/massage/decorations/feuillage-haut-droit.png'

export function GuidesAuthorSection() {
  return (
    <section
      id="auteure"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#fff9ec] py-16 text-[#0d3a2f] sm:scroll-mt-28 sm:py-24 lg:py-28"
      aria-label="Écrits par Sabrina"
    >
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_30%,#fffdf8_58%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <LeafShadow leaf="palme" className="-left-24 -top-32 w-[40rem] rotate-[200deg]" />
      <LeafShadow leaf="palme" className="-bottom-40 right-[30%] w-[36rem] rotate-[20deg]" />
      <img
        data-reveal="right"
        src={foliageRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-10 -z-10 hidden w-[15rem] max-w-none -rotate-[8deg] object-contain lg:block xl:w-[18rem]"
        width={1254}
        height={1254}
        loading="lazy"
      />
      <DecorObject src={serviettesRoulees} className="-left-8 bottom-[3%] w-48 rotate-[4deg]" />
      <DecorObject src={pipetteHuile} className="bottom-[3%] left-[9%] w-14 -rotate-[6deg]" />
      <DecorObject src={bougieLaiton} className="-right-6 bottom-[8%] w-24" />

      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:px-16">
        <div className="lg:pl-4">
          <SectionEyebrow label="Écrits par Sabrina" className="w-fit" />
          <figure className="mt-8">
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
          <EmbossedCta href="/#formation" className="ml-14 mt-8 sm:ml-20 sm:min-w-72">
            Découvrir les formations
          </EmbossedCta>
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

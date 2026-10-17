import { EmbossedCta } from '#/components/landing/embossed-cta'
import { GoldDivider } from '#/components/landing/section-ornaments'
import { SiteHeader } from '#/components/layout/site-header'
import heroImage from '../../../design/guides/hero.png'

export function GuidesHero() {
  return (
    <>
      <SiteHeader activeHref="/guides" />
      <section
        className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#062b23] text-[#fff9ec]"
        aria-labelledby="guides-hero-title"
      >
        {/* From sm, the photo keeps its full width at the top so the books never shrink under
            the text; whatever height is left below fades into the section's green. */}
        <div className="absolute inset-x-0 top-24 -z-10 h-[min(64svh,108vw)] sm:top-0 sm:h-auto">
          <img
            src={heroImage}
            alt="Les trois guides Joie d’Être posés sur une console en bois sculpté, entre bougies et fleurs de frangipanier"
            className="size-full object-cover sm:h-auto"
            width={1672}
            height={941}
            fetchPriority="high"
          />
          {/* Dark at the top for the header, deep green from the bottom for the text. */}
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,13,10,0.78)_0%,rgba(2,13,10,0.35)_13%,rgba(2,13,10,0)_26%),linear-gradient(0deg,#062b23_0%,rgba(6,43,35,0.92)_22%,rgba(6,43,35,0.5)_40%,rgba(6,43,35,0)_56%)]"
            aria-hidden="true"
          />
        </div>

        {/* The top padding keeps the text under the books, which end at about 55% of the photo. */}
        <div className="mx-auto flex w-full max-w-[100rem] flex-1 items-end justify-center px-5 pb-14 pt-[min(40svh,66vw)] sm:px-8 sm:pb-16 sm:pt-[32vw] xl:px-12 xl:pb-20">
          <div className="hero-content flex max-w-[60rem] flex-col items-center text-center">
            <GoldDivider compact />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e5bd42]">
              Mes guides · Livres numériques
            </p>
            <h1
              id="guides-hero-title"
              className="mt-4 text-[clamp(2rem,9vw,3.4rem)] font-normal leading-[1.04] tracking-[-0.03em] text-[#fff5df] sm:text-[clamp(3.4rem,6.6vw,4.5rem)] lg:text-[clamp(4rem,4.8vw,5.5rem)]"
            >
              <span className="block">Le savoir-faire de Sabrina</span>
              <em className="block pb-2 font-normal text-[#e5bd42]">entre vos mains</em>
            </h1>
            <p className="mt-3 max-w-[46rem] text-pretty text-base leading-7 text-[#fff9ec]/90 sm:text-lg xl:text-xl">
              Des guides illustrés à télécharger en PDF, pour pratiquer chez vous, à votre rythme.
            </p>

            <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5">
              <EmbossedCta href="#collection" tone="gold" className="sm:min-w-64">
                Voir les guides
              </EmbossedCta>
              <EmbossedCta href="#coffret" className="sm:min-w-64">
                Découvrir le coffret
              </EmbossedCta>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

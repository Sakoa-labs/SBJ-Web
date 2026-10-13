import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SiteHeader } from '#/components/layout/site-header'
import heroImage from '../../../design/heros/accueil-v2.png'

export function HomeHero() {
  return (
    <>
      <SiteHeader />
      <section
        className="relative isolate flex min-h-svh scroll-mt-24 flex-col bg-primary text-[#fff9ec] sm:scroll-mt-28"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={heroImage}
            alt="Terrasse de soin tropicale au coucher du soleil, table de massage, bougies et feuillages"
            className="absolute inset-0 size-full object-cover object-[70%_center] sm:object-center"
            width={1672}
            height={941}
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,13,10,0.82)_0%,rgba(2,13,10,0.45)_14%,rgba(2,13,10,0)_30%),linear-gradient(32deg,rgba(3,26,20,0.94)_0%,rgba(3,26,20,0.72)_30%,rgba(3,26,20,0.18)_58%,transparent_75%)]"
            aria-hidden="true"
          />
        </div>

        <div
          id="accueil"
          className="mx-auto flex w-full max-w-[100rem] flex-1 items-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20 xl:px-12 xl:pb-24"
        >
          <div className="hero-content max-w-[58rem]">
            <h1
              id="hero-title"
              className="text-[clamp(2rem,9.6vw,3.6rem)] font-normal leading-[1.04] tracking-[-0.03em] text-[#fff5df] sm:text-[clamp(4rem,8vw,5.5rem)] lg:text-[clamp(4.75rem,6.4vw,7.25rem)]"
            >
              <span className="block">L’art du bien-être</span>
              <em className="block pb-2 font-normal text-[#e5bd42]">à la française</em>
            </h1>
            <p className="mt-4 max-w-[40rem] text-pretty text-base leading-7 text-[#fff9ec]/90 sm:text-lg xl:text-xl">
              Soins d’exception inspirés par la nature tropicale.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <EmbossedCta href="#reserver" tone="gold" className="sm:min-w-64">
                Réserver un soin
              </EmbossedCta>
              <EmbossedCta href="/soins" tone="light" className="sm:min-w-64">
                Découvrir les soins
              </EmbossedCta>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { DecorObject } from '#/components/services/decor-object'
import { LeafShadow } from '#/components/services/leaf-shadow'
import coupelleHuile from '#/assets/decor/coupelle-huile.png'
import flaconPompe from '#/assets/decor/flacon-pompe.png'
import { guides } from '#/data/guides'
import type { Guide } from '#/data/guides'
import foliageTopLeft from '../../../design/massage/decorations/feuillage-haut-gauche.png'
import foliageTopRight from '../../../design/massage/decorations/feuillage-haut-droit.png'
import foliageBottomLeft from '../../../design/massage/decorations/feuillage-bas-gauche.png'
import foliageBottomRight from '../../../design/massage/decorations/feuillage-bas-droit.png'

const foliage = [
  { src: foliageTopLeft, side: 'left', className: '-left-16 -top-12 rotate-[8deg] w-[14rem] xl:w-[17rem]' },
  { src: foliageTopRight, side: 'right', className: '-right-16 -top-12 -rotate-[8deg] w-[14rem] xl:w-[17rem]' },
  { src: foliageBottomLeft, side: 'left', className: '-bottom-16 -left-20 w-[13rem] xl:w-[15rem]' },
  { src: foliageBottomRight, side: 'right', className: '-bottom-16 -right-20 w-[13rem] xl:w-[15rem]' },
] as const

export function GuidesCollectionSection() {
  return (
    <section
      id="collection"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#fff9ec] py-16 text-[#0d3a2f] sm:scroll-mt-28 sm:py-24 lg:py-28"
      aria-labelledby="collection-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_24%,#fffdf8_55%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_8%,rgba(255,255,255,0.96)_0%,transparent_40%),radial-gradient(ellipse_at_88%_80%,rgba(185,130,50,0.08)_0%,transparent_30%)]"
        aria-hidden="true"
      />
      <LeafShadow leaf="monstera" className="-left-40 -top-48 w-[46rem] rotate-[18deg]" />
      {foliage.map((leaf) => (
        <img
          key={leaf.src}
          data-reveal={leaf.side}
          src={leaf.src}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute -z-10 hidden max-w-none object-contain lg:block ${leaf.className}`}
          width={1254}
          height={1254}
          loading="lazy"
        />
      ))}
      <DecorObject src={coupelleHuile} className="left-[6%] top-[17%] w-44 -rotate-[6deg]" />
      <DecorObject src={flaconPompe} className="right-[8%] top-[12%] w-20 rotate-[4deg]" />

      <div className="mx-auto w-full max-w-[100rem] px-5 sm:px-8 xl:px-16">
        <SectionEyebrow label="La collection" />
        <h2
          id="collection-title"
          className="mt-5 text-center text-[clamp(2.4rem,10vw,3.1rem)] font-normal leading-[1.08] tracking-[-0.025em] sm:text-[clamp(3.4rem,6vw,4.4rem)] lg:text-[clamp(3.6rem,4.4vw,4.75rem)]"
        >
          Le guide qui{' '}
          <em className="inline-block pb-1 font-normal text-[#c09027]">vous ressemble</em>
        </h2>

        <div className="mx-auto mt-10 grid max-w-[92rem] gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 xl:gap-8">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article
      id={guide.slug}
      className="group flex scroll-mt-28 flex-col overflow-hidden rounded-sm border border-[#d4af37]/45 bg-[#fffdf8] p-2 pb-8 text-center shadow-[0_18px_40px_rgba(77,51,22,0.08)]"
      aria-labelledby={`${guide.slug}-title`}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-[2px] bg-[#e8dcc8]">
        <img
          src={guide.image}
          alt={guide.imageAlt}
          className="size-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025]"
          width={1448}
          height={1086}
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col items-center px-4 pt-7 sm:px-6">
        <h3
          id={`${guide.slug}-title`}
          className="text-balance text-[1.6rem] font-normal leading-tight tracking-[-0.015em] xl:text-[1.85rem]"
        >
          {guide.title}
        </h3>
        <p className="mb-6 mt-2 text-pretty text-sm leading-6 text-[#355149] sm:text-base">
          {guide.subtitle}
        </p>
        {/* Pushed down so the buttons line up when a title wraps to two lines. */}
        <EmbossedCta href="#acheter" tone="gold" className="mt-auto h-12 min-w-52">
          Découvrir
        </EmbossedCta>
      </div>
    </article>
  )
}

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { LeafShadow } from '#/components/services/leaf-shadow'
import { formatEuros, guideCategories, guides } from '#/data/guides'
import type { Guide, GuideCategory } from '#/data/guides'
import { cn } from '#/lib/utils'

type Filter = 'Tous' | GuideCategory

const filters: ReadonlyArray<Filter> = ['Tous', ...guideCategories]

export function GuidesCollectionSection() {
  const [filter, setFilter] = useState<Filter>('Tous')
  const visibleGuides = filter === 'Tous' ? guides : guides.filter((guide) => guide.category === filter)

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

      <div className="mx-auto w-full max-w-[100rem] px-5 sm:px-8 xl:px-16">
        <SectionEyebrow label="La collection" />
        <h2
          id="collection-title"
          className="mt-5 text-center text-[clamp(2.4rem,10vw,3.1rem)] font-normal leading-[1.04] tracking-[-0.025em] sm:text-[clamp(3.4rem,6vw,4.4rem)] lg:text-[clamp(3.6rem,4.4vw,4.75rem)]"
        >
          <span className="block">Trois guides,</span>
          <em className="block pb-1 font-normal text-[#c09027]">un même art du soin</em>
        </h2>

        <div
          className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-[#355149] sm:text-base"
          role="group"
          aria-label="Filtrer les guides"
        >
          {filters.map((item, index) => (
            <span key={item} className="flex items-center gap-3">
              {index > 0 && <span className="text-[#c09027]" aria-hidden="true">·</span>}
              <button
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={cn(
                  'cursor-pointer rounded-sm border-b px-1 pb-1 transition-colors duration-200 hover:text-[#0d3a2f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]',
                  filter === item ? 'border-[#c09027] text-[#0d3a2f]' : 'border-transparent',
                )}
              >
                {item}
              </button>
            </span>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-[92rem] gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {visibleGuides.map((guide) => (
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
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-[#e8dcc8]">
        <img
          src={guide.image}
          alt={guide.imageAlt}
          className="size-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025]"
          width={1448}
          height={1086}
          loading="lazy"
        />
        {guide.isNew && (
          <span className="absolute right-0 top-0 rounded-bl-sm bg-[linear-gradient(180deg,#f2d96b_0%,#d9b63d_46%,#b2871e_100%)] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#14221e] shadow-[inset_0_1px_0_rgba(255,249,220,0.8)]">
            Nouveau
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center px-4 pt-6 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c09027]">
          {guide.category}
        </p>
        <h3
          id={`${guide.slug}-title`}
          className="mt-2 text-balance text-[1.6rem] font-normal leading-tight tracking-[-0.015em] xl:text-[1.85rem]"
        >
          {guide.title}
        </h3>
        <p className="mb-4 mt-1.5 text-pretty text-sm leading-6 text-[#355149] sm:text-base">
          {guide.subtitle}
        </p>
        {/* Pushed down so prices and buttons line up when a title wraps to two lines. */}
        <span className="mt-auto h-px w-12 bg-[#d4af37]/70" aria-hidden="true" />
        <p className="mt-4 text-xs tracking-[0.08em] text-[#4f665e]">
          PDF · {guide.pages} pages · Mobile, tablette, ordinateur
        </p>
        <p className="mt-2 font-heading text-[1.75rem] leading-none">{formatEuros(guide.price)}</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <EmbossedCta href="#acheter" tone="gold" className="h-12 min-w-44">
            Acheter
          </EmbossedCta>
          <a
            href="#acheter"
            className="inline-flex items-center gap-2 border-b border-[#0d3a2f]/60 pb-0.5 text-sm text-[#0d3a2f] transition-colors duration-200 hover:border-[#c09027] hover:text-[#8a6417]"
          >
            Voir le détail
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </article>
  )
}

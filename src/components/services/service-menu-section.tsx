import type { ReactNode } from 'react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { cn } from '#/lib/utils'
import foliageTopLeft from '../../../design/massage/decorations/feuillage-haut-gauche.png'
import foliageTopRight from '../../../design/massage/decorations/feuillage-haut-droit.png'
import foliageBottomLeft from '../../../design/massage/decorations/feuillage-bas-gauche.png'
import foliageBottomRight from '../../../design/massage/decorations/feuillage-bas-droit.png'

export type ServiceMenuItem = {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  // Gold line pictogram shown in a circle on the bottom edge of the image.
  icon?: string
  // Extra content between the gold rule and the button, e.g. a list of zones.
  details?: ReactNode
  href?: string
}

export function ServiceMenuSection({
  id,
  title = 'La carte des',
  accent,
  subtitle,
  items,
  imageWidth,
  imageHeight,
  imageClassName,
  variant = 'plain',
  ctaLabel = 'En savoir plus',
  decor,
  compact = false,
}: {
  id: string
  title?: string
  accent: string
  subtitle?: string
  items: ReadonlyArray<ServiceMenuItem>
  imageWidth: number
  imageHeight: number
  // Aspect ratio of the card images, e.g. "aspect-[1.9/1]".
  imageClassName: string
  // "card" frames each item in a bordered panel and lays them out on three columns.
  variant?: 'plain' | 'card'
  ctaLabel?: string
  // Page-specific DecorObject elements.
  decor?: ReactNode
  // Tighter top spacing, for a follow-up section right under other content.
  compact?: boolean
}) {
  const isCard = variant === 'card'
  // Keeps the titles aligned when only some items have a pictogram.
  const hasIcons = items.some((item) => item.icon)

  return (
    <section
      id={id}
      className={cn(
        'relative isolate scroll-mt-24 overflow-hidden bg-[#fff9ec] py-16 text-[#0d3a2f] sm:scroll-mt-28 sm:py-24 lg:py-28 xl:py-32',
        compact && 'pt-8 sm:pt-10 lg:pt-10 xl:pt-12',
      )}
      aria-labelledby={`${id}-title`}
    >
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_24%,#fffdf8_55%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_8%,rgba(255,255,255,0.96)_0%,transparent_40%),radial-gradient(ellipse_at_15%_84%,rgba(185,130,50,0.08)_0%,transparent_29%),radial-gradient(ellipse_at_88%_42%,rgba(13,58,47,0.06)_0%,transparent_28%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-[15] h-32 bg-gradient-to-b from-[#fff9ec] to-transparent"
        aria-hidden="true"
      />

      {decor}

      <img
        data-reveal="left"
        src={foliageTopLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-12 -z-10 hidden w-[14rem] max-w-none rotate-[8deg] object-contain lg:block xl:w-[17rem]"
        width={1254}
        height={1254}
      />
      <img
        data-reveal="right"
        src={foliageTopRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-12 -z-10 hidden w-[14rem] max-w-none -rotate-[8deg] object-contain lg:block xl:w-[17rem]"
        width={1254}
        height={1254}
      />
      <img
        data-reveal="left"
        src={foliageBottomLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-20 -z-10 hidden w-[13rem] max-w-none object-contain lg:block xl:w-[15rem]"
        width={1254}
        height={1254}
        loading="lazy"
      />
      <img
        data-reveal="right"
        src={foliageBottomRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-20 -z-10 hidden w-[13rem] max-w-none object-contain lg:block xl:w-[15rem]"
        width={1254}
        height={1254}
        loading="lazy"
      />

      <div className="mx-auto w-full max-w-[100rem] px-5 sm:px-8 xl:px-16">
        <SectionEyebrow />
        <h2
          id={`${id}-title`}
          className="mt-5 text-center text-[clamp(2.6rem,10vw,3.2rem)] font-normal leading-[1.08] tracking-[-0.025em] text-[#0d3a2f] sm:text-[clamp(3.4rem,6vw,4.4rem)] lg:text-[clamp(3.6rem,4.4vw,4.75rem)]"
        >
          {title}{' '}
          <em className="inline-block pb-1 font-normal text-[#d4af37]">{accent}</em>
        </h2>
        {subtitle && (
          <p className="mt-2 text-center text-base text-[#355149] sm:text-lg lg:text-xl">
            {subtitle}
          </p>
        )}

        <div
          className={cn(
            'mt-10 grid sm:mt-12 sm:grid-cols-2 lg:mt-14',
            isCard
              ? 'mx-auto max-w-[92rem] gap-6 lg:grid-cols-3 xl:gap-8'
              : 'gap-x-7 gap-y-12 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-10',
          )}
        >
          {items.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className={cn(
                'group flex scroll-mt-28 flex-col text-center',
                isCard &&
                  'overflow-hidden rounded-sm border border-[#d4af37]/45 bg-[#fffdf8] pb-8 shadow-[0_18px_40px_rgba(77,51,22,0.08)]',
              )}
              aria-labelledby={`${item.id}-title`}
            >
              <div className="relative">
                <div
                  className={cn(
                    'overflow-hidden bg-[#e8dcc8]',
                    !isCard && 'shadow-[0_18px_36px_rgba(77,51,22,0.12)]',
                    imageClassName,
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="size-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025]"
                    width={imageWidth}
                    height={imageHeight}
                    loading="lazy"
                  />
                </div>
                {item.icon && (
                  <div
                    className={cn(
                      'absolute left-1/2 top-full flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0_8px_20px_rgba(91,61,23,0.12)]',
                      isCard ? 'bg-[#fffdf8]' : 'bg-[#fff9ec]',
                    )}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className="size-11 object-contain"
                      width={256}
                      height={256}
                    />
                  </div>
                )}
              </div>

              <div
                className={cn(
                  'mx-auto flex w-full max-w-[22rem] flex-1 flex-col items-center',
                  hasIcons ? 'pt-12' : 'pt-6',
                  isCard ? 'max-w-[26rem] px-6' : 'px-2',
                )}
              >
                <h3
                  id={`${item.id}-title`}
                  className="text-balance text-[1.75rem] font-normal leading-tight tracking-[-0.02em] text-[#0d3a2f] xl:text-[1.95rem]"
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    'mt-2 max-w-[19rem] text-pretty text-sm leading-6 text-[#29443c] sm:text-[0.95rem]',
                    !item.details && 'flex-1',
                  )}
                >
                  {item.description}
                </p>
                <span
                  className="mt-4 block h-px w-12 bg-gradient-to-r from-transparent via-[#c8952f] to-transparent"
                  aria-hidden="true"
                />
                {item.details && <div className="mt-5 w-full flex-1">{item.details}</div>}
                <EmbossedCta
                  href={item.href ?? `#${item.id}`}
                  className={cn(
                    'mt-4 h-11 w-full max-w-[15.5rem] px-5 text-[0.66rem] tracking-[0.16em]',
                    isCard && 'mt-6 max-w-[20rem]',
                  )}
                >
                  {ctaLabel}
                  <span className="sr-only"> : {item.title}</span>
                </EmbossedCta>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SiteHeader } from '#/components/layout/site-header'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
import {
  categoryInfo,
  formatDuration,
  formatPrice,
  serviceHref,
  servicesIn,
} from '#/data/services'
import type { Service, ServiceCategory } from '#/data/services'
import { cn } from '#/lib/utils'
import durationIcon from '#/assets/info-icons/info-duree.png'
import paymentIcon from '#/assets/info-icons/info-paiement.png'
import cancellationIcon from '#/assets/info-icons/info-annulation.png'
import palmLeaf from '../../../design/massage/decorations/palme-faq-gauche.png'

// Card layout of the "Vous aimerez aussi" section, matching each category's list page.
const relatedLayout: Record<
  ServiceCategory,
  Pick<
    Parameters<typeof ServiceMenuSection>[0],
    'imageWidth' | 'imageHeight' | 'imageClassName' | 'variant'
  >
> = {
  massages: { imageWidth: 1727, imageHeight: 911, imageClassName: 'aspect-[1.9/1]' },
  soins: { imageWidth: 1484, imageHeight: 1060, imageClassName: 'aspect-[1.4/1]' },
  epilation: {
    imageWidth: 1536,
    imageHeight: 1024,
    imageClassName: 'aspect-[1.6/1]',
    variant: 'card',
  },
}

export function ServiceDetailPage({ service }: { service: Service }) {
  const category = categoryInfo[service.category]
  const related: ReadonlyArray<ServiceMenuItem> = servicesIn(service.category, service.group)
    .filter((other) => other.slug !== service.slug)
    .slice(0, service.category === 'epilation' ? 3 : 4)
    .map((other) => ({
      id: other.slug,
      title: other.title,
      description: other.summary,
      image: other.image.src,
      imageAlt: other.image.alt,
      icon: other.icon,
      href: serviceHref(other),
    }))

  return (
    <main className="overflow-x-clip bg-background">
      <SiteHeader activeHref={category.path} onLight />
      <ServiceDetail service={service} />
      {related.length > 0 && (
        <ServiceMenuSection
          id="vous-aimerez-aussi"
          title="Vous aimerez"
          accent="aussi"
          items={related}
          {...relatedLayout[service.category]}
        />
      )}
    </main>
  )
}

function ServiceDetail({ service }: { service: Service }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = service.variants[selectedIndex]
  const category = categoryInfo[service.category]
  const hasOptions = service.variants.length > 1
  const finalPrice = selected.promoPrice ?? selected.price

  return (
    <section
      className="relative isolate overflow-hidden bg-[#fff9ec] pb-16 pt-28 text-[#0d3a2f] sm:pb-20 sm:pt-32 lg:pb-24"
      aria-labelledby="service-detail-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_30%,#fffdf8_58%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <img
        data-reveal="left"
        src={palmLeaf}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-32 -z-10 hidden w-[19rem] max-w-none rotate-[24deg] object-contain lg:block xl:w-[22rem]"
        width={1254}
        height={1254}
      />

      <div className="mx-auto grid w-full max-w-[100rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16 xl:px-12">
        {/* Gallery: one large photo and two framed thumbnails; follows the scroll on desktop
            when the booking box makes the text column taller. */}
        <div className="hero-photo grid grid-cols-2 gap-3 self-start sm:gap-4 lg:sticky lg:top-32">
          <figure className="col-span-2 aspect-[1.8/1] overflow-hidden border-2 border-[#d4af37]/80 bg-[#e8dcc8]">
            <img
              src={service.image.src}
              alt={service.image.alt}
              className="size-full object-cover"
              fetchPriority="high"
            />
          </figure>
          {service.gallery.map((image) => (
            <figure
              key={image.src}
              className="aspect-[1.75/1] overflow-hidden border-2 border-[#d4af37]/80 bg-[#e8dcc8]"
            >
              <img src={image.src} alt={image.alt} className="size-full object-cover" loading="lazy" />
            </figure>
          ))}
        </div>

        <div className="hero-stagger lg:max-w-[38rem]">
          <nav aria-label="Fil d’Ariane" className="text-sm text-[#40574f]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a href={category.path} className="transition-colors hover:text-[#a87d16]">
                  {category.label}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#0d3a2f]">
                {service.title}
              </li>
            </ol>
          </nav>

          <h1
            id="service-detail-title"
            className="mt-4 text-[clamp(2.1rem,8.6vw,3.25rem)] font-normal leading-[1.06] tracking-[-0.025em] lg:text-[clamp(2.5rem,3.3vw,3.6rem)]"
          >
            <span className="block font-medium">{service.headline}</span>
            <em className="block pb-1 font-normal text-[#c09027]">{service.accent}</em>
          </h1>

          <p className="mt-3 font-heading text-lg italic leading-snug text-[#173c32] sm:text-xl">
            {service.hook}
          </p>

          <span className="mt-5 block h-px w-full bg-[#d4af37]/45" aria-hidden="true" />

          <p className="mt-5 text-pretty text-base leading-7 text-[#29443c] sm:text-[1.05rem] sm:leading-7">
            {service.description}
          </p>

          <dl className="mt-5 border-t border-[#d4af37]/35">
            <InfoRow icon={durationIcon} label="Durée" value={formatDuration(selected.minutes)} />
            <InfoRow icon={paymentIcon} label="Paiement" value="Sur place ou en ligne" />
            <InfoRow icon={cancellationIcon} label="Annulation" value="Gratuite jusqu’à 24 h avant" />
          </dl>

          <div className="mt-6 overflow-hidden rounded-md border border-[#d4af37]/70 bg-[#fffdf8] shadow-[0_18px_40px_rgba(77,51,22,0.08)]">
            {service.promotion && (
              <p className="bg-[#0d3a2f] px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#e5bd42]">
                Offre du moment · {service.promotion}
              </p>
            )}

            <div className="p-5">
              {hasOptions && (
                <fieldset>
                  <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#40574f]">
                    Choisissez votre formule
                  </legend>
                  <div className="grid gap-2">
                    {service.variants.map((option, index) => {
                      const isSelected = index === selectedIndex
                      return (
                        <label
                          key={`${option.label}-${option.minutes}`}
                          className={cn(
                            'flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3 transition-[border-color,background-color] duration-150 ease-out',
                            isSelected
                              ? 'border-[#c09027] bg-[#fff6e3]'
                              : 'border-[#d4af37]/30 hover:border-[#d4af37]/70',
                          )}
                        >
                          <input
                            type="radio"
                            name={`formule-${service.slug}`}
                            className="size-4 accent-[#0d3a2f]"
                            checked={isSelected}
                            onChange={() => setSelectedIndex(index)}
                          />
                          <span className="min-w-0 flex-1 text-sm text-[#173c32] sm:text-base">
                            {option.label}
                            <span className="text-[#40574f]"> · {formatDuration(option.minutes)}</span>
                          </span>
                          <span className="text-sm font-semibold text-[#0d3a2f] sm:text-base">
                            {formatPrice(option.promoPrice ?? option.price)}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </fieldset>
              )}

              <p className={cn('flex items-baseline gap-3', hasOptions && 'mt-5')} aria-live="polite">
                <span className="font-heading text-[2.6rem] font-medium leading-none text-[#0d3a2f] sm:text-5xl">
                  {formatPrice(finalPrice)}
                </span>
                {selected.promoPrice !== undefined && (
                  <s className="font-heading text-xl text-[#8a958f] sm:text-2xl">
                    <span className="sr-only">au lieu de </span>
                    {formatPrice(selected.price)}
                  </s>
                )}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <EmbossedCta href="#reserver" tone="gold" className="w-full">
                  {category.bookLabel}
                </EmbossedCta>
                <EmbossedCta href="#offrir" className="w-full">
                  Offrir ce soin
                </EmbossedCta>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 border-b border-[#d4af37]/35 py-2.5">
      <span
        className="grid size-10 shrink-0 place-items-center rounded-full bg-[#fff6e3] ring-1 ring-[#d4af37]/40"
        aria-hidden="true"
      >
        <img src={icon} alt="" className="size-6 object-contain" />
      </span>
      <dt className="font-semibold text-[#0d3a2f]">{label}</dt>
      <dd className="ml-auto text-right text-[#29443c]">{value}</dd>
    </div>
  )
}

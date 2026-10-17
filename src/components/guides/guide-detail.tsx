import type { ReactNode } from 'react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { SiteHeader } from '#/components/layout/site-header'
import { DecorObject } from '#/components/services/decor-object'
import { LeafShadow } from '#/components/services/leaf-shadow'
import { InfoRow } from '#/components/services/service-detail'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
import { formatEuros, guideHref, guides, guidesBundle } from '#/data/guides'
import type { Guide, GuideImage } from '#/data/guides'
import coupelleHuile from '#/assets/decor/coupelle-huile.png'
import frangipanier from '#/assets/decor/frangipanier.png'
import formatIcon from '#/assets/info-icons/info-format.png'
import readingIcon from '#/assets/info-icons/info-lecture.png'
import downloadIcon from '#/assets/info-icons/info-livraison.png'
import palmLeftImage from '../../../design/massage/decorations/palme-faq-gauche.png'
import palmRightImage from '../../../design/massage/decorations/palme-faq-droite.png'

function guideCard(guide: Guide): ServiceMenuItem {
  return {
    id: guide.slug,
    title: guide.title,
    description: guide.subtitle,
    image: guide.image,
    imageAlt: guide.imageAlt,
    href: guideHref(guide),
  }
}

export function GuideDetailPage({ guide }: { guide: Guide }) {
  // The other guides, then the bundle that groups all three.
  const related: ReadonlyArray<ServiceMenuItem> = [
    ...guides.filter((other) => other.slug !== guide.slug).map(guideCard),
    {
      id: 'coffret-des-trois-guides',
      title: guidesBundle.title,
      description: guidesBundle.subtitle,
      image: guidesBundle.cardImage,
      imageAlt: guidesBundle.photo.alt,
      href: guidesBundle.href,
    },
  ]

  return (
    <main className="overflow-x-clip bg-background">
      <SiteHeader activeHref="/guides" onLight />
      <ProductHero
        title={guide.title}
        accent={guide.accent}
        subtitle={guide.subtitle}
        description={guide.description}
        photo={guide.photo}
        gallery={guide.gallery}
        format={{ label: 'Format', value: `PDF illustré, ${guide.pages} pages` }}
        price={guide.price}
        buyLabel="Acheter le guide"
        giftLabel="Offrir ce guide"
      />
      <ChaptersSection>
        <ol className="mx-auto mt-10 grid max-w-[64rem] gap-x-16 sm:mt-12 md:grid-flow-col md:grid-cols-2 md:grid-rows-3">
          {guide.chapters.map((chapter, index) => (
            <li
              key={chapter}
              className="flex items-baseline gap-6 border-b border-[#d4af37]/30 py-4 sm:py-5"
            >
              <span className="w-12 shrink-0 font-heading text-[2.1rem] leading-none text-[#e5bd42] sm:text-[2.4rem]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-base text-[#fff9ec]/95 sm:text-lg">{chapter}</span>
            </li>
          ))}
        </ol>
      </ChaptersSection>
      <GuideCardsSection
        id="vous-aimerez-aussi"
        eyebrow="Suggestions"
        title="Vous aimerez"
        accent="aussi"
        items={related}
      />
    </main>
  )
}

export function BundleDetailPage() {
  const savings = guidesBundle.separatePrice - guidesBundle.price

  return (
    <main className="overflow-x-clip bg-background">
      <SiteHeader activeHref="/guides" onLight />
      <ProductHero
        title={guidesBundle.title}
        accent={guidesBundle.accent}
        subtitle={guidesBundle.subtitle}
        description={guidesBundle.description}
        photo={guidesBundle.photo}
        gallery={guidesBundle.gallery}
        format={{
          label: 'Contenu',
          value: `${guides.length} guides PDF, ${guidesBundle.pages} pages`,
        }}
        price={guidesBundle.price}
        separatePrice={guidesBundle.separatePrice}
        priceNote={`Soit ${formatEuros(savings)} d’économie par rapport aux guides achetés séparément`}
        buyLabel="Acheter le coffret"
        giftLabel="Offrir le coffret"
      />
      <ChaptersSection>
        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-3 lg:gap-12">
          {guides.map((guide) => (
            <div key={guide.slug}>
              <h3 className="border-b border-[#d4af37]/50 pb-4 font-heading text-[1.6rem] leading-tight text-[#e5bd42] sm:text-[1.75rem]">
                {guide.title}
              </h3>
              <ol>
                {guide.chapters.map((chapter, index) => (
                  <li
                    key={chapter}
                    className="flex items-baseline gap-4 border-b border-[#d4af37]/20 py-3"
                  >
                    <span className="w-8 shrink-0 font-heading text-xl leading-none text-[#e5bd42]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[0.95rem] text-[#fff9ec]/95">{chapter}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </ChaptersSection>
      <GuideCardsSection
        id="dans-le-coffret"
        eyebrow="Dans le coffret"
        title="Les trois"
        accent="guides"
        items={guides.map(guideCard)}
      />
    </main>
  )
}

// Top of the page, laid out like a service detail page: gallery on the left, infos and price on the right.
function ProductHero({
  title,
  accent,
  subtitle,
  description,
  photo,
  gallery,
  format,
  price,
  separatePrice,
  priceNote,
  buyLabel,
  giftLabel,
}: {
  title: string
  accent: string
  subtitle: string
  description: string
  photo: GuideImage
  gallery: ReadonlyArray<GuideImage>
  // First info row: page count for a guide, content for the bundle.
  format: { label: string; value: string }
  price: number
  // Struck-through price, when buying the guides separately costs more.
  separatePrice?: number
  priceNote?: string
  buyLabel: string
  giftLabel: string
}) {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#fff9ec] pb-14 pt-28 text-[#0d3a2f] sm:pt-32 lg:pb-20"
      aria-labelledby="guide-detail-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_30%,#fffdf8_58%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <LeafShadow leaf="palme" className="-right-40 -top-28 w-[46rem] rotate-[96deg]" />

      <div className="mx-auto grid w-full max-w-[100rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16 xl:px-12">
        {/* Gallery: the product in situ, then two framed thumbnails. */}
        <div className="hero-photo grid grid-cols-2 gap-3 self-start sm:gap-4">
          <figure className="col-span-2 aspect-[1.6/1] overflow-hidden border-2 border-[#d4af37]/80 bg-[#e8dcc8]">
            <img
              src={photo.src}
              alt={photo.alt}
              className="size-full object-cover"
              width={1672}
              height={941}
              fetchPriority="high"
            />
          </figure>
          {gallery.map((image) => (
            <figure
              key={image.src}
              className="aspect-[1.5/1] overflow-hidden border-2 border-[#d4af37]/80 bg-[#e8dcc8]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover"
                width={1672}
                height={941}
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <div className="hero-stagger lg:max-w-[38rem]">
          <nav aria-label="Fil d’Ariane" className="text-sm text-[#40574f]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a href="/guides" className="transition-colors hover:text-[#a87d16]">
                  Mes guides
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#0d3a2f]">
                {title}
              </li>
            </ol>
          </nav>

          <h1
            id="guide-detail-title"
            className="mt-3 text-[clamp(2.1rem,8.6vw,3.25rem)] font-normal leading-[1.06] tracking-[-0.025em] lg:text-[clamp(2.5rem,3.3vw,3.6rem)]"
          >
            {/* The accent joins the title line when it fits, otherwise it wraps as a whole. */}
            <span className="font-medium">{title}</span>{' '}
            <em className="inline-block pb-1 font-normal text-[#c09027]">{accent}</em>
          </h1>

          <p className="mt-3 font-heading text-lg italic leading-snug text-[#173c32] sm:text-xl">
            {subtitle}.
          </p>

          <span className="mt-4 block h-px w-full bg-[#d4af37]/45" aria-hidden="true" />

          <p className="mt-4 text-pretty text-base leading-7 text-[#29443c] sm:text-[1.05rem] sm:leading-7">
            {description}
          </p>

          <dl className="mt-4 border-t border-[#d4af37]/35">
            <InfoRow icon={formatIcon} label={format.label} value={format.value} />
            <InfoRow icon={readingIcon} label="Lecture" value="Mobile, tablette, ordinateur" />
            <InfoRow icon={downloadIcon} label="Livraison" value="Téléchargement immédiat" />
          </dl>

          <div className="mt-5 rounded-md border border-[#d4af37]/70 bg-[#fffdf8] p-5 shadow-[0_18px_40px_rgba(77,51,22,0.08)]">
            <p className="flex items-baseline gap-3">
              <span className="font-heading text-[2.6rem] font-medium leading-none text-[#0d3a2f] sm:text-5xl">
                {formatEuros(price)}
              </span>
              {separatePrice !== undefined && (
                <s className="font-heading text-xl text-[#8a958f] sm:text-2xl">
                  <span className="sr-only">au lieu de </span>
                  {formatEuros(separatePrice)}
                </s>
              )}
            </p>
            {priceNote && <p className="mt-2 text-sm text-[#40574f]">{priceNote}</p>}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <EmbossedCta href="#acheter" tone="gold" className="w-full">
                {buyLabel}
              </EmbossedCta>
              <EmbossedCta href="#offrir" className="w-full">
                {giftLabel}
              </EmbossedCta>
            </div>
            <p className="mt-4 text-center text-sm text-[#40574f]">Paiement sécurisé · Accès à vie</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// "Ce que vous allez apprendre" on deep green; the chapter lists come as children.
function ChaptersSection({ children }: { children: ReactNode }) {
  return (
    <section
      id="sommaire"
      className="relative isolate overflow-hidden bg-[#0d3a2f] py-16 text-[#fff9ec] sm:py-20 lg:py-24"
      aria-labelledby="sommaire-title"
    >
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_0%,rgba(229,189,66,0.1)_0%,transparent_45%),linear-gradient(180deg,#0d3a2f_0%,#062b23_100%)]"
        aria-hidden="true"
      />
      <img
        data-reveal="left"
        src={palmLeftImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 -z-10 hidden w-[20rem] max-w-none rotate-[24deg] object-contain opacity-90 lg:block"
        width={1254}
        height={1254}
        loading="lazy"
      />
      <img
        data-reveal="right"
        src={palmRightImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 -z-10 hidden w-[20rem] max-w-none -rotate-[150deg] object-contain opacity-90 lg:block"
        width={1254}
        height={1254}
        loading="lazy"
      />

      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8">
        <SectionEyebrow label="Au sommaire" />
        <h2
          id="sommaire-title"
          className="mt-5 text-center text-[clamp(2.4rem,10vw,3.1rem)] font-normal leading-[1.08] tracking-[-0.025em] text-[#fff5df] sm:text-[clamp(3.2rem,5.6vw,4.2rem)]"
        >
          Ce que vous allez <em className="inline-block pb-1 font-normal text-[#e5bd42]">apprendre</em>
        </h2>
        {children}
      </div>
    </section>
  )
}

function GuideCardsSection({
  id,
  eyebrow,
  title,
  accent,
  items,
}: {
  id: string
  eyebrow: string
  title: string
  accent: string
  items: ReadonlyArray<ServiceMenuItem>
}) {
  return (
    <ServiceMenuSection
      id={id}
      title={title}
      accent={accent}
      eyebrow={eyebrow}
      variant="card"
      ctaLabel="Découvrir"
      decor={
        <>
          <LeafShadow leaf="monstera" className="-right-44 top-[16%] w-[42rem] -rotate-[28deg]" />
          <DecorObject src={frangipanier} className="-left-12 top-[44%] w-28 rotate-[18deg]" />
          <DecorObject src={coupelleHuile} className="-right-16 bottom-[20%] w-36 -rotate-[10deg]" />
        </>
      }
      items={items}
      imageWidth={1448}
      imageHeight={1086}
      imageClassName="aspect-[4/3]"
    />
  )
}

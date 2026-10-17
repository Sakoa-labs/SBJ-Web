import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { SiteHeader } from '#/components/layout/site-header'
import { DecorObject } from '#/components/services/decor-object'
import { LeafShadow } from '#/components/services/leaf-shadow'
import { InfoRow } from '#/components/services/service-detail'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
import { formatEuros, guideHref, guides } from '#/data/guides'
import type { Guide } from '#/data/guides'
import coupelleHuile from '#/assets/decor/coupelle-huile.png'
import frangipanier from '#/assets/decor/frangipanier.png'
import formatIcon from '#/assets/info-icons/info-format.png'
import readingIcon from '#/assets/info-icons/info-lecture.png'
import downloadIcon from '#/assets/info-icons/info-livraison.png'
import bundleImage from '../../../design/guides/coffret-carte.png'
import palmLeftImage from '../../../design/massage/decorations/palme-faq-gauche.png'
import palmRightImage from '../../../design/massage/decorations/palme-faq-droite.png'

export function GuideDetailPage({ guide }: { guide: Guide }) {
  // The other guides, then the bundle that groups all three.
  const related: ReadonlyArray<ServiceMenuItem> = [
    ...guides
      .filter((other) => other.slug !== guide.slug)
      .map((other) => ({
        id: other.slug,
        title: other.title,
        description: other.subtitle,
        image: other.image,
        imageAlt: other.imageAlt,
        href: guideHref(other),
      })),
    {
      id: 'coffret-des-trois-guides',
      title: 'Le coffret des trois guides',
      description: 'La collection complète en un seul achat',
      image: bundleImage,
      imageAlt: 'Les trois guides réunis dans un coffret vert, entre papier de soie doré et bougies',
      href: '/guides#coffret',
    },
  ]

  return (
    <main className="overflow-x-clip bg-background">
      <SiteHeader activeHref="/guides" onLight />
      <GuideDetail guide={guide} />
      <GuideChapters guide={guide} />
      <ServiceMenuSection
        id="vous-aimerez-aussi"
        title="Vous aimerez"
        accent="aussi"
        eyebrow="Suggestions"
        variant="card"
        ctaLabel="Découvrir"
        decor={
          <>
            <LeafShadow leaf="monstera" className="-right-44 top-[16%] w-[42rem] -rotate-[28deg]" />
            <DecorObject src={frangipanier} className="-left-12 top-[44%] w-28 rotate-[18deg]" />
            <DecorObject src={coupelleHuile} className="-right-16 bottom-[20%] w-36 -rotate-[10deg]" />
          </>
        }
        items={related}
        imageWidth={1448}
        imageHeight={1086}
        imageClassName="aspect-[4/3]"
      />
    </main>
  )
}

function GuideDetail({ guide }: { guide: Guide }) {
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
        {/* Gallery: the book in situ, then an inside spread and the e-book on a tablet. */}
        <div className="hero-photo grid grid-cols-2 gap-3 self-start sm:gap-4">
          <figure className="col-span-2 aspect-[1.6/1] overflow-hidden border-2 border-[#d4af37]/80 bg-[#e8dcc8]">
            <img
              src={guide.photo.src}
              alt={guide.photo.alt}
              className="size-full object-cover"
              width={1672}
              height={941}
              fetchPriority="high"
            />
          </figure>
          {guide.gallery.map((image) => (
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
                {guide.title}
              </li>
            </ol>
          </nav>

          <h1
            id="guide-detail-title"
            className="mt-3 text-[clamp(2.1rem,8.6vw,3.25rem)] font-normal leading-[1.06] tracking-[-0.025em] lg:text-[clamp(2.5rem,3.3vw,3.6rem)]"
          >
            {/* The accent joins the title line when it fits, otherwise it wraps as a whole. */}
            <span className="font-medium">{guide.title}</span>{' '}
            <em className="inline-block pb-1 font-normal text-[#c09027]">{guide.accent}</em>
          </h1>

          <p className="mt-3 font-heading text-lg italic leading-snug text-[#173c32] sm:text-xl">
            {guide.subtitle}.
          </p>

          <span className="mt-4 block h-px w-full bg-[#d4af37]/45" aria-hidden="true" />

          <p className="mt-4 text-pretty text-base leading-7 text-[#29443c] sm:text-[1.05rem] sm:leading-7">
            {guide.description}
          </p>

          <dl className="mt-4 border-t border-[#d4af37]/35">
            <InfoRow icon={formatIcon} label="Format" value={`PDF illustré, ${guide.pages} pages`} />
            <InfoRow icon={readingIcon} label="Lecture" value="Mobile, tablette, ordinateur" />
            <InfoRow icon={downloadIcon} label="Livraison" value="Téléchargement immédiat" />
          </dl>

          <div className="mt-5 rounded-md border border-[#d4af37]/70 bg-[#fffdf8] p-5 shadow-[0_18px_40px_rgba(77,51,22,0.08)]">
            <p className="font-heading text-[2.6rem] font-medium leading-none text-[#0d3a2f] sm:text-5xl">
              {formatEuros(guide.price)}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <EmbossedCta href="#acheter" tone="gold" className="w-full">
                Acheter le guide
              </EmbossedCta>
              <EmbossedCta href="#offrir" className="w-full">
                Offrir ce guide
              </EmbossedCta>
            </div>
            <p className="mt-4 text-center text-sm text-[#40574f]">Paiement sécurisé · Accès à vie</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function GuideChapters({ guide }: { guide: Guide }) {
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

      <div className="mx-auto w-full max-w-[72rem] px-5 sm:px-8">
        <SectionEyebrow label="Au sommaire" />
        <h2
          id="sommaire-title"
          className="mt-5 text-center text-[clamp(2.4rem,10vw,3.1rem)] font-normal leading-[1.08] tracking-[-0.025em] text-[#fff5df] sm:text-[clamp(3.2rem,5.6vw,4.2rem)]"
        >
          Ce que vous allez <em className="inline-block pb-1 font-normal text-[#e5bd42]">apprendre</em>
        </h2>

        <ol className="mt-10 grid gap-x-16 sm:mt-12 md:grid-flow-col md:grid-cols-2 md:grid-rows-3">
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
      </div>
    </section>
  )
}

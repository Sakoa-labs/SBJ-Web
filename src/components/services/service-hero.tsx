import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SiteHeader } from '#/components/layout/site-header'
import { cn } from '#/lib/utils'
import palmLeaf from '../../../design/massage/decorations/palme-faq-gauche.png'
import palmShadow from '../../../design/massage/decorations/palme-faq-droite.png'

type HeroLink = {
  label: string
  href: string
}

type HeroImage = {
  src: string
  alt: string
}

export function ServiceHero({
  activeHref,
  title,
  accent,
  intro,
  primaryCta,
  secondaryCta,
  largeImage,
  squareImages,
}: {
  activeHref: string
  title: string
  accent: string
  intro: string
  primaryCta: HeroLink
  secondaryCta: HeroLink
  largeImage: HeroImage
  // Framed squares stacked on the seam between text and photo (desktop); the middle one
  // is the only one kept on mobile.
  squareImages: readonly [HeroImage, HeroImage, HeroImage]
}) {
  return (
    <>
      <SiteHeader activeHref={activeHref} onLight />
      <section
        className="relative isolate overflow-hidden bg-[#fff9ec] text-[#0d3a2f]"
        aria-labelledby="service-hero-title"
      >
        <div
          className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_30%,#fffdf8_58%,#fff9ec_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_22%_30%,rgba(255,255,255,0.9)_0%,transparent_45%),radial-gradient(ellipse_at_85%_80%,rgba(185,130,50,0.1)_0%,transparent_40%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-[15] h-40 bg-gradient-to-b from-transparent to-[#fff9ec]"
          aria-hidden="true"
        />
        <img
          src={palmShadow}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-64 left-[4%] -z-[25] hidden w-[54rem] max-w-none rotate-[160deg] object-contain opacity-[0.06] blur-[3px] brightness-0 lg:block"
          width={1254}
          height={1254}
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

        <div className="mx-auto grid w-full max-w-[100rem] items-center gap-12 px-5 pb-10 pt-32 sm:gap-14 sm:px-8 sm:pb-16 sm:pt-36 lg:min-h-svh lg:pb-16 xl:px-12">
          <div className="hero-stagger lg:w-[62%] lg:pr-[5rem] xl:pr-[5.75rem] 2xl:pr-[7rem]">
            {/* Sized so the longest sentence ("Prenez soin de votre peau.") stays on one line. */}
            <h1
              id="service-hero-title"
              className="text-[clamp(1.5rem,7vw,4.5rem)] font-normal leading-[1.06] tracking-[-0.03em] text-[#0d3a2f] lg:text-[clamp(2.5rem,4.2vw,4.35rem)]"
            >
              <span className="block font-medium">{title}</span>
              <em className="block pb-1 font-normal text-[#c09027]">{accent}</em>
            </h1>

            <p className="mt-8 max-w-[34rem] border-l-2 border-[#d4af37]/70 pl-5 text-pretty text-base leading-7 text-[#1f3a32] sm:pl-6 sm:text-lg sm:leading-8 xl:text-[1.5rem] xl:leading-10">
              {intro}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <EmbossedCta href={primaryCta.href} tone="gold" className="sm:h-14 sm:min-w-64 sm:text-[0.8rem]">
                {primaryCta.label}
              </EmbossedCta>
              <EmbossedCta href={secondaryCta.href} className="sm:h-14 sm:min-w-64 sm:text-[0.8rem]">
                {secondaryCta.label}
              </EmbossedCta>
            </div>
          </div>

          {/* Desktop: the large photo fills the right 38% from below the header to the bottom,
              with three framed squares stacked on the seam. Mobile keeps one square. */}
          <div className="relative mx-auto w-full max-w-[40rem] pb-[8%] lg:absolute lg:bottom-0 lg:right-0 lg:top-28 lg:mx-0 lg:w-[38%] lg:max-w-none lg:pb-0">
            <figure className="hero-photo ml-auto aspect-square w-[84%] overflow-hidden border-[3px] border-[#d4af37] bg-[#e8dcc8] shadow-[0_28px_60px_rgba(77,51,22,0.18)] lg:ml-0 lg:aspect-auto lg:h-full lg:w-full lg:border-0 lg:shadow-none">
              <img
                src={largeImage.src}
                alt={largeImage.alt}
                className="size-full object-cover"
                width={1254}
                height={1254}
                fetchPriority="high"
              />
            </figure>
            <figure className="hero-photo hero-photo-delayed absolute bottom-0 left-0 aspect-square w-[44%] overflow-hidden border-[3px] border-[#d4af37] bg-[#e8dcc8] shadow-[0_22px_48px_rgba(77,51,22,0.22)] lg:hidden">
              <img
                src={squareImages[1].src}
                alt={squareImages[1].alt}
                className="size-full object-cover"
                width={1254}
                height={1254}
              />
            </figure>

            <div className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 flex-col gap-5 lg:flex">
              {squareImages.map((image, index) => (
                <figure
                  key={image.src}
                  className={cn(
                    'hero-photo aspect-square w-[8rem] overflow-hidden border-[3px] border-[#d4af37] bg-[#e8dcc8] shadow-[0_18px_40px_rgba(77,51,22,0.24)] xl:w-[9.5rem] 2xl:w-[11rem]',
                    index === 1 ? '-translate-x-5 hero-photo-delayed' : 'translate-x-3',
                    index === 2 && 'hero-photo-late',
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="size-full object-cover"
                    width={1254}
                    height={1254}
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

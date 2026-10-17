import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { formatEuros, guidesBundle } from '#/data/guides'
import bundleImage from '../../../design/guides/coffret.png'
import palmLeaf from '../../../design/massage/decorations/palme-faq-gauche.png'

export function GuidesBundleSection() {
  return (
    <section
      id="coffret"
      className="relative isolate flex scroll-mt-24 flex-col overflow-hidden bg-[#062b23] text-[#fff9ec] sm:scroll-mt-28"
      aria-labelledby="coffret-title"
    >
      {/* Below lg the photo sits above the text instead of behind it. */}
      <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <img
          src={bundleImage}
          alt="Les trois guides réunis dans un coffret vert, entre papier de soie doré, bougies et fleurs de frangipanier"
          className="size-full object-cover object-[78%_center] lg:object-[70%_center]"
          width={1672}
          height={941}
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(0deg,#062b23_0%,rgba(6,43,35,0)_35%)] lg:bg-[linear-gradient(90deg,rgba(4,30,24,0.94)_0%,rgba(4,30,24,0.82)_30%,rgba(4,30,24,0.3)_52%,rgba(4,30,24,0)_66%)]"
          aria-hidden="true"
        />
      </div>

      <img
        data-reveal="left"
        src={palmLeaf}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 hidden w-[22rem] max-w-none rotate-[24deg] object-contain opacity-90 lg:block"
        width={1254}
        height={1254}
        loading="lazy"
      />

      <div className="relative mx-auto flex w-full max-w-[100rem] items-center px-5 pb-20 pt-4 sm:px-8 sm:pb-24 lg:min-h-[52rem] lg:py-28 xl:px-16">
        <div className="max-w-[34rem]">
          <SectionEyebrow label="Le coffret" className="w-fit" />
          <h2
            id="coffret-title"
            className="mt-4 text-[clamp(2.4rem,10vw,3.1rem)] font-normal leading-[1.04] tracking-[-0.025em] text-[#fff5df] sm:text-[clamp(3.4rem,6vw,4.4rem)] lg:text-[clamp(3.6rem,4.4vw,4.75rem)]"
          >
            <span className="block">Les trois guides,</span>
            <em className="block pb-1 font-normal text-[#e5bd42]">réunis</em>
          </h2>
          <p className="mt-5 max-w-[28rem] text-pretty text-base leading-7 text-[#fff9ec]/90 sm:text-lg sm:leading-8">
            La collection complète en un seul achat, à garder pour vous ou à offrir.
          </p>

          <p className="mt-7 flex items-baseline gap-4">
            <span className="font-heading text-[3.25rem] leading-none text-[#fff5df]">
              {formatEuros(guidesBundle.price)}
            </span>
            <s className="text-xl text-[#fff9ec]/60">
              <span className="sr-only">au lieu de </span>
              {formatEuros(guidesBundle.separatePrice)}
            </s>
          </p>

          <EmbossedCta href="#acheter" tone="gold" className="mt-9 sm:min-w-72">
            Choisir le coffret
          </EmbossedCta>
        </div>
      </div>
    </section>
  )
}

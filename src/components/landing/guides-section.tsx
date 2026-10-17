import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SectionEyebrow } from '#/components/landing/section-ornaments'
import guidesBooks from '../../../design/section guides/ChatGPT Image 24 août 2026, 15_47_59.png'
import guidesLeavesLeft from '../../../design/section guides/ChatGPT Image 24 août 2026, 15_55_27.png'
import guidesLeavesRight from '../../../design/section guides/ChatGPT Image 24 août 2026, 15_58_41.png'

function GuidesVisual({ className = '' }: { className?: string }) {
  return (
    <figure className={`relative isolate mx-auto w-full max-w-[55rem] ${className}`}>
      <div
        className="absolute inset-x-[7%] bottom-[5%] z-0 h-[20%] rounded-[50%] bg-[#795027]/24 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-[14%] bottom-[10%] z-0 h-[9%] rounded-[50%] bg-[#5d3b1d]/24 blur-xl"
        aria-hidden="true"
      />
      <img
        src={guidesBooks}
        alt="Trois guides Joie d'Être consacrés au massage relaxant, aux rituels du visage et à la pratique professionnelle"
        className="relative z-10 h-auto w-full object-contain drop-shadow-[0_22px_18px_rgba(72,48,19,0.13)]"
        width={1448}
        height={1086}
        loading="lazy"
      />
    </figure>
  )
}

export function GuidesSection() {
  return (
    <section
      id="guides"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#fff9ec] py-20 text-[#0d3a2f] sm:scroll-mt-28 sm:py-24 lg:py-32 xl:min-h-[49rem]"
      aria-labelledby="guides-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(112deg,#f3e5cb_0%,#fff9ed_25%,#fffdf7_53%,#fbf2e1_78%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_4%,rgba(255,255,255,0.92)_0%,transparent_42%),radial-gradient(ellipse_at_72%_55%,rgba(255,255,255,0.78)_0%,transparent_34%),radial-gradient(ellipse_at_77%_79%,rgba(143,94,38,0.13)_0%,transparent_30%),radial-gradient(ellipse_at_28%_47%,rgba(255,255,255,0.42)_0%,transparent_34%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-26px_54px_rgba(116,76,27,0.055)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-[15] h-24 bg-gradient-to-b from-transparent via-[#fff9ec]/55 to-[#fff9ec] sm:h-28"
        aria-hidden="true"
      />

      <img
        data-reveal="left"
        src={guidesLeavesLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 -z-10 hidden h-full w-[42rem] max-w-none object-contain object-left [mask-image:linear-gradient(to_bottom,#000_0%,#000_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_88%,transparent_100%)] xl:block"
        width={1086}
        height={1448}
      />
      <img
        data-reveal="right"
        src={guidesLeavesRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 hidden h-full w-[38rem] max-w-none object-contain object-right [mask-image:linear-gradient(to_bottom,#000_0%,#000_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_88%,transparent_100%)] xl:block"
        width={1024}
        height={1536}
      />

      <div className="mx-auto grid w-full max-w-[98rem] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8 xl:gap-10 xl:px-12">
        <div className="mx-auto w-full max-w-[39rem] text-center lg:pl-6 xl:pl-10">
          <SectionEyebrow label="Mes guides" />

          <span id="guides-disponibles" className="block scroll-mt-28" />
          <GuidesVisual className="mt-7 max-w-[42rem] lg:hidden" />

          <h2
            id="guides-title"
            className="mx-auto mt-8 text-[clamp(1.5rem,7.5vw,2.65rem)] font-normal leading-[1.08] tracking-[-0.018em] text-[#0d3a2f] sm:text-[clamp(2.5rem,6vw,3.25rem)] lg:text-[clamp(2.65rem,3.15vw,3.65rem)]"
          >
            <span className="block sm:whitespace-nowrap">Des ressources expertes</span>
            <span className="block sm:whitespace-nowrap">pour progresser</span>
            <em className="block pb-1 font-normal text-[#d4af37] sm:whitespace-nowrap">
              à votre rythme
            </em>
          </h2>

          <p className="mx-auto mt-8 max-w-[34rem] text-pretty text-base leading-8 text-[#29443c] sm:text-lg">
            Des guides pratiques à télécharger pour approfondir les gestes, la
            posture et les protocoles, puis bientôt disponibles sur Amazon KDP.
          </p>

          <EmbossedCta href="/guides" className="mt-8">
            Explorer les guides
          </EmbossedCta>
        </div>

        <GuidesVisual className="hidden lg:-mr-4 lg:block xl:-mr-8" />
      </div>
    </section>
  )
}

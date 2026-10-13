import { EmbossedCta } from '#/components/landing/embossed-cta'
import { SectionEyebrow } from '#/components/landing/section-ornaments'
import epilationIcon from '#/assets/prestations-icons/epilation.png'
import facialIcon from '#/assets/prestations-icons/facial.png'
import massageIcon from '#/assets/prestations-icons/massage.png'
import massageImage from '../../../design/section prestations/ChatGPT Image 24 août 2026, 16_06_04 (1).png'
import facialImage from '../../../design/section prestations/ChatGPT Image 24 août 2026, 16_06_05 (2).png'
import epilationImage from '../../../design/section prestations/ChatGPT Image 24 août 2026, 16_06_05 (3).png'
import tropicalLeaves from '../../../design/section prestations/ChatGPT Image 24 août 2026, 16_10_12.png'
import aboutLeaves from '../../../design/section a propos/ChatGPT Image 24 août 2026, 17_04_40.png'

const prestations = [
  {
    id: 'massage',
    title: 'Massages',
    description: 'Techniques expertes pour relâcher, rééquilibrer et revitaliser.',
    image: massageImage,
    imageAlt: 'Femme profitant de la chaleur et du calme avant un massage',
    icon: massageIcon,
    href: '/massages',
    cta: 'Découvrir les massages',
    imagePosition: 'object-[50%_43%]',
  },
  {
    id: 'soins',
    title: 'Soins visage',
    description: 'Soins sur-mesure pour purifier, hydrater et illuminer la peau.',
    image: facialImage,
    imageAlt: 'Soin du visage dans une atmosphère tropicale lumineuse',
    icon: facialIcon,
    href: '/soins',
    cta: 'Découvrir les soins',
    imagePosition: 'object-[50%_44%]',
  },
  {
    id: 'epilation',
    title: 'Épilation',
    description: 'Méthodes douces et précises pour une peau nette et soignée.',
    image: epilationImage,
    imageAlt: 'Peau soignée dans une lumière naturelle aux ombres tropicales',
    icon: epilationIcon,
    href: '/epilation',
    cta: 'Découvrir l’épilation',
    imagePosition: 'object-[50%_51%]',
  },
]

export function PrestationsSection() {
  return (
    <section
      id="prestations"
      className="relative isolate -mt-px scroll-mt-24 overflow-hidden bg-[#fff9ec] pb-24 pt-20 text-[#0d3a2f] sm:scroll-mt-28 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-12 xl:pb-32 xl:pt-8"
      aria-labelledby="prestations-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_24%,#fffdf8_55%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_13%,rgba(255,255,255,0.96)_0%,transparent_40%),radial-gradient(ellipse_at_15%_84%,rgba(185,130,50,0.08)_0%,transparent_29%),radial-gradient(ellipse_at_88%_72%,rgba(13,58,47,0.08)_0%,transparent_28%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-30px_65px_rgba(111,75,30,0.05)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-[15] h-24 bg-gradient-to-b from-[#fff9ec] via-[#fff9ec]/55 to-transparent sm:h-28"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-[5] h-24 bg-gradient-to-b from-transparent via-[#fff9ec]/55 to-[#fff9ec] sm:h-28"
        aria-hidden="true"
      />

      <img
        data-reveal="right"
        src={tropicalLeaves}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 hidden h-[56%] w-auto max-w-none object-contain object-bottom [mask-image:linear-gradient(to_bottom,#000_0%,#000_62%,rgba(0,0,0,0.45)_78%,transparent_94%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_62%,rgba(0,0,0,0.45)_78%,transparent_94%,transparent_100%)] xl:block"
        width={1122}
        height={1402}
      />
      <img
        data-reveal="left"
        src={aboutLeaves}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 -z-10 hidden h-[58%] w-auto max-w-none -translate-y-1/2 -scale-x-100 object-contain object-left lg:block"
        width={1024}
        height={1536}
      />

      <div className="mx-auto w-full max-w-[100rem] px-5 sm:px-8 xl:px-12">
        <header className="mx-auto max-w-[61rem] text-center">
          <SectionEyebrow label="Nos prestations" />

          <h2
            id="prestations-title"
            className="mx-auto mt-6 text-[clamp(1.6rem,7.4vw,2.2rem)] font-normal leading-[1.16] tracking-[-0.02em] text-[#0d3a2f] sm:text-[clamp(2.75rem,7vw,3.8rem)] sm:leading-[1.14] sm:tracking-[-0.025em] lg:text-[clamp(3.5rem,4.1vw,4.65rem)]"
          >
            <span className="block">Des prestations pensées</span>
            <em className="block pb-1 font-normal text-[#d4af37]">avec expertise.</em>
          </h2>

          <p className="mx-auto mt-6 max-w-[48rem] text-pretty text-base leading-8 text-[#29443c] sm:text-lg">
            Des soins ciblés, réalisés avec précision et bienveillance pour révéler
            l’éclat naturel.
          </p>
        </header>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {prestations.map((prestation, index) => {
            return (
              <article
                key={prestation.id}
                id={prestation.id}
                className={`group flex scroll-mt-24 flex-col text-center ${index === prestations.length - 1 ? 'sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.875rem)] lg:col-span-1 lg:w-auto' : ''}`}
                aria-labelledby={`${prestation.id}-title`}
              >
                <div className="relative">
                  <div className="aspect-[1.92/1] overflow-hidden bg-[#e8dcc8] shadow-[0_18px_36px_rgba(77,51,22,0.12)]">
                    <img
                      src={prestation.image}
                      alt={prestation.imageAlt}
                      className={`size-full object-cover ${prestation.imagePosition} transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025]`}
                      width={1672}
                      height={941}
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute left-1/2 top-full flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff9ec] shadow-[0_8px_20px_rgba(91,61,23,0.12)]">
                    <img
                      src={prestation.icon}
                      alt=""
                      aria-hidden="true"
                      className="size-11 object-contain"
                      width={256}
                      height={256}
                    />
                  </div>
                </div>

                <div className="mx-auto mt-12 flex w-full max-w-[23rem] flex-1 flex-col items-center px-2 sm:mt-14">
                  <h3
                    id={`${prestation.id}-title`}
                    className="text-[2.1rem] font-normal leading-none tracking-[-0.02em] text-[#0d3a2f] lg:text-[2.35rem]"
                  >
                    {prestation.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-[20rem] flex-1 text-sm leading-7 text-[#29443c] sm:text-base">
                    {prestation.description}
                  </p>
                  <span
                    className="mx-auto mt-5 block h-px w-12 bg-gradient-to-r from-transparent via-[#c8952f] to-transparent"
                    aria-hidden="true"
                  />
                  <EmbossedCta
                    href={prestation.href}
                    className="mt-6 h-11 w-full max-w-[16rem] px-5 text-[0.66rem] tracking-[0.16em]"
                  >
                    {prestation.cta}
                  </EmbossedCta>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

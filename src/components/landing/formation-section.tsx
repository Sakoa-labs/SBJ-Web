import { EmbossedCta } from '#/components/landing/embossed-cta'
import { GoldDivider, SectionEyebrow } from '#/components/landing/section-ornaments'
import flexibleAccessIcon from '#/assets/formation-icons/flexible-access.png'
import guidedBySabrinaIcon from '#/assets/formation-icons/guided-by-sabrina.png'
import inPersonWorkshopIcon from '#/assets/formation-icons/in-person-workshop.png'
import massageWellnessIcon from '#/assets/formation-icons/massage-wellness.png'
import practicalApproachIcon from '#/assets/formation-icons/practical-approach.png'
import premiumElearningIcon from '#/assets/formation-icons/premium-elearning.png'
import formationPhoto from '../../../design/section formation/ChatGPT Image 24 août 2026, 15_27_21.png'
import leavesLeft from '../../../design/section formation/ChatGPT Image 24 août 2026, 15_30_12.png'
import leavesRight from '../../../design/section formation/ChatGPT Image 24 août 2026, 15_41_48.png'

const benefits = [
  {
    title: 'Guidée par Sabrina',
    description: 'Une expertise et une pédagogie au service de votre progression.',
    icon: guidedBySabrinaIcon,
  },
  {
    title: 'Accès flexible',
    description: 'En présentiel ou en ligne, à votre rythme.',
    icon: flexibleAccessIcon,
  },
  {
    title: 'Approche concrète',
    description: 'Des méthodes éprouvées, ancrées dans la pratique.',
    icon: practicalApproachIcon,
  },
]

const programs = [
  {
    title: 'Formation massage bien-être',
    description: 'Protocoles, posture, pratique encadrée.',
    icon: massageWellnessIcon,
  },
  {
    title: 'Ateliers en présentiel',
    description: 'Petits groupes, démonstrations et mise en pratique.',
    icon: inPersonWorkshopIcon,
  },
  {
    title: 'E-learning premium',
    description: 'Modules vidéo, supports PDF et accès flexible.',
    icon: premiumElearningIcon,
  },
]

function FormationVisual({ className = '' }: { className?: string }) {
  return (
    <figure
      className={`overflow-hidden rounded-[1.75rem] border border-[#d4af37]/60 bg-[#0b3d33] shadow-[0_24px_70px_rgba(2,20,16,0.34)] ${className}`}
    >
      <img
        src={formationPhoto}
        alt="Sabrina transmettant une technique de massage à un groupe en formation"
        className="aspect-[16/9] size-full object-cover"
        width={1672}
        height={941}
        loading="lazy"
      />
    </figure>
  )
}

export function FormationSection() {
  return (
    <section
      id="formation"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#082f27] py-20 text-[#fff9ec] sm:scroll-mt-28 sm:py-24 lg:py-32"
      aria-labelledby="formation-title"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_52%_42%,#115044_0%,#082f27_48%,#041d18_100%)]" />
      <img
        data-reveal="left"
        src={leavesLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-0 -z-20 hidden h-full w-[28rem] object-cover object-left xl:block"
        width={1024}
        height={1536}
      />
      <img
        data-reveal="right"
        src={leavesRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 -z-20 hidden w-[31rem] xl:block"
        width={1122}
        height={1402}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,29,24,0.2),rgba(8,47,39,0.03)_45%,rgba(4,29,24,0.32))]" />

      <div className="mx-auto grid w-full max-w-[98rem] gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 xl:gap-16 xl:px-12">
        <div className="flex flex-col justify-between">
          <div className="mx-auto max-w-[42rem] text-center lg:pt-6">
            <SectionEyebrow label="Nos formations" className="mb-7 sm:mb-8" />

            <FormationVisual className="mx-auto mb-8 w-full max-w-[42rem] lg:hidden" />

            <h2
              id="formation-title"
              className="mx-auto w-full text-[clamp(1.3rem,7vw,2rem)] font-normal leading-[1.16] tracking-[-0.008em] text-[#fff5df] sm:text-[clamp(2rem,5vw,2.55rem)] lg:text-[clamp(2.15rem,3vw,3.25rem)]"
            >
              <span className="block whitespace-nowrap">Des parcours pensés</span>
              <span className="block whitespace-nowrap">
                pour <em className="font-normal text-[#e5bd42]">apprendre, pratiquer</em>
              </span>
              <span className="block whitespace-nowrap">
                et <em className="font-normal text-[#e5bd42]">transmettre</em>
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-[39rem] text-pretty text-base leading-8 text-[#fff9ec]/78 lg:text-lg">
              Des formations structurées pour développer votre geste, votre posture
              et votre confiance, en présentiel comme en ligne.
            </p>

            <EmbossedCta href="/formation" className="mt-9">
              Découvrir le programme
            </EmbossedCta>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-3 sm:gap-4 lg:mt-18 lg:gap-0">
            {benefits.map(({ title, description, icon }, index) => (
              <div
                key={title}
                className={`grid grid-cols-[auto_1fr] items-start gap-x-4 border-b border-[#d4af37]/25 pb-5 text-left sm:block sm:border-b-0 sm:pb-0 sm:text-center ${index > 0 ? 'lg:border-l lg:border-[#d4af37]/35 lg:pl-5 xl:pl-7' : ''} ${index < benefits.length - 1 ? 'lg:pr-5 xl:pr-7' : ''}`}
              >
                <span className="row-span-2 flex size-14 items-center justify-center rounded-full border border-[#d4af37]/70 sm:mx-auto sm:mb-4">
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="size-11 object-contain"
                    loading="lazy"
                  />
                </span>
                <h3 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#fff9ec] sm:text-center lg:text-xs lg:tracking-[0.13em]">
                  {title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-6 text-[#fff9ec]/65 sm:mx-auto sm:max-w-[12rem] sm:text-center">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 lg:space-y-6">
          <FormationVisual className="hidden lg:block" />

          <div id="programme-formations" className="mx-auto grid w-full max-w-xl gap-4 md:max-w-none md:grid-cols-3 lg:gap-3 xl:gap-4">
            {programs.map(({ title, description, icon }) => (
              <article
                key={title}
                className="formation-card relative flex items-center gap-5 rounded-[1.5rem] border border-[#d4af37]/70 bg-[#0a382f]/95 px-5 py-5 text-left md:block md:min-h-[20rem] md:rounded-[1.75rem] md:py-8 md:text-center md:bg-[#0a382f]/82 md:px-5 lg:min-h-[21rem] xl:px-7"
              >
                <div className="flex size-16 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/75 md:mx-auto md:size-19">
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="size-11 object-contain md:size-14"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                <h3 className="text-balance text-[1.3rem] font-normal leading-[1.1] md:mx-auto md:mt-5 md:max-w-[14rem] md:text-[1.45rem] md:leading-[1.08] text-[#fff5df] md:flex md:h-[5.25rem] md:items-center md:justify-center xl:text-[1.6rem]">
                  {title}
                </h3>
                <GoldDivider card className="mx-auto my-4 hidden md:flex" />
                <p className="mt-1.5 text-sm leading-6 text-[#fff9ec]/70 md:mx-auto md:mt-0 md:max-w-[14rem]">
                  {description}
                </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

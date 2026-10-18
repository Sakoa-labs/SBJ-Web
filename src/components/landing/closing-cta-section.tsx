import type { ReactNode } from 'react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { GoldDivider, SectionEyebrow } from '#/components/landing/section-ornaments'
import foliageLeft from '../../../design/section cta + footer/ChatGPT Image 24 août 2026, 22_21_25.png'
import foliageRight from '../../../design/section cta + footer/ChatGPT Image 24 août 2026, 22_24_48.png'

export function ClosingCtaSection() {
  return (
    <ClosingCta
      eyebrow="Prête à commencer ?"
      title={
        <>
          Rejoignez l’univers{' '}
          <em className="font-normal text-[#e5bd42]">Joie d’Être</em>
        </>
      }
      description="Formations, ateliers, e-learning et guides pratiques : découvrez un accompagnement pensé pour apprendre, pratiquer et transmettre."
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <EmbossedCta href="/formation" className="w-full sm:w-auto sm:min-w-72">
          Découvrir les formations
        </EmbossedCta>
        <EmbossedCta
          href="#contact-footer"
          tone="light"
          className="w-full sm:w-auto sm:min-w-72"
        >
          Nous contacter
        </EmbossedCta>
      </div>
    </ClosingCta>
  )
}

export function ClosingCta({
  eyebrow,
  title,
  description,
  showDivider = true,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  showDivider?: boolean
  children: ReactNode
}) {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#062b23] px-5 pb-24 pt-20 text-[#fff9ec] sm:scroll-mt-28 sm:px-8 sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-32"
      aria-labelledby="closing-cta-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_42%,rgba(19,84,67,0.68)_0%,rgba(6,43,35,0.88)_44%,#031d18_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 opacity-30 [background-image:radial-gradient(rgba(255,249,236,0.12)_0.6px,transparent_0.6px)] [background-size:5px_5px]"
        aria-hidden="true"
      />

      <img
        data-reveal="left"
        src={foliageLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-28 -z-10 hidden h-[115%] w-auto max-w-none object-contain object-left-bottom md:block lg:-left-16 xl:left-0"
        width={1024}
        height={1536}
        loading="lazy"
      />
      <img
        data-reveal="right"
        src={foliageRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-28 -z-10 hidden h-[115%] w-auto max-w-none object-contain object-right-bottom md:block lg:-right-16 xl:right-0"
        width={1024}
        height={1536}
        loading="lazy"
      />

      <div className="relative z-10 mx-auto max-w-[62rem] text-center">
        <SectionEyebrow label={eyebrow} />
        <h2
          id="closing-cta-title"
          className="mt-6 text-balance text-[clamp(1.75rem,7.8vw,2.75rem)] font-normal leading-[1.08] tracking-[-0.025em] sm:text-[clamp(3.25rem,8vw,5.75rem)] sm:leading-[1.1] sm:tracking-[-0.03em]"
        >
          {title}
        </h2>
        {showDivider && <GoldDivider compact className="mx-auto mt-7" />}
        <p className="mx-auto mt-7 max-w-[44rem] text-pretty text-base leading-8 text-[#fff9ec]/88 sm:text-lg">
          {description}
        </p>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

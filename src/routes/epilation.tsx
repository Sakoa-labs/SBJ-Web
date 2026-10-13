import { createFileRoute } from '@tanstack/react-router'

import { ClosingCta } from '#/components/landing/closing-cta-section'
import { EmbossedCta } from '#/components/landing/embossed-cta'
import { EpilationFaqSection } from '#/components/epilation/epilation-faq-section'
import { EpilationForfaitsSection } from '#/components/epilation/epilation-forfaits-section'
import { EpilationMenuSection } from '#/components/epilation/epilation-menu-section'
import { ServiceHero } from '#/components/services/service-hero'
import heroLargeImage from '../../design/heros/epilation-large-v2.png'
import heroThirdImage from '../../design/epilations/epilations/maillot.png'
import heroAccentImage from '../../design/epilations/epilations/visage.png'
import heroSmallImage from '../../design/heros/epilation-small-v2.png'

export const Route = createFileRoute('/epilation')({
  head: () => ({
    meta: [{ title: 'Épilation · Joie d’être par Sabrina' }],
  }),
  component: Epilation,
})

function Epilation() {
  return (
    <main className="overflow-x-clip bg-background">
      <ServiceHero
        activeHref="/epilation"
        title="Une peau douce."
        accent="Un geste précis."
        intro="Des épilations soignées, du visage au corps."
        largeImage={{
          src: heroLargeImage,
          alt: 'Cire dorée appliquée à la spatule sur la jambe par une main gantée',
        }}
        squareImages={[
          { src: heroAccentImage, alt: 'Cire appliquée délicatement sur le sourcil' },
          { src: heroSmallImage, alt: 'Bol de cire dorée, spatules en bois, serviette roulée et fleur de frangipanier' },
          { src: heroThirdImage, alt: 'Bol de cire tiède et spatule posés sur une serviette' },
        ]}
        primaryCta={{ label: 'Réserver mon épilation', href: '#reserver' }}
        secondaryCta={{ label: 'Découvrir les épilations', href: '#carte-des-epilations' }}
      />
      <EpilationMenuSection />
      <EpilationForfaitsSection />
      <EpilationFaqSection />
      <ClosingCta
        eyebrow="Votre moment Joie d’Être"
        showDivider={false}
        title={
          <>
            <span className="block">Et si vous preniez</span>
            <em className="block pb-1 font-normal text-[#e5bd42]">
              ce temps pour vous ?
            </em>
          </>
        }
        description={
          <>
            Accordez-vous une pause.
            <br className="hidden sm:block" /> Sabrina vous accompagne vers
            l’épilation qui vous convient.
          </>
        }
      >
        <EmbossedCta
          href="#reserver"
          tone="gold"
          className="h-14 w-full text-sm tracking-[0.16em] sm:w-auto sm:min-w-[22rem]"
        >
          Réserver mon épilation
        </EmbossedCta>
      </ClosingCta>
    </main>
  )
}

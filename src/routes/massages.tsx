import { createFileRoute } from '@tanstack/react-router'

import { ClosingCta } from '#/components/landing/closing-cta-section'
import { EmbossedCta } from '#/components/landing/embossed-cta'
import { MassageFaqSection } from '#/components/massage/massage-faq-section'
import { MassageMenuSection } from '#/components/massage/massage-menu-section'
import { ServiceHero } from '#/components/services/service-hero'
import heroLargeImage from '../../design/heros/massages-large-v2.png'
import heroThirdImage from '../../design/massage/massages/pierres-chaudes.png'
import heroAccentImage from '../../design/massage/massages/cranien-visage-buste.png'
import heroSmallImage from '../../design/heros/massages-small-v2.png'

export const Route = createFileRoute('/massages')({
  head: () => ({
    meta: [{ title: 'Massages · Joie d’être par Sabrina' }],
  }),
  component: Massages,
})

function Massages() {
  return (
    <main className="overflow-x-clip bg-background">
      <ServiceHero
        activeHref="/massages"
        title="Laissez le corps souffler."
        accent="Retrouvez votre équilibre."
        intro="Un massage pensé pour vous, entre gestes experts et douceur tropicale."
        largeImage={{
          src: heroLargeImage,
          alt: 'Femme détendue recevant un massage du dos et des épaules',
        }}
        squareImages={[
          { src: heroAccentImage, alt: 'Massage crânien, une femme détendue les yeux fermés' },
          { src: heroSmallImage, alt: 'Pierres de massage, huile, serviette roulée et fleur de frangipanier sur un plateau en bois' },
          { src: heroThirdImage, alt: 'Pierres chaudes, bougies et bols dorés' },
        ]}
        primaryCta={{ label: 'Réserver mon massage', href: '#reserver' }}
        secondaryCta={{ label: 'Découvrir les massages', href: '#carte-des-massages' }}
      />
      <MassageMenuSection />
      <MassageFaqSection />
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
            <br className="hidden sm:block" /> Sabrina vous accompagne vers le
            massage qui vous ressemble.
          </>
        }
      >
        <EmbossedCta
          href="#reserver"
          tone="gold"
          className="h-14 w-full text-sm tracking-[0.16em] sm:w-auto sm:min-w-[22rem]"
        >
          Réserver mon massage
        </EmbossedCta>
      </ClosingCta>
    </main>
  )
}

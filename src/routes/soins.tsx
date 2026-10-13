import { createFileRoute } from '@tanstack/react-router'

import { ClosingCta } from '#/components/landing/closing-cta-section'
import { EmbossedCta } from '#/components/landing/embossed-cta'
import { ServiceHero } from '#/components/services/service-hero'
import { SoinsFaqSection } from '#/components/soins/soins-faq-section'
import { SoinsMenuSection } from '#/components/soins/soins-menu-section'
import heroLargeImage from '../../design/heros/soins-large-v2.png'
import heroThirdImage from '../../design/soins/soins/express-detox.png'
import heroAccentImage from '../../design/soins/soins/precieux.png'
import heroSmallImage from '../../design/heros/soins-small-v2.png'

export const Route = createFileRoute('/soins')({
  head: () => ({
    meta: [{ title: 'Soins visage · Joie d’être par Sabrina' }],
  }),
  component: Soins,
})

function Soins() {
  return (
    <main className="overflow-x-clip bg-background">
      <ServiceHero
        activeHref="/soins"
        title="Prenez soin de votre peau."
        accent="Révélez son éclat."
        intro="Des soins du visage et des gestes experts, adaptés à votre peau."
        largeImage={{
          src: heroLargeImage,
          alt: 'Masque à l’argile verte appliqué au pinceau sur la joue pendant un soin du visage',
        }}
        squareImages={[
          { src: heroAccentImage, alt: 'Crème de soin appliquée sur la pommette' },
          { src: heroSmallImage, alt: 'Sérum, crème, argile verte et pinceau à masque sur un plateau en bois' },
          { src: heroThirdImage, alt: 'Visage nettoyé délicatement avec une serviette chaude' },
        ]}
        primaryCta={{ label: 'Réserver mon soin', href: '#reserver' }}
        secondaryCta={{ label: 'Découvrir les soins', href: '#carte-des-soins' }}
      />
      <SoinsMenuSection />
      <SoinsFaqSection />
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
            soin qui révèle votre peau.
          </>
        }
      >
        <EmbossedCta
          href="#reserver"
          tone="gold"
          className="h-14 w-full text-sm tracking-[0.16em] sm:w-auto sm:min-w-[22rem]"
        >
          Réserver mon soin
        </EmbossedCta>
      </ClosingCta>
    </main>
  )
}

import { createFileRoute } from '@tanstack/react-router'

import { GuidesAuthorSection } from '#/components/guides/guides-author-section'
import { GuidesBundleSection } from '#/components/guides/guides-bundle-section'
import { GuidesCollectionSection } from '#/components/guides/guides-collection-section'
import { ServiceHero } from '#/components/services/service-hero'
import heroLargeImage from '../../design/guides/hero-livres.png'
import heroMassageImage from '../../design/guides/hero-massage.png'
import heroPratiqueImage from '../../design/guides/hero-pratique.png'
import heroVisageImage from '../../design/guides/hero-visage.png'

export const Route = createFileRoute('/guides')({
  head: () => ({
    meta: [{ title: 'Mes guides · Joie d’être par Sabrina' }],
  }),
  component: Guides,
})

function Guides() {
  return (
    <main className="overflow-x-clip bg-background">
      <ServiceHero
        activeHref="/guides"
        title="Le savoir-faire de Sabrina,"
        accent="entre vos mains."
        intro="Des guides illustrés à télécharger en PDF, pour pratiquer chez vous, à votre rythme."
        largeImage={{
          src: heroLargeImage,
          alt: 'Les trois guides Joie d’Être posés sur une console en bois sculpté, entre bougies et fleurs de frangipanier',
        }}
        squareImages={[
          { src: heroMassageImage, alt: 'Mains glissant avec de l’huile sur le dos d’une femme détendue' },
          { src: heroVisageImage, alt: 'Femme les yeux fermés, en plein auto-massage du visage' },
          { src: heroPratiqueImage, alt: 'Praticienne montrant un geste de massage à une élève' },
        ]}
        primaryCta={{ label: 'Découvrir les guides', href: '#collection' }}
        secondaryCta={{ label: 'Voir le coffret', href: '#coffret' }}
      />
      <GuidesCollectionSection />
      <GuidesBundleSection />
      <GuidesAuthorSection />
    </main>
  )
}

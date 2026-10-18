import { createFileRoute } from '@tanstack/react-router'

import { FormationFaqSection } from '#/components/formation/formation-faq-section'
import { FormationFormatsSection } from '#/components/formation/formation-formats-section'
import { FormationPathSection } from '#/components/formation/formation-path-section'
import { FormationTestimonialsSection } from '#/components/formation/formation-testimonials-section'
import { ClosingCta } from '#/components/landing/closing-cta-section'
import { EmbossedCta } from '#/components/landing/embossed-cta'
import { ServiceHero } from '#/components/services/service-hero'
import heroLargeImage from '../../design/formation/hero-principale.png'
import heroGroupImage from '../../design/formation/hero-groupe.png'
import heroOnlineImage from '../../design/formation/hero-elearning.png'
import heroCertificateImage from '../../design/formation/hero-certificat.png'

export const Route = createFileRoute('/formation')({
  head: () => ({
    meta: [
      { title: 'Formation · Joie d’être par Sabrina' },
      {
        name: 'description',
        content:
          'Ateliers en présentiel, formation massage bien-être et e-learning : apprenez le massage aux côtés de Sabrina, à votre rythme.',
      },
    ],
  }),
  component: Formation,
})

function Formation() {
  return (
    <main className="overflow-x-clip bg-background">
      <ServiceHero
        activeHref="/formation"
        title="Apprenez l’art du toucher."
        accent="À votre rythme."
        intro="Des formations guidées par Sabrina, en présentiel comme en ligne."
        largeImage={{
          src: heroLargeImage,
          alt: 'Sabrina guide les mains d’une élève sur le dos d’une cliente',
        }}
        squareImages={[
          { src: heroGroupImage, alt: 'Sabrina fait une démonstration devant un petit groupe d’élèves' },
          { src: heroOnlineImage, alt: 'Une leçon vidéo de massage sur un ordinateur portable, à côté d’un carnet de notes' },
          { src: heroCertificateImage, alt: 'Un certificat de formation au sceau doré, posé à côté d’une fleur de frangipanier' },
        ]}
        primaryCta={{ label: 'Voir les formations', href: '#parcours' }}
        secondaryCta={{ label: 'Télécharger le programme', href: '#programme' }}
      />
      <FormationPathSection />
      <FormationFormatsSection />
      <FormationTestimonialsSection />
      <FormationFaqSection />
      <ClosingCta
        eyebrow="Votre parcours Joie d’Être"
        showDivider={false}
        title={
          <>
            <span className="block">Prête à</span>
            <em className="block pb-1 font-normal text-[#e5bd42]">vous lancer ?</em>
          </>
        }
        description={
          <>
            Échangez avec Sabrina
            <br className="hidden sm:block" /> pour choisir la formation qui vous ressemble.
          </>
        }
      >
        <EmbossedCta
          href="#reserver"
          tone="gold"
          className="h-14 w-full text-sm tracking-[0.16em] sm:w-auto sm:min-w-[22rem]"
        >
          Réserver ma place
        </EmbossedCta>
      </ClosingCta>
    </main>
  )
}

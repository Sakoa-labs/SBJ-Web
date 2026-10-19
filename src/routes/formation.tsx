import { createFileRoute } from '@tanstack/react-router'

import { FormationFaqSection } from '#/components/formation/formation-faq-section'
import { FormationFormatsSection } from '#/components/formation/formation-formats-section'
import { FormationPathSection } from '#/components/formation/formation-path-section'
import { FormationTestimonialsSection } from '#/components/formation/formation-testimonials-section'
import { ClosingCta } from '#/components/landing/closing-cta-section'
import { EmbossedCta } from '#/components/landing/embossed-cta'
import { PageSections } from '#/components/layout/page-sections'
import { ServiceHero } from '#/components/services/service-hero'
import { RichTitle, WideScreenBreaks } from '#/components/ui/rich-text'
import { formationPage } from '#/data/pages/learning'
import type { FormationClosingContent, FormationSection } from '#/data/pages/learning'

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

function FormationClosing({ eyebrow, title, text, button }: FormationClosingContent) {
  return (
    <ClosingCta
      eyebrow={eyebrow}
      showDivider={false}
      title={<RichTitle text={title} accentClassName="pb-1 text-[#e5bd42]" />}
      description={<WideScreenBreaks text={text} />}
    >
      <EmbossedCta
        href="#inscription"
        tone="gold"
        className="h-14 w-full text-sm tracking-[0.16em] sm:w-auto sm:min-w-[22rem]"
      >
        {button}
      </EmbossedCta>
    </ClosingCta>
  )
}

function FormationSectionContent({ section }: { section: FormationSection }) {
  switch (section._type) {
    case 'formationPath':
      return <FormationPathSection {...section} />
    case 'formationFormats':
      return <FormationFormatsSection {...section} />
    case 'formationReviews':
      return <FormationTestimonialsSection {...section} />
    case 'formationFaq':
      return <FormationFaqSection {...section} />
    case 'formationClosing':
      return <FormationClosing {...section} />
  }
}

function Formation() {
  const { hero, sections } = formationPage
  return (
    <main className="overflow-x-clip bg-background">
      <ServiceHero
        activeHref="/formation"
        title={hero.title}
        accent={hero.accent}
        intro={hero.intro}
        largeImage={hero.largePhoto}
        squareImages={hero.squarePhotos}
        primaryCta={{ label: hero.primaryButton, href: '#parcours' }}
        secondaryCta={{ label: hero.secondaryButton, href: '#programme' }}
      />
      <PageSections sections={sections} render={(section) => <FormationSectionContent section={section} />} />
    </main>
  )
}

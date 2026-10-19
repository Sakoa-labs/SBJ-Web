import { createFileRoute } from '@tanstack/react-router'

import { EpilationFaqSection } from '#/components/epilation/epilation-faq-section'
import { EpilationForfaitsSection } from '#/components/epilation/epilation-forfaits-section'
import { EpilationMenuSection } from '#/components/epilation/epilation-menu-section'
import { PageSections } from '#/components/layout/page-sections'
import { ServiceClosing } from '#/components/services/service-closing'
import { ServiceHero } from '#/components/services/service-hero'
import { epilationPage } from '#/data/pages/services'
import type { EpilationPage } from '#/data/pages/services'

export const Route = createFileRoute('/epilation')({
  head: () => ({
    meta: [{ title: 'Épilation · Joie d’être par Sabrina' }],
  }),
  component: Epilation,
})

function SectionContent({ section }: { section: EpilationPage['sections'][number] }) {
  switch (section._type) {
    case 'epilationMenu':
      return <EpilationMenuSection {...section} />
    case 'epilationForfaits':
      return <EpilationForfaitsSection {...section} />
    case 'epilationFaq':
      return <EpilationFaqSection {...section} />
    case 'epilationClosing':
      return <ServiceClosing {...section} />
  }
}

function Epilation() {
  const { hero, sections } = epilationPage
  return (
    <main className="overflow-x-clip bg-background">
      <ServiceHero
        activeHref="/epilation"
        title={hero.title}
        accent={hero.accent}
        intro={hero.intro}
        largeImage={hero.largePhoto}
        squareImages={[hero.topPhoto, hero.middlePhoto, hero.bottomPhoto]}
        primaryCta={{ label: hero.primaryButton, href: '#reserver' }}
        secondaryCta={{ label: hero.secondaryButton, href: '#carte-des-epilations' }}
      />
      <PageSections sections={sections} render={(section) => <SectionContent section={section} />} />
    </main>
  )
}

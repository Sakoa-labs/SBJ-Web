import { createFileRoute } from '@tanstack/react-router'

import { PageSections } from '#/components/layout/page-sections'
import { ServiceClosing } from '#/components/services/service-closing'
import { ServiceHero } from '#/components/services/service-hero'
import { SoinsFaqSection } from '#/components/soins/soins-faq-section'
import { SoinsMenuSection } from '#/components/soins/soins-menu-section'
import { soinsPage } from '#/data/pages/services'
import type { SoinsPage } from '#/data/pages/services'

export const Route = createFileRoute('/soins')({
  head: () => ({
    meta: [{ title: 'Soins visage · Joie d’être par Sabrina' }],
  }),
  component: Soins,
})

function SectionContent({ section }: { section: SoinsPage['sections'][number] }) {
  switch (section._type) {
    case 'soinsMenu':
      return <SoinsMenuSection {...section} />
    case 'soinsFaq':
      return <SoinsFaqSection {...section} />
    case 'soinsClosing':
      return <ServiceClosing {...section} />
  }
}

function Soins() {
  const { hero, sections } = soinsPage
  return (
    <main className="overflow-x-clip bg-background">
      <ServiceHero
        activeHref="/soins"
        title={hero.title}
        accent={hero.accent}
        intro={hero.intro}
        largeImage={hero.largePhoto}
        squareImages={[hero.topPhoto, hero.middlePhoto, hero.bottomPhoto]}
        primaryCta={{ label: hero.primaryButton, href: '#reserver' }}
        secondaryCta={{ label: hero.secondaryButton, href: '#carte-des-soins' }}
      />
      <PageSections sections={sections} render={(section) => <SectionContent section={section} />} />
    </main>
  )
}

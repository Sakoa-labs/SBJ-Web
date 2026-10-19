import { createFileRoute } from '@tanstack/react-router'

import { PageSections } from '#/components/layout/page-sections'
import { MassageFaqSection } from '#/components/massage/massage-faq-section'
import { MassageMenuSection } from '#/components/massage/massage-menu-section'
import { ServiceClosing } from '#/components/services/service-closing'
import { ServiceHero } from '#/components/services/service-hero'
import { massagesPage } from '#/data/pages/services'
import type { MassagesPage } from '#/data/pages/services'

export const Route = createFileRoute('/massages')({
  head: () => ({
    meta: [{ title: 'Massages · Joie d’être par Sabrina' }],
  }),
  component: Massages,
})

function SectionContent({ section }: { section: MassagesPage['sections'][number] }) {
  switch (section._type) {
    case 'massagesMenu':
      return <MassageMenuSection {...section} />
    case 'massagesFaq':
      return <MassageFaqSection {...section} />
    case 'massagesClosing':
      return <ServiceClosing {...section} />
  }
}

function Massages() {
  const { hero, sections } = massagesPage
  return (
    <main className="overflow-x-clip bg-background">
      <ServiceHero
        activeHref="/massages"
        title={hero.title}
        accent={hero.accent}
        intro={hero.intro}
        largeImage={hero.largePhoto}
        squareImages={[hero.topPhoto, hero.middlePhoto, hero.bottomPhoto]}
        primaryCta={{ label: hero.primaryButton, href: '#reserver' }}
        secondaryCta={{ label: hero.secondaryButton, href: '#carte-des-massages' }}
      />
      <PageSections sections={sections} render={(section) => <SectionContent section={section} />} />
    </main>
  )
}

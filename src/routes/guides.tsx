import { createFileRoute } from '@tanstack/react-router'

import { GuidesAuthorSection } from '#/components/guides/guides-author-section'
import { GuidesBundleSection } from '#/components/guides/guides-bundle-section'
import { GuidesCollectionSection } from '#/components/guides/guides-collection-section'
import { PageSections } from '#/components/layout/page-sections'
import { ServiceHero } from '#/components/services/service-hero'
import { guidesPage } from '#/data/pages/learning'
import type { GuidesSection } from '#/data/pages/learning'

export const Route = createFileRoute('/guides')({
  head: () => ({
    meta: [{ title: 'Mes guides · Joie d’être par Sabrina' }],
  }),
  component: Guides,
})

function GuidesSectionContent({ section }: { section: GuidesSection }) {
  switch (section._type) {
    case 'guidesCollection':
      return <GuidesCollectionSection {...section} />
    case 'guidesBundleSection':
      return <GuidesBundleSection {...section} />
    case 'guidesAuthor':
      return <GuidesAuthorSection {...section} />
  }
}

function Guides() {
  const { hero, sections } = guidesPage
  return (
    <main className="overflow-x-clip bg-background">
      <ServiceHero
        activeHref="/guides"
        title={hero.title}
        accent={hero.accent}
        intro={hero.intro}
        largeImage={hero.largePhoto}
        squareImages={hero.squarePhotos}
        primaryCta={{ label: hero.primaryButton, href: '#collection' }}
        secondaryCta={{ label: hero.secondaryButton, href: '#coffret' }}
      />
      <PageSections sections={sections} render={(section) => <GuidesSectionContent section={section} />} />
    </main>
  )
}

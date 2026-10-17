import { createFileRoute } from '@tanstack/react-router'

import { GuidesAuthorSection } from '#/components/guides/guides-author-section'
import { GuidesBundleSection } from '#/components/guides/guides-bundle-section'
import { GuidesCollectionSection } from '#/components/guides/guides-collection-section'
import { GuidesHero } from '#/components/guides/guides-hero'

export const Route = createFileRoute('/guides')({
  head: () => ({
    meta: [{ title: 'Mes guides · Joie d’être par Sabrina' }],
  }),
  component: Guides,
})

function Guides() {
  return (
    <main className="overflow-x-clip bg-background">
      <GuidesHero />
      <GuidesCollectionSection />
      <GuidesBundleSection />
      <GuidesAuthorSection />
    </main>
  )
}

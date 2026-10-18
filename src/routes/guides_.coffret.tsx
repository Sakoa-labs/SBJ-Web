import { createFileRoute } from '@tanstack/react-router'

import { BundleDetailPage } from '#/components/guides/guide-detail'
import { guidesBundle } from '#/data/guides'

export const Route = createFileRoute('/guides_/coffret')({
  head: () => ({
    meta: [
      { title: `${guidesBundle.title} · Joie d’être par Sabrina` },
      { name: 'description', content: guidesBundle.description },
    ],
  }),
  component: BundleDetailPage,
})

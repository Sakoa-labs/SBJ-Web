import { createFileRoute, notFound } from '@tanstack/react-router'

import { GuideDetailPage } from '#/components/guides/guide-detail'
import { findGuide } from '#/data/guides'

export const Route = createFileRoute('/guides_/$slug')({
  loader: ({ params }) => {
    const guide = findGuide(params.slug)
    if (!guide) throw notFound()
    return guide
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} · Joie d’être par Sabrina` },
          { name: 'description', content: loaderData.description },
        ]
      : [],
  }),
  component: GuideDetailRoute,
})

function GuideDetailRoute() {
  return <GuideDetailPage guide={Route.useLoaderData()} />
}

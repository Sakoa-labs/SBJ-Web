import { createFileRoute, notFound } from '@tanstack/react-router'

import { ServiceDetailPage } from '#/components/services/service-detail'
import { findService } from '#/data/services'

export const Route = createFileRoute('/massages_/$slug')({
  loader: ({ params }) => {
    const service = findService('massages', params.slug)
    if (!service) throw notFound()
    return service
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} · Joie d’être par Sabrina` },
          { name: 'description', content: loaderData.hook },
        ]
      : [],
  }),
  component: ServiceDetailRoute,
})

function ServiceDetailRoute() {
  return <ServiceDetailPage service={Route.useLoaderData()} />
}

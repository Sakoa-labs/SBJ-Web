import { createFileRoute } from '@tanstack/react-router'

import { NotFoundPage } from '#/components/not-found/not-found-page'

// The same page as the router's not-found screen, at a real address so the build can
// render it to /404.html, the page static hosts (Netlify, o2switch) serve for unknown URLs.
export const Route = createFileRoute('/404')({
  head: () => ({
    meta: [
      { title: 'Page introuvable · Joie d’être par Sabrina' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: NotFoundPage,
})

import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { FloatingActions } from '#/components/landing/floating-actions'
import { BooksyBooking } from '#/components/layout/booksy-booking'
import { ScrollReveal } from '#/components/layout/scroll-reveal'
import { SiteFooter } from '#/components/layout/site-footer'
import { NotFoundPage } from '#/components/not-found/not-found-page'
import appCss from '../styles.css?url'

// Social networks need absolute URLs for the share preview image.
const SITE_URL = 'https://sabrinajoiedetre.com'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Joie d’être par Sabrina',
      },
      {
        name: 'theme-color',
        content: '#062b23',
      },
      // Preview shown when a link to the site is shared (WhatsApp, Facebook, LinkedIn, X…).
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Joie d’Être par Sabrina' },
      { property: 'og:locale', content: 'fr_FR' },
      { property: 'og:title', content: 'Joie d’Être par Sabrina · L’art du bien-être à la française' },
      {
        property: 'og:description',
        content:
          'Massages, soins du visage, épilation et formations à Saint-Denis, La Réunion. Réservez votre moment de détente en ligne.',
      },
      { property: 'og:image', content: `${SITE_URL}/og-image.jpg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: 'Joie d’Être par Sabrina, l’art du bien-être à la française : table de massage face à la mer au coucher du soleil',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
  }),
  shellComponent: RootDocument,
  // Any unknown address, and detail pages whose guide or service no longer exists.
  notFoundComponent: NotFoundPage,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <SiteFooter />
        <FloatingActions />
        <ScrollReveal />
        <BooksyBooking />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

import { createFileRoute } from '@tanstack/react-router'

import { legalNoticeSections } from '#/components/legal/legal-notice-content'
import { LegalPage } from '#/components/legal/legal-page'

export const Route = createFileRoute('/mentions-legales')({
  head: () => ({
    meta: [
      { title: 'Mentions légales · Joie d’être par Sabrina' },
      {
        name: 'description',
        content: 'Éditeur, directrice de la publication et hébergeur du site Sabrina Joie d’Être.',
      },
    ],
  }),
  component: MentionsLegales,
})

function MentionsLegales() {
  return (
    <LegalPage
      title="Mentions"
      accent="légales"
      intro="Qui édite et héberge ce site, et comment nous joindre."
      sections={legalNoticeSections}
      contactTitle="Une question sur le site ?"
    />
  )
}

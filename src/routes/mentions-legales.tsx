import { createFileRoute } from '@tanstack/react-router'

import { LegalPage } from '#/components/legal/legal-page'
import { legalNoticePage } from '#/data/pages/contact'

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
  return <LegalPage {...legalNoticePage} />
}

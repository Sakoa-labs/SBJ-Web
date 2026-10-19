import { createFileRoute } from '@tanstack/react-router'

import { LegalPage } from '#/components/legal/legal-page'
import { privacyPage } from '#/data/pages/contact'

export const Route = createFileRoute('/politique-de-confidentialite')({
  head: () => ({
    meta: [
      { title: 'Politique de confidentialité · Joie d’être par Sabrina' },
      {
        name: 'description',
        content:
          'Comment Sabrina Joie d’Être recueille, utilise et protège vos données personnelles, et comment exercer vos droits.',
      },
    ],
  }),
  component: PolitiqueDeConfidentialite,
})

function PolitiqueDeConfidentialite() {
  return <LegalPage {...privacyPage} />
}

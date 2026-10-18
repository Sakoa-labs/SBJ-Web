import { createFileRoute } from '@tanstack/react-router'

import { LegalPage } from '#/components/legal/legal-page'
import { privacySections } from '#/components/legal/privacy-content'

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
  return (
    <LegalPage
      title="Politique"
      accent="de confidentialité"
      intro="Nous mettons tout en œuvre pour protéger votre vie privée. Voici comment vos données personnelles sont recueillies, utilisées et protégées lorsque vous visitez le site, vous abonnez à nos newsletters ou réservez une prestation."
      sections={privacySections}
      contactTitle="Une question sur vos données ?"
    />
  )
}

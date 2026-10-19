import { createFileRoute } from '@tanstack/react-router'

import { LegalPage } from '#/components/legal/legal-page'
import { termsPage } from '#/data/pages/contact'

export const Route = createFileRoute('/conditions-generales')({
  head: () => ({
    meta: [
      { title: 'Conditions générales de vente · Joie d’être par Sabrina' },
      {
        name: 'description',
        content:
          'Conditions générales de vente de Sabrina Joie d’Être : prix, commande, paiement, livraison, rétractation et garanties.',
      },
    ],
  }),
  component: ConditionsGenerales,
})

function ConditionsGenerales() {
  return <LegalPage {...termsPage} />
}

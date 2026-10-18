import { createFileRoute } from '@tanstack/react-router'

import { LegalPage } from '#/components/legal/legal-page'
import { termsSections } from '#/components/legal/terms-content'

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
  return (
    <LegalPage
      title="Conditions générales"
      accent="de vente"
      intro="Les règles qui encadrent vos réservations de massages et de soins, vos formations et vos achats sur le site."
      sections={termsSections}
      contactTitle="Une question sur une commande ?"
    />
  )
}

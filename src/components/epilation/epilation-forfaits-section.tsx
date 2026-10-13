import { DecorObject } from '#/components/services/decor-object'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
import maillotSimpleImage from '../../../design/epilations/forfaits/maillot-simple-swim.png'
import maillotEchancreImage from '../../../design/epilations/forfaits/maillot-echancre-swim.png'
import maillotIntegralImage from '../../../design/epilations/forfaits/maillot-integral-swim.png'
import frangipanier from '#/assets/decor/frangipanier.png'

const forfaits: ReadonlyArray<ServiceMenuItem> = [
  {
    id: 'forfait-maillot-simple',
    title: 'Maillot simple',
    description: 'Les contours du maillot, complétés par quatre zones de votre choix.',
    image: maillotSimpleImage,
    imageAlt: 'Bas de maillot classique posé sur une serviette, à côté d’un bol de cire',
    href: '#reserver',
  },
  {
    id: 'forfait-maillot-echancre',
    title: 'Maillot échancré',
    description: 'Un maillot plus échancré, associé à quatre zones de votre choix.',
    image: maillotEchancreImage,
    imageAlt: 'Bas de maillot échancré posé sur une serviette, à côté d’un bol de cire',
    href: '#reserver',
  },
  {
    id: 'forfait-maillot-semi-integral',
    title: 'Maillot semi ou intégral',
    description: 'La formule semi ou intégrale, avec quatre zones de votre choix.',
    image: maillotIntegralImage,
    imageAlt: 'Bas de maillot brésilien posé sur une serviette, à côté d’un bol de cire',
    href: '#reserver',
  },
]

export function EpilationForfaitsSection() {
  return (
    <ServiceMenuSection
      decor={<DecorObject src={frangipanier} className="-right-14 bottom-[18%] w-32 -rotate-12" />}
      id="forfaits-epilation"
      title="Les forfaits"
      accent="épilation"
      subtitle="Un maillot et quatre zones au choix."
      items={forfaits}
      imageWidth={1536}
      imageHeight={1024}
      imageClassName="aspect-[3/2]"
      variant="card"
      ctaLabel="Choisir ce forfait"
    />
  )
}

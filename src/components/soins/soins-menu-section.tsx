import { DecorObject } from '#/components/services/decor-object'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
import expressDetoxImage from '../../../design/soins/soins/express-detox.png'
import essentielImage from '../../../design/soins/soins/essentiel.png'
import precieuxImage from '../../../design/soins/soins/precieux.png'
import antiAgeImage from '../../../design/soins/soins/massage-anti-age-visage.png'
import soinExpressDetoxIcon from '#/assets/card-icons/soin-express-detox.png'
import soinEssentielIcon from '#/assets/card-icons/soin-essentiel.png'
import soinPrecieuxIcon from '#/assets/card-icons/soin-precieux.png'
import soinMassageVisageIcon from '#/assets/card-icons/soin-massage-visage.png'
import frangipanier from '#/assets/decor/frangipanier.png'
import fioleHuile from '#/assets/decor/fiole-huile.png'

const soins: ReadonlyArray<ServiceMenuItem> = [
  {
    id: 'express-detox',
    title: 'L’Express Détox',
    description: 'Un coup d’éclat pour tous les types de peau.',
    image: expressDetoxImage,
    imageAlt: 'Visage nettoyé délicatement avec une serviette chaude',
    icon: soinExpressDetoxIcon,
  },
  {
    id: 'essentiel',
    title: 'L’Essentiel',
    description: 'Un soin purifiant pour les peaux mixtes ou grasses.',
    image: essentielImage,
    imageAlt: 'Masque à l’argile appliqué au pinceau sur le visage',
    icon: soinEssentielIcon,
  },
  {
    id: 'precieux',
    title: 'Le Précieux',
    description: 'Un soin anti-âge signature pour le visage.',
    image: precieuxImage,
    imageAlt: 'Crème de soin appliquée sur la pommette',
    icon: soinPrecieuxIcon,
  },
  {
    id: 'massage-anti-age-visage',
    title: 'Massage anti-âge du visage',
    description: 'Des gestes ciblés pour détendre les traits.',
    image: antiAgeImage,
    imageAlt: 'Mains massant le visage d’une femme détendue',
    icon: soinMassageVisageIcon,
  },
]

export function SoinsMenuSection() {
  return (
    <ServiceMenuSection
      decor={
        <>
          <DecorObject src={frangipanier} className="-left-12 top-[44%] w-28 rotate-[18deg]" />
          <DecorObject src={fioleHuile} className="-right-8 bottom-[22%] w-20 -rotate-[24deg]" />
        </>
      }
      id="carte-des-soins"
      accent="soins"
      items={soins}
      imageWidth={1484}
      imageHeight={1060}
      imageClassName="aspect-[1.4/1]"
    />
  )
}

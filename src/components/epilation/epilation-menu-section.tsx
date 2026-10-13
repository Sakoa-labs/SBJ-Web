import { DecorObject } from '#/components/services/decor-object'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
import visageImage from '../../../design/epilations/epilations/visage.png'
import corpsImage from '../../../design/epilations/epilations/corps.png'
import maillotImage from '../../../design/epilations/epilations/maillot.png'
import epilationVisageIcon from '#/assets/card-icons/epilation-visage.png'
import epilationCorpsIcon from '#/assets/card-icons/epilation-corps.png'
import epilationMaillotIcon from '#/assets/card-icons/epilation-maillot.png'
import frangipaniersDuo from '#/assets/decor/frangipaniers-duo.png'

const epilations: ReadonlyArray<ServiceMenuItem> = [
  {
    id: 'epilation-visage',
    title: 'Visage',
    description: 'Des contours nets et soignés.',
    image: visageImage,
    imageAlt: 'Cire appliquée délicatement sur le sourcil',
    icon: epilationVisageIcon,
  },
  {
    id: 'epilation-corps',
    title: 'Corps',
    description: 'Une peau douce, zone par zone.',
    image: corpsImage,
    imageAlt: 'Cire appliquée à la spatule sur la jambe',
    icon: epilationCorpsIcon,
  },
  {
    id: 'epilation-maillot',
    title: 'Maillot',
    description: 'Trois options selon vos envies.',
    image: maillotImage,
    imageAlt: 'Bol de cire tiède et spatule posés sur une serviette',
    icon: epilationMaillotIcon,
  },
]

export function EpilationMenuSection() {
  return (
    <ServiceMenuSection
      decor={<DecorObject src={frangipaniersDuo} className="-left-12 top-[44%] w-28 rotate-[18deg]" />}
      id="carte-des-epilations"
      accent="épilations"
      subtitle="Choisissez votre zone."
      items={epilations}
      imageWidth={1536}
      imageHeight={1024}
      imageClassName="aspect-[1.6/1]"
      variant="card"
    />
  )
}

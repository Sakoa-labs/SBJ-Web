import { DecorObject } from '#/components/services/decor-object'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
import californienImage from '../../../design/massage/massages/californien.png'
import etoileImage from '../../../design/massage/massages/etoile.png'
import cranienImage from '../../../design/massage/massages/cranien-visage-buste.png'
import cireBougieImage from '../../../design/massage/massages/dos-cire-bougie.png'
import dosPierresImage from '../../../design/massage/massages/dos-pierres-chaudes.png'
import jambesImage from '../../../design/massage/massages/jambes-legeres.png'
import pierresImage from '../../../design/massage/massages/pierres-chaudes.png'
import signatureImage from '../../../design/massage/massages/joie-detre-signature.png'
import massageCalifornienIcon from '#/assets/card-icons/massage-californien.png'
import massageEtoileIcon from '#/assets/card-icons/massage-etoile.png'
import massageCranienIcon from '#/assets/card-icons/massage-cranien.png'
import massageCireBougieIcon from '#/assets/card-icons/massage-cire-bougie.png'
import massageDosPierresIcon from '#/assets/card-icons/massage-dos-pierres.png'
import massageJambesLegeresIcon from '#/assets/card-icons/massage-jambes-legeres.png'
import massagePierresChaudesIcon from '#/assets/card-icons/massage-pierres-chaudes.png'
import massageSignatureIcon from '#/assets/card-icons/massage-signature.png'
import frangipanier from '#/assets/decor/frangipanier.png'
import pierresEmpilees from '#/assets/decor/pierres-empilees.png'

const massages: ReadonlyArray<ServiceMenuItem> = [
  {
    id: 'californien',
    title: 'Californien',
    description: 'Un massage doux et enveloppant.',
    image: californienImage,
    imageAlt: 'Serviettes roulées, huile de massage et fleurs de frangipanier',
    icon: massageCalifornienIcon,
  },
  {
    id: 'etoile',
    title: 'Étoile',
    description: 'Pieds, mains, visage et cuir chevelu, en restant habillé.',
    image: etoileImage,
    imageAlt: 'Mains massant délicatement un pied',
    icon: massageEtoileIcon,
  },
  {
    id: 'cranien-visage-buste',
    title: 'Crânien, visage & buste',
    description: 'Un massage du haut du corps.',
    image: cranienImage,
    imageAlt: 'Femme détendue recevant un massage crânien',
    icon: massageCranienIcon,
  },
  {
    id: 'dos-cire-bougie',
    title: 'Dos à la cire de bougie',
    description: 'Une huile de bougie tiède pour le dos, la nuque et les épaules.',
    image: cireBougieImage,
    imageAlt: 'Bougie de massage allumée dans une coupe dorée',
    icon: massageCireBougieIcon,
  },
  {
    id: 'dos-pierres-chaudes',
    title: 'Dos aux pierres chaudes',
    description: 'Un soin ciblé sur les tensions du dos.',
    image: dosPierresImage,
    imageAlt: 'Pierres chaudes posées sur une serviette avec des fleurs de frangipanier',
    icon: massageDosPierresIcon,
  },
  {
    id: 'jambes-legeres',
    title: 'Jambes légères',
    description: 'Des mouvements drainants de la cheville à la cuisse.',
    image: jambesImage,
    imageAlt: 'Mains réalisant un massage drainant des jambes',
    icon: massageJambesLegeresIcon,
  },
  {
    id: 'pierres-chaudes',
    title: 'Pierres chaudes',
    description: 'La chaleur des pierres associée au massage du corps.',
    image: pierresImage,
    imageAlt: 'Pierres chaudes, bougies et bols dorés',
    icon: massagePierresChaudesIcon,
  },
  {
    id: 'joie-detre-signature',
    title: 'Joie d’Être Signature',
    description: 'Un massage intuitif et personnalisé selon vos besoins.',
    image: signatureImage,
    imageAlt: 'Huile de massage versée dans un bol doré',
    icon: massageSignatureIcon,
  },
]

export function MassageMenuSection() {
  return (
    <ServiceMenuSection
      decor={
        <>
          <DecorObject src={frangipanier} className="-left-12 top-[44%] w-28 rotate-[18deg]" />
          <DecorObject src={pierresEmpilees} className="-right-14 bottom-[18%] w-32 -rotate-12" />
        </>
      }
      id="carte-des-massages"
      accent="massages"
      items={massages}
      imageWidth={1727}
      imageHeight={911}
      imageClassName="aspect-[1.9/1]"
    />
  )
}

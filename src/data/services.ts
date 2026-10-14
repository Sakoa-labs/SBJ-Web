// Catalogue of every bookable service, shared by the menu cards and the detail pages.
// Durations, prices and promotions mirror the Booksy listing (business 12322) as of
// October 2026: update them here when they change on Booksy.

import californienImage from '../../design/massage/massages/californien.png'
import etoileImage from '../../design/massage/massages/etoile.png'
import cranienImage from '../../design/massage/massages/cranien-visage-buste.png'
import cireBougieImage from '../../design/massage/massages/dos-cire-bougie.png'
import dosPierresImage from '../../design/massage/massages/dos-pierres-chaudes.png'
import jambesImage from '../../design/massage/massages/jambes-legeres.png'
import pierresImage from '../../design/massage/massages/pierres-chaudes.png'
import signatureImage from '../../design/massage/massages/joie-detre-signature.png'
import massagesLargeImage from '../../design/heros/massages-large-v2.png'
import massagesSmallImage from '../../design/heros/massages-small-v2.png'
import expressDetoxImage from '../../design/soins/soins/express-detox.png'
import essentielImage from '../../design/soins/soins/essentiel.png'
import precieuxImage from '../../design/soins/soins/precieux.png'
import antiAgeImage from '../../design/soins/soins/massage-anti-age-visage.png'
import soinsLargeImage from '../../design/heros/soins-large-v2.png'
import soinsSmallImage from '../../design/heros/soins-small-v2.png'
import epilationVisageImage from '../../design/epilations/epilations/visage.png'
import epilationCorpsImage from '../../design/epilations/epilations/corps.png'
import epilationMaillotImage from '../../design/epilations/epilations/maillot.png'
import epilationLargeImage from '../../design/heros/epilation-large-v2.png'
import epilationSmallImage from '../../design/heros/epilation-small-v2.png'
import maillotSimpleImage from '../../design/epilations/forfaits/maillot-simple-swim.png'
import maillotEchancreImage from '../../design/epilations/forfaits/maillot-echancre-swim.png'
import maillotIntegralImage from '../../design/epilations/forfaits/maillot-integral-swim.png'
import massageCalifornienIcon from '#/assets/card-icons/massage-californien.png'
import massageEtoileIcon from '#/assets/card-icons/massage-etoile.png'
import massageCranienIcon from '#/assets/card-icons/massage-cranien.png'
import massageCireBougieIcon from '#/assets/card-icons/massage-cire-bougie.png'
import massageDosPierresIcon from '#/assets/card-icons/massage-dos-pierres.png'
import massageJambesLegeresIcon from '#/assets/card-icons/massage-jambes-legeres.png'
import massagePierresChaudesIcon from '#/assets/card-icons/massage-pierres-chaudes.png'
import massageSignatureIcon from '#/assets/card-icons/massage-signature.png'
import soinExpressDetoxIcon from '#/assets/card-icons/soin-express-detox.png'
import soinEssentielIcon from '#/assets/card-icons/soin-essentiel.png'
import soinPrecieuxIcon from '#/assets/card-icons/soin-precieux.png'
import soinMassageVisageIcon from '#/assets/card-icons/soin-massage-visage.png'
import epilationVisageIcon from '#/assets/card-icons/epilation-visage.png'
import epilationCorpsIcon from '#/assets/card-icons/epilation-corps.png'
import epilationMaillotIcon from '#/assets/card-icons/epilation-maillot.png'

export type ServiceCategory = 'massages' | 'soins' | 'epilation'

export type ServiceImage = {
  src: string
  alt: string
}

// One bookable option. Most services have a single one; some come in several durations
// or, for waxing, in several zones.
export type ServiceVariant = {
  label: string
  minutes: number
  price: number
  // Discounted price when a promotion runs.
  promoPrice?: number
}

export type Service = {
  slug: string
  category: ServiceCategory
  // Card title on the list page.
  title: string
  // Detail page title, as two lines: upright then gold italic.
  headline: string
  accent: string
  summary: string
  hook: string
  description: string
  image: ServiceImage
  gallery: readonly [ServiceImage, ServiceImage]
  icon?: string
  variants: ReadonlyArray<ServiceVariant>
  // Promotion label shown on the booking box, e.g. "-15 %".
  promotion?: string
  // Only used by the waxing package cards.
  group?: 'forfait'
}

const promo15 = (price: number) => Math.round(price * 85) / 100

const massageGallery = [
  { src: massagesLargeImage, alt: 'Femme détendue recevant un massage du dos et des épaules' },
  { src: massagesSmallImage, alt: 'Pierres de massage, huile, serviette roulée et fleur de frangipanier' },
] as const

const soinsGallery = [
  { src: soinsLargeImage, alt: 'Masque à l’argile verte appliqué au pinceau pendant un soin du visage' },
  { src: soinsSmallImage, alt: 'Sérum, crème, argile verte et pinceau à masque sur un plateau en bois' },
] as const

const epilationGallery = [
  { src: epilationLargeImage, alt: 'Cire dorée appliquée à la spatule sur la jambe' },
  { src: epilationSmallImage, alt: 'Bol de cire dorée, spatules en bois et fleur de frangipanier' },
] as const

const variant = (label: string, minutes: number, price: number): ServiceVariant => ({
  label,
  minutes,
  price,
  promoPrice: promo15(price),
})

export const services: ReadonlyArray<Service> = [
  // Massages
  {
    slug: 'californien',
    category: 'massages',
    title: 'Californien',
    headline: 'Massage californien',
    accent: 'doux & enveloppant',
    summary: 'Un massage doux et enveloppant.',
    hook: 'Pour le stress, le sommeil agité et le mental qui ne s’arrête jamais.',
    description:
      'Des gestes lents et enveloppants qui relâchent les tensions en douceur et apaisent le système nerveux. Résultat : un calme retrouvé et une vraie pause pour lâcher prise.',
    image: { src: californienImage, alt: 'Serviettes roulées, huile de massage et fleurs de frangipanier' },
    gallery: massageGallery,
    icon: massageCalifornienIcon,
    promotion: '-15 %',
    variants: [
      variant('Face arrière', 30, 55),
      variant('Face arrière', 45, 69),
      variant('Corps entier', 60, 85),
      variant('Corps entier', 75, 95),
    ],
  },
  {
    slug: 'etoile',
    category: 'massages',
    title: 'Étoile',
    headline: 'Massage étoile',
    accent: 'en restant habillé',
    summary: 'Pieds, mains, visage et cuir chevelu, en restant habillé.',
    hook: 'Une parenthèse de douceur pour ralentir et se reconnecter à soi.',
    description:
      'Vous restez habillé(e) pendant toute la séance : massage des pieds aux genoux, des mains aux coudes, puis du buste, du visage et du cuir chevelu.',
    image: { src: etoileImage, alt: 'Mains massant délicatement un pied' },
    gallery: massageGallery,
    icon: massageEtoileIcon,
    promotion: '-15 %',
    variants: [variant('Massage étoile', 60, 69)],
  },
  {
    slug: 'cranien-visage-buste',
    category: 'massages',
    title: 'Crânien, visage & buste',
    headline: 'Massage crânien',
    accent: 'visage & buste',
    summary: 'Un massage du haut du corps.',
    hook: 'Pour la tête pleine et les pensées qui ne s’arrêtent pas.',
    description:
      'Un massage du cuir chevelu, du visage et du buste qui dénoue les tensions du haut du corps. Résultat : un esprit apaisé, un visage drainé et une clarté retrouvée.',
    image: { src: cranienImage, alt: 'Femme détendue recevant un massage crânien' },
    gallery: massageGallery,
    icon: massageCranienIcon,
    promotion: '-15 %',
    variants: [variant('Visage, crâne et nuque', 40, 65)],
  },
  {
    slug: 'dos-cire-bougie',
    category: 'massages',
    title: 'Dos à la cire de bougie',
    headline: 'Massage du dos',
    accent: 'à la cire de bougie',
    summary: 'Une huile de bougie tiède pour le dos, la nuque et les épaules.',
    hook: 'La chaleur d’une bougie de massage pour un pur moment de lâcher-prise.',
    description:
      'La bougie fond en une huile tiède et nourrissante, longuement travaillée sur le dos, la nuque et les épaules. La chaleur détend les tensions et la peau ressort nourrie.',
    image: { src: cireBougieImage, alt: 'Bougie de massage allumée dans une coupe dorée' },
    gallery: massageGallery,
    icon: massageCireBougieIcon,
    promotion: '-15 %',
    variants: [variant('Dos, nuque et épaules', 30, 59)],
  },
  {
    slug: 'dos-pierres-chaudes',
    category: 'massages',
    title: 'Dos aux pierres chaudes',
    headline: 'Massage du dos',
    accent: 'aux pierres chaudes',
    summary: 'Un soin ciblé sur les tensions du dos.',
    hook: 'Pour le dos noué, la nuque raide et les tensions accumulées.',
    description:
      'Un massage ciblé du dos, des bras, de la nuque et du cuir chevelu, qui libère les points les plus crispés. Résultat : un dos allégé, plus souple et délesté de ses tensions.',
    image: { src: dosPierresImage, alt: 'Pierres chaudes posées sur une serviette avec des fleurs de frangipanier' },
    gallery: massageGallery,
    icon: massageDosPierresIcon,
    promotion: '-15 %',
    variants: [variant('Dos, bras, nuque et cuir chevelu', 30, 59)],
  },
  {
    slug: 'jambes-legeres',
    category: 'massages',
    title: 'Jambes légères',
    headline: 'Massage',
    accent: 'jambes légères',
    summary: 'Des mouvements drainants de la cheville à la cuisse.',
    hook: 'Pour les jambes lourdes et gonflées.',
    description:
      'Des mouvements drainants qui relancent la circulation de la cheville jusqu’à la cuisse. Résultat : des jambes plus légères, soulagées, comme délestées d’un poids.',
    image: { src: jambesImage, alt: 'Mains réalisant un massage drainant des jambes' },
    gallery: massageGallery,
    icon: massageJambesLegeresIcon,
    promotion: '-15 %',
    variants: [variant('Jambes', 30, 55)],
  },
  {
    slug: 'pierres-chaudes',
    category: 'massages',
    title: 'Pierres chaudes',
    headline: 'Massage',
    accent: 'aux pierres chaudes',
    summary: 'La chaleur des pierres associée au massage du corps.',
    hook: 'Une parenthèse profondément réconfortante.',
    description:
      'La chaleur des pierres glisse sur le corps, dénoue les tensions et invite à un lâcher-prise total.',
    image: { src: pierresImage, alt: 'Pierres chaudes, bougies et bols dorés' },
    gallery: massageGallery,
    icon: massagePierresChaudesIcon,
    promotion: '-15 %',
    variants: [variant('Une face', 45, 75), variant('Corps entier', 120, 179)],
  },
  {
    slug: 'joie-detre-signature',
    category: 'massages',
    title: 'Joie d’Être Signature',
    headline: 'Joie d’Être',
    accent: 'signature sur-mesure',
    summary: 'Un massage intuitif et personnalisé selon vos besoins.',
    hook: 'La spécialité de Sabrina : un massage pensé uniquement pour vous.',
    description:
      'Un massage intuitif et sensitif, entièrement adapté à vos besoins du moment : pression, zones et rythme sur mesure. Idéal si votre corps réclame une vraie coupure.',
    image: { src: signatureImage, alt: 'Huile de massage versée dans un bol doré' },
    gallery: massageGallery,
    icon: massageSignatureIcon,
    promotion: '-15 %',
    variants: [variant('Face arrière', 45, 75), variant('Corps entier', 120, 179)],
  },

  // Soins visage
  {
    slug: 'express-detox',
    category: 'soins',
    title: 'L’Express Détox',
    headline: 'L’Express Détox',
    accent: 'coup d’éclat',
    summary: 'Un coup d’éclat pour tous les types de peau.',
    hook: 'Pour tous les types de peau, avant un événement ou pendant une pause.',
    description:
      'En 40 minutes, ce soin détoxifie, nettoie, hydrate, repulpe et ravive le teint. Résultat : un visage lumineux, repulpé et revitalisé.',
    image: { src: expressDetoxImage, alt: 'Visage nettoyé délicatement avec une serviette chaude' },
    gallery: soinsGallery,
    icon: soinExpressDetoxIcon,
    promotion: '-15 %',
    variants: [variant('Coup d’éclat express', 40, 55)],
  },
  {
    slug: 'essentiel',
    category: 'soins',
    title: 'L’Essentiel',
    headline: 'L’Essentiel',
    accent: 'soin purifiant',
    summary: 'Un soin purifiant pour les peaux mixtes ou grasses.',
    hook: 'Pour les peaux mixtes à grasses, brillances et imperfections.',
    description:
      'Un soin qui purifie en profondeur, désincruste et resserre le grain de peau, avec vapozone et extraction des comédons. Résultat : une peau nettoyée et un teint frais.',
    image: { src: essentielImage, alt: 'Masque à l’argile appliqué au pinceau sur le visage' },
    gallery: soinsGallery,
    icon: soinEssentielIcon,
    variants: [{ label: 'Soin purifiant', minutes: 75, price: 89 }],
  },
  {
    slug: 'precieux',
    category: 'soins',
    title: 'Le Précieux',
    headline: 'Le Précieux',
    accent: 'anti-âge signature',
    summary: 'Un soin anti-âge signature pour le visage.',
    hook: 'Une parenthèse précieuse pour un visage lumineux et reposé.',
    description:
      'Un soin visage raffiné et complet, pensé pour lisser, repulper et raviver l’éclat de la peau. Résultat : des traits visiblement plus jeunes.',
    image: { src: precieuxImage, alt: 'Crème de soin appliquée sur la pommette' },
    gallery: soinsGallery,
    icon: soinPrecieuxIcon,
    promotion: '-15 %',
    variants: [variant('Le Précieux', 75, 95), variant('Le Précieux, version longue', 120, 160)],
  },
  {
    slug: 'massage-anti-age-visage',
    category: 'soins',
    title: 'Massage anti-âge du visage',
    headline: 'Massage du visage',
    accent: 'anti-âge',
    summary: 'Des gestes ciblés pour détendre les traits.',
    hook: 'Pour des traits détendus et une peau pleine de vitalité.',
    description:
      'Quarante minutes de gestes précis pour lisser les traits, stimuler l’éclat et redonner de la vitalité à la peau. Résultat : un visage détendu, lumineux et visiblement plus jeune.',
    image: { src: antiAgeImage, alt: 'Mains massant le visage d’une femme détendue' },
    gallery: soinsGallery,
    icon: soinMassageVisageIcon,
    promotion: '-15 %',
    variants: [variant('Massage du visage', 40, 65)],
  },

  // Épilation, par zone
  {
    slug: 'epilation-visage',
    category: 'epilation',
    title: 'Visage',
    headline: 'Épilation',
    accent: 'du visage',
    summary: 'Des contours nets et soignés.',
    hook: 'Un regard structuré et un visage net, à la cire.',
    description:
      'Sourcils redessinés selon la forme de votre visage, lèvre et menton nets, ou le visage complet avec les joues en une seule séance.',
    image: { src: epilationVisageImage, alt: 'Cire appliquée délicatement sur le sourcil' },
    gallery: epilationGallery,
    icon: epilationVisageIcon,
    promotion: '-15 %',
    variants: [
      variant('Sourcils', 15, 10),
      variant('Lèvres', 10, 10),
      variant('Menton', 10, 10),
      variant('Visage complet', 30, 29),
    ],
  },
  {
    slug: 'epilation-corps',
    category: 'epilation',
    title: 'Corps',
    headline: 'Épilation',
    accent: 'du corps',
    summary: 'Une peau douce, zone par zone.',
    hook: 'Une peau douce et nette, zone par zone.',
    description:
      'Une épilation à la cire, rapide et soignée, pour une peau douce qui dure. Choisissez la zone, ou combinez-en plusieurs avec un forfait.',
    image: { src: epilationCorpsImage, alt: 'Cire appliquée à la spatule sur la jambe' },
    gallery: epilationGallery,
    icon: epilationCorpsIcon,
    promotion: '-15 %',
    variants: [
      variant('Aisselles', 10, 13),
      variant('Demi-bras', 15, 15),
      variant('Bras entiers', 20, 22),
      variant('Demi-jambes', 20, 20),
      variant('Cuisses', 20, 20),
      variant('Jambes entières', 30, 30),
    ],
  },
  {
    slug: 'epilation-maillot',
    category: 'epilation',
    title: 'Maillot',
    headline: 'Épilation',
    accent: 'du maillot',
    summary: 'Trois options selon vos envies.',
    hook: 'Trois tracés, selon vos envies.',
    description:
      'Une épilation à la cire précise et respectueuse, du maillot simple au semi ou intégral.',
    image: { src: epilationMaillotImage, alt: 'Bol de cire tiède et spatule posés sur une serviette' },
    gallery: epilationGallery,
    icon: epilationMaillotIcon,
    promotion: '-15 %',
    variants: [
      variant('Maillot simple', 15, 15),
      variant('Maillot échancré', 20, 20),
      variant('Maillot semi ou intégral', 30, 30),
    ],
  },

  // Épilation, forfaits
  {
    slug: 'forfait-maillot-simple',
    category: 'epilation',
    group: 'forfait',
    title: 'Maillot simple',
    headline: 'Forfait',
    accent: 'maillot simple',
    summary: 'Les contours du maillot, complétés par quatre zones de votre choix.',
    hook: 'Le maillot simple et quatre zones au choix.',
    description:
      'Par exemple : maillot simple, sourcils, aisselles et jambes entières. Les jambes entières et les bras entiers comptent chacun pour deux zones.',
    image: { src: maillotSimpleImage, alt: 'Bas de maillot classique posé sur une serviette, à côté d’un bol de cire' },
    gallery: epilationGallery,
    promotion: '-15 %',
    variants: [variant('Maillot simple + 4 zones', 60, 60)],
  },
  {
    slug: 'forfait-maillot-echancre',
    category: 'epilation',
    group: 'forfait',
    title: 'Maillot échancré',
    headline: 'Forfait',
    accent: 'maillot échancré',
    summary: 'Un maillot plus échancré, associé à quatre zones de votre choix.',
    hook: 'Le maillot échancré et quatre zones au choix.',
    description:
      'Par exemple : maillot échancré, sourcils, aisselles et jambes entières. Les jambes entières et les bras entiers comptent chacun pour deux zones.',
    image: { src: maillotEchancreImage, alt: 'Bas de maillot échancré posé sur une serviette, à côté d’un bol de cire' },
    gallery: epilationGallery,
    promotion: '-15 %',
    variants: [variant('Maillot échancré + 4 zones', 70, 65)],
  },
  {
    slug: 'forfait-maillot-semi-integral',
    category: 'epilation',
    group: 'forfait',
    title: 'Maillot semi ou intégral',
    headline: 'Forfait',
    accent: 'maillot semi ou intégral',
    summary: 'La formule semi ou intégrale, avec quatre zones de votre choix.',
    hook: 'Le maillot semi ou intégral et quatre zones au choix.',
    description:
      'Par exemple : maillot semi ou intégral, sourcils, aisselles et jambes entières. Les jambes entières et les bras entiers comptent chacun pour deux zones.',
    image: { src: maillotIntegralImage, alt: 'Bas de maillot brésilien posé sur une serviette, à côté d’un bol de cire' },
    gallery: epilationGallery,
    promotion: '-15 %',
    variants: [variant('Maillot semi ou intégral + 4 zones', 80, 70)],
  },
]

export const categoryInfo: Record<
  ServiceCategory,
  { label: string; path: '/massages' | '/soins' | '/epilation'; bookLabel: string }
> = {
  massages: { label: 'Massages', path: '/massages', bookLabel: 'Réserver ce massage' },
  soins: { label: 'Soins visage', path: '/soins', bookLabel: 'Réserver ce soin' },
  epilation: { label: 'Épilation', path: '/epilation', bookLabel: 'Réserver cette épilation' },
}

export function servicesIn(category: ServiceCategory, group?: 'forfait') {
  return services.filter((service) => service.category === category && service.group === group)
}

export function findService(category: ServiceCategory, slug: string) {
  return services.find((service) => service.category === category && service.slug === slug)
}

export function serviceHref(service: Service) {
  return `${categoryInfo[service.category].path}/${service.slug}`
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value)
}

export function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  return rest ? `${hours} h ${String(rest).padStart(2, '0')}` : `${hours} h`
}

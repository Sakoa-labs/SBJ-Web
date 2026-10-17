import guideMassageImage from '../../design/guides/guide-massage.png'
import guidePratiqueImage from '../../design/guides/guide-pratique.png'
import guideVisageImage from '../../design/guides/guide-visage.png'
import massageMainImage from '../../design/guides/detail/massage-principale.png'
import massagePagesImage from '../../design/guides/detail/massage-pages.png'
import massageTabletImage from '../../design/guides/detail/massage-tablette.png'
import visageMainImage from '../../design/guides/detail/visage-principale.png'
import visagePagesImage from '../../design/guides/detail/visage-pages.png'
import visageTabletImage from '../../design/guides/detail/visage-tablette.png'
import pratiqueMainImage from '../../design/guides/detail/pratique-principale.png'
import pratiquePagesImage from '../../design/guides/detail/pratique-pages.png'
import pratiqueTabletImage from '../../design/guides/detail/pratique-tablette.png'

// Sabrina's e-books, sold as illustrated PDFs.
// Prices, page counts and chapters are placeholders until Sabrina confirms them.

export type GuideImage = {
  src: string
  alt: string
}

export type Guide = {
  slug: string
  title: string
  subtitle: string
  price: number
  image: string
  imageAlt: string
  // Gold italic words after the title on the detail page.
  accent: string
  description: string
  pages: number
  chapters: ReadonlyArray<string>
  // Detail page gallery: one large photo and two thumbnails.
  photo: GuideImage
  gallery: readonly [GuideImage, GuideImage]
}

export const guides: ReadonlyArray<Guide> = [
  {
    slug: 'guide-du-massage-relaxant',
    title: 'Guide du massage relaxant',
    subtitle: 'Techniques essentielles pour le corps entier',
    price: 24,
    image: guideMassageImage,
    imageAlt: 'Le guide du massage relaxant posé sur un bloc de pierre, à côté d’une bougie',
    accent: 'pas à pas',
    description:
      'Les gestes de Sabrina expliqués simplement, avec des photos à chaque étape, pour offrir un vrai massage relaxant à vos proches.',
    pages: 64,
    chapters: [
      'Préparer l’espace et l’ambiance',
      'Les huiles et leur usage',
      'La bonne posture du praticien',
      'Effleurages et pétrissages',
      'Le protocole complet du dos',
      'Les jambes, les bras et la nuque',
    ],
    photo: {
      src: massageMainImage,
      alt: 'Le guide du massage relaxant posé sur une console en bois, entre une bougie et une serviette roulée',
    },
    gallery: [
      {
        src: massagePagesImage,
        alt: 'Le guide ouvert sur une double page d’effleurages du dos, illustrée de photos',
      },
      {
        src: massageTabletImage,
        alt: 'La couverture du guide affichée sur une tablette',
      },
    ],
  },
  {
    slug: 'rituels-visage-et-bien-etre',
    title: 'Rituels visage & bien-être',
    subtitle: 'Auto-massages et soins pour rayonner au quotidien',
    price: 19,
    image: guideVisageImage,
    imageAlt: 'Le guide Rituels visage et bien-être posé sur un bloc de pierre, à côté d’une bougie',
    accent: 'au quotidien',
    description:
      'Des rituels courts et des auto-massages du visage à refaire chez vous, matin et soir, pour un teint reposé et un vrai moment pour soi.',
    pages: 48,
    chapters: [
      'Connaître sa peau',
      'Le rituel du matin',
      'Les gestes anti-fatigue',
      'Le rituel du soir',
      'Masques et soins maison',
      'Le massage du cuir chevelu',
    ],
    photo: {
      src: visageMainImage,
      alt: 'Le guide Rituels visage et bien-être posé sur une console en bois, entre une bougie et une serviette roulée',
    },
    gallery: [
      {
        src: visagePagesImage,
        alt: 'Le guide ouvert sur la double page du rituel du matin, illustrée de photos',
      },
      {
        src: visageTabletImage,
        alt: 'La couverture du guide affichée sur une tablette',
      },
    ],
  },
  {
    slug: 'debuter-sa-pratique-avec-confiance',
    title: 'Débuter sa pratique avec confiance',
    subtitle: 'Bases, posture et protocoles pour bien commencer',
    price: 29,
    image: guidePratiqueImage,
    imageAlt: 'Le guide Débuter sa pratique avec confiance posé sur un bloc de pierre',
    accent: 'étape par étape',
    description:
      'Tout ce que Sabrina aurait aimé savoir à ses débuts : installer sa cabine, accueillir ses clients et dérouler ses premiers protocoles sereinement.',
    pages: 72,
    chapters: [
      'Installer son espace de soin',
      'Accueillir et écouter le client',
      'La posture et la respiration',
      'Les protocoles de base',
      'Hygiène et contre-indications',
      'Fixer ses tarifs et se lancer',
    ],
    photo: {
      src: pratiqueMainImage,
      alt: 'Le guide Débuter sa pratique avec confiance posé sur une console en bois, entre une bougie et une serviette roulée',
    },
    gallery: [
      {
        src: pratiquePagesImage,
        alt: 'Le guide ouvert sur la double page consacrée à la posture, avec le conseil de Sabrina',
      },
      {
        src: pratiqueTabletImage,
        alt: 'La couverture du guide affichée sur une tablette',
      },
    ],
  },
]

// The three guides bought together.
export const guidesBundle = {
  price: 59,
  separatePrice: guides.reduce((total, guide) => total + guide.price, 0),
}

export function findGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug)
}

export function guideHref(guide: Guide) {
  return `/guides/${guide.slug}`
}

export function formatEuros(amount: number) {
  return `${amount} €`
}

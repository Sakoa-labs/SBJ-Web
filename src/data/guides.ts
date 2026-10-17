import guideMassageImage from '../../design/guides/guide-massage.png'
import guidePratiqueImage from '../../design/guides/guide-pratique.png'
import guideVisageImage from '../../design/guides/guide-visage.png'

// Sabrina's e-books, sold as illustrated PDFs.
// Prices, page counts and the "new" badge are placeholders until Sabrina confirms them.

export type GuideCategory = 'Massage' | 'Visage' | 'Pratique pro'

export type Guide = {
  slug: string
  title: string
  subtitle: string
  category: GuideCategory
  pages: number
  price: number
  image: string
  imageAlt: string
  isNew?: boolean
}

export const guideCategories: ReadonlyArray<GuideCategory> = ['Massage', 'Visage', 'Pratique pro']

export const guides: ReadonlyArray<Guide> = [
  {
    slug: 'guide-du-massage-relaxant',
    title: 'Guide du massage relaxant',
    subtitle: 'Techniques essentielles pour le corps entier',
    category: 'Massage',
    pages: 60,
    price: 24,
    image: guideMassageImage,
    imageAlt: 'Le guide du massage relaxant posé sur un socle en pierre, à côté d’une bougie',
  },
  {
    slug: 'rituels-visage-et-bien-etre',
    title: 'Rituels visage & bien-être',
    subtitle: 'Auto-massages et soins pour rayonner au quotidien',
    category: 'Visage',
    pages: 60,
    price: 19,
    image: guideVisageImage,
    imageAlt: 'Le guide Rituels visage et bien-être posé sur un socle en pierre, à côté d’une bougie',
    isNew: true,
  },
  {
    slug: 'debuter-sa-pratique-avec-confiance',
    title: 'Débuter sa pratique avec confiance',
    subtitle: 'Bases, posture et protocoles pour bien commencer',
    category: 'Pratique pro',
    pages: 60,
    price: 29,
    image: guidePratiqueImage,
    imageAlt: 'Le guide Débuter sa pratique avec confiance posé sur un socle en pierre',
  },
]

// The three guides bought together.
export const guidesBundle = {
  price: 59,
  separatePrice: guides.reduce((total, guide) => total + guide.price, 0),
}

export function formatEuros(amount: number) {
  return `${amount} €`
}

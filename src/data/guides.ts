// Sabrina's e-books, sold as illustrated PDFs.
// Edited in Sanity (Guides) and downloaded at build time by scripts/pull-content.ts.
// Prices, page counts and chapters are placeholders until Sabrina confirms them.

import content from '#/content/content.json'

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

// The shape is checked by scripts/pull-content.ts; JSON types cannot express the two-photo gallery.
export const guides = content.guides as unknown as ReadonlyArray<Guide>

type GuidesBundle = {
  title: string
  accent: string
  subtitle: string
  description: string
  price: number
  // Cropped to the 4:3 of the guide cards.
  cardImage: string
  photo: GuideImage
  gallery: readonly [GuideImage, GuideImage]
}

// The three guides bought together.
export const guidesBundle = {
  ...(content.guidesBundle as unknown as GuidesBundle),
  separatePrice: guides.reduce((total, guide) => total + guide.price, 0),
  pages: guides.reduce((total, guide) => total + guide.pages, 0),
  href: '/guides/coffret' as const,
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

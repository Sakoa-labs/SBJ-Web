// The Formation and Guides pages and the labels of the guide detail pages, edited in Sanity
// (Pages › Formation, Mes guides and Pages détail des guides).

import content from '#/content/content.json'
import type { FaqItem, Photo, Section } from '#/data/pages/types'

// Top of the Formation and Guides pages, shown by ServiceHero.
export type LearningHeroContent = {
  title: string
  accent: string
  intro: string
  primaryButton: string
  secondaryButton: string
  largePhoto: Photo
  squarePhotos: readonly [Photo, Photo, Photo]
}

export type FormationPathContent = {
  eyebrow: string
  title: string
  steps: ReadonlyArray<{ _key: string; title: string; format: string; description: string; photo: Photo }>
}

export type FormationFormatsContent = {
  // Each half keeps its colours and link through its key.
  formats: ReadonlyArray<{
    _key: string
    key: 'presentiel' | 'en-ligne'
    title: string
    points: ReadonlyArray<string>
    button: string
    photo: Photo
  }>
}

export type FormationReviewsContent = {
  eyebrow: string
  title: string
  testimonials: ReadonlyArray<{ _key: string; name: string; service: string; text: string }>
}

export type FormationFaqContent = {
  title: string
  intro: string
  questions: ReadonlyArray<FaqItem>
  photo: Photo
}

export type FormationClosingContent = {
  eyebrow: string
  title: string
  text: string
  button: string
}

export type FormationSection =
  | Section<'formationPath', FormationPathContent>
  | Section<'formationFormats', FormationFormatsContent>
  | Section<'formationReviews', FormationReviewsContent>
  | Section<'formationFaq', FormationFaqContent>
  | Section<'formationClosing', FormationClosingContent>

export type GuidesCollectionContent = {
  eyebrow: string
  title: string
  cardButton: string
}

export type GuidesBundleSectionContent = {
  title: string
  text: string
  button: string
}

export type GuidesAuthorContent = {
  quote: string
  caption: string
  button: string
  photo: Photo
}

export type GuidesSection =
  | Section<'guidesCollection', GuidesCollectionContent>
  | Section<'guidesBundleSection', GuidesBundleSectionContent>
  | Section<'guidesAuthor', GuidesAuthorContent>

export type GuideDetailLabels = {
  breadcrumb: string
  readingLabel: string
  readingValue: string
  deliveryLabel: string
  deliveryValue: string
  paymentNote: string
  chaptersEyebrow: string
  chaptersTitle: string
  cardButton: string
  guideFormatLabel: string
  // {pages} is replaced by the page count.
  guideFormatValue: string
  guideBuyButton: string
  guideGiftButton: string
  relatedEyebrow: string
  relatedTitle: string
  relatedAccent: string
  bundleFormatLabel: string
  // {guides} and {pages} are replaced by the number of guides and the total page count.
  bundleFormatValue: string
  // {economie} is replaced by the saving.
  bundlePriceNote: string
  bundleBuyButton: string
  bundleGiftButton: string
  bundleGuidesEyebrow: string
  bundleGuidesTitle: string
  bundleGuidesAccent: string
}

// The shape is checked in the Studio; JSON types cannot tell the sections apart.
const pages = content.pages as Record<string, unknown>

export const formationPage = pages.formation as {
  hero: LearningHeroContent
  sections: ReadonlyArray<FormationSection>
}

export const guidesPage = pages.guides as {
  hero: LearningHeroContent
  sections: ReadonlyArray<GuidesSection>
}

export const guideDetailLabels = pages['guide-detail'] as GuideDetailLabels

// Replaces the {words} of a label with their values.
export function fillLabel(label: string, values: Record<string, string | number>) {
  return label.replace(/\{(\w+)\}/g, (match, name: string) => String(values[name] ?? match))
}

// The home page texts and photos, edited in Sanity (Pages › Accueil).

import content from '#/content/content.json'
import type { Card, FaqItem, Photo, Section } from '#/data/pages/types'

export type HomeHeroContent = {
  title: string
  subtitle: string
  primaryButton: string
  secondaryButton: string
  photo: Photo
}

export type HomeFormationContent = {
  eyebrow: string
  title: string
  text: string
  button: string
  photo: Photo
  benefits: ReadonlyArray<Card>
  programs: ReadonlyArray<Card>
}

export type HomeGuidesContent = {
  eyebrow: string
  title: string
  text: string
  button: string
  photo: Photo
}

export type HomeServicesContent = {
  eyebrow: string
  title: string
  text: string
  // Each card keeps its link through its key: massage, soins or epilation.
  cards: ReadonlyArray<Card & { key: 'massage' | 'soins' | 'epilation'; button: string; photo: Photo }>
}

export type HomeAboutContent = {
  eyebrow: string
  title: string
  text: string
  values: ReadonlyArray<Card>
  photo: Photo
}

export type HomeFaqContent = {
  title: string
  intro: string
  questions: ReadonlyArray<FaqItem>
  photo: Photo
}

export type HomeReviewsContent = {
  eyebrow: string
  title: string
}

export type HomeClosingContent = {
  eyebrow: string
  title: string
  text: string
  primaryButton: string
  secondaryButton: string
}

export type HomeSection =
  | Section<'homeFormation', HomeFormationContent>
  | Section<'homeGuides', HomeGuidesContent>
  | Section<'homeServices', HomeServicesContent>
  | Section<'homeAbout', HomeAboutContent>
  | Section<'homeFaq', HomeFaqContent>
  | Section<'homeReviews', HomeReviewsContent>
  | Section<'homeClosing', HomeClosingContent>

export type HomePage = {
  hero: HomeHeroContent
  sections: ReadonlyArray<HomeSection>
}

// The shape is checked in the Studio; JSON types cannot tell the sections apart.
export const homePage = (content.pages as Record<string, unknown>).home as HomePage

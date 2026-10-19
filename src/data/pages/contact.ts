// Texts and photos of the contact page, the not-found page and the legal pages, edited in
// Sanity (Pages › Contact, Page introuvable, Mentions légales…).

import type { PortableTextBlock } from '@portabletext/react'

import content from '#/content/content.json'
import type { Photo, Section } from '#/data/pages/types'

// A photo that opens larger on click, with its caption.
export type CaptionedPhoto = { _key: string; photo: Photo; caption: string }

// The shape the lightbox expects: the photo with its caption.
export function withCaptions(items: ReadonlyArray<CaptionedPhoto>) {
  return items.map(({ _key, photo, caption }) => ({ ...photo, _key, caption }))
}

export type ContactHeroContent = {
  title: string
  text: string
  button: string
  note: string
  infoTitle: string
  hoursLabel: string
  addressLabel: string
  phoneLabel: string
  emailLabel: string
  paymentLabel: string
  paymentText: string
}

export type ContactFormContent = {
  formTitle: string
  nameLabel: string
  emailLabel: string
  subjectLabel: string
  subjectPlaceholder: string
  messageLabel: string
  submitButton: string
  accessTitle: string
  carTitle: string
  // {gps} stands for the Google Maps search of the contact details.
  carText: string
  mapsButton: string
  busTitle: string
  busLines: ReadonlyArray<{ _key: string; line: string; stop: string }>
  onSiteTitle: string
  arrivalSteps: ReadonlyArray<CaptionedPhoto>
}

export type ContactRoomContent = {
  eyebrow: string
  title: string
  text: string
  quote: string
  photos: ReadonlyArray<CaptionedPhoto>
}

export type ContactSection =
  | Section<'contactForm', ContactFormContent>
  | Section<'contactRoom', ContactRoomContent>

export type ContactPage = {
  hero: ContactHeroContent
  sections: ReadonlyArray<ContactSection>
}

export type NotFoundContent = {
  label: string
  title: string
  titleEnd: string
  text: string
  finderButton: string
  homeButton: string
  photo: Photo
  smallPhoto: Photo
}

export type LegalSection = {
  _key: string
  title: string
  anchor: { current: string }
  body: Array<PortableTextBlock>
}

export type LegalPageContent = {
  eyebrow: string
  title: string
  intro: string
  sections: ReadonlyArray<LegalSection>
  contactTitle: string
  contactText: string
}

// The shapes are checked in the Studio; JSON types cannot tell the sections apart.
const pages = content.pages as Record<string, unknown>

export const contactPage = pages.contact as ContactPage
export const notFoundPage = pages['not-found'] as NotFoundContent
export const legalNoticePage = pages['legal-notice'] as LegalPageContent
export const termsPage = pages.terms as LegalPageContent
export const privacyPage = pages.privacy as LegalPageContent

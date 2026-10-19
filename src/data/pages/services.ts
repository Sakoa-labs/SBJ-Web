// The Massages, Soins visage and Épilation pages, and the texts shared by every service detail
// page, edited in Sanity (Pages › Massages, Soins visage, Épilation, Pages détail des prestations).

import content from '#/content/content.json'
import type { FaqItem, Photo, Section } from '#/data/pages/types'
import type { ServiceCategory } from '#/data/services'

export type ServiceHeroContent = {
  title: string
  accent: string
  intro: string
  primaryButton: string
  secondaryButton: string
  largePhoto: Photo
  topPhoto: Photo
  middlePhoto: Photo
  bottomPhoto: Photo
}

export type ServiceMenuContent = {
  eyebrow: string
  title: string
  subtitle?: string
  // Label of the button on each card.
  button: string
}

export type ServiceFaqContent = {
  title: string
  intro: string
  questions: ReadonlyArray<FaqItem>
  photo: Photo
}

export type ServiceClosingContent = {
  eyebrow: string
  title: string
  text: string
  button: string
}

type ListPage<Prefix extends string, Extra = never> = {
  hero: ServiceHeroContent
  sections: ReadonlyArray<
    | Section<`${Prefix}Menu`, ServiceMenuContent>
    | Section<`${Prefix}Faq`, ServiceFaqContent>
    | Section<`${Prefix}Closing`, ServiceClosingContent>
    | Extra
  >
}

export type MassagesPage = ListPage<'massages'>
export type SoinsPage = ListPage<'soins'>
export type EpilationPage = ListPage<'epilation', Section<'epilationForfaits', ServiceMenuContent>>

type ServiceButtons = { book: string; gift: string }

export type ServiceDetailContent = {
  durationLabel: string
  paymentLabel: string
  paymentValue: string
  cancellationLabel: string
  cancellationValue: string
  // Followed by the promotion, e.g. "Offre du moment · -15 %".
  offerLabel: string
  optionsLabel: string
  massagesButtons: ServiceButtons
  soinsButtons: ServiceButtons
  epilationButtons: ServiceButtons
  related: { eyebrow: string; title: string; button: string }
}

// The shape is checked in the Studio; JSON types cannot tell the sections apart.
const pages = content.pages as Record<string, unknown>

export const massagesPage = pages.massages as MassagesPage
export const soinsPage = pages.soins as SoinsPage
export const epilationPage = pages.epilation as EpilationPage
export const serviceDetailPage = pages['service-detail'] as ServiceDetailContent

export function serviceButtons(category: ServiceCategory): ServiceButtons {
  return serviceDetailPage[`${category}Buttons`]
}

// Questions and answers of each page's FAQ section.
// Edited in Sanity (Pages et FAQ) and downloaded at build time by scripts/pull-content.ts.

import content from '#/content/content.json'

export type FaqQuestion = {
  question: string
  answer: string
}

export type FaqPage = 'home' | 'massages' | 'soins' | 'epilation' | 'formation'

export const faqs = content.faqs as Record<FaqPage, ReadonlyArray<FaqQuestion>>

// Real customer reviews, copied from the public Booksy and Google Maps pages.
// Edited in Sanity (Avis clients) and downloaded at build time by scripts/pull-content.ts.
// Names are shortened to the first name and the initial of the last name.

import content from '#/content/content.json'

export type ReviewSource = 'Google' | 'Booksy'

export type Review = {
  name: string
  service: string
  source: ReviewSource
  text: string
  // Booksy marks a review as verified when it comes from a real appointment; Google has no such check.
  verified?: boolean
  // Only with the customer's consent; the default avatar is shown otherwise.
  avatar?: string
}

export const reviews = content.reviews as ReadonlyArray<Review>

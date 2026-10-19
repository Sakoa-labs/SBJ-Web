// Sabrina's contact details and opening hours.
// Edited in Sanity (Coordonnées et horaires) and downloaded at build time by scripts/pull-content.ts.

import content from '#/content/content.json'

export const contact = content.contact

export const openingHours: ReadonlyArray<{ days: string; hours: string }> = content.openingHours

// The card next to every FAQ, inviting to write to Sabrina.
export const faqAside: { title: string; text: string; button: string } = content.faqAside

// Footer texts; its links stay in the code.
export const footer: {
  tagline: string
  servicesHeading: string
  learnHeading: string
  guidesHeading: string
  contactHeading: string
  copyright: string
} = content.footer

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`

// Sabrina's contact details and opening hours.
// Edited in Sanity (Coordonnées et horaires) and downloaded at build time by scripts/pull-content.ts.

import content from '#/content/content.json'

export const contact = content.contact

export const openingHours: ReadonlyArray<{ days: string; hours: string }> = content.openingHours

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`

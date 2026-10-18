// Sabrina's contact details and opening hours, as on the previous site's contact page.

export const contact = {
  email: 'sabrinajoiedetre@gmail.com',
  phone: '+262 693 45 14 30',
  phoneHref: 'tel:+262693451430',
  address: '12 C Chemin du Milieu, La Bretagne, 97490 Saint-Denis, La Réunion',
  // The same address on short lines, for the footer.
  addressLines: ['12 C Chemin du Milieu', 'La Bretagne', '97490 Saint-Denis', 'La Réunion'],
  // Search terms the old site gave for GPS apps.
  mapsQuery: 'Sabrina Joie dEtre',
}

export const openingHours = [
  { days: 'Mardi au vendredi', hours: '8 h – 17 h' },
  { days: 'Samedi', hours: '8 h – 13 h' },
  { days: 'Dimanche et lundi', hours: 'Fermé' },
] as const

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`

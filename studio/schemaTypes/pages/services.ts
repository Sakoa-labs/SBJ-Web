// Massages, Soins visage, Épilation et pages détail des prestations.

import { defineField, defineType } from 'sanity'

import { galleryField } from '../fields.ts'
import {
  buttonField,
  closingFields,
  eyebrowField,
  faqField,
  photoField,
  section,
  sectionsField,
  stringField,
  textField,
  titleField,
} from './shared.ts'
import type { PageGroup } from './types.ts'

// The top of the list pages: two-line title, introduction, two buttons and four photos.
const heroField = defineField({
  name: 'hero',
  title: 'Haut de page',
  type: 'object',
  options: { collapsible: true, collapsed: false },
  fields: [
    stringField('title', 'Titre, 1re ligne'),
    stringField('accent', 'Titre, 2e ligne en doré'),
    textField('intro', 'Introduction'),
    buttonField('primaryButton', 'Bouton doré (réservation)'),
    buttonField('secondaryButton', 'Bouton clair (vers la carte)'),
    photoField('largePhoto', 'Grande photo'),
    photoField('topPhoto', 'Petite photo du haut'),
    photoField('middlePhoto', 'Petite photo du milieu', { description: 'La seule petite photo gardée sur téléphone.' }),
    photoField('bottomPhoto', 'Petite photo du bas'),
  ],
})

// A list of services: the cards themselves come from « Prestations ».
const menuFields = (options: { subtitle?: boolean } = {}) => [
  eyebrowField(),
  titleField(),
  ...(options.subtitle ? [stringField('subtitle', 'Sous-titre')] : []),
  buttonField('button', 'Texte du bouton des cartes'),
]

const faqSection = (name: string) =>
  section(name, 'Questions fréquentes', [
    titleField(),
    textField('intro', 'Introduction'),
    faqField(),
    photoField('photo', 'Photo de l’encadré « Une autre question ? »'),
  ])

const closingSection = (name: string) =>
  section(name, 'Bandeau final', [...closingFields(), buttonField('button', 'Bouton doré (réservation)')])

const detailGallery = galleryField({
  description: 'Les deux photos affichées sur la page de chaque prestation de cette catégorie, sous la photo principale.',
})

const listPage = (name: string, title: string, sections: Parameters<typeof sectionsField>[0]) =>
  defineType({
    name,
    title,
    type: 'document',
    fields: [heroField, sectionsField(sections), detailGallery],
    preview: { prepare: () => ({ title }) },
  })

export const massagesPage = listPage('massagesPage', 'Massages', [
  section('massagesMenu', 'Carte des massages', menuFields()),
  faqSection('massagesFaq'),
  closingSection('massagesClosing'),
])

export const soinsPage = listPage('soinsPage', 'Soins visage', [
  section('soinsMenu', 'Carte des soins', menuFields()),
  faqSection('soinsFaq'),
  closingSection('soinsClosing'),
])

export const epilationPage = listPage('epilationPage', 'Épilation', [
  section('epilationMenu', 'Zones', menuFields({ subtitle: true })),
  section('epilationForfaits', 'Forfaits', menuFields({ subtitle: true })),
  faqSection('epilationFaq'),
  closingSection('epilationClosing'),
])

const buttonsField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [buttonField('book', 'Bouton « Réserver »'), buttonField('gift', 'Bouton « Offrir »')],
  })

export const serviceDetailPage = defineType({
  name: 'serviceDetailPage',
  title: 'Pages détail des prestations',
  type: 'document',
  description: 'Les textes communs à toutes les pages d’une prestation. Le contenu propre à chaque prestation se modifie dans « Prestations ».',
  fields: [
    stringField('durationLabel', 'Libellé « Durée »'),
    stringField('paymentLabel', 'Libellé « Paiement »'),
    stringField('paymentValue', 'Moyens de paiement'),
    stringField('cancellationLabel', 'Libellé « Annulation »'),
    stringField('cancellationValue', 'Conditions d’annulation'),
    stringField('offerLabel', 'Bandeau de promotion', 'Suivi du pourcentage de la promotion, ex. « Offre du moment · -15 % ».'),
    stringField('optionsLabel', 'Titre du choix de formule'),
    buttonsField('massagesButtons', 'Boutons des massages'),
    buttonsField('soinsButtons', 'Boutons des soins'),
    buttonsField('epilationButtons', 'Boutons des épilations'),
    defineField({
      name: 'related',
      title: 'Section « Vous aimerez aussi »',
      type: 'object',
      fields: [eyebrowField(), titleField(), buttonField('button', 'Texte du bouton des cartes')],
    }),
  ],
  preview: { prepare: () => ({ title: 'Pages détail des prestations' }) },
})

export const servicePages: PageGroup = {
  types: [massagesPage, soinsPage, epilationPage, serviceDetailPage],
  documents: [
    { id: 'page-massages', title: 'Massages', schemaType: 'massagesPage' },
    { id: 'page-soins', title: 'Soins visage', schemaType: 'soinsPage' },
    { id: 'page-epilation', title: 'Épilation', schemaType: 'epilationPage' },
    { id: 'page-service-detail', title: 'Pages détail des prestations', schemaType: 'serviceDetailPage' },
  ],
}

import { defineArrayMember, defineField, defineType } from 'sanity'

import { buttonField, stringField, textField, titleField } from './pages/shared.ts'

export const settings = defineType({
  name: 'settings',
  title: 'Coordonnées et horaires',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'E-mail', type: 'string', validation: (rule) => rule.required().email() }),
    defineField({
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
      description: 'Au format international, ex. « +262 693 45 14 30 ».',
      validation: (rule) =>
        rule.required().regex(/^\+[\d ]+$/, { name: 'format international' }),
    }),
    defineField({
      name: 'addressLines',
      title: 'Adresse',
      type: 'array',
      description: 'Une ligne par élément, comme dans le pied de page.',
      of: [defineArrayMember({ type: 'string' })],
      validation: (rule) => rule.required().min(2),
    }),
    defineField({
      name: 'mapsQuery',
      title: 'Recherche Google Maps',
      type: 'string',
      description: 'Ce que le lien « Itinéraire » recherche dans Google Maps.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'openingHours',
      title: 'Horaires',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'openingHours',
          title: 'Horaire',
          type: 'object',
          fields: [
            defineField({ name: 'days', title: 'Jours', type: 'string', description: 'Ex. « Mardi au vendredi ».', validation: (rule) => rule.required() }),
            defineField({ name: 'hours', title: 'Heures', type: 'string', description: 'Ex. « 8 h – 17 h » ou « Fermé ».', validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: 'days', subtitle: 'hours' } },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'faqAside',
      title: 'Encadré « Une autre question ? »',
      type: 'object',
      description: 'Affiché à côté des questions fréquentes, sur toutes les pages qui en ont.',
      fields: [titleField(), textField('text', 'Texte'), buttonField('button')],
    }),
    defineField({
      name: 'footer',
      title: 'Pied de page',
      type: 'object',
      description: 'Les liens du pied de page sont fixes ; seuls ces textes changent.',
      fields: [
        stringField('tagline', 'Phrase sous le logo'),
        stringField('servicesHeading', 'Titre de la colonne « Prestations »'),
        stringField('learnHeading', 'Titre de la colonne « Apprendre »'),
        stringField('guidesHeading', 'Titre de la colonne des guides'),
        stringField('contactHeading', 'Titre de la colonne « Contact »'),
        stringField('copyright', 'Mention en bas de page', 'Ex. « © 2026 Joie d’Être. Tous droits réservés. »'),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Coordonnées et horaires' }) },
})

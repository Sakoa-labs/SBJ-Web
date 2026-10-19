import { defineArrayMember, defineField, defineType } from 'sanity'

import { galleryField, orderField, photoField } from './fields.ts'

export const guide = defineType({
  name: 'guide',
  title: 'Guide',
  type: 'document',
  groups: [
    { name: 'texts', title: 'Textes', default: true },
    { name: 'photos', title: 'Photos' },
    { name: 'advanced', title: 'Avancé' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string', group: 'texts', validation: (rule) => rule.required() }),
    defineField({
      name: 'accent',
      title: 'Mots en doré après le titre',
      type: 'string',
      group: 'texts',
      description: 'Ex. « pas à pas ». Affichés sur la page du guide.',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'subtitle', title: 'Sous-titre', type: 'string', group: 'texts', validation: (rule) => rule.required() }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      group: 'texts',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'price', title: 'Prix (€)', type: 'number', group: 'texts', validation: (rule) => rule.required().positive() }),
    defineField({
      name: 'pages',
      title: 'Nombre de pages',
      type: 'number',
      group: 'texts',
      validation: (rule) => rule.required().integer().positive(),
    }),
    defineField({
      name: 'chapters',
      title: 'Chapitres',
      type: 'array',
      group: 'texts',
      of: [defineArrayMember({ type: 'string' })],
      validation: (rule) => rule.required().min(1),
    }),
    orderField('texts'),
    photoField('cover', 'Photo de la carte', { group: 'photos', description: 'Le guide posé sur un bloc de pierre, affiché dans la liste des guides.' }),
    photoField('photo', 'Grande photo de la page', { group: 'photos' }),
    galleryField({ group: 'photos' }),
    defineField({
      name: 'slug',
      title: 'Adresse de la page',
      type: 'slug',
      group: 'advanced',
      description: 'Fin de l’adresse web, ex. /guides/guide-du-massage-relaxant. Ne la changez pas une fois la page en ligne.',
      options: { source: 'title', maxLength: 60 },
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [{ title: 'Ordre d’affichage', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', price: 'price', media: 'cover' },
    prepare: ({ title, price, media }) => ({ title, subtitle: `${price ?? '?'} €`, media }),
  },
})

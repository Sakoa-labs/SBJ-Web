import { defineField, defineType } from 'sanity'

import { orderField } from './fields.ts'

export const review = defineType({
  name: 'review',
  title: 'Avis client',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      description: 'Prénom et initiale du nom, ex. « Audrey B. ».',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'service',
      title: 'Prestation',
      type: 'string',
      description: 'Ex. « Massage californien ».',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      options: { list: ['Google', 'Booksy'], layout: 'radio', direction: 'horizontal' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'verified',
      title: 'Avis vérifié par Booksy',
      type: 'boolean',
      initialValue: false,
      hidden: ({ document }) => document?.source !== 'Booksy',
    }),
    defineField({ name: 'text', title: 'Texte de l’avis', type: 'text', rows: 5, validation: (rule) => rule.required() }),
    defineField({
      name: 'avatar',
      title: 'Photo de la cliente',
      type: 'image',
      description: 'Uniquement avec son accord. Sans photo, un avatar par défaut est affiché.',
    }),
    orderField(),
  ],
  orderings: [{ title: 'Ordre d’affichage', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'service', media: 'avatar' } },
})

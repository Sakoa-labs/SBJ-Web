import { defineArrayMember, defineField, defineType } from 'sanity'

import { orderField, photoField } from './fields.ts'

const categories = [
  { title: 'Massages', value: 'massages' },
  { title: 'Soins visage', value: 'soins' },
  { title: 'Épilation', value: 'epilation' },
]

export const service = defineType({
  name: 'service',
  title: 'Prestation',
  type: 'document',
  groups: [
    { name: 'texts', title: 'Textes', default: true },
    { name: 'prices', title: 'Tarifs' },
    { name: 'photos', title: 'Photos' },
    { name: 'advanced', title: 'Avancé' },
  ],
  fields: [
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      group: 'texts',
      options: { list: categories, layout: 'radio', direction: 'horizontal' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'forfait',
      title: 'Forfait épilation',
      type: 'boolean',
      group: 'texts',
      description: 'Affiché dans la partie « Forfaits » de la page Épilation plutôt que dans la liste des zones.',
      initialValue: false,
      hidden: ({ document }) => document?.category !== 'epilation',
    }),
    defineField({
      name: 'title',
      title: 'Nom sur la carte',
      type: 'string',
      group: 'texts',
      description: 'Ex. « Californien ». Affiché sur la carte de la liste des prestations.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Titre de la page, 1re ligne',
      type: 'string',
      group: 'texts',
      description: 'Ex. « Massage californien ».',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'accent',
      title: 'Titre de la page, 2e ligne en doré',
      type: 'string',
      group: 'texts',
      description: 'Ex. « doux & enveloppant ».',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Résumé',
      type: 'string',
      group: 'texts',
      description: 'Une phrase courte, affichée sur la carte.',
      validation: (rule) => rule.required().max(90),
    }),
    defineField({
      name: 'hook',
      title: 'Accroche',
      type: 'string',
      group: 'texts',
      description: 'À qui s’adresse la prestation, sous le titre de la page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      group: 'texts',
      validation: (rule) => rule.required(),
    }),
    orderField('texts'),
    defineField({
      name: 'variants',
      title: 'Options et tarifs',
      type: 'array',
      group: 'prices',
      description: 'Une ligne par durée ou par zone. Gardez les mêmes prix que sur Booksy.',
      of: [
        defineArrayMember({
          name: 'variant',
          title: 'Option',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Libellé',
              type: 'string',
              description: 'Ex. « Corps entier » ou « Sourcils ».',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'minutes',
              title: 'Durée (minutes)',
              type: 'number',
              validation: (rule) => rule.required().integer().positive(),
            }),
            defineField({
              name: 'price',
              title: 'Prix (€)',
              type: 'number',
              validation: (rule) => rule.required().positive(),
            }),
            defineField({
              name: 'booksyId',
              title: 'Numéro Booksy',
              type: 'number',
              description: 'Le numéro de cette option dans Booksy : le bouton « Réserver » ouvre directement la bonne prestation. À demander en cas de doute.',
              validation: (rule) => rule.required().integer().positive(),
            }),
          ],
          preview: {
            select: { label: 'label', minutes: 'minutes', price: 'price' },
            prepare: ({ label, minutes, price }) => ({
              title: label,
              subtitle: `${minutes ?? '?'} min · ${price ?? '?'} €`,
            }),
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'promotionPercent',
      title: 'Promotion (%)',
      type: 'number',
      group: 'prices',
      description: 'Laissez vide sans promotion. Ex. 15 affiche « -15 % » et le prix remisé de chaque option.',
      validation: (rule) => rule.integer().min(1).max(90),
    }),
    photoField('image', 'Photo principale', { group: 'photos' }),
    defineField({
      name: 'icon',
      title: 'Icône de la carte',
      type: 'image',
      group: 'photos',
      description: 'Petite illustration sur fond transparent (PNG). Les forfaits épilation n’en ont pas.',
    }),
    defineField({
      name: 'slug',
      title: 'Adresse de la page',
      type: 'slug',
      group: 'advanced',
      description: 'Fin de l’adresse web, ex. /massages/californien. Ne la changez pas une fois la page en ligne : les liens déjà partagés ne marcheraient plus.',
      options: { source: 'headline', maxLength: 60 },
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [{ title: 'Ordre d’affichage', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', category: 'category', forfait: 'forfait', media: 'image' },
    prepare: ({ title, category, forfait, media }) => ({
      title,
      subtitle: `${categories.find((item) => item.value === category)?.title ?? ''}${forfait ? ' · forfait' : ''}`,
      media,
    }),
  },
})

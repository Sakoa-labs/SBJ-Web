import { defineArrayMember, defineField, defineType } from 'sanity'

import { galleryField } from './fields.ts'

// Pages whose detail pages show the shared gallery.
const galleryPages = ['page-massages', 'page-soins', 'page-epilation']

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page', type: 'string', readOnly: true }),
    defineField({
      name: 'faq',
      title: 'Questions fréquentes',
      type: 'array',
      description: 'Affichées dans l’ordre, la première est ouverte par défaut. Quatre ou cinq questions suffisent.',
      of: [
        defineArrayMember({
          name: 'faqItem',
          title: 'Question',
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'answer', title: 'Réponse', type: 'text', rows: 3, validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: 'question', subtitle: 'answer' } },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    galleryField({
      description: 'Les deux photos affichées sur la page de chaque prestation de cette catégorie, sous la photo principale.',
      hidden: ({ document }) => !galleryPages.includes(document?._id.replace(/^drafts\./, '') ?? ''),
    }),
  ],
  preview: { select: { title: 'title' } },
})

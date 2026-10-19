import { defineField, defineType } from 'sanity'

import { galleryField, photoField } from './fields.ts'

export const guidesBundle = defineType({
  name: 'guidesBundle',
  title: 'Coffret des guides',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'accent', title: 'Mot en doré après le titre', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'subtitle', title: 'Sous-titre', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: 'price',
      title: 'Prix du coffret (€)',
      type: 'number',
      description: 'Le prix des guides achetés séparément et le nombre total de pages sont calculés automatiquement.',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'cardImage',
      title: 'Photo de la carte',
      type: 'image',
      description: 'Au format 4:3, comme les photos des guides dans la liste.',
      validation: (rule) => rule.required(),
    }),
    photoField('photo', 'Grande photo de la page'),
    galleryField(),
  ],
  preview: { prepare: () => ({ title: 'Coffret des guides' }) },
})

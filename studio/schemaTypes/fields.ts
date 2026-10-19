import { defineArrayMember, defineField } from 'sanity'
import type { ConditionalProperty } from 'sanity'

// A photo with its description for screen readers and search engines.
export function photoField(name: string, title: string, options: { description?: string; group?: string } = {}) {
  return defineField({
    name,
    title,
    type: 'image',
    ...options,
    validation: (rule) => rule.required(),
    fields: [
      defineField({
        name: 'alt',
        title: 'Description de la photo',
        type: 'string',
        description: 'Ce que montre la photo, en une phrase. Lue aux personnes malvoyantes et utile au référencement.',
        validation: (rule) => rule.required(),
      }),
    ],
  })
}

// The two photos under the large one on detail pages.
export function galleryField(
  options: { description?: string; group?: string; hidden?: ConditionalProperty } = {},
) {
  return defineField({
    name: 'gallery',
    title: 'Photos secondaires',
    type: 'array',
    ...options,
    of: [
      defineArrayMember({
        type: 'image',
        fields: [
          defineField({
            name: 'alt',
            title: 'Description de la photo',
            type: 'string',
            validation: (rule) => rule.required(),
          }),
        ],
      }),
    ],
    validation: (rule) => rule.length(2).error('Il faut exactement deux photos.'),
  })
}

export function orderField(group?: string) {
  return defineField({
    name: 'order',
    title: 'Ordre d’affichage',
    type: 'number',
    group,
    description: 'Les éléments sont affichés du plus petit au plus grand nombre (10, 20, 30…). Pour en placer un entre deux autres, choisissez un nombre intermédiaire, par exemple 15.',
    validation: (rule) => rule.required().integer(),
  })
}

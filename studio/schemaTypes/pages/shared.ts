// Building blocks of the page documents: every page has its own document whose fields
// mirror the texts and photos of its sections. Layout and decorations stay in the code.

import { defineArrayMember, defineField } from 'sanity'
import type { FieldDefinition } from 'sanity'

export { photoField } from '../fields.ts'

export const titleHelp =
  'Mettez entre *astérisques* les mots en doré. Chaque retour à la ligne commence une nouvelle ligne du titre.'

// A title that may span several lines, with gold italic words between asterisks.
export function titleField(name = 'title', title = 'Titre', description?: string) {
  return defineField({
    name,
    title,
    type: 'text',
    rows: 3,
    description: description ? `${description} ${titleHelp}` : titleHelp,
    validation: (rule) => rule.required(),
  })
}

export function stringField(name: string, title: string, description?: string) {
  return defineField({ name, title, type: 'string', description, validation: (rule) => rule.required() })
}

export function textField(name: string, title: string, description?: string) {
  return defineField({ name, title, type: 'text', rows: 3, description, validation: (rule) => rule.required() })
}

// Small label above a section title, between the lotus and the gold divider.
export function eyebrowField(name = 'eyebrow') {
  return stringField(name, 'Surtitre', 'Petit texte en capitales au-dessus du titre.')
}

export function buttonField(name: string, title = 'Texte du bouton') {
  return stringField(name, title, 'Le lien du bouton est fixe ; seul son texte change.')
}

// A small illustration on a transparent background, purely decorative.
export function iconField(name = 'icon', title = 'Icône') {
  return defineField({
    name,
    title,
    type: 'image',
    description: 'Petite illustration sur fond transparent (PNG carré).',
    validation: (rule) => rule.required(),
  })
}

// A fixed-length list of cards (benefits, values, steps…): items can be edited and reordered.
export function cardsField(name: string, title: string, fields: Array<FieldDefinition>, count: number) {
  return defineField({
    name,
    title,
    type: 'array',
    description: `${count} éléments, à réordonner par glisser-déposer.`,
    of: [
      defineArrayMember({
        type: 'object',
        name: 'card',
        fields,
        preview: { select: { title: 'title', media: 'icon' } },
      }),
    ],
    options: { disableActions: ['add', 'remove', 'duplicate', 'copy'] },
    validation: (rule) => rule.required().length(count),
  })
}

export const hiddenField = defineField({
  name: 'hidden',
  title: 'Masquer cette section',
  type: 'boolean',
  description: 'La section disparaît du site sans perdre son contenu.',
  initialValue: false,
})

// One section of a page: its texts and photos, plus the option to hide it.
export function section(name: string, title: string, fields: Array<FieldDefinition>) {
  return defineArrayMember({
    type: 'object',
    name,
    title,
    fields: [hiddenField, ...fields],
    preview: {
      select: { hidden: 'hidden' },
      prepare: ({ hidden }) => ({ title, subtitle: hidden ? 'Masquée' : undefined }),
    },
  })
}

// The sections of a page below its hero: each appears once, in the order chosen by drag and drop.
export function sectionsField(sections: Array<ReturnType<typeof section>>) {
  const names = sections.map((item) => item.name as string)
  return defineField({
    name: 'sections',
    title: 'Sections',
    type: 'array',
    description: 'Glissez les sections pour changer leur ordre sur la page. Ouvrez-en une pour modifier ses textes et ses photos.',
    of: sections,
    options: { disableActions: ['add', 'remove', 'duplicate', 'copy'] },
    validation: (rule) =>
      rule.custom((items: Array<{ _type: string }> | undefined) => {
        const types = (items ?? []).map((item) => item._type)
        const missing = names.filter((name) => !types.includes(name))
        const repeated = types.filter((type, index) => types.indexOf(type) !== index)
        if (missing.length || repeated.length) return 'Chaque section doit apparaître une seule fois.'
        return true
      }),
  })
}

export function faqField(name = 'questions') {
  return defineField({
    name,
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
  })
}

// The closing band in dark green at the bottom of a page.
export function closingFields() {
  return [
    eyebrowField(),
    titleField(),
    textField('text', 'Texte', 'Un retour à la ligne n’est appliqué que sur ordinateur.'),
  ]
}

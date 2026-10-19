// Formation, Guides et pages détail des guides.

import { defineArrayMember, defineField, defineType } from 'sanity'

import {
  buttonField,
  cardsField,
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

// Top of the Formation and Guides pages: a title in two parts, a large photo and three small ones.
function heroField() {
  return defineField({
    name: 'hero',
    title: 'Haut de page',
    type: 'object',
    options: { collapsible: true, collapsed: false },
    fields: [
      stringField('title', 'Titre'),
      stringField('accent', 'Suite du titre en doré', 'Affichée sous le titre, en italique doré.'),
      textField('intro', 'Introduction'),
      buttonField('primaryButton', 'Bouton doré'),
      buttonField('secondaryButton', 'Bouton clair'),
      photoField('largePhoto', 'Grande photo'),
      defineField({
        name: 'squarePhotos',
        title: 'Petites photos',
        type: 'array',
        description: 'Trois photos carrées, à réordonner par glisser-déposer.',
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
        options: { disableActions: ['add', 'remove', 'duplicate', 'copy'] },
        validation: (rule) => rule.required().length(3),
      }),
    ],
  })
}

export const formationPage = defineType({
  name: 'formationPage',
  title: 'Formation',
  type: 'document',
  fields: [
    heroField(),
    sectionsField([
      section('formationPath', 'Le parcours', [
        eyebrowField(),
        titleField(),
        cardsField(
          'steps',
          'Étapes',
          [
            stringField('title', 'Titre'),
            stringField('format', 'Formule', 'Petit texte doré en capitales sous le titre.'),
            textField('description', 'Texte'),
            photoField('photo', 'Photo'),
          ],
          4,
        ),
      ]),
      section('formationFormats', 'En présentiel ou en ligne', [
        cardsField(
          'formats',
          'Formules',
          [
            defineField({ name: 'key', type: 'string', hidden: true, readOnly: true }),
            stringField('title', 'Titre'),
            defineField({
              name: 'points',
              title: 'Points forts',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
              validation: (rule) => rule.required().min(1),
            }),
            buttonField('button'),
            photoField('photo', 'Photo'),
          ],
          2,
        ),
      ]),
      section('formationReviews', 'Témoignages', [
        eyebrowField(),
        titleField(),
        defineField({
          name: 'testimonials',
          title: 'Témoignages d’élèves',
          type: 'array',
          description: 'Au moins six, pour que le bandeau défile sans vide sur grand écran.',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'testimonial',
              fields: [
                stringField('name', 'Prénom'),
                stringField('service', 'Formation suivie'),
                textField('text', 'Texte'),
              ],
              preview: { select: { title: 'name', subtitle: 'service' } },
            }),
          ],
          validation: (rule) => rule.required().min(6),
        }),
      ]),
      section('formationFaq', 'Questions fréquentes', [
        titleField(),
        textField('intro', 'Introduction'),
        faqField(),
        photoField('photo', 'Photo de l’encadré « Une autre question ? »'),
      ]),
      section('formationClosing', 'Bandeau final', [...closingFields(), buttonField('button')]),
    ]),
  ],
  preview: { prepare: () => ({ title: 'Formation' }) },
})

export const guidesPage = defineType({
  name: 'guidesPage',
  title: 'Mes guides',
  type: 'document',
  fields: [
    heroField(),
    sectionsField([
      section('guidesCollection', 'La collection', [
        eyebrowField(),
        titleField(undefined, undefined, 'Les guides eux-mêmes se gèrent dans « Guides ».'),
        buttonField('cardButton', 'Texte du bouton des cartes'),
      ]),
      section('guidesBundleSection', 'Le coffret', [
        titleField(undefined, undefined, 'Le prix et la photo viennent de « Coffret des guides ».'),
        textField('text', 'Texte'),
        buttonField('button'),
      ]),
      section('guidesAuthor', 'Écrits par Sabrina', [
        textField('quote', 'Citation'),
        stringField('caption', 'Légende sous la signature'),
        buttonField('button'),
        photoField('photo', 'Portrait de Sabrina'),
      ]),
    ]),
  ],
  preview: { prepare: () => ({ title: 'Mes guides' }) },
})

const placeholders = 'Les mots entre accolades sont remplacés automatiquement : '

export const guideDetailPage = defineType({
  name: 'guideDetailPage',
  title: 'Pages détail des guides',
  type: 'document',
  groups: [
    { name: 'common', title: 'Communs', default: true },
    { name: 'guide', title: 'Guide' },
    { name: 'bundle', title: 'Coffret' },
  ],
  fields: [
    defineField({ ...stringField('breadcrumb', 'Fil d’Ariane', 'Lien de retour vers la page des guides.'), group: 'common' }),
    defineField({ ...stringField('readingLabel', 'Ligne « Lecture » : intitulé'), group: 'common' }),
    defineField({ ...stringField('readingValue', 'Ligne « Lecture » : valeur'), group: 'common' }),
    defineField({ ...stringField('deliveryLabel', 'Ligne « Livraison » : intitulé'), group: 'common' }),
    defineField({ ...stringField('deliveryValue', 'Ligne « Livraison » : valeur'), group: 'common' }),
    defineField({ ...stringField('paymentNote', 'Mention sous les boutons d’achat'), group: 'common' }),
    defineField({ ...eyebrowField('chaptersEyebrow'), title: 'Sommaire : surtitre', group: 'common' }),
    defineField({ ...titleField('chaptersTitle', 'Sommaire : titre'), group: 'common' }),
    defineField({ ...buttonField('cardButton', 'Texte du bouton des cartes'), group: 'common' }),

    defineField({ ...stringField('guideFormatLabel', 'Ligne « Format » : intitulé'), group: 'guide' }),
    defineField({
      ...stringField('guideFormatValue', 'Ligne « Format » : valeur', `${placeholders}{pages} par le nombre de pages.`),
      group: 'guide',
    }),
    defineField({ ...buttonField('guideBuyButton', 'Bouton d’achat'), group: 'guide' }),
    defineField({ ...buttonField('guideGiftButton', 'Bouton cadeau'), group: 'guide' }),
    defineField({ ...eyebrowField('relatedEyebrow'), title: 'Suggestions : surtitre', group: 'guide' }),
    defineField({ ...stringField('relatedTitle', 'Suggestions : titre'), group: 'guide' }),
    defineField({ ...stringField('relatedAccent', 'Suggestions : suite du titre en doré'), group: 'guide' }),

    defineField({ ...stringField('bundleFormatLabel', 'Ligne « Contenu » : intitulé'), group: 'bundle' }),
    defineField({
      ...stringField(
        'bundleFormatValue',
        'Ligne « Contenu » : valeur',
        `${placeholders}{guides} par le nombre de guides, {pages} par le nombre total de pages.`,
      ),
      group: 'bundle',
    }),
    defineField({
      ...stringField('bundlePriceNote', 'Mention sous le prix', `${placeholders}{economie} par l’économie réalisée.`),
      group: 'bundle',
    }),
    defineField({ ...buttonField('bundleBuyButton', 'Bouton d’achat'), group: 'bundle' }),
    defineField({ ...buttonField('bundleGiftButton', 'Bouton cadeau'), group: 'bundle' }),
    defineField({ ...eyebrowField('bundleGuidesEyebrow'), title: 'Guides du coffret : surtitre', group: 'bundle' }),
    defineField({ ...stringField('bundleGuidesTitle', 'Guides du coffret : titre'), group: 'bundle' }),
    defineField({ ...stringField('bundleGuidesAccent', 'Guides du coffret : suite du titre en doré'), group: 'bundle' }),
  ],
  preview: { prepare: () => ({ title: 'Pages détail des guides' }) },
})

export const learningPages: PageGroup = {
  types: [formationPage, guidesPage, guideDetailPage],
  documents: [
    { id: 'page-formation', title: 'Formation', schemaType: 'formationPage' },
    { id: 'page-guides', title: 'Mes guides', schemaType: 'guidesPage' },
    { id: 'page-guide-detail', title: 'Pages détail des guides', schemaType: 'guideDetailPage' },
  ],
}

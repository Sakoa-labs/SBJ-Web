// Contact, page introuvable, pied de page et pages légales.

import { defineArrayMember, defineField, defineType } from 'sanity'

import {
  buttonField,
  eyebrowField,
  photoField,
  section,
  sectionsField,
  stringField,
  textField,
  titleField,
} from './shared.ts'
import type { PageGroup } from './types.ts'

// Photos that open larger on click, each with a short caption under it. The caption sits
// next to the photo rather than on it: the site's download keeps only the image and its description.
function captionedPhotosField(name: string, title: string, count: number, description: string) {
  return defineField({
    name,
    title,
    type: 'array',
    description: `${description} ${count} photos, à réordonner par glisser-déposer.`,
    of: [
      defineArrayMember({
        type: 'object',
        name: 'captionedPhoto',
        title: 'Photo',
        fields: [photoField('photo', 'Photo'), stringField('caption', 'Légende')],
        preview: { select: { title: 'caption', media: 'photo' } },
      }),
    ],
    options: { disableActions: ['add', 'remove', 'duplicate', 'copy'] },
    validation: (rule) => rule.required().length(count),
  })
}

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Haut de page',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        titleField(),
        textField('text', 'Texte'),
        buttonField('button', 'Bouton de réservation'),
        textField('note', 'Texte sous le bouton'),
        titleField('infoTitle', 'Titre de l’encadré vert', 'Les horaires et coordonnées se modifient dans « Coordonnées et horaires ».'),
        stringField('hoursLabel', 'Intitulé des horaires'),
        stringField('addressLabel', 'Intitulé de l’adresse'),
        stringField('phoneLabel', 'Intitulé du téléphone'),
        stringField('emailLabel', 'Intitulé de l’e-mail'),
        stringField('paymentLabel', 'Intitulé du règlement'),
        textField('paymentText', 'Moyens de règlement'),
      ],
    }),
    sectionsField([
      section('contactForm', 'Formulaire et accès', [
        titleField('formTitle', 'Titre du formulaire'),
        stringField('nameLabel', 'Champ « nom »'),
        stringField('emailLabel', 'Champ « e-mail »'),
        stringField('subjectLabel', 'Champ « objet »'),
        stringField('subjectPlaceholder', 'Exemple affiché dans le champ « objet »'),
        stringField('messageLabel', 'Champ « message »'),
        buttonField('submitButton', 'Bouton d’envoi'),
        titleField('accessTitle', 'Titre de l’accès'),
        stringField('carTitle', 'Intitulé « en voiture »'),
        textField('carText', 'Texte « en voiture »', '{gps} est remplacé par la recherche Google Maps de « Coordonnées et horaires ».'),
        buttonField('mapsButton', 'Bouton Google Maps'),
        stringField('busTitle', 'Intitulé « en bus »'),
        defineField({
          name: 'busLines',
          title: 'Lignes de bus',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'busLine',
              fields: [
                stringField('line', 'Ligne', 'Ex. « Ligne 27 ».'),
                stringField('stop', 'Arrêt', 'Ex. « Case Bretagne », sans guillemets.'),
              ],
              preview: { select: { title: 'line', subtitle: 'stop' } },
            }),
          ],
          validation: (rule) => rule.required().min(1),
        }),
        stringField('onSiteTitle', 'Intitulé des photos d’accès'),
        captionedPhotosField('arrivalSteps', 'Photos d’accès', 3, 'Numérotées dans l’ordre.'),
      ]),
      section('contactRoom', 'La salle de soins', [
        eyebrowField(),
        titleField(),
        textField('text', 'Texte'),
        textField('quote', 'Citation', 'Sans guillemets : ils sont ajoutés automatiquement.'),
        captionedPhotosField('photos', 'Photos de la salle', 3, 'La première est affichée en grand.'),
      ]),
    ]),
  ],
  preview: { prepare: () => ({ title: 'Contact' }) },
})

export const notFoundPage = defineType({
  name: 'notFoundPage',
  title: 'Page introuvable',
  type: 'document',
  fields: [
    stringField('label', 'Texte sous le 404'),
    titleField(),
    stringField('titleEnd', 'Fin du titre, en plus petit'),
    textField('text', 'Texte'),
    buttonField('finderButton', 'Bouton du questionnaire'),
    buttonField('homeButton', 'Bouton de retour à l’accueil'),
    photoField('photo', 'Grande photo (en arche)'),
    photoField('smallPhoto', 'Petite photo'),
  ],
  preview: { prepare: () => ({ title: 'Page introuvable' }) },
})

const legalBody = defineField({
  name: 'body',
  title: 'Texte',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Paragraphe', value: 'normal' },
        { title: 'Sous-titre', value: 'h3' },
      ],
      lists: [{ title: 'Liste à puces', value: 'bullet' }],
      marks: {
        decorators: [{ title: 'Gras', value: 'strong' }],
        annotations: [
          defineArrayMember({
            name: 'link',
            type: 'object',
            title: 'Lien',
            fields: [
              defineField({
                name: 'href',
                title: 'Adresse du lien',
                type: 'string',
                description: 'Une page du site (/contact), un site (https://…), un e-mail (mailto:…) ou un téléphone (tel:…).',
                validation: (rule) =>
                  rule.required().regex(/^(\/|#|https?:\/\/|mailto:|tel:)/, { name: 'adresse de lien' }),
              }),
            ],
          }),
        ],
      },
      of: [
        defineArrayMember({
          name: 'contactDetail',
          type: 'object',
          title: 'Coordonnée',
          description: 'Toujours à jour : reprise de « Coordonnées et horaires ».',
          fields: [
            defineField({
              name: 'detail',
              title: 'Coordonnée',
              type: 'string',
              options: {
                list: [
                  { title: 'E-mail', value: 'email' },
                  { title: 'Téléphone', value: 'phone' },
                  { title: 'Adresse', value: 'address' },
                ],
                layout: 'radio',
              },
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { detail: 'detail' },
            prepare: ({ detail }) => ({
              title: { email: 'E-mail', phone: 'Téléphone', address: 'Adresse' }[detail as string] ?? 'Coordonnée',
            }),
          },
        }),
      ],
    }),
  ],
  validation: (rule) => rule.required().min(1),
})

export const legalPage = defineType({
  name: 'legalPage',
  title: 'Page légale',
  type: 'document',
  fields: [
    eyebrowField(),
    titleField(),
    textField('intro', 'Introduction'),
    defineField({
      name: 'sections',
      title: 'Parties',
      type: 'array',
      description: 'Numérotées dans l’ordre et reprises dans le sommaire.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'legalSection',
          title: 'Partie',
          fields: [
            stringField('title', 'Titre'),
            defineField({
              name: 'anchor',
              title: 'Ancre',
              type: 'slug',
              description: 'Fin du lien vers cette partie (ex. #cookies). À ne pas changer si d’autres pages y renvoient.',
              options: { source: (_document, context) => (context.parent as { title?: string })?.title ?? '' },
              validation: (rule) => rule.required(),
            }),
            legalBody,
          ],
          preview: { select: { title: 'title' } },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    stringField('contactTitle', 'Titre de l’encadré de contact'),
    stringField('contactText', 'Texte de l’encadré de contact'),
  ],
  preview: { select: { title: 'title' } },
})

export const contactPages: PageGroup = {
  types: [contactPage, notFoundPage, legalPage],
  documents: [
    { id: 'page-contact', title: 'Contact', schemaType: 'contactPage' },
    { id: 'page-legal-notice', title: 'Mentions légales', schemaType: 'legalPage' },
    { id: 'page-terms', title: 'Conditions générales de vente', schemaType: 'legalPage' },
    { id: 'page-privacy', title: 'Politique de confidentialité', schemaType: 'legalPage' },
    { id: 'page-not-found', title: 'Page introuvable', schemaType: 'notFoundPage' },
  ],
}

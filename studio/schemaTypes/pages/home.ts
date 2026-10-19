import { defineField, defineType } from 'sanity'

import {
  buttonField,
  cardsField,
  closingFields,
  eyebrowField,
  faqField,
  iconField,
  photoField,
  section,
  sectionsField,
  stringField,
  textField,
  titleField,
} from './shared.ts'
import type { PageGroup } from './types.ts'

const iconCard = (count: number, name: string, title: string) =>
  cardsField(name, title, [stringField('title', 'Titre'), textField('description', 'Texte'), iconField()], count)

export const homePage = defineType({
  name: 'homePage',
  title: 'Accueil',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Haut de page',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        titleField(),
        stringField('subtitle', 'Sous-titre'),
        buttonField('primaryButton', 'Bouton doré (réservation)'),
        buttonField('secondaryButton', 'Bouton clair (vers les soins)'),
        photoField('photo', 'Photo de fond'),
      ],
    }),
    sectionsField([
      section('homeFormation', 'Formations', [
        eyebrowField(),
        titleField(),
        textField('text', 'Texte'),
        buttonField('button'),
        photoField('photo', 'Photo'),
        iconCard(3, 'benefits', 'Points forts (sous le texte)'),
        iconCard(3, 'programs', 'Cartes des formations'),
      ]),
      section('homeGuides', 'Guides', [
        eyebrowField(),
        titleField(),
        textField('text', 'Texte'),
        buttonField('button'),
        photoField('photo', 'Photo des guides', { description: 'Image détourée sur fond transparent (PNG).' }),
      ]),
      section('homeServices', 'Prestations', [
        eyebrowField(),
        titleField(),
        textField('text', 'Texte'),
        cardsField(
          'cards',
          'Cartes Massages, Soins visage et Épilation',
          [
            defineField({ name: 'key', type: 'string', hidden: true, readOnly: true }),
            stringField('title', 'Titre'),
            textField('description', 'Texte'),
            buttonField('button'),
            photoField('photo', 'Photo'),
            iconField(),
          ],
          3,
        ),
      ]),
      section('homeAbout', 'À propos', [
        eyebrowField(),
        titleField(),
        textField('text', 'Texte'),
        iconCard(3, 'values', 'Valeurs'),
        photoField('photo', 'Portrait de Sabrina'),
      ]),
      section('homeFaq', 'Questions fréquentes', [
        titleField(),
        textField('intro', 'Introduction'),
        faqField(),
        photoField('photo', 'Photo de l’encadré « Une autre question ? »'),
      ]),
      section('homeReviews', 'Avis clients', [
        eyebrowField(),
        titleField(undefined, undefined, 'Les avis eux-mêmes se gèrent dans « Avis clients ».'),
      ]),
      section('homeClosing', 'Bandeau final', [
        ...closingFields(),
        buttonField('primaryButton', 'Bouton doré (vers les formations)'),
        buttonField('secondaryButton', 'Bouton clair (contact)'),
      ]),
    ]),
  ],
  preview: { prepare: () => ({ title: 'Accueil' }) },
})

export const homePages: PageGroup = {
  types: [homePage],
  documents: [{ id: 'page-home', title: 'Accueil', schemaType: 'homePage' }],
}

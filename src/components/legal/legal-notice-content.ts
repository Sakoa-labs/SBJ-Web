import { contact } from '#/components/legal/legal-page'
import type { LegalSection } from '#/components/legal/legal-page'

const email = { label: contact.email, href: `mailto:${contact.email}` }
const phone = { label: contact.phone, href: contact.phoneHref }

// Business details from the national company register (SIREN 841 169 667) and the host's
// own legal notice (o2switch, SIREN 510 909 807).
export const legalNoticeSections: ReadonlyArray<LegalSection> = [
  {
    id: 'editeur',
    title: 'Éditeur du site',
    blocks: [
      {
        type: 'p',
        text: 'Le site sabrinajoiedetre.com est édité par Sabrina Ikhlef EI, entrepreneur individuel exerçant sous le nom Sabrina Joie d’Être.',
      },
      {
        type: 'list',
        items: [
          `Adresse : ${contact.address}`,
          'SIREN : 841 169 667',
          'SIRET : 841 169 667 00034',
          'Code APE : 96.04Z, entretien corporel',
          'TVA intracommunautaire : FR81841169667',
          ['Email : ', email],
          ['Téléphone : ', phone],
        ],
      },
    ],
  },
  {
    id: 'publication',
    title: 'Directrice de la publication',
    blocks: [
      {
        type: 'p',
        text: ['Sabrina Ikhlef, joignable à ', email, '.'],
      },
    ],
  },
  {
    id: 'hebergement',
    title: 'Hébergement',
    blocks: [
      { type: 'p', text: 'Le site est hébergé par o2switch :' },
      {
        type: 'list',
        items: [
          'SAS au capital de 100 000 €, RCS Clermont-Ferrand',
          'SIRET : 510 909 807 00032',
          'Adresse : Chemin des Pardiaux, 63000 Clermont-Ferrand, France',
          ['Téléphone : ', { label: '04 44 44 60 40', href: 'tel:+33444446040' }],
          ['Site : ', { label: 'www.o2switch.fr', href: 'https://www.o2switch.fr' }],
        ],
      },
    ],
  },
  {
    id: 'propriete-intellectuelle',
    title: 'Propriété intellectuelle',
    blocks: [
      {
        type: 'p',
        text: 'Le site et l’ensemble de ses éléments (marques, logos, photographies, images, illustrations, textes, slogans, vidéos…) sont la propriété exclusive de Sabrina Joie d’Être et sont protégés par le Code de la propriété intellectuelle.',
      },
      {
        type: 'p',
        text: 'Leur reproduction n’est autorisée qu’à titre d’information, pour un usage strictement personnel et privé. Toute autre reproduction, représentation, adaptation ou utilisation, totale ou partielle, est interdite sans l’autorisation écrite de Sabrina Joie d’Être.',
      },
    ],
  },
  {
    id: 'donnees-personnelles',
    title: 'Données personnelles et cookies',
    blocks: [
      {
        type: 'p',
        text: [
          'La façon dont vos données sont recueillies et protégées, ainsi que l’utilisation des cookies, sont détaillées dans notre ',
          { label: 'politique de confidentialité', href: '/politique-de-confidentialite' },
          '.',
        ],
      },
    ],
  },
  {
    id: 'conditions-de-vente',
    title: 'Conditions de vente',
    blocks: [
      {
        type: 'p',
        text: [
          'Les réservations et achats effectués sur le site sont régis par nos ',
          { label: 'conditions générales de vente', href: '/conditions-generales' },
          '.',
        ],
      },
    ],
  },
]

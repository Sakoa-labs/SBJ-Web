import { readFileSync } from 'node:fs'

import { client, image, key, keyed, save } from './lib.ts'

// The legal texts as they were in src/components/legal/*-content.ts, with the contact
// details resolved: they become « Coordonnée » elements, kept in sync with the settings.
type Inline = string | { label: string; href: string }
type Text = string | Array<Inline>
type Block = { type: 'p'; text: Text } | { type: 'h3'; text: string } | { type: 'list'; items: Array<Text> }
type LegalSection = { id: string; title: string; blocks: Array<Block> }
const legal: {
  contact: { email: string; phone: string; phoneHref: string; address: string }
  notice: Array<LegalSection>
  terms: Array<LegalSection>
  privacy: Array<LegalSection>
} = JSON.parse(readFileSync(new URL('./legal-sections.json', import.meta.url), 'utf8'))
const { contact } = legal

const span = (text: string, marks: Array<string> = []) => ({ _type: 'span', _key: key(), text, marks })
const detail = (value: 'email' | 'phone' | 'address') => ({ _type: 'contactDetail', _key: key(), detail: value })

// Turns a run of text and links into Portable Text children and link definitions.
function children(text: Text) {
  const parts = typeof text === 'string' ? [text] : text
  const markDefs: Array<{ _type: 'link'; _key: string; href: string }> = []
  const result: Array<object> = []
  for (const part of parts) {
    if (typeof part === 'string') {
      // The address was written into the text: it becomes a contact element.
      const pieces = part.split(contact.address)
      pieces.forEach((piece, index) => {
        if (index > 0) result.push(detail('address'))
        if (piece) result.push(span(piece))
      })
    } else if (part.href === `mailto:${contact.email}`) {
      result.push(detail('email'))
    } else if (part.href === contact.phoneHref) {
      result.push(detail('phone'))
    } else {
      const link = { _type: 'link' as const, _key: key(), href: part.href }
      markDefs.push(link)
      result.push(span(part.label, [link._key]))
    }
  }
  // Portable Text blocks always start and end with a span.
  if (!result.length || (result[0] as { _type: string })._type !== 'span') result.unshift(span(''))
  if ((result[result.length - 1] as { _type: string })._type !== 'span') result.push(span(''))
  return { children: result, markDefs }
}

function body(blocks: Array<Block>) {
  return blocks.flatMap((block) => {
    if (block.type === 'list') {
      return block.items.map((item) => ({ _type: 'block', _key: key(), style: 'normal', listItem: 'bullet', level: 1, ...children(item) }))
    }
    return [{ _type: 'block', _key: key(), style: block.type === 'h3' ? 'h3' : 'normal', ...children(block.text) }]
  })
}

const sections = (items: Array<LegalSection>) =>
  items.map((section) => ({
    _type: 'legalSection',
    _key: key(),
    title: section.title,
    anchor: { _type: 'slug', current: section.id },
    body: body(section.blocks),
  }))

const legalPages = [
  {
    _id: 'page-legal-notice',
    title: 'Mentions *légales*',
    intro: 'Qui édite et héberge ce site, et comment nous joindre.',
    sections: legal.notice,
    contactTitle: 'Une question sur le site ?',
  },
  {
    _id: 'page-terms',
    title: 'Conditions générales *de vente*',
    intro: 'Les règles qui encadrent vos réservations de massages et de soins, vos formations et vos achats sur le site.',
    sections: legal.terms,
    contactTitle: 'Une question sur une commande ?',
  },
  {
    _id: 'page-privacy',
    title: 'Politique *de confidentialité*',
    intro:
      'Nous mettons tout en œuvre pour protéger votre vie privée. Voici comment vos données personnelles sont recueillies, utilisées et protégées lorsque vous visitez le site, vous abonnez à nos newsletters ou réservez une prestation.',
    sections: legal.privacy,
    contactTitle: 'Une question sur vos données ?',
  },
]

for (const page of legalPages) {
  await save({
    _id: page._id,
    _type: 'legalPage',
    eyebrow: 'Informations légales',
    title: page.title,
    intro: page.intro,
    sections: sections(page.sections),
    contactTitle: page.contactTitle,
    contactText: 'Sabrina vous répond par email ou par téléphone.',
  })
}

const captioned = (photos: Array<[string, string, string]>) =>
  Promise.all(
    photos.map(async ([path, alt, caption]) => ({ _type: 'captionedPhoto', photo: await image(path, alt), caption })),
  ).then(keyed)

await save({
  _id: 'page-contact',
  _type: 'contactPage',
  hero: {
    title: 'Parlons de\n*votre bien-être.*',
    text: 'Une question, un conseil, une réservation ? Sabrina vous répond et vous accueille à La Bretagne, à Saint-Denis.',
    button: 'Réserver en ligne',
    note: 'Pendant un soin, Sabrina ne peut pas décrocher : le plus simple est de réserver votre créneau directement en ligne.',
    infoTitle: 'Infos *pratiques*',
    hoursLabel: 'Horaires',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    emailLabel: 'Email',
    paymentLabel: 'Règlement',
    paymentText: 'En ligne à la réservation, ou sur place par carte bancaire, espèces ou virement.',
  },
  sections: keyed([
    {
      _type: 'contactForm',
      hidden: false,
      formTitle: 'Un message, *une question*',
      nameLabel: 'Votre nom',
      emailLabel: 'Votre email',
      subjectLabel: 'Objet',
      subjectPlaceholder: 'Réservation, formation, bon cadeau…',
      messageLabel: 'Votre message',
      submitButton: 'Envoyer le message',
      accessTitle: 'Comment *venir ?*',
      carTitle: 'En voiture',
      carText: 'Dans votre GPS, cherchez « {gps} ».',
      mapsButton: 'Ouvrir dans Maps',
      busTitle: 'En bus',
      busLines: keyed([
        { _type: 'busLine', line: 'Ligne 27', stop: 'Case Bretagne' },
        { _type: 'busLine', line: 'Ligne 26a', stop: 'Mairie annexe' },
      ]),
      onSiteTitle: 'Sur place',
      arrivalSteps: await captioned([
        ['design/contact/acces-parking.jpg', 'Le chemin d’accès, la place de parking et l’entrée signalées par des flèches', 'Garez-vous sur la place de parking'],
        ['design/contact/acces-banniere.jpg', 'La bannière violette « Votre praticienne bien-être » sur le mur d’entrée', 'Repérez la bannière Joie d’Être'],
        ['design/contact/acces-portail.jpg', 'Le portail gris de la maison', 'Entrez par le portail'],
      ]),
    },
    {
      _type: 'contactRoom',
      hidden: false,
      eyebrow: 'L’espace bien-être',
      title: 'Un cocon pour\n*se ressourcer*',
      text: 'Une pièce aménagée chez Sabrina, au calme, pour se ressourcer en toute simplicité. Les soins y sont réalisés avec des produits 100 % naturels, qui respectent votre peau et l’environnement.',
      quote: 'Offrez à votre corps le soin qu’il mérite, il vous le rendra en énergie et sérénité.',
      photos: await captioned([
        ['design/contact/salle-table.jpg', 'La table de massage préparée, serviettes roulées et bougies, devant la fenêtre', 'La table de massage'],
        ['design/contact/salle-solo.jpg', 'La salle de massage, ses murs végétalisés et sa table drapée de blanc', 'La salle de soins'],
        ['design/contact/salle-duo.jpg', 'Deux tables de massage côte à côte dans la salle', 'Deux tables côte à côte'],
      ]),
    },
  ]),
})

await save({
  _id: 'page-not-found',
  _type: 'notFoundPage',
  label: 'Page introuvable',
  title: 'Ce chemin ne mène\n*nulle part…*',
  titleEnd: 'mais celui-ci, si.',
  text: 'Le site a fait peau neuve : certaines anciennes adresses ont changé. Laissez-nous vous guider.',
  finderButton: 'Quelle prestation pour moi ?',
  homeButton: 'Retour à l’accueil',
  photo: await image('design/404/sentier.png', 'Un sentier de pierres à travers un jardin tropical, menant à la porte d’un petit spa'),
  smallPhoto: await image('design/404/bougie.png', 'Une bougie allumée et une fleur de frangipanier posée sur une serviette roulée'),
})

await client
  .patch('settings')
  .set({
    footer: {
      tagline: 'Apprendre, pratiquer et transmettre l’art du bien-être au naturel.',
      servicesHeading: 'Prestations',
      learnHeading: 'Apprendre',
      guidesHeading: 'Les guides',
      contactHeading: 'Contact',
      copyright: '© 2026 Joie d’Être. Tous droits réservés.',
    },
  })
  .commit()
console.log('settings : pied de page enregistré')

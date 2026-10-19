import { client, image, keyed, save } from './lib.ts'

type Hero = {
  title: string
  accent: string
  intro: string
  primaryButton: string
  secondaryButton: string
  photos: [[string, string], [string, string], [string, string], [string, string]]
}

const hero = async ({ photos: [large, top, middle, bottom], ...texts }: Hero) => ({
  ...texts,
  largePhoto: await image(...large),
  topPhoto: await image(...top),
  middlePhoto: await image(...middle),
  bottomPhoto: await image(...bottom),
})

const closing = (name: string, service: string, button: string) => ({
  _type: name,
  hidden: false,
  eyebrow: 'Votre moment Joie d’Être',
  title: 'Et si vous preniez\n*ce temps pour vous ?*',
  text: `Accordez-vous une pause.\nSabrina vous accompagne vers ${service}.`,
  button,
})

// FAQ questions and detail-page photos already in Sanity are kept as they are.
const previous = async (id: string) => {
  const document = await client.getDocument(id)
  return { questions: document?.faq ?? document?.sections?.find((item: any) => item.questions)?.questions, gallery: document?.gallery }
}

const massages = await previous('page-massages')
await save({
  _id: 'page-massages',
  _type: 'massagesPage',
  hero: await hero({
    title: 'Laissez le corps souffler.',
    accent: 'Retrouvez votre équilibre.',
    intro: 'Un massage pensé pour vous, entre gestes experts et douceur tropicale.',
    primaryButton: 'Réserver mon massage',
    secondaryButton: 'Découvrir les massages',
    photos: [
      ['design/heros/massages-large-v2.png', 'Femme détendue recevant un massage du dos et des épaules'],
      ['design/massage/massages/cranien-visage-buste.png', 'Massage crânien, une femme détendue les yeux fermés'],
      ['design/heros/massages-small-v2.png', 'Pierres de massage, huile, serviette roulée et fleur de frangipanier sur un plateau en bois'],
      ['design/massage/massages/pierres-chaudes.png', 'Pierres chaudes, bougies et bols dorés'],
    ],
  }),
  sections: keyed([
    {
      _type: 'massagesMenu',
      hidden: false,
      eyebrow: 'Nos massages',
      title: 'La carte des *massages*',
      button: 'En savoir plus',
    },
    {
      _type: 'massagesFaq',
      hidden: false,
      title: 'Vos questions, *en toute sérénité.*',
      intro: 'Quelques repères pour profiter pleinement de votre moment.',
      questions: massages.questions,
      photo: await image('design/massage/faq.png', 'Pierres chaudes, huile de massage, serviettes roulées et fleur de frangipanier'),
    },
    closing('massagesClosing', 'le massage qui vous ressemble', 'Réserver mon massage'),
  ]),
  gallery: massages.gallery,
})

const soins = await previous('page-soins')
await save({
  _id: 'page-soins',
  _type: 'soinsPage',
  hero: await hero({
    title: 'Prenez soin de votre peau.',
    accent: 'Révélez son éclat.',
    intro: 'Des soins du visage et des gestes experts, adaptés à votre peau.',
    primaryButton: 'Réserver mon soin',
    secondaryButton: 'Découvrir les soins',
    photos: [
      ['design/heros/soins-large-v2.png', 'Masque à l’argile verte appliqué au pinceau sur la joue pendant un soin du visage'],
      ['design/soins/soins/precieux.png', 'Crème de soin appliquée sur la pommette'],
      ['design/heros/soins-small-v2.png', 'Sérum, crème, argile verte et pinceau à masque sur un plateau en bois'],
      ['design/soins/soins/express-detox.png', 'Visage nettoyé délicatement avec une serviette chaude'],
    ],
  }),
  sections: keyed([
    {
      _type: 'soinsMenu',
      hidden: false,
      eyebrow: 'Nos soins',
      title: 'La carte des *soins*',
      button: 'En savoir plus',
    },
    {
      _type: 'soinsFaq',
      hidden: false,
      title: 'Questions *fréquentes*',
      intro: 'Tout ce que vous souhaitez savoir avant votre soin du visage.',
      questions: soins.questions,
      photo: await image('design/soins/faq.png', 'Huile de soin, pinceau, crème, serviettes roulées et fleur de frangipanier'),
    },
    closing('soinsClosing', 'le soin qui révèle votre peau', 'Réserver mon soin'),
  ]),
  gallery: soins.gallery,
})

const epilation = await previous('page-epilation')
await save({
  _id: 'page-epilation',
  _type: 'epilationPage',
  hero: await hero({
    title: 'Une peau douce.',
    accent: 'Un geste précis.',
    intro: 'Des épilations soignées, du visage au corps.',
    primaryButton: 'Réserver mon épilation',
    secondaryButton: 'Découvrir les épilations',
    photos: [
      ['design/heros/epilation-large-v2.png', 'Cire dorée appliquée à la spatule sur la jambe par une main gantée'],
      ['design/epilations/epilations/visage.png', 'Cire appliquée délicatement sur le sourcil'],
      ['design/heros/epilation-small-v2.png', 'Bol de cire dorée, spatules en bois, serviette roulée et fleur de frangipanier'],
      ['design/epilations/epilations/maillot.png', 'Bol de cire tiède et spatule posés sur une serviette'],
    ],
  }),
  sections: keyed([
    {
      _type: 'epilationMenu',
      hidden: false,
      eyebrow: 'Nos épilations',
      title: 'La carte des *épilations*',
      subtitle: 'Choisissez votre zone.',
      button: 'En savoir plus',
    },
    {
      _type: 'epilationForfaits',
      hidden: false,
      eyebrow: 'Nos forfaits',
      title: 'Les forfaits *épilation*',
      subtitle: 'Un maillot et quatre zones au choix.',
      button: 'Choisir ce forfait',
    },
    {
      _type: 'epilationFaq',
      hidden: false,
      title: 'Questions *fréquentes*',
      intro: 'Tout ce que vous souhaitez savoir avant votre épilation.',
      questions: epilation.questions,
      photo: await image('design/epilations/faq.png', 'Bol de cire tiède, spatule, serviette roulée et fleur de frangipanier'),
    },
    closing('epilationClosing', 'l’épilation qui vous convient', 'Réserver mon épilation'),
  ]),
  gallery: epilation.gallery,
})

await save({
  _id: 'page-service-detail',
  _type: 'serviceDetailPage',
  durationLabel: 'Durée',
  paymentLabel: 'Paiement',
  paymentValue: 'Sur place ou en ligne',
  cancellationLabel: 'Annulation',
  cancellationValue: 'Gratuite jusqu’à 24 h avant',
  offerLabel: 'Offre du moment',
  optionsLabel: 'Choisissez votre formule',
  massagesButtons: { book: 'Réserver ce massage', gift: 'Offrir ce massage' },
  soinsButtons: { book: 'Réserver ce soin', gift: 'Offrir ce soin' },
  epilationButtons: { book: 'Réserver cette épilation', gift: 'Offrir cette épilation' },
  related: { eyebrow: 'Suggestions', title: 'Vous aimerez *aussi*', button: 'En savoir plus' },
})

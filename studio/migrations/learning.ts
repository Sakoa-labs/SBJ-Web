import { client, image, keyed, save } from './lib.ts'

const previousFormation = await client.getDocument('page-formation')

// The FAQ moved from the former « page » document: the questions are kept as they are.
const formationQuestions = previousFormation?.faq ?? previousFormation?.sections?.find(
  (section: { _type: string }) => section._type === 'formationFaq',
)?.questions
if (!formationQuestions?.length) throw new Error('Questions de la page Formation introuvables')

const squarePhotos = (photos: Array<[string, string]>) =>
  Promise.all(photos.map(([path, alt]) => image(path, alt))).then(keyed)

await save({
  _id: 'page-formation',
  _type: 'formationPage',
  hero: {
    title: 'Apprenez l’art du toucher.',
    accent: 'À votre rythme.',
    intro: 'Des formations guidées par Sabrina, en présentiel comme en ligne.',
    primaryButton: 'Voir les formations',
    secondaryButton: 'Télécharger le programme',
    largePhoto: await image(
      'design/formation/hero-principale.png',
      'Sabrina guide les mains d’une élève sur le dos d’une cliente',
    ),
    squarePhotos: await squarePhotos([
      ['design/formation/hero-groupe.png', 'Sabrina fait une démonstration devant un petit groupe d’élèves'],
      ['design/formation/hero-elearning.png', 'Une leçon vidéo de massage sur un ordinateur portable, à côté d’un carnet de notes'],
      ['design/formation/hero-certificat.png', 'Un certificat de formation au sceau doré, posé à côté d’une fleur de frangipanier'],
    ]),
  },
  sections: keyed([
    {
      _type: 'formationPath',
      hidden: false,
      eyebrow: 'Le parcours',
      title: 'Du premier geste *au premier client*',
      steps: keyed([
        {
          _type: 'card',
          title: 'Découvrir',
          format: 'Ateliers en présentiel',
          description: 'Une journée en petit groupe pour poser vos premiers gestes.',
          photo: await image(
            'design/formation/parcours-decouvrir.png',
            'Sabrina accueillant un petit groupe d’élèves dans la salle de formation',
          ),
        },
        {
          _type: 'card',
          title: 'Apprendre',
          format: 'Formation massage bien-être',
          description: 'Plusieurs jours aux côtés de Sabrina pour ancrer les protocoles et la posture.',
          photo: await image(
            'design/formation/parcours-apprendre.png',
            'Une élève masse le dos d’une cliente sous le regard de Sabrina, qui corrige son geste',
          ),
        },
        {
          _type: 'card',
          title: 'Approfondir',
          format: 'E-learning premium',
          description: 'Des modules vidéo et des supports PDF pour réviser chaque geste chez vous.',
          photo: await image(
            'design/formation/parcours-approfondir.png',
            'Une élève suit une leçon vidéo de massage sur son ordinateur et prend des notes',
          ),
        },
        {
          _type: 'card',
          title: 'Se lancer',
          format: 'Suivi et certificat',
          description: 'Un certificat de formation et un accompagnement pour vos premiers clients.',
          photo: await image(
            'design/formation/parcours-lancer.png',
            'Sabrina remet son certificat de formation à une élève souriante',
          ),
        },
      ]),
    },
    {
      _type: 'formationFormats',
      hidden: false,
      formats: keyed([
        {
          _type: 'card',
          key: 'presentiel',
          title: 'En présentiel',
          points: ['Petits groupes', 'Pratique accompagnée', 'Gestes et posture', 'Suivi et certificat'],
          button: 'Voir les dates',
          photo: await image(
            'design/formation/presentiel.png',
            'La salle de formation, deux tables de massage préparées devant de grandes fenêtres sur le jardin',
          ),
        },
        {
          _type: 'card',
          key: 'en-ligne',
          title: 'En ligne',
          points: ['Modules vidéo', 'Supports PDF', 'Accès flexible', 'Espace apprenant'],
          button: 'Accéder à l’e-learning',
          photo: await image(
            'design/formation/en-ligne.png',
            'Un ordinateur portable affiche une leçon vidéo de massage, entre bougies et feuillages',
          ),
        },
      ]),
    },
    {
      _type: 'formationReviews',
      hidden: false,
      eyebrow: 'Témoignages',
      title: 'Elles se sont formées *avec Sabrina*',
      // Placeholders, until real quotes from Sabrina's students are collected with their consent.
      testimonials: keyed([
        {
          _type: 'testimonial',
          name: 'Camille',
          service: 'Formation massage bien-être',
          text: 'Une formation claire et une pratique accompagnée avec douceur. Sabrina prend le temps de corriger chaque geste.',
        },
        {
          _type: 'testimonial',
          name: 'Julie',
          service: 'Atelier en présentiel',
          text: 'Une journée en petit groupe qui m’a donné la confiance pour me lancer.',
        },
        {
          _type: 'testimonial',
          name: 'Élodie',
          service: 'E-learning premium',
          text: 'Des modules accessibles, à mon rythme, et des supports PDF que je relis avant chaque séance.',
        },
        {
          _type: 'testimonial',
          name: 'Sarah',
          service: 'Formation massage bien-être',
          text: 'J’ai appris la posture autant que les gestes. Je termine mes massages sans fatigue.',
        },
        {
          _type: 'testimonial',
          name: 'Nadia',
          service: 'Atelier en présentiel',
          text: 'Une ambiance bienveillante et beaucoup de pratique. Je suis repartie avec un vrai protocole.',
        },
        {
          _type: 'testimonial',
          name: 'Laura',
          service: 'E-learning premium',
          text: 'Les vidéos sont précises et faciles à suivre, même après une journée de travail.',
        },
      ]),
    },
    {
      _type: 'formationFaq',
      hidden: false,
      title: 'Vos questions, *en toute sérénité.*',
      intro: 'Quelques repères avant de vous lancer.',
      questions: formationQuestions,
      photo: await image(
        'design/section faq/ChatGPT Image 24 août 2026, 21_58_47.png',
        'Serviettes de soin, fleurs de frangipanier et bougie dans une ambiance apaisante',
      ),
    },
    {
      _type: 'formationClosing',
      hidden: false,
      eyebrow: 'Votre parcours Joie d’Être',
      title: 'Prête à\n*vous lancer ?*',
      text: 'Échangez avec Sabrina\npour choisir la formation qui vous ressemble.',
      button: 'Réserver ma place',
    },
  ]),
})

await save({
  _id: 'page-guides',
  _type: 'guidesPage',
  hero: {
    title: 'Le savoir-faire de Sabrina,',
    accent: 'entre vos mains.',
    intro: 'Des guides illustrés à télécharger en PDF, pour pratiquer chez vous, à votre rythme.',
    primaryButton: 'Découvrir les guides',
    secondaryButton: 'Voir le coffret',
    largePhoto: await image(
      'design/guides/hero-livres.png',
      'Les trois guides Joie d’Être posés sur une console en bois sculpté, entre bougies et fleurs de frangipanier',
    ),
    squarePhotos: await squarePhotos([
      ['design/guides/hero-massage.png', 'Mains glissant avec de l’huile sur le dos d’une femme détendue'],
      ['design/guides/hero-visage.png', 'Femme les yeux fermés, en plein auto-massage du visage'],
      ['design/guides/hero-pratique.png', 'Praticienne montrant un geste de massage à une élève'],
    ]),
  },
  sections: keyed([
    {
      _type: 'guidesCollection',
      hidden: false,
      eyebrow: 'La collection',
      title: 'Le guide qui *vous ressemble*',
      cardButton: 'Découvrir',
    },
    {
      _type: 'guidesBundleSection',
      hidden: false,
      title: 'Les trois guides,\n*réunis*',
      text: 'La collection complète en un seul achat, à garder pour vous ou à offrir.',
      button: 'Choisir le coffret',
    },
    {
      _type: 'guidesAuthor',
      hidden: false,
      quote: 'J’ai écrit ces guides pour que vous retrouviez chez vous les gestes que je transmets en cabine et en formation.',
      caption: 'Praticienne bien-être et formatrice à La Réunion',
      button: 'Découvrir les formations',
      photo: await image('design/guides/sabrina.png', 'Sabrina, souriante, dans son espace de soin'),
    },
  ]),
})

await save({
  _id: 'page-guide-detail',
  _type: 'guideDetailPage',
  breadcrumb: 'Mes guides',
  readingLabel: 'Lecture',
  readingValue: 'Mobile, tablette, ordinateur',
  deliveryLabel: 'Livraison',
  deliveryValue: 'Téléchargement immédiat',
  paymentNote: 'Paiement sécurisé · Accès à vie',
  chaptersEyebrow: 'Au sommaire',
  chaptersTitle: 'Ce que vous allez *apprendre*',
  cardButton: 'Découvrir',
  guideFormatLabel: 'Format',
  guideFormatValue: 'PDF illustré, {pages} pages',
  guideBuyButton: 'Acheter le guide',
  guideGiftButton: 'Offrir ce guide',
  relatedEyebrow: 'Suggestions',
  relatedTitle: 'Vous aimerez',
  relatedAccent: 'aussi',
  bundleFormatLabel: 'Contenu',
  bundleFormatValue: '{guides} guides PDF, {pages} pages',
  bundlePriceNote: 'Soit {economie} d’économie par rapport aux guides achetés séparément',
  bundleBuyButton: 'Acheter le coffret',
  bundleGiftButton: 'Offrir le coffret',
  bundleGuidesEyebrow: 'Dans le coffret',
  bundleGuidesTitle: 'Les trois',
  bundleGuidesAccent: 'guides',
})

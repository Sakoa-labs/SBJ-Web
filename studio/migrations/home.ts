import { client, image, keyed, save } from './lib.ts'

const previous = await client.getDocument('page-home')

const iconCards = (cards: Array<[string, string, string]>) =>
  Promise.all(
    cards.map(async ([title, description, icon]) => ({ _type: 'card', title, description, icon: await image(icon) })),
  ).then(keyed)

await save({
  _id: 'page-home',
  _type: 'homePage',
  hero: {
    title: 'L’art du bien-être\n*à la française*',
    subtitle: 'Soins d’exception inspirés par la nature tropicale.',
    primaryButton: 'Réserver un soin',
    secondaryButton: 'Découvrir les soins',
    photo: await image(
      'design/heros/accueil-v2.png',
      'Terrasse de soin tropicale au coucher du soleil, table de massage, bougies et feuillages',
    ),
  },
  sections: keyed([
    {
      _type: 'homeFormation',
      hidden: false,
      eyebrow: 'Nos formations',
      title: 'Des parcours pensés\npour *apprendre, pratiquer*\net *transmettre*',
      text: 'Des formations structurées pour développer votre geste, votre posture et votre confiance, en présentiel comme en ligne.',
      button: 'Découvrir le programme',
      photo: await image(
        'design/section formation/ChatGPT Image 24 août 2026, 15_27_21.png',
        'Sabrina transmettant une technique de massage à un groupe en formation',
      ),
      benefits: await iconCards([
        ['Guidée par Sabrina', 'Une expertise et une pédagogie au service de votre progression.', 'src/assets/formation-icons/guided-by-sabrina.png'],
        ['Accès flexible', 'En présentiel ou en ligne, à votre rythme.', 'src/assets/formation-icons/flexible-access.png'],
        ['Approche concrète', 'Des méthodes éprouvées, ancrées dans la pratique.', 'src/assets/formation-icons/practical-approach.png'],
      ]),
      programs: await iconCards([
        ['Formation massage bien-être', 'Protocoles, posture, pratique encadrée.', 'src/assets/formation-icons/massage-wellness.png'],
        ['Ateliers en présentiel', 'Petits groupes, démonstrations et mise en pratique.', 'src/assets/formation-icons/in-person-workshop.png'],
        ['E-learning premium', 'Modules vidéo, supports PDF et accès flexible.', 'src/assets/formation-icons/premium-elearning.png'],
      ]),
    },
    {
      _type: 'homeGuides',
      hidden: false,
      eyebrow: 'Mes guides',
      title: 'Des ressources expertes\npour progresser\n*à votre rythme*',
      text: 'Des guides pratiques à télécharger pour approfondir les gestes, la posture et les protocoles, puis bientôt disponibles sur Amazon KDP.',
      button: 'Explorer les guides',
      photo: await image(
        'design/section guides/ChatGPT Image 24 août 2026, 15_47_59.png',
        'Trois guides Joie d\'Être consacrés au massage relaxant, aux rituels du visage et à la pratique professionnelle',
      ),
    },
    {
      _type: 'homeServices',
      hidden: false,
      eyebrow: 'Nos prestations',
      title: 'Des prestations pensées\n*avec expertise.*',
      text: 'Des soins ciblés, réalisés avec précision et bienveillance pour révéler l’éclat naturel.',
      cards: keyed([
        {
          _type: 'card',
          key: 'massage',
          title: 'Massages',
          description: 'Techniques expertes pour relâcher, rééquilibrer et revitaliser.',
          button: 'Découvrir les massages',
          photo: await image(
            'design/section prestations/ChatGPT Image 24 août 2026, 16_06_04 (1).png',
            'Femme profitant de la chaleur et du calme avant un massage',
          ),
          icon: await image('src/assets/prestations-icons/massage.png'),
        },
        {
          _type: 'card',
          key: 'soins',
          title: 'Soins visage',
          description: 'Soins sur-mesure pour purifier, hydrater et illuminer la peau.',
          button: 'Découvrir les soins',
          photo: await image(
            'design/section prestations/ChatGPT Image 24 août 2026, 16_06_05 (2).png',
            'Soin du visage dans une atmosphère tropicale lumineuse',
          ),
          icon: await image('src/assets/prestations-icons/facial.png'),
        },
        {
          _type: 'card',
          key: 'epilation',
          title: 'Épilation',
          description: 'Méthodes douces et précises pour une peau nette et soignée.',
          button: 'Découvrir l’épilation',
          photo: await image(
            'design/section prestations/ChatGPT Image 24 août 2026, 16_06_05 (3).png',
            'Peau soignée dans une lumière naturelle aux ombres tropicales',
          ),
          icon: await image('src/assets/prestations-icons/epilation.png'),
        },
      ]),
    },
    {
      _type: 'homeAbout',
      hidden: false,
      eyebrow: 'À propos',
      title: 'Une approche humaine,\nexigeante et *passionnée*',
      text: 'Sabrina transmet son savoir-faire à travers des formations, des ateliers et des ressources conçues avec soin. Son objectif : allier maîtrise technique, sens du geste et bienveillance.',
      values: await iconCards([
        ['Transmission', 'Partager un savoir-faire précieux pour faire grandir chaque praticien.ne.', 'src/assets/about-icons/transmission.png'],
        ['Exigence', 'Des contenus rigoureux et actualisés pour une pratique professionnelle.', 'src/assets/about-icons/exigence.png'],
        ['Bienveillance', 'Une pédagogie à l’écoute, centrée sur l’humain et le respect.', 'src/assets/about-icons/bienveillance.png'],
      ]),
      photo: await image('design/section a propos/ChatGPT Image 24 août 2026, 00_23_41 1.png', 'Sabrina dans son espace de soin'),
    },
    {
      _type: 'homeFaq',
      hidden: false,
      title: 'Questions *fréquentes*',
      intro: 'Tout ce que vous souhaitez savoir avant de réserver un soin, de rejoindre une formation ou de découvrir les guides.',
      questions: previous?.faq,
      photo: await image(
        'design/section faq/ChatGPT Image 24 août 2026, 21_58_47.png',
        'Serviettes de soin, fleurs de frangipanier et bougie dans une ambiance apaisante',
      ),
    },
    {
      _type: 'homeReviews',
      hidden: false,
      eyebrow: 'Témoignages',
      title: 'Vous en parlez *mieux* que nous',
    },
    {
      _type: 'homeClosing',
      hidden: false,
      eyebrow: 'Prête à commencer ?',
      title: 'Rejoignez l’univers *Joie d’Être*',
      text: 'Formations, ateliers, e-learning et guides pratiques : découvrez un accompagnement pensé pour apprendre, pratiquer et transmettre.',
      primaryButton: 'Découvrir les formations',
      secondaryButton: 'Nous contacter',
    },
  ]),
})

await client
  .patch('settings')
  .set({
    faqAside: {
      title: 'Une autre\n*question ?*',
      text: 'Écrivez à Sabrina pour un accompagnement personnalisé.',
      button: 'Nous contacter',
    },
  })
  .commit()
console.log('settings : encadré « Une autre question ? » enregistré')

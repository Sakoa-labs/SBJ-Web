import { contact } from '#/data/contact'
import type { LegalSection } from '#/components/legal/legal-page'

const email = { label: contact.email, href: `mailto:${contact.email}` }

// Taken from the previous site's privacy policy. Leftovers from the template it was copied
// from (Thalasseo, Travelspa, an Avis-Vérifiés opt-out address) were removed.
export const privacySections: ReadonlyArray<LegalSection> = [
  {
    id: 'responsable',
    title: 'Responsable du traitement',
    blocks: [
      {
        type: 'p',
        text: `Les données personnelles collectées sur le Site sont traitées par Sabrina Ikhlef EI (Sabrina Joie d’Être), ${contact.address}.`,
      },
      {
        type: 'p',
        text: ['Pour toute question relative à vos données, vous pouvez écrire à ', email, '.'],
      },
    ],
  },
  {
    id: 'informations-recueillies',
    title: 'Les informations que nous recueillons',
    blocks: [
      { type: 'h3', text: 'Les données que vous nous transmettez volontairement' },
      {
        type: 'p',
        text: 'Lorsque vous remplissez un formulaire pour réserver une prestation bien-être ou commander un programme Joie d’Être, le Site recueille les informations personnelles que vous avez accepté de nous communiquer.',
      },
      {
        type: 'p',
        text: 'Il s’agit notamment de votre nom, prénom, date de naissance, numéro de téléphone, adresses postale et électronique, ainsi que des avis que vous pouvez laisser sur le Site après un achat.',
      },
      {
        type: 'p',
        text: 'Il se peut également, à votre demande, que vous nous transmettiez certaines données relatives à votre santé, dans le seul but de les prendre en compte pour la bonne exécution des prestations commandées.',
      },
      { type: 'h3', text: 'Vos données de navigation' },
      {
        type: 'p',
        text: 'Lorsque vous naviguez sur le Site, Sabrina Joie d’Être recueille des informations liées à votre session : pages visitées, recherches effectuées, réservations, demandes de devis, ouverture des newsletters et clics vers les offres.',
      },
      {
        type: 'p',
        text: 'Lors de chacune de vos visites, nous sommes susceptibles de recueillir, conformément à la législation applicable et avec votre accord, des informations relatives aux appareils et aux réseaux depuis lesquels vous accédez à nos services : adresse IP, données de connexion, type et version du navigateur et de ses plugins, système d’exploitation.',
      },
      {
        type: 'p',
        text: [
          'Le Site utilise enfin des cookies pour stocker des informations et y accéder (voir la rubrique ',
          { label: 'Cookies', href: '#cookies' },
          ').',
        ],
      },
      { type: 'h3', text: 'Les informations relatives à vos transactions' },
      {
        type: 'p',
        text: 'Si vous effectuez un achat ou toute autre transaction financière, nous recueillons les données correspondantes : informations de paiement (numéro de carte de crédit ou de débit et autres informations relatives à votre carte), informations de compte et d’authentification, données de facturation et de livraison, et vos coordonnées.',
      },
    ],
  },
  {
    id: 'utilisation',
    title: 'Comment nous utilisons ces informations',
    blocks: [
      {
        type: 'p',
        text: 'Les données personnelles recueillies font l’objet d’un traitement informatique pour les finalités suivantes.',
      },
      { type: 'h3', text: 'Le traitement de votre commande' },
      {
        type: 'p',
        text: 'Lorsque vous passez commande sur le Site, les données indispensables au traitement de votre commande nous sont communiquées. Elles sont également traitées pour le suivi de la relation client et pour les besoins comptables (vos factures).',
      },
      { type: 'h3', text: 'L’envoi de communications' },
      {
        type: 'p',
        text: 'Nous utilisons les informations à notre disposition pour vous répondre lorsque vous nous contactez et pour vous présenter nos prestations. Sabrina Joie d’Être vous envoie plusieurs types d’emails :',
      },
      {
        type: 'list',
        items: [
          'les emails relatifs à votre commande : confirmation de réservation ou d’achat ;',
          'la newsletter ;',
          'les emails de bienvenue, d’information et de nouveautés relatives à Sabrina Joie d’Être et à vos avantages ;',
          'des emails personnalisés (voir ci-dessous).',
        ],
      },
      { type: 'h3', text: 'La personnalisation de votre expérience' },
      {
        type: 'p',
        text: 'Grâce à l’analyse de vos données de navigation et des indications que vous renseignez sur le Site, nous pouvons vous envoyer des emails ou messages personnalisés concernant les services de Sabrina Joie d’Être, afin de vous proposer les prestations qui correspondent le mieux à vos besoins.',
      },
      {
        type: 'p',
        text: 'L’étude de votre fréquentation du Site nous permet aussi d’améliorer le service que nous vous proposons et de mettre en avant les offres les plus pertinentes pour vous.',
      },
      { type: 'h3', text: 'Les analyses statistiques' },
      {
        type: 'p',
        text: 'Les données de vos réservations sont utilisées pour établir des statistiques qui nous permettent de piloter l’activité de Sabrina Joie d’Être.',
      },
    ],
  },
  {
    id: 'partage',
    title: 'Le partage de vos informations',
    blocks: [
      {
        type: 'p',
        text: 'Nous partageons des informations avec les forces de l’ordre ou en réponse à des demandes légales.',
      },
    ],
  },
  {
    id: 'conservation',
    title: 'La durée de conservation',
    blocks: [
      {
        type: 'p',
        text: 'Si vous n’êtes pas client, les données que vous nous communiquez lors de votre abonnement à nos newsletters, d’une demande de prestation ou d’un achat sont conservées pendant 3 ans à compter de votre dernière activité sur le Site ou sur nos newsletters, ou de votre dernière demande de prestation.',
      },
      {
        type: 'p',
        text: 'Si vous êtes client, les données relatives à vos réservations, ainsi que vos données de navigation, sont conservées pendant 5 ans à compter de la date de réservation ou d’achat, ou dans la limite de 3 ans à compter de votre dernière activité sur le Site ou sur nos newsletters, ou de votre dernière demande de prestation.',
      },
      {
        type: 'p',
        text: 'Au terme de ces délais, ou dès votre demande de suppression, vos données personnelles sont supprimées.',
      },
      {
        type: 'p',
        text: 'Toutefois, les données nécessaires pour satisfaire à nos obligations légales, comptables et fiscales sont conservées pendant 10 ans, comme l’exige l’article L.123-22 du Code de commerce pour les factures.',
      },
    ],
  },
  {
    id: 'protection',
    title: 'La protection de vos données',
    blocks: [
      {
        type: 'p',
        text: 'Sabrina Joie d’Être met en œuvre les mesures techniques et organisationnelles nécessaires pour protéger les données personnelles qu’elle détient contre tout accès, modification, destruction ou divulgation non autorisés. Notamment :',
      },
      {
        type: 'list',
        items: [
          'l’accès à vos données est strictement réservé aux salariés et sous-traitants de Sabrina Joie d’Être, uniquement dans le cadre du traitement nécessaire et pour lequel vous avez donné votre consentement ;',
          'toute intrusion illégale dans notre base de données donne lieu à une alerte immédiate et à la mise en place des actions nécessaires.',
        ],
      },
    ],
  },
  {
    id: 'vos-droits',
    title: 'Vos droits',
    blocks: [
      {
        type: 'p',
        text: 'Conformément au Règlement général sur la protection des données (RGPD), vous pouvez :',
      },
      {
        type: 'list',
        items: [
          'accéder à vos données personnelles ;',
          'corriger ou mettre à jour vos informations ;',
          'demander la suppression de vos données ;',
          'vous opposer à l’utilisation de vos données à des fins commerciales, comme les newsletters ;',
          'retirer votre consentement à tout moment, si vous l’avez donné pour certaines utilisations de vos données.',
        ],
      },
      {
        type: 'p',
        text: 'Vous pouvez également vous opposer au traitement de vos données ou en demander la limitation. Pour ne plus recevoir nos communications, il suffit de cliquer sur le lien « se désabonner » présent dans chacune d’elles.',
      },
      {
        type: 'p',
        text: ['Pour exercer vos droits, écrivez-nous à ', email, '.'],
      },
      {
        type: 'p',
        text: [
          'Vous avez également la possibilité d’introduire une réclamation auprès de la ',
          { label: 'CNIL', href: 'https://www.cnil.fr/fr/plaintes' },
          ', autorité de contrôle en France.',
        ],
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    blocks: [
      { type: 'h3', text: 'Qu’est-ce qu’un cookie ?' },
      {
        type: 'p',
        text: 'Un cookie est une donnée stockée sur votre ordinateur, tablette ou mobile lorsque vous naviguez sur internet. Il permet au site de reconnaître votre navigateur, principalement pour garder en mémoire vos choix et préférences. Les cookies ne causent aucun dommage à votre appareil.',
      },
      { type: 'h3', text: 'Leur utilisation sur sabrinajoiedetre.com' },
      {
        type: 'p',
        text: 'Lorsque vous naviguez sur le Site, vous nous autorisez, via un cookie de consentement, à recueillir des données sur votre navigation. Elles servent à vous proposer les offres les plus adaptées à vos attentes, sur le Site comme dans nos newsletters. Ces cookies peuvent être déposés par nous ou par des tiers, pour des outils de mesure d’audience et des campagnes de reciblage. Les informations qui en sont issues sont conservées 13 mois au maximum.',
      },
      {
        type: 'p',
        text: 'Si vous refusez certains cookies, certaines fonctionnalités du Site pourront ne pas fonctionner. Refuser les cookies publicitaires ne supprime pas les publicités : celles que vous verrez ne seront simplement plus basées sur vos préférences.',
      },
      { type: 'h3', text: 'Les types de cookies utilisés' },
      {
        type: 'list',
        items: [
          'Les cookies techniques, indispensables au bon fonctionnement du Site.',
          'Les cookies fonctionnels, qui retiennent vos préférences pour adapter nos contenus à vos attentes.',
          'Les cookies analytiques, qui mesurent la façon dont vous naviguez sur le Site : pages consultées, type de navigateur et d’appareil, nombre de clics. Ces données restent anonymes et ne révèlent pas votre identité.',
          'Les cookies publicitaires, qui affichent des publicités de Sabrina Joie d’Être ou de tiers sur d’autres sites, à partir de votre navigation sur le Site (le « reciblage »).',
        ],
      },
      { type: 'h3', text: 'Gérer vos choix' },
      {
        type: 'p',
        text: 'Vous pouvez autoriser, refuser ou supprimer les cookies à tout moment depuis les paramètres de votre navigateur :',
      },
      {
        type: 'list',
        items: [
          [{ label: 'Safari', href: 'https://support.apple.com/fr-fr/guide/safari/sfri11471/mac' }],
          [{ label: 'Chrome', href: 'https://support.google.com/chrome/answer/95647?hl=fr' }],
          [
            {
              label: 'Firefox',
              href: 'https://support.mozilla.org/fr/kb/autoriser-bloquer-cookies-preferences-sites',
            },
          ],
          [
            {
              label: 'Edge',
              href: 'https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
            },
          ],
          [{ label: 'Opera', href: 'https://help.opera.com/en/latest/web-preferences/#cookies' }],
        ],
      },
      {
        type: 'p',
        text: [
          'Vous pouvez aussi gérer vos préférences publicitaires sur ',
          { label: 'Youronlinechoices', href: 'https://www.youronlinechoices.com/fr/controler-ses-cookies/' },
          ', proposé par les professionnels de la publicité digitale réunis au sein de l’EDAA (European Digital Advertising Alliance) et géré en France par l’Interactive Advertising Bureau (IAB) France.',
        ],
      },
    ],
  },
]

import { contact } from '#/components/legal/legal-page'
import type { LegalSection } from '#/components/legal/legal-page'

const email = { label: contact.email, href: `mailto:${contact.email}` }

// Taken from the previous site's terms of sale, regrouped by theme. Template placeholders
// ("société … (dénomination sociale)", "RCS de Paris XXXX") were replaced by the real
// business details from the company register.
export const termsSections: ReadonlyArray<LegalSection> = [
  {
    id: 'objet',
    title: 'Objet et champ d’application',
    blocks: [
      {
        type: 'p',
        text: 'Les présentes conditions générales de vente (CGV) détaillent les droits et obligations de Sabrina Joie d’Être et de ses clients dans le cadre de la vente de prestations de massage bien-être, de soins beauté, de formations, de programmes en ligne et de guides numériques (e-books).',
      },
      {
        type: 'p',
        text: 'Toute Commande passée sur le Site, comme toute acceptation d’un devis ou d’un bon de commande comportant la mention « Je reconnais avoir pris connaissance et j’accepte les conditions générales de vente », implique l’adhésion sans réserve de l’Acheteur aux présentes conditions, qui prévalent sur tout autre document. L’Acheteur reconnaît en avoir pris connaissance avant de passer sa Commande.',
      },
      {
        type: 'p',
        text: 'Sabrina Joie d’Être se réserve le droit de modifier les présentes conditions à tout moment. Les conditions applicables à une Commande sont celles acceptées par l’Acheteur au moment de la passer.',
      },
    ],
  },
  {
    id: 'definitions',
    title: 'Définitions',
    blocks: [
      {
        type: 'list',
        items: [
          `Sabrina Joie d’Être : Sabrina Ikhlef EI, entrepreneur individuel exerçant sous le nom Sabrina Joie d’Être, SIRET 841 169 667 00034, ${contact.address}.`,
          'Site : le site internet sabrinajoiedetre.com, sur lequel les prestations de massage bien-être, les soins beauté, les formations et les programmes en ligne sont présentés et vendus.',
          'Produits : les produits commercialisés par Sabrina Joie d’Être et proposés à la vente sur le Site.',
          'Soins : les prestations de massage et d’esthétique de Sabrina Joie d’Être proposées à la vente sur le Site.',
          'Acheteur : la personne physique qui, à des fins non professionnelles, commande sur le Site une ou plusieurs prestations de massage bien-être, soins beauté, formations ou programmes en ligne.',
          'Bénéficiaire : l’Acheteur, ou le tiers à qui l’Acheteur offre la prestation.',
          'Commande : le contrat de vente conclu entre Sabrina Joie d’Être et l’Acheteur. Toute Commande implique une obligation de paiement.',
          'Parties : ensemble ou séparément, l’Acheteur et Sabrina Joie d’Être.',
        ],
      },
    ],
  },
  {
    id: 'prix',
    title: 'Prix',
    blocks: [
      {
        type: 'p',
        text: 'Les prix sont ceux en vigueur au jour de la Commande. Ils sont affichés en euros, toutes taxes comprises, hors frais de traitement et d’expédition. Le descriptif de chaque prestation précise les éléments inclus dans le prix et les éventuelles conditions particulières.',
      },
      {
        type: 'p',
        text: 'Sabrina Joie d’Être peut modifier ses tarifs à tout moment, mais s’engage à facturer les prestations et marchandises commandées aux prix indiqués lors de l’enregistrement de la Commande. Les offres promotionnelles sont valables telles qu’elles sont publiées sur le Site. Aucun escompte n’est consenti en cas de paiement anticipé.',
      },
      { type: 'h3', text: 'Frais de livraison des Produits' },
      {
        type: 'p',
        text: 'Les frais de traitement et d’expédition dépendent du mode de livraison choisi par l’Acheteur :',
      },
      {
        type: 'list',
        items: [
          'France, en point relais : 2,90 € en dessous de 20 € d’achat, gratuit au-delà.',
          'France et Belgique, à domicile : 4,90 €, offert à partir de 55 € d’achat.',
        ],
      },
      {
        type: 'p',
        text: 'Le forfait applicable est indiqué et débité lors de la validation finale de la Commande. Le montant d’une e-carte cadeau ne couvre pas les frais de livraison.',
      },
    ],
  },
  {
    id: 'commande',
    title: 'Commande',
    blocks: [
      {
        type: 'p',
        text: 'Avant de commander, l’Acheteur peut prendre connaissance sur le Site des caractéristiques essentielles des Produits et Soins qu’il souhaite acheter. Pour commander, il se connecte à son compte avec son adresse email et son mot de passe, ou crée un compte en renseignant sa civilité, son nom, son prénom, son adresse email et un mot de passe.',
      },
      {
        type: 'p',
        text: 'Une Commande est considérée comme passée, et les présentes conditions acceptées, dès que l’Acheteur a validé son paiement. En cochant la case d’acceptation des conditions générales de vente et en validant sa Commande, l’Acheteur l’accepte sans réserve ; ce geste a la même valeur qu’une signature manuscrite. Les données enregistrées par Sabrina Joie d’Être et par le prestataire de paiement sécurisé constituent la preuve de la nature, du contenu et de la date de la Commande.',
      },
      {
        type: 'p',
        text: 'La vente n’est définitive qu’après l’envoi de la confirmation de Commande et la réception du paiement intégral. Nous recommandons à l’Acheteur de conserver une copie de cette confirmation.',
      },
      {
        type: 'p',
        text: 'Sabrina Joie d’Être se réserve le droit d’annuler, sans indemnité, toute Commande d’un Acheteur avec qui existerait un litige de paiement antérieur, ou pour tout autre motif légitime, notamment une Commande au caractère anormal. Les Produits et Soins vendus sur le Site ne sont pas destinés à la revente : les Commandes passées dans ce but peuvent être annulées et les comptes concernés suspendus.',
      },
      {
        type: 'p',
        text: 'En cas d’indisponibilité d’un Produit après la Commande, l’Acheteur en est informé dans les meilleurs délais.',
      },
    ],
  },
  {
    id: 'paiement',
    title: 'Paiement',
    blocks: [
      {
        type: 'p',
        text: 'Les Commandes passées sur le Site se règlent en ligne par carte de débit ou de crédit (Visa et Mastercard). L’Acheteur indique le numéro de sa carte, sa date de validité et son code de contrôle. Le montant total est débité le jour de la Commande. Au centre, les prestations peuvent aussi être réglées par chèque, espèces, virement, carte cadeau ou bon d’achat.',
      },
      {
        type: 'p',
        text: 'En cas de remboursement, celui-ci est effectué avec le moyen de paiement utilisé pour la Commande initiale.',
      },
      {
        type: 'p',
        text: 'Sabrina Joie d’Être se réserve le droit de suspendre le traitement et la livraison d’une Commande en cas de défaut de paiement ou de refus d’autorisation par les organismes bancaires, et de refuser la Commande d’un Acheteur qui n’aurait pas réglé tout ou partie d’une précédente Commande ou avec qui existerait un litige de paiement.',
      },
      {
        type: 'p',
        text: 'L’Acheteur garantit disposer des autorisations nécessaires pour utiliser le moyen de paiement choisi. Sabrina Joie d’Être ne peut être tenue responsable d’une utilisation frauduleuse d’un moyen de paiement non détectée par le processus de vérification ; une telle utilisation n’ouvre droit à aucun remboursement.',
      },
      { type: 'h3', text: 'Sécurité des paiements' },
      {
        type: 'p',
        text: 'Sabrina Joie d’Être prend toutes les précautions raisonnables pour sécuriser les informations de Commande et de paiement. En l’absence de négligence de sa part, elle ne peut être tenue responsable d’une perte subie par l’Acheteur si un tiers accède sans autorisation aux données fournies lors de la Commande.',
      },
      { type: 'h3', text: 'E-carte cadeau' },
      {
        type: 'p',
        text: 'L’e-carte cadeau Sabrina Joie d’Être est valable un an à compter de sa date d’achat, uniquement sur le Site. Passé ce délai, elle ne peut plus être utilisée ni remboursée. Pour l’utiliser :',
      },
      {
        type: 'list',
        items: [
          'choisissez vos produits sur le Site et ajoutez-les à votre panier ;',
          'à l’étape du paiement, saisissez le code unique de votre e-carte dans le champ « code promotionnel » ;',
          'son montant est déduit de votre Commande. S’il ne suffit pas, vous réglez le complément par carte bancaire.',
        ],
      },
      {
        type: 'p',
        text: 'Si la valeur de l’e-carte dépasse le montant de l’achat, la différence n’est ni remboursée ni utilisable pour un prochain achat. Sabrina Joie d’Être peut refuser une Commande si l’Acheteur ne peut justifier l’origine de l’e-carte en sa possession.',
      },
    ],
  },
  {
    id: 'retard-de-paiement',
    title: 'Retard de paiement',
    blocks: [
      {
        type: 'p',
        text: 'En cas de défaut de paiement total ou partiel, l’Acheteur doit verser à Sabrina Joie d’Être une pénalité de retard égale à trois fois le taux de l’intérêt légal en vigueur, révisé tous les six mois (ordonnance n° 2014-947 du 20 août 2014). Cette pénalité est calculée sur le montant TTC restant dû et court à compter de la date d’échéance, sans mise en demeure préalable.',
      },
      {
        type: 'p',
        text: 'En sus, toute somme non payée à sa date d’exigibilité, y compris l’acompte, donne lieu de plein droit à une indemnité forfaitaire de 40 € pour frais de recouvrement (articles L.441-10 et D.441-5 du Code de commerce).',
      },
      {
        type: 'p',
        text: 'Si, dans les quinze jours suivant l’application de ces pénalités, l’Acheteur ne s’est pas acquitté des sommes dues, la vente est résolue de plein droit et peut ouvrir droit à des dommages et intérêts au profit de Sabrina Joie d’Être.',
      },
      { type: 'h3', text: 'Réserve de propriété' },
      {
        type: 'p',
        text: 'Sabrina Joie d’Être conserve la propriété des biens vendus jusqu’au paiement intégral du prix, en principal et accessoires. Si l’Acheteur fait l’objet d’un redressement ou d’une liquidation judiciaire, elle se réserve le droit de revendiquer les marchandises vendues et restées impayées.',
      },
    ],
  },
  {
    id: 'soins',
    title: 'Massages et soins esthétiques',
    blocks: [
      {
        type: 'p',
        text: 'Ces dispositions s’appliquent à la vente en ligne de prestations de massage et d’esthétique sur le Site.',
      },
      {
        type: 'p',
        text: 'Après sa Commande, l’Acheteur reçoit un email de confirmation et de récapitulatif. Il contient un code unique qui permet de vérifier que le Soin n’a pas déjà été réalisé. Une pièce d’identité devra être présentée au rendez-vous.',
      },
      {
        type: 'p',
        text: 'Si le Soin n’est pas conforme à la Commande, Sabrina Joie d’Être s’engage à en rembourser le prix dans un délai maximum de 14 jours à compter de la demande de l’Acheteur.',
      },
    ],
  },
  {
    id: 'garanties',
    title: 'Garanties légales',
    blocks: [
      {
        type: 'p',
        text: 'L’Acheteur bénéficie de la garantie légale de conformité prévue aux articles L.217-4 et suivants du Code de la consommation, et de la garantie légale des vices cachés prévue aux articles 1641 et suivants du Code civil, pendant deux ans à compter de la livraison.',
      },
      {
        type: 'p',
        text: 'Sabrina Joie d’Être s’engage ainsi à livrer des prestations et marchandises conformes à la Commande, c’est-à-dire :',
      },
      {
        type: 'list',
        items: [
          'adaptées à l’usage habituellement attendu, correspondant à la description fournie par Sabrina Joie d’Être et présentant les qualités annoncées, notamment dans sa publicité ;',
          'ou présentant les caractéristiques définies d’un commun accord entre les Parties, ou propres à l’usage particulier recherché par l’Acheteur, porté à la connaissance de Sabrina Joie d’Être et accepté par elle.',
        ],
      },
    ],
  },
  {
    id: 'livraison',
    title: 'Expédition et livraison',
    blocks: [
      {
        type: 'p',
        text: 'La livraison des Produits est limitée à la France métropolitaine et à la Belgique. Elle est effectuée par remise directe à l’Acheteur, par avis de mise à disposition, ou par dépôt à l’adresse indiquée lors de la Commande.',
      },
      {
        type: 'p',
        text: 'Sabrina Joie d’Être prépare la Commande sous 24 heures à 2 jours ouvrés. Elle est livrée en 3 à 5 jours ouvrés en moyenne selon le mode de livraison choisi, et dans tous les cas dans un délai maximum de 30 jours à compter du lendemain de la Commande, y compris en période de vacances, de soldes, de mouvements sociaux ou d’intempéries. Le délai indiqué lors de la Commande est donné à titre indicatif.',
      },
      {
        type: 'p',
        text: 'Sabrina Joie d’Être n’est pas responsable d’une livraison rendue impossible par une adresse ou une identité erronée ou incomplète. Une Commande non retirée en point relais dans un délai de 5 jours lui est retournée ; à réception, le montant des Produits est remboursé. Si le point relais choisi est indisponible, notamment l’été ou en période de pointe, d’autres modes de livraison sont proposés.',
      },
      {
        type: 'p',
        text: 'Les Commandes ne sont pas expédiées en plusieurs fois : si un article est en rupture de stock, l’ensemble de la Commande est conservé jusqu’à ce que tous les articles soient disponibles. En cas de rupture prolongée, Sabrina Joie d’Être peut annuler l’article manquant, livrer les autres et rembourser les sommes versées pour l’article annulé.',
      },
      { type: 'h3', text: 'À réception de la Commande' },
      {
        type: 'p',
        text: [
          'L’Acheteur formule toutes réserves auprès du transporteur, ou refuse le colis s’il semble avoir été ouvert ou endommagé, et signale l’incident à ',
          email,
          '. En cas de marchandises manquantes ou détériorées, ces réserves doivent être confirmées par écrit dans les cinq jours suivant la livraison, par courrier recommandé avec accusé de réception. À défaut, la Commande est considérée comme livrée en bon état.',
        ],
      },
    ],
  },
  {
    id: 'retractation',
    title: 'Droit de rétractation et retours',
    blocks: [
      {
        type: 'p',
        text: 'Les Produits ne sont pas échangeables. Si l’Acheteur change d’avis, il retourne le Produit, qui lui est remboursé, puis passe une nouvelle Commande sur le Site.',
      },
      {
        type: 'p',
        text: 'Conformément aux articles L.221-18 et suivants du Code de la consommation, l’Acheteur dispose d’un délai de quatorze jours francs à compter de la livraison pour retourner les Produits livrés, ou pour se rétracter de l’achat d’un Soin. Si ce délai expire un samedi, un dimanche ou un jour férié, il est prolongé jusqu’au premier jour ouvré suivant.',
      },
      {
        type: 'p',
        text: 'Les sommes versées sont remboursées au plus tard 14 jours après l’exercice du droit de rétractation.',
      },
      {
        type: 'list',
        items: [
          'Si la Commande initiale donnait droit à un avantage (livraison gratuite, cadeau…), les Produits retournés sont remboursés sous réserve de la restitution de cet avantage.',
          'Si les articles retournés font passer la Commande sous le seuil de la livraison gratuite, les frais de port sont déduits du remboursement.',
          'Pour des raisons d’hygiène et de sécurité, le droit de rétractation ne s’applique pas aux Produits retournés descellés.',
        ],
      },
    ],
  },
  {
    id: 'responsabilite',
    title: 'Responsabilité et force majeure',
    blocks: [
      {
        type: 'p',
        text: 'Sabrina Joie d’Être ne peut être tenue responsable des dommages indirects pouvant découler de l’achat des Produits ou des Soins, ni des dommages liés à l’utilisation du réseau internet, tels qu’un virus, une intrusion, une perte de données ou une panne de service.',
      },
      {
        type: 'p',
        text: 'Sa responsabilité ne peut pas non plus être engagée si l’inexécution ou le retard dans l’exécution de l’une de ses obligations, y compris en cas de rupture de stock ou d’indisponibilité d’un Produit ou d’un Soin, découle d’un cas de force majeure, c’est-à-dire d’un événement échappant à son contrôle, imprévisible et irrésistible au sens de l’article 1218 du Code civil.',
      },
    ],
  },
  {
    id: 'donnees-personnelles',
    title: 'Données personnelles',
    blocks: [
      {
        type: 'p',
        text: 'Les informations recueillies lors d’une Commande sont nécessaires à son traitement par Sabrina Joie d’Être et ses partenaires. Sabrina Joie d’Être s’engage à en préserver la confidentialité.',
      },
      {
        type: 'p',
        text: 'Conformément à la loi n° 78-17 du 6 janvier 1978 modifiée et au Règlement général sur la protection des données n° 2016/679 du 27 avril 2016, l’Acheteur dispose d’un droit d’accès, de rectification, d’opposition, de suppression sous réserve de motifs légitimes, de portabilité de ses données, ainsi que du droit de définir des directives sur leur sort après son décès.',
      },
      {
        type: 'p',
        text: 'Sabrina Joie d’Être ne peut lui adresser d’offres promotionnelles par courrier ou par email, y compris la newsletter, qu’avec son accord préalable donné lors de son inscription.',
      },
      {
        type: 'p',
        text: [
          'Pour en savoir plus, consultez notre ',
          { label: 'politique de confidentialité', href: '/politique-de-confidentialite' },
          '.',
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
        text: 'Le Site et l’ensemble de ses éléments (marques, logos, photographies, images, illustrations, textes, slogans, vidéos…) sont la propriété exclusive de Sabrina Joie d’Être et sont protégés par le Code de la propriété intellectuelle. Aucun droit d’utilisation n’est concédé.',
      },
      {
        type: 'p',
        text: 'La reproduction des documents publiés sur le Site n’est autorisée qu’à titre d’information, pour un usage strictement personnel et privé. Toute autre reproduction, représentation, utilisation, adaptation ou modification, totale ou partielle, sur quelque support que ce soit, notamment à des fins professionnelles, est interdite sans l’autorisation expresse de Sabrina Joie d’Être et constitue un délit puni par la loi.',
      },
      {
        type: 'p',
        text: 'La création de liens hypertextes vers le Site nécessite l’accord préalable et écrit de Sabrina Joie d’Être, qui n’est pas responsable du contenu des sites liés au Site.',
      },
    ],
  },
  {
    id: 'litiges',
    title: 'Médiation et litiges',
    blocks: [
      {
        type: 'p',
        text: 'En l’absence de réponse dans un délai raisonnable à une réclamation écrite de l’Acheteur, ou à défaut d’accord amiable, l’Acheteur peut recourir gratuitement à la médiation.',
      },
      {
        type: 'p',
        text: 'Conformément à l’ordonnance n° 2015-1033 du 20 août 2015 et au décret n° 2015-1382 du 30 octobre 2015, il peut saisir le CMAP (Centre de Médiation et d’Arbitrage de Paris) pour tout litige de consommation, sous réserve de l’article L.612-2 du Code de la consommation :',
      },
      {
        type: 'list',
        items: [
          [
            'en ligne, sur ',
            { label: 'www.mediateur-conso.cmap.fr', href: 'https://www.mediateur-conso.cmap.fr' },
            ' ;',
          ],
          'par courrier simple ou recommandé : CMAP Médiation Consommation, 39 avenue Franklin D. Roosevelt, 75008 Paris ;',
          [
            'par email, à ',
            { label: 'consommation@cmap.fr', href: 'mailto:consommation@cmap.fr' },
            '.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'La demande doit comporter les coordonnées de l’Acheteur, le nom et l’adresse de Sabrina Joie d’Être, un exposé succinct des faits et la preuve d’une réclamation écrite préalable auprès de Sabrina Joie d’Être. Le médiateur ne peut examiner une demande manifestement infondée ou abusive, déjà examinée ou en cours d’examen par un autre médiateur ou un tribunal, introduite plus d’un an après la réclamation écrite, ou qui ne relève pas de sa compétence.',
      },
      {
        type: 'p',
        text: 'Les présentes conditions et les ventes qu’elles régissent sont soumises au droit français. À défaut de médiation, tout litige relatif à leur interprétation, leur exécution ou leur rupture relève de la compétence exclusive des tribunaux français.',
      },
    ],
  },
]

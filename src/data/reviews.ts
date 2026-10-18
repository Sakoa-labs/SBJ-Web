// Real customer reviews, copied from the public Booksy and Google Maps pages (October 2026).
// Names are shortened to the first name and the initial of the last name.
// Some long texts are shortened; spelling and punctuation are tidied and emojis removed.

export type ReviewSource = 'Google' | 'Booksy'

export type Review = {
  name: string
  service: string
  source: ReviewSource
  text: string
  // Booksy marks a review as verified when it comes from a real appointment; Google has no such check.
  verified?: boolean
  // Only with the customer's consent; the default avatar is shown otherwise.
  avatar?: string
}

export const reviews: ReadonlyArray<Review> = [
  {
    name: 'Audrey B.',
    service: 'Massage californien',
    source: 'Google',
    text: 'Sabrina est très professionnelle et sait vous mettre en confiance. Le massage californien qu’elle m’a fait était très agréable. Elle vous laisse le choix de l’intensité de la pression et met tout en œuvre pour favoriser le bien-être. Je vous la recommande les yeux fermés.',
  },
  {
    name: 'Laëtitia G.',
    service: 'Épilation & massage du visage',
    source: 'Booksy',
    verified: true,
    text: 'Une expérience parfaite du début à la fin ! La praticienne est douce, attentionnée et très professionnelle. L’épilation s’est très bien passée et le massage du visage était tout simplement merveilleux. Je suis ressortie détendue et satisfaite. Merci encore !',
  },
  {
    name: 'Salima S.',
    service: 'Soin du visage',
    source: 'Google',
    text: 'Sabrina a juste été incroyable. Ce petit moment de soin du visage m’a permis de me relâcher au maximum. J’étais comme sur un petit nuage. Elle travaille avec beaucoup d’expertise et elle sait chouchouter le client. Elle donne aussi de très bons conseils. Je recommande à 100 %.',
  },
  {
    name: 'John B.',
    service: 'Massage Joie d’Être',
    source: 'Booksy',
    verified: true,
    text: 'Une belle expérience de massage avec Sabrina, une praticienne à l’écoute, respectueuse et profondément connectée à son art. Son approche intuitive, à la fois douce et ancrée, m’a permis de relâcher, de respirer et de retrouver l’essentiel : le calme intérieur.',
  },
  {
    name: 'Morgane A.',
    service: 'Massage californien',
    source: 'Booksy',
    verified: true,
    text: 'Un vrai moment de détente, Sabrina est douce, accueillante et très à l’écoute. Je recommande sans hésiter !',
  },
  {
    name: 'Florence F.',
    service: 'Massage californien',
    source: 'Google',
    text: 'J’ai beaucoup apprécié le massage californien, c’était très relaxant et réalisé par les mains de fée de Sabrina. Je la recommande vivement pour ses massages réalisés par une professionnelle. J’attends vivement le prochain.',
  },
  {
    name: 'Elodie M.',
    service: 'Massage crânien & visage',
    source: 'Booksy',
    verified: true,
    text: 'J’ai vécu une expérience hors du commun, elle a réussi à m’enlever des tensions présentes depuis longtemps. Je me sens légère et détendue ! Je recommande grandement ! Merci Sabrina, je reviendrai.',
  },
  {
    name: 'Séverine P.',
    service: 'Épilation du visage',
    source: 'Google',
    text: 'J’ai été super bien accueillie par Sabrina qui a réalisé une bonne prestation d’épilation du visage sur moi. Je suis satisfaite et je recommande.',
  },
  {
    name: 'Catherine C.',
    service: 'Massage californien',
    source: 'Booksy',
    verified: true,
    text: 'Quelle belle découverte ! Sabrina est très à l’écoute, dans la bienveillance, très professionnelle. J’ai eu un massage de dingue ! Tellement que j’y retourne très bientôt. Merci Sabrina !',
  },
  {
    name: 'Alicia A.',
    service: 'Massage Joie d’Être',
    source: 'Booksy',
    verified: true,
    text: 'J’ai passé un moment agréable auprès de Sabrina. J’avais des douleurs dorsales et cervicales et elles ont disparu ce matin. Merci pour cette belle expérience.',
  },
  {
    name: 'Océane R.',
    service: 'Massage californien',
    source: 'Booksy',
    verified: true,
    text: 'Sabrina est une vraie petite fée qui sait donner de l’attention sur nos tensions connues ou non ! C’est une réelle source de bien-être et de détente qui nous sort du quotidien.',
  },
]

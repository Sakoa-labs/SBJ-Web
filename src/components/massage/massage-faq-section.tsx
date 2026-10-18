import type { FaqQuestion } from '#/components/landing/faq-section'
import { ServiceFaqSection } from '#/components/services/service-faq-section'
import faqAmbience from '../../../design/massage/faq.png'

// Questions taken from the previous site's FAQ, which was mostly about massage.
const questions: ReadonlyArray<FaqQuestion> = [
  {
    question: 'Quel massage choisir ?',
    answer:
      'Pour un premier rendez-vous, Sabrina propose le massage Joie d’Être Signature : après un échange, elle adapte les techniques, la pression, le rythme et les zones à vos besoins du moment.',
  },
  {
    question: 'À qui s’adressent les massages ?',
    answer:
      'Aux femmes et aux hommes à partir de 18 ans ; avant 18 ans, une autorisation parentale écrite et signée est demandée. Actifs, sportifs ou sédentaires, ils conviennent à toute personne qui veut relâcher ses tensions, mieux dormir ou simplement s’offrir un moment de détente.',
  },
  {
    question: 'Les massages ont-ils un caractère thérapeutique ?',
    answer:
      'Non. Ce sont des massages bien-être, sans caractère thérapeutique ni sensuel. Toute demande déplacée est refusée et peut être signalée.',
  },
  {
    question: 'Comment se déroule un massage d’une heure ?',
    answer:
      'Vous remplissez d’abord ensemble un bilan de santé (allergies, contre-indications, raison de votre venue). Vous vous installez ensuite seul(e) en cabine, puis le massage commence en musique : environ 30 minutes sur l’arrière du corps et 30 minutes sur l’avant. À la fin, Sabrina vous réveille doucement et vous laisse vous rhabiller à votre rythme.',
  },
  {
    question: 'Y a-t-il des contre-indications ?',
    answer:
      'Oui, partielles ou totales : fièvre, phlébite ou varices, maladie infectieuse ou inflammatoire aiguë, chirurgie de moins de 6 mois, injections esthétiques de moins de 3 mois, grossesse, maladie grave sans avis médical favorable, blessure ou fracture récente… En cas de doute, demandez l’avis de votre médecin et parlez-en à Sabrina avant la séance.',
  },
  {
    question: 'Je suis pudique : mon intimité est-elle respectée ?',
    answer:
      'Toujours. Vous restez couvert(e) d’un paréo et seule la zone massée est découverte. Il n’est pas obligatoire de se déshabiller : le massage Étoile (visage, crâne, mains et pieds) ou un massage ciblé sur le dos ou les jambes se reçoivent en partie habillé(e).',
  },
  {
    question: 'Faut-il prévoir une tenue particulière ?',
    answer:
      'Non, venez comme vous êtes, dans une tenue que vous n’avez pas peur de tacher d’huile. Vous pouvez garder vos sous-vêtements ou utiliser les sous-vêtements jetables fournis.',
  },
  {
    question: 'Quels produits utilisez-vous ?',
    answer:
      'Des produits 100 % naturels : des huiles chaudes neutres pour les peaux sensibles, parfumées, ou aux huiles essentielles en cas de douleurs. Sabrina travaille surtout avec Celyxir, marque réunionnaise, et Isomarine, cosmétiques bretons à base d’algues. Ils sont aussi disponibles à la vente sur commande.',
  },
  {
    question: 'Comment me préparer avant le massage ?',
    answer:
      'Évitez de trop manger, retirez vos bijoux et passez votre téléphone en mode avion. Inutile de laver vos cheveux avant de venir : le massage se termine par le cuir chevelu. Si vous avez vos règles, signalez-le simplement.',
  },
  {
    question: 'Puis-je parler ou m’endormir pendant le massage ?',
    answer:
      'Vous pouvez vous endormir ou rester éveillé(e), comme vous le sentez. Sabrina préfère le silence pour rester à l’écoute de votre corps, mais n’hésitez jamais à l’interrompre : pression, zone sensible, inconfort, tout se dit à tout moment.',
  },
  {
    question: 'Que faire après le massage ?',
    answer:
      'Levez-vous doucement, attendez au moins 3 heures avant de vous doucher et buvez davantage d’eau. Évitez les efforts intenses le jour même et le lendemain, et comptez environ 3 jours avant un autre soin. Idéalement, un massage par mois aide à entretenir ce bien-être.',
  },
  {
    question: 'Comment réserver mon massage ?',
    answer:
      'Choisissez votre massage puis utilisez le bouton de réservation pour sélectionner votre créneau.',
  },
  {
    question: 'Puis-je offrir un massage ?',
    answer:
      'Oui. Contactez Sabrina au +262 693 45 14 30 pour choisir le massage et recevoir un bon cadeau à imprimer.',
  },
]

export function MassageFaqSection() {
  return (
    <ServiceFaqSection
      title={
        <>
          Vos questions,{' '}
          <em className="inline-block pb-1 font-normal text-[#d4af37]">
            en toute sérénité.
          </em>
        </>
      }
      titleClassName="xl:whitespace-nowrap xl:text-[clamp(3.8rem,4.4vw,4.6rem)]"
      intro="Quelques repères pour profiter pleinement de votre moment."
      questions={questions}
      aside={{
        image: faqAmbience,
        imageAlt:
          'Pierres chaudes, huile de massage, serviettes roulées et fleur de frangipanier',
        imageWidth: 1169,
        imageHeight: 1346,
      }}
    />
  )
}

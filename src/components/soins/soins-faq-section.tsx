import type { FaqQuestion } from '#/components/landing/faq-section'
import { ServiceFaqSection } from '#/components/services/service-faq-section'
import faqAmbience from '../../../design/soins/faq.png'

const questions: ReadonlyArray<FaqQuestion> = [
  {
    question: 'Quel soin choisir ?',
    answer:
      'L’Express Détox convient à tous les types de peau. L’Essentiel est pensé pour les peaux mixtes ou grasses.',
  },
  {
    question: 'L’Essentiel convient-il à ma peau ?',
    answer:
      'Il est pensé pour les peaux mixtes ou grasses. En cas de doute, Sabrina vous oriente vers le soin le plus adapté.',
  },
  {
    question: 'Qu’est-ce que le massage du visage ?',
    answer:
      'Des gestes ciblés pour détendre les traits, relâcher les tensions et redonner de l’éclat au visage.',
  },
  {
    question: 'Quels produits utilisez-vous ?',
    answer:
      'Des produits 100 % naturels, principalement Celyxir, marque réunionnaise sans additif chimique, et Isomarine, cosmétiques bretons à base d’algues. Ils sont aussi disponibles à la vente sur commande.',
  },
  {
    question: 'Y a-t-il des contre-indications ?',
    answer:
      'Signalez à Sabrina toute allergie, fièvre, maladie infectieuse, plaie ouverte ou injection esthétique de moins de 3 mois. Vous convenez ensemble de ce qui est possible avant le soin.',
  },
  {
    question: 'Comment réserver mon soin ?',
    answer:
      'Choisissez votre soin puis utilisez le bouton de réservation pour sélectionner votre créneau.',
  },
]

export function SoinsFaqSection() {
  return (
    <ServiceFaqSection
      title={
        <>
          Questions{' '}
          <em className="inline-block pb-1 font-normal text-[#d4af37]">
            fréquentes
          </em>
        </>
      }
      titleClassName="md:whitespace-nowrap"
      intro="Tout ce que vous souhaitez savoir avant votre soin du visage."
      questions={questions}
      aside={{
        image: faqAmbience,
        imageAlt:
          'Huile de soin, pinceau, crème, serviettes roulées et fleur de frangipanier',
        imageWidth: 1169,
        imageHeight: 1345,
      }}
    />
  )
}

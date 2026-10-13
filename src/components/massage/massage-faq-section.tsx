import type { FaqQuestion } from '#/components/landing/faq-section'
import { ServiceFaqSection } from '#/components/services/service-faq-section'
import faqAmbience from '../../../design/massage/faq.png'

const questions: ReadonlyArray<FaqQuestion> = [
  {
    question: 'Quel massage choisir ?',
    answer:
      'Parlez de vos envies à Sabrina. Elle vous accompagne vers le soin qui vous correspond.',
  },
  {
    question: 'Puis-je choisir la pression ?',
    answer:
      'Oui. La pression est ajustée avec vous avant le soin et peut évoluer à tout moment pendant le massage.',
  },
  {
    question: 'Comment réserver mon massage ?',
    answer:
      'Choisissez votre massage puis utilisez le bouton de réservation pour sélectionner votre créneau.',
  },
  {
    question: 'Puis-je offrir un massage ?',
    answer:
      'Oui. Contactez Sabrina pour choisir le massage et recevoir un bon cadeau personnalisé.',
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

import type { FaqQuestion } from '#/components/landing/faq-section'
import { ServiceFaqSection } from '#/components/services/service-faq-section'
import faqAmbience from '../../../design/epilations/faq.png'

const questions: ReadonlyArray<FaqQuestion> = [
  {
    question: 'Quelles zones peut-on épiler ?',
    answer:
      'Le visage, les aisselles, les bras, les jambes et le maillot. Chaque zone peut être réservée selon vos besoins.',
  },
  {
    question: 'Que comprend l’épilation du visage ?',
    answer:
      'Les sourcils, la lèvre et le menton, à l’unité ou réunis avec les joues dans l’épilation visage complet.',
  },
  {
    question: 'Quels forfaits sont proposés ?',
    answer:
      'Trois forfaits maillot (simple, échancré, semi ou intégral), chacun complété par quatre zones de votre choix.',
  },
  {
    question: 'Comment réserver mon épilation ?',
    answer:
      'Choisissez votre zone ou votre forfait puis utilisez le bouton de réservation pour sélectionner votre créneau.',
  },
]

export function EpilationFaqSection() {
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
      intro="Tout ce que vous souhaitez savoir avant votre épilation."
      questions={questions}
      aside={{
        image: faqAmbience,
        imageAlt:
          'Bol de cire tiède, spatule, serviette roulée et fleur de frangipanier',
        imageWidth: 1172,
        imageHeight: 1342,
      }}
    />
  )
}

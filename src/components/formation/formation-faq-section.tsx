import type { FaqQuestion } from '#/components/landing/faq-section'
import { ServiceFaqSection } from '#/components/services/service-faq-section'
import faqAmbience from '../../../design/section faq/ChatGPT Image 24 août 2026, 21_58_47.png'

// Answers are placeholders until Sabrina confirms the terms (certificate, payment).
const questions: ReadonlyArray<FaqQuestion> = [
  {
    question: 'Faut-il de l’expérience ?',
    answer:
      'Non. Les ateliers et la formation massage bien-être sont ouverts aux débutantes ; Sabrina adapte le rythme à chaque groupe.',
  },
  {
    question: 'La formation est-elle certifiante ?',
    answer:
      'Vous recevez un certificat de formation à la fin du parcours. Sabrina vous en précise le contenu avant votre inscription.',
  },
  {
    question: 'Peut-on payer en plusieurs fois ?',
    answer: 'Oui. Contactez Sabrina pour convenir ensemble d’un paiement adapté.',
  },
  {
    question: 'Comment accéder à l’e-learning ?',
    answer:
      'Après votre inscription, vous recevez vos accès à l’Espace apprenant, à consulter sur mobile, tablette ou ordinateur.',
  },
]

export function FormationFaqSection() {
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
      intro="Quelques repères avant de vous lancer."
      questions={questions}
      aside={{
        image: faqAmbience,
        imageAlt: 'Serviettes de soin, fleurs de frangipanier et bougie dans une ambiance apaisante',
        imageWidth: 1122,
        imageHeight: 1402,
      }}
    />
  )
}

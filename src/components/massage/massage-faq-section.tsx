import type { FaqQuestion } from '#/components/landing/faq-section'
import { ServiceFaqSection } from '#/components/services/service-faq-section'
import faqAmbience from '../../../design/massage/faq.png'

// The most asked questions from the previous site's FAQ, kept short so the section stays compact.
const questions: ReadonlyArray<FaqQuestion> = [
  {
    question: 'Quel massage choisir ?',
    answer:
      'Pour un premier rendez-vous, Sabrina propose le massage Joie d’Être Signature : après un échange, elle adapte les techniques, la pression et les zones à vos besoins du moment.',
  },
  {
    question: 'Comment se déroule un massage ?',
    answer:
      'Un court bilan de santé, puis le massage en musique, recouvert(e) d’un paréo : seule la zone massée est découverte. Vous pouvez garder vos sous-vêtements ou utiliser ceux, jetables, fournis. Ce sont des massages bien-être, sans caractère thérapeutique ni sensuel.',
  },
  {
    question: 'Y a-t-il des contre-indications ?',
    answer:
      'Oui, notamment la fièvre, la grossesse, une chirurgie récente, des varices ou une maladie grave sans avis médical. En cas de doute, parlez-en à Sabrina avant la séance.',
  },
  {
    question: 'Que faire après le massage ?',
    answer:
      'Levez-vous doucement, buvez davantage d’eau et attendez au moins 3 heures avant de vous doucher. Évitez les efforts intenses le jour même et le lendemain.',
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

import { faqs } from '#/data/faq'
import { ServiceFaqSection } from '#/components/services/service-faq-section'
import faqAmbience from '../../../design/massage/faq.png'

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
      questions={faqs.massages}
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

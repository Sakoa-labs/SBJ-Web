import { faqs } from '#/data/faq'
import { ServiceFaqSection } from '#/components/services/service-faq-section'
import faqAmbience from '../../../design/epilations/faq.png'

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
      questions={faqs.epilation}
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

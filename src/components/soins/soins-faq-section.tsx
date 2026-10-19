import { faqs } from '#/data/faq'
import { ServiceFaqSection } from '#/components/services/service-faq-section'
import faqAmbience from '../../../design/soins/faq.png'

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
      questions={faqs.soins}
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

import { faqs } from '#/data/faq'
import { ServiceFaqSection } from '#/components/services/service-faq-section'
import faqAmbience from '../../../design/section faq/ChatGPT Image 24 août 2026, 21_58_47.png'

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
      questions={faqs.formation}
      aside={{
        image: faqAmbience,
        imageAlt: 'Serviettes de soin, fleurs de frangipanier et bougie dans une ambiance apaisante',
        imageWidth: 1122,
        imageHeight: 1402,
      }}
    />
  )
}

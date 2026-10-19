import { ServiceFaqSection } from '#/components/services/service-faq-section'
import { RichTitle } from '#/components/ui/rich-text'
import type { ServiceFaqContent } from '#/data/pages/services'

export function SoinsFaqSection({ title, intro, questions, photo }: ServiceFaqContent) {
  return (
    <ServiceFaqSection
      title={<RichTitle text={title} accentClassName="inline-block pb-1 text-[#d4af37]" />}
      titleClassName="md:whitespace-nowrap"
      intro={intro}
      questions={questions}
      aside={{
        image: photo.src,
        imageAlt: photo.alt,
        imageWidth: photo.width,
        imageHeight: photo.height,
      }}
    />
  )
}

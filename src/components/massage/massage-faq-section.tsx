import { ServiceFaqSection } from '#/components/services/service-faq-section'
import { RichTitle } from '#/components/ui/rich-text'
import type { ServiceFaqContent } from '#/data/pages/services'

export function MassageFaqSection({ title, intro, questions, photo }: ServiceFaqContent) {
  return (
    <ServiceFaqSection
      title={<RichTitle text={title} accentClassName="inline-block pb-1 text-[#d4af37]" />}
      titleClassName="xl:whitespace-nowrap xl:text-[clamp(3.8rem,4.4vw,4.6rem)]"
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

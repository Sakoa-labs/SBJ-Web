import type { ReactNode } from 'react'

import {
  FaqContactAside,
  FaqFoliage,
  FaqLayout,
} from '#/components/landing/faq-section'
import type { FaqQuestion } from '#/components/landing/faq-section'

// Same look as the home page FAQ; only the content changes per page.
export function ServiceFaqSection({
  title,
  titleClassName,
  intro,
  questions,
  aside,
}: {
  title: ReactNode
  titleClassName?: string
  intro: string
  questions: ReadonlyArray<FaqQuestion>
  aside: {
    image: string
    imageAlt: string
    imageWidth: number
    imageHeight: number
  }
}) {
  return (
    <FaqLayout
      eyebrow="FAQ"
      title={title}
      titleClassName={titleClassName}
      intro={intro}
      questions={questions}
      decorations={<FaqFoliage />}
      aside={<FaqContactAside {...aside} />}
    />
  )
}

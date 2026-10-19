import { Fragment } from 'react'

import { ClosingCta } from '#/components/landing/closing-cta-section'
import { EmbossedCta } from '#/components/landing/embossed-cta'
import { RichTitle } from '#/components/ui/rich-text'
import type { ServiceClosingContent } from '#/data/pages/services'

// The closing band of the Massages, Soins visage and Épilation pages, with its booking button.
export function ServiceClosing({ eyebrow, title, text, button }: ServiceClosingContent) {
  return (
    <ClosingCta
      eyebrow={eyebrow}
      showDivider={false}
      title={<RichTitle text={title} accentClassName="pb-1 text-[#e5bd42]" />}
      description={text.split('\n').map((line, index) => (
        // A line break only applies from tablet width up; the space keeps the words apart on phones.
        <Fragment key={index}>
          {index > 0 && <br className="hidden sm:block" />}
          {index > 0 ? ` ${line.trim()}` : line.trim()}
        </Fragment>
      ))}
    >
      <EmbossedCta
        href="#reserver"
        tone="gold"
        className="h-14 w-full text-sm tracking-[0.16em] sm:w-auto sm:min-w-[22rem]"
      >
        {button}
      </EmbossedCta>
    </ClosingCta>
  )
}

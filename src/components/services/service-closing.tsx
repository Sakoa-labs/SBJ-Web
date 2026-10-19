import { ClosingCta } from '#/components/landing/closing-cta-section'
import { EmbossedCta } from '#/components/landing/embossed-cta'
import { RichTitle, WideScreenBreaks } from '#/components/ui/rich-text'
import type { ServiceClosingContent } from '#/data/pages/services'

// The closing band of the Massages, Soins visage and Épilation pages, with its booking button.
export function ServiceClosing({ eyebrow, title, text, button }: ServiceClosingContent) {
  return (
    <ClosingCta
      eyebrow={eyebrow}
      showDivider={false}
      title={<RichTitle text={title} accentClassName="pb-1 text-[#e5bd42]" />}
      description={<WideScreenBreaks text={text} />}
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

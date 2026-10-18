import type { ReactNode } from 'react'

import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { SiteHeader } from '#/components/layout/site-header'
import { LeafShadow } from '#/components/services/leaf-shadow'

// A run of text, or a link inside it (email, phone, external page).
export type LegalInline = string | { label: string; href: string }
type LegalText = string | ReadonlyArray<LegalInline>

export type LegalBlock =
  | { type: 'p'; text: LegalText }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: ReadonlyArray<LegalText> }

export type LegalSection = {
  id: string
  title: string
  blocks: ReadonlyArray<LegalBlock>
}

export const contact = {
  email: 'sabrinajoiedetre@gmail.com',
  phone: '+262 693 45 14 30',
  phoneHref: 'tel:+262693451430',
  address: '12 C Chemin du Milieu, La Bretagne, 97490 Saint-Denis, La Réunion',
}

function renderText(text: LegalText): ReactNode {
  if (typeof text === 'string') return text
  return text.map((part, index) =>
    typeof part === 'string' ? (
      part
    ) : (
      <a
        key={index}
        href={part.href}
        className="break-words text-[#9a6d2c] underline decoration-[#d4af37]/50 underline-offset-4 transition-colors hover:text-[#0d3a2f] hover:decoration-[#d4af37]"
        {...(part.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
      >
        {part.label}
      </a>
    ),
  )
}

function LegalBlockView({ block }: { block: LegalBlock }) {
  if (block.type === 'h3') {
    return (
      <h3 className="pt-3 font-sans text-base font-semibold text-[#0d3a2f] sm:text-[1.05rem]">
        {block.text}
      </h3>
    )
  }
  if (block.type === 'list') {
    return (
      <ul className="space-y-2.5">
        {block.items.map((item, index) => (
          <li key={index} className="flex gap-3.5">
            <span
              className="mt-[0.7rem] size-1.5 shrink-0 rotate-45 bg-[#d4af37]"
              aria-hidden="true"
            />
            <span>{renderText(item)}</span>
          </li>
        ))}
      </ul>
    )
  }
  return <p>{renderText(block.text)}</p>
}

function TableOfContents({ sections }: { sections: ReadonlyArray<LegalSection> }) {
  return (
    <ol className="space-y-1">
      {sections.map((section, index) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="flex gap-3 rounded-sm py-1.5 text-sm leading-5 text-[#355149] transition-colors hover:text-[#9a6d2c]"
          >
            <span className="w-5 shrink-0 font-heading text-[#c09027]">
              {String(index + 1).padStart(2, '0')}
            </span>
            {section.title}
          </a>
        </li>
      ))}
    </ol>
  )
}

// Shared layout of the legal pages: a cream title band, then the text with a sticky
// table of contents on desktop (folded into a "Sommaire" disclosure on mobile).
export function LegalPage({
  title,
  accent,
  intro,
  sections,
  contactTitle,
}: {
  title: string
  accent: string
  intro: ReactNode
  sections: ReadonlyArray<LegalSection>
  contactTitle: string
}) {
  return (
    <main className="overflow-x-clip bg-background">
      <SiteHeader onLight />

      <section
        className="relative isolate overflow-hidden bg-[#fff9ec] pb-12 pt-32 text-[#0d3a2f] sm:pb-16 sm:pt-36 lg:pt-40"
        aria-labelledby="legal-title"
      >
        <div
          className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_30%,#fffdf8_60%,#fff9ec_100%)]"
          aria-hidden="true"
        />
        <LeafShadow leaf="monstera" className="-right-56 -top-48 w-[46rem] -rotate-[24deg]" />

        <div className="mx-auto w-full max-w-[56rem] px-5 text-center sm:px-8">
          <SectionEyebrow label="Informations légales" />
          <h1
            id="legal-title"
            className="mt-5 text-[clamp(2.4rem,10vw,3.2rem)] font-normal leading-[1.06] tracking-[-0.025em] sm:text-[clamp(3.2rem,6vw,4.6rem)]"
          >
            {title}{' '}
            <em className="inline-block pb-1 font-normal text-[#c09027]">{accent}</em>
          </h1>
          <p className="mx-auto mt-6 max-w-[40rem] text-pretty text-base leading-7 text-[#355149] sm:text-lg sm:leading-8">
            {intro}
          </p>
        </div>
      </section>

      <div className="border-t border-[#d4af37]/30 bg-[#fffdf8] text-[#0d3a2f]">
        <div className="mx-auto grid w-full max-w-[76rem] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16 lg:py-20 xl:gap-20">
          <aside>
            <details className="group rounded-sm border border-[#d4af37]/40 bg-[#fff9ec] px-5 py-4 lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6d2c] [&::-webkit-details-marker]:hidden">
                Sommaire
                <span
                  className="text-lg leading-none transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <nav className="mt-4" aria-label="Sommaire">
                <TableOfContents sections={sections} />
              </nav>
            </details>

            <nav className="sticky top-28 hidden lg:block" aria-label="Sommaire">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6d2c]">
                Sommaire
              </p>
              <span className="mb-4 mt-3 block h-px w-12 bg-[#d4af37]/60" aria-hidden="true" />
              <TableOfContents sections={sections} />
            </nav>
          </aside>

          <article className="max-w-[46rem]">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-b border-[#d4af37]/25 py-9 first:pt-0 last:border-b-0 sm:scroll-mt-28 sm:py-11"
                aria-labelledby={`${section.id}-title`}
              >
                <h2
                  id={`${section.id}-title`}
                  className="flex items-baseline gap-4 text-[1.65rem] font-normal leading-tight tracking-[-0.015em] sm:text-[2rem]"
                >
                  <span className="font-heading text-[1.4rem] text-[#c09027] sm:text-[1.6rem]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-pretty text-[0.97rem] leading-7 text-[#355149] sm:text-base sm:leading-[1.85rem]">
                  {section.blocks.map((block, blockIndex) => (
                    <LegalBlockView key={blockIndex} block={block} />
                  ))}
                </div>
              </section>
            ))}

            <div className="mt-6 rounded-sm bg-[#062b23] px-6 py-8 text-center text-[#fff9ec] sm:px-10 sm:py-10">
              <p className="font-heading text-[1.6rem] leading-tight text-[#fff5df] sm:text-[1.9rem]">
                {contactTitle}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#fff9ec]/75 sm:text-base">
                Sabrina vous répond par email ou par téléphone.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-8 sm:text-base">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[#e5bd42] underline decoration-[#d4af37]/50 underline-offset-4 transition-colors hover:text-[#fff4cf]"
                >
                  {contact.email}
                </a>
                <a
                  href={contact.phoneHref}
                  className="text-[#e5bd42] underline decoration-[#d4af37]/50 underline-offset-4 transition-colors hover:text-[#fff4cf]"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}

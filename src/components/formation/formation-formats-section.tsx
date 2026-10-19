import { Check } from 'lucide-react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import type { FormationFormatsContent } from '#/data/pages/learning'
import { cn } from '#/lib/utils'

// Links and colours stay with each half, whatever its place in Sanity.
const formatStyles = {
  presentiel: { href: '#inscription', dark: false },
  'en-ligne': { href: '#espace-apprenant', dark: true },
} as const

// Two halves side by side: cream for the workshops, deep green for the e-learning.
// On desktop each photo bleeds to the outer edge and fades into its half under the text.
export function FormationFormatsSection({ formats }: FormationFormatsContent) {
  return (
    <section className="grid lg:grid-cols-2" aria-label="En présentiel ou en ligne">
      {formats.map((format) => {
        const { href, dark } = formatStyles[format.key]
        return (
        <article
          key={format.key}
          id={format.key}
          className={cn(
            'relative isolate flex scroll-mt-24 flex-col overflow-hidden sm:scroll-mt-28 lg:min-h-[36rem] lg:flex-row lg:items-center',
            dark ? 'bg-[#062b23] text-[#fff9ec]' : 'bg-[#fff9ec] text-[#0d3a2f]',
          )}
          aria-labelledby={`${format.key}-title`}
        >
          <figure
            className={cn(
              'aspect-[4/3] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:-z-10 lg:aspect-auto lg:w-[52%]',
              dark
                ? 'lg:right-0 lg:[&>img]:object-[80%_50%] lg:[mask-image:linear-gradient(to_right,transparent,black_30%)]'
                : 'lg:left-0 lg:[mask-image:linear-gradient(to_left,transparent,black_30%)]',
            )}
          >
            <img
              src={format.photo.src}
              alt={format.photo.alt}
              className="size-full object-cover"
              width={format.photo.width}
              height={format.photo.height}
              loading="lazy"
            />
          </figure>

          <div
            className={cn(
              'px-5 py-12 sm:px-10 sm:py-14 lg:w-[54%] lg:py-16 xl:px-12',
              dark ? 'lg:mr-auto' : 'lg:ml-auto',
            )}
          >
            <h2
              id={`${format.key}-title`}
              className={cn(
                'text-[clamp(2.3rem,8vw,3rem)] font-normal leading-[1.05] tracking-[-0.025em] lg:whitespace-nowrap lg:text-[clamp(2.3rem,3.1vw,3.2rem)]',
                dark ? 'text-[#fff5df]' : 'text-[#0d3a2f]',
              )}
            >
              {format.title}
            </h2>
            <ul className="mt-7 space-y-3.5">
              {format.points.map((point) => (
                <li key={point} className="flex items-center gap-3.5 text-base sm:text-lg">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-[#062b23]">
                    <Check aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <EmbossedCta
              href={href}
              tone={dark ? 'dark' : 'gold'}
              className="mt-9 h-12 min-w-60"
            >
              {format.button}
            </EmbossedCta>
          </div>
        </article>
        )
      })}
    </section>
  )
}

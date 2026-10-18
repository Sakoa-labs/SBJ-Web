import { Check } from 'lucide-react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { cn } from '#/lib/utils'
import inPersonImage from '../../../design/formation/presentiel.png'
import onlineImage from '../../../design/formation/en-ligne.png'

const formats = [
  {
    id: 'presentiel',
    title: 'En présentiel',
    points: ['Petits groupes', 'Pratique accompagnée', 'Gestes et posture', 'Suivi et certificat'],
    cta: { label: 'Voir les dates', href: '#reserver' },
    image: inPersonImage,
    imageAlt: 'La salle de formation, deux tables de massage préparées devant de grandes fenêtres sur le jardin',
    dark: false,
  },
  {
    id: 'en-ligne',
    title: 'En ligne',
    points: ['Modules vidéo', 'Supports PDF', 'Accès flexible', 'Espace apprenant'],
    cta: { label: 'Accéder à l’e-learning', href: '#espace-apprenant' },
    image: onlineImage,
    imageAlt: 'Un ordinateur portable affiche une leçon vidéo de massage, entre bougies et feuillages',
    dark: true,
  },
] as const

// Two halves side by side: cream for the workshops, deep green for the e-learning.
// On desktop each photo bleeds to the outer edge and fades into its half under the text.
export function FormationFormatsSection() {
  return (
    <section className="grid lg:grid-cols-2" aria-label="En présentiel ou en ligne">
      {formats.map((format) => (
        <article
          key={format.id}
          id={format.id}
          className={cn(
            'relative isolate flex scroll-mt-24 flex-col overflow-hidden sm:scroll-mt-28 lg:min-h-[36rem] lg:flex-row lg:items-center',
            format.dark ? 'bg-[#062b23] text-[#fff9ec]' : 'bg-[#fff9ec] text-[#0d3a2f]',
          )}
          aria-labelledby={`${format.id}-title`}
        >
          <figure
            className={cn(
              'aspect-[4/3] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:-z-10 lg:aspect-auto lg:w-[52%]',
              format.dark
                ? 'lg:right-0 lg:[&>img]:object-[80%_50%] lg:[mask-image:linear-gradient(to_right,transparent,black_30%)]'
                : 'lg:left-0 lg:[mask-image:linear-gradient(to_left,transparent,black_30%)]',
            )}
          >
            <img
              src={format.image}
              alt={format.imageAlt}
              className="size-full object-cover"
              width={1448}
              height={1086}
              loading="lazy"
            />
          </figure>

          <div
            className={cn(
              'px-5 py-12 sm:px-10 sm:py-14 lg:w-[54%] lg:py-16 xl:px-12',
              format.dark ? 'lg:mr-auto' : 'lg:ml-auto',
            )}
          >
            <h2
              id={`${format.id}-title`}
              className={cn(
                'text-[clamp(2.3rem,8vw,3rem)] font-normal leading-[1.05] tracking-[-0.025em] lg:whitespace-nowrap lg:text-[clamp(2.3rem,3.1vw,3.2rem)]',
                format.dark ? 'text-[#fff5df]' : 'text-[#0d3a2f]',
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
              href={format.cta.href}
              tone={format.dark ? 'dark' : 'gold'}
              className="mt-9 h-12 min-w-60"
            >
              {format.cta.label}
            </EmbossedCta>
          </div>
        </article>
      ))}
    </section>
  )
}

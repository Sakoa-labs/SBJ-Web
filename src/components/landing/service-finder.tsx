import { useState } from 'react'
import { ArrowLeft, ArrowRight, RotateCcw, X } from 'lucide-react'
import { Dialog } from 'radix-ui'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { GoldDivider } from '#/components/landing/section-ornaments'
import {
  categoryInfo,
  formatDuration,
  formatPrice,
  serviceHref,
  services,
} from '#/data/services'
import type { Service, ServiceCategory, ServiceVariant } from '#/data/services'
import { cn } from '#/lib/utils'
import lotusOrnament from '#/assets/formation-icons/massage-wellness.png'

type QuestionId = 'envie' | 'detente' | 'tension' | 'visage' | 'zone' | 'duree-massage' | 'duree-soin'
type Duration = 'court' | 'heure' | 'long'

type Answer = {
  label: string
  detail?: string
  // Points given to services (by slug) when this answer is chosen.
  scores?: Partial<Record<string, number>>
  // Narrows the results to one category; set by the first question.
  category?: ServiceCategory
  duration?: Duration
  next?: QuestionId
}

type Question = { title: string; answers: ReadonlyArray<Answer> }

// Two or three questions, then the services that fit best. The first answer picks the
// category; the next ones score the services within it.
const questions: Record<QuestionId, Question> = {
  envie: {
    title: 'Qu’est-ce qui vous ferait du bien ?',
    answers: [
      { label: 'Lâcher prise', detail: 'Un massage pour me détendre', category: 'massages', next: 'detente' },
      { label: 'Soulager une tension', detail: 'Un massage ciblé', category: 'massages', next: 'tension' },
      { label: 'Prendre soin de mon visage', detail: 'Un soin du visage', category: 'soins', next: 'visage' },
      { label: 'Une peau nette et douce', detail: 'Une épilation à la cire', category: 'epilation', next: 'zone' },
    ],
  },
  detente: {
    title: 'Qu’est-ce qui vous pèse le plus en ce moment ?',
    answers: [
      {
        label: 'Le stress, le mental qui tourne',
        scores: { californien: 3, 'cranien-visage-buste': 2, etoile: 1 },
        next: 'duree-massage',
      },
      {
        label: 'La fatigue, un besoin de réconfort',
        scores: { 'pierres-chaudes': 3, 'dos-cire-bougie': 2, californien: 1 },
        next: 'duree-massage',
      },
      {
        label: 'Un peu de tout',
        detail: 'Sabrina adapte le massage à vos besoins',
        scores: { 'joie-detre-signature': 4, californien: 1 },
        next: 'duree-massage',
      },
      {
        label: 'Je préfère rester habillé(e)',
        scores: { etoile: 4, 'cranien-visage-buste': 2 },
        next: 'duree-massage',
      },
    ],
  },
  tension: {
    title: 'Où se situent vos tensions ?',
    answers: [
      {
        label: 'Le dos, la nuque et les épaules',
        scores: { 'dos-pierres-chaudes': 3, 'dos-cire-bougie': 3 },
        next: 'duree-massage',
      },
      { label: 'Des jambes lourdes', scores: { 'jambes-legeres': 5 }, next: 'duree-massage' },
      {
        label: 'La tête et le visage',
        scores: { 'cranien-visage-buste': 5, etoile: 1 },
        next: 'duree-massage',
      },
      {
        label: 'Un peu partout',
        scores: { 'joie-detre-signature': 3, 'pierres-chaudes': 2, californien: 1 },
        next: 'duree-massage',
      },
    ],
  },
  'duree-massage': {
    title: 'Combien de temps vous accordez-vous ?',
    answers: [
      { label: '30 à 45 minutes', detail: 'Une pause efficace', duration: 'court' },
      { label: 'Environ une heure', detail: 'Le temps de vraiment décrocher', duration: 'heure' },
      { label: 'Deux heures', detail: 'Une vraie parenthèse', duration: 'long' },
    ],
  },
  visage: {
    title: 'Que souhaitez-vous pour votre peau ?',
    answers: [
      { label: 'Un coup d’éclat', detail: 'Avant un événement ou entre deux rendez-vous', scores: { 'express-detox': 4 }, next: 'duree-soin' },
      { label: 'Purifier', detail: 'Brillances, imperfections, peau mixte à grasse', scores: { essentiel: 5 }, next: 'duree-soin' },
      { label: 'Lisser et repulper', detail: 'Ridules, teint fatigué', scores: { precieux: 4, 'massage-anti-age-visage': 2 }, next: 'duree-soin' },
      { label: 'Détendre mes traits', detail: 'Mâchoires serrées, front crispé', scores: { 'massage-anti-age-visage': 4, precieux: 1 }, next: 'duree-soin' },
    ],
  },
  'duree-soin': {
    title: 'Combien de temps vous accordez-vous ?',
    answers: [
      { label: 'Environ 40 minutes', duration: 'court' },
      { label: 'Une heure ou plus', duration: 'heure' },
      { label: 'Deux heures', detail: 'La version longue du soin', duration: 'long' },
    ],
  },
  zone: {
    title: 'Quelle zone souhaitez-vous épiler ?',
    answers: [
      { label: 'Le visage', detail: 'Sourcils, lèvres, menton', scores: { 'epilation-visage': 5 } },
      { label: 'Jambes, bras ou aisselles', scores: { 'epilation-corps': 5 } },
      { label: 'Le maillot', scores: { 'epilation-maillot': 5 } },
      {
        label: 'Le maillot et d’autres zones',
        detail: 'Nos forfaits maillot + 4 zones',
        scores: { 'forfait-maillot-simple': 4, 'forfait-maillot-echancre': 3, 'forfait-maillot-semi-integral': 3 },
      },
    ],
  },
}

const durationRange: Record<Duration, [number, number]> = {
  court: [0, 45],
  heure: [46, 90],
  long: [91, Infinity],
}

type Suggestion = { service: Service; variant: ServiceVariant }

// Minutes outside the chosen range; 0 when the option fits.
function distance(variant: ServiceVariant, [min, max]: [number, number]) {
  return Math.max(0, min - variant.minutes, variant.minutes - max)
}

// Only services matching the answers are suggested; the chosen length then breaks ties
// and picks the closest option of each.
function suggest(answers: ReadonlyArray<Answer>): ReadonlyArray<Suggestion> {
  const category = answers.find((answer) => answer.category)?.category
  const duration = answers.find((answer) => answer.duration)?.duration
  const range = duration ? durationRange[duration] : undefined

  return services
    .filter((service) => service.category === category)
    .map((service) => {
      const match = answers.reduce((total, answer) => total + (answer.scores?.[service.slug] ?? 0), 0)
      const variant = range
        ? service.variants.reduce((best, v) => (distance(v, range) < distance(best, range) ? v : best))
        : service.variants[0]
      const fits = !range || distance(variant, range) === 0
      return { service, variant, match, score: match + (fits ? 1 : -1) }
    })
    .filter(({ match }) => match > 0)
    .sort((a, b) => b.score - a.score || b.match - a.match)
    .slice(0, 3)
}

// Opened from the floating "Quelle prestation pour moi ?" button: a short questionnaire
// that ends on two or three suggestions, each linking to its detail page or to Booksy.
export function ServiceFinder({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [answers, setAnswers] = useState<ReadonlyArray<Answer>>([])

  const current: QuestionId | undefined =
    answers.length === 0 ? 'envie' : answers[answers.length - 1].next
  const question = current ? questions[current] : undefined
  // The longest path has three questions; the waxing path, two.
  const total = answers[0]?.category === 'epilation' ? 2 : 3

  const restart = () => setAnswers([])

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) restart()
      }}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-[#031f1a]/70 backdrop-blur-[3px] duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in motion-reduce:animate-none" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[95] flex max-h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] max-w-[44rem] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-[#d4af37]/70 bg-[#fff9ec] text-[#0d3a2f] shadow-[0_30px_80px_rgba(2,20,16,0.4)] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus:outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-[0.97] data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-[0.97] motion-reduce:animate-none"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between gap-4 border-b border-[#d4af37]/30 px-4 py-3 sm:px-6">
            {answers.length > 0 ? (
              <button
                type="button"
                onClick={() => setAnswers((previous) => previous.slice(0, -1))}
                className="inline-flex items-center gap-2 rounded-sm px-1 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#9a6d2c] transition-colors hover:text-[#0d3a2f] focus-visible:outline-2 focus-visible:outline-[#d4af37]"
              >
                <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.6} />
                Retour
              </button>
            ) : (
              <span />
            )}
            <Dialog.Close
              className="grid size-10 place-items-center rounded-full text-[#355149] transition-colors hover:bg-[#0d3a2f]/6 hover:text-[#0d3a2f] focus-visible:outline-2 focus-visible:outline-[#d4af37]"
              aria-label="Fermer"
            >
              <X aria-hidden="true" className="size-5" strokeWidth={1.6} />
            </Dialog.Close>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-7 pt-5 sm:px-10 sm:pb-10 sm:pt-6">
            <div className="flex flex-col items-center text-center">
              <img src={lotusOrnament} alt="" aria-hidden="true" className="size-11 object-contain" width={256} height={256} />
              <Dialog.Title className="mt-1 font-heading text-[clamp(1.7rem,6vw,2.3rem)] font-normal leading-tight tracking-[-0.02em]">
                Quelle prestation{' '}
                <em className="whitespace-nowrap font-normal text-[#c09027]">pour moi&nbsp;?</em>
              </Dialog.Title>
            </div>

            {question ? (
              <div key={current} className="mt-6 duration-300 animate-in fade-in slide-in-from-right-3 motion-reduce:animate-none sm:mt-8">
                <div className="flex items-center justify-center gap-2" aria-hidden="true">
                  {Array.from({ length: total }, (_, index) => (
                    <span
                      key={index}
                      className={cn(
                        'h-1 rounded-full transition-[width,background-color] duration-300',
                        index <= answers.length ? 'w-8 bg-[#c09027]' : 'w-4 bg-[#d4af37]/30',
                      )}
                    />
                  ))}
                </div>
                <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6d2c]">
                  Question {answers.length + 1} sur {total}
                </p>
                <h3 className="mt-2 text-balance text-center text-[1.35rem] font-normal leading-snug sm:text-[1.6rem]">
                  {question.title}
                </h3>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {question.answers.map((answer) => (
                    <li key={answer.label}>
                      <button
                        type="button"
                        onClick={() => setAnswers((previous) => [...previous, answer])}
                        className="group flex size-full items-center gap-3 rounded-xl border border-[#d4af37]/45 bg-[#fffdf8] px-4 py-3.5 text-left shadow-[0_8px_24px_rgba(103,70,31,0.05)] transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#c09027] hover:bg-white active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] sm:py-4"
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold leading-snug text-[#173c32]">{answer.label}</span>
                          {answer.detail && (
                            <span className="mt-0.5 block text-sm leading-snug text-[#40574f]">{answer.detail}</span>
                          )}
                        </span>
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 shrink-0 text-[#c09027] transition-transform duration-150 group-hover:translate-x-0.5"
                          strokeWidth={1.8}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Results
                suggestions={suggest(answers)}
                category={answers[0]?.category}
                onNavigate={() => setOpen(false)}
                onRestart={restart}
              />
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function Results({
  suggestions,
  category,
  onNavigate,
  onRestart,
}: {
  suggestions: ReadonlyArray<Suggestion>
  category?: ServiceCategory
  onNavigate: () => void
  onRestart: () => void
}) {
  return (
    <div className="mt-5 duration-300 animate-in fade-in slide-in-from-right-3 motion-reduce:animate-none">
      <h3 className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6d2c]">
        {suggestions.length > 1 ? 'Nos suggestions pour vous' : 'Notre suggestion pour vous'}
      </h3>
      <GoldDivider compact className="mx-auto mt-3 w-fit" />

      <ul className="mt-6 space-y-3">
        {suggestions.map(({ service, variant }, index) => (
          <li
            key={service.slug}
            className={cn(
              'flex gap-4 rounded-xl border bg-[#fffdf8] p-3 sm:p-4',
              index === 0 ? 'border-[#c09027]/80 shadow-[0_12px_32px_rgba(103,70,31,0.1)]' : 'border-[#d4af37]/40',
            )}
          >
            <img
              src={service.image.src}
              alt=""
              className="aspect-[4/5] w-20 shrink-0 self-start rounded-lg object-cover sm:w-28"
              width={224}
              height={280}
              loading="lazy"
            />
            <div className="flex min-w-0 flex-1 flex-col">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#9a6d2c]">
                {index === 0 ? 'Idéal pour vous · ' : ''}
                {categoryInfo[service.category].label}
              </p>
              <h4 className="mt-1 font-heading text-[1.3rem] leading-tight sm:text-[1.5rem]">{service.title}</h4>
              <p className="mt-1 text-sm leading-snug text-[#40574f]">{service.hook}</p>
              <p className="mt-2 text-sm font-semibold text-[#0d3a2f]">
                {formatDuration(variant.minutes)} · {formatPrice(variant.promoPrice ?? variant.price)}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <EmbossedCta
                  href="#reserver"
                  data-booksy-variant={variant.booksyId}
                  tone="gold"
                  className="h-9 px-4 text-[0.62rem] tracking-[0.14em]"
                  onClick={onNavigate}
                >
                  Réserver
                </EmbossedCta>
                <EmbossedCta
                  href={serviceHref(service)}
                  tone="light"
                  className="h-9 px-4 text-[0.62rem] tracking-[0.14em]"
                  onClick={onNavigate}
                >
                  Voir le détail
                </EmbossedCta>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col items-center gap-3 text-sm sm:flex-row sm:justify-center sm:gap-6">
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-2 font-semibold text-[#9a6d2c] transition-colors hover:text-[#0d3a2f]"
        >
          <RotateCcw aria-hidden="true" className="size-4" strokeWidth={1.6} />
          Recommencer
        </button>
        {category && (
          <a
            href={categoryInfo[category].path}
            onClick={onNavigate}
            className="font-semibold text-[#9a6d2c] underline decoration-[#d4af37]/50 underline-offset-4 transition-colors hover:text-[#0d3a2f]"
          >
            Voir toute la carte {category === 'epilation' ? 'des épilations' : category === 'soins' ? 'des soins' : 'des massages'}
          </a>
        )}
      </div>
    </div>
  )
}

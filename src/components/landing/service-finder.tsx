import { useState } from 'react'
import { ArrowLeft, RotateCcw, Sparkles, X } from 'lucide-react'
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
import monsteraShadow from '#/assets/leaf-shadows/ombre-monstera.png'
import massageIcon from '#/assets/prestations-icons/massage.png'
import dosIcon from '#/assets/card-icons/massage-dos-pierres.png'
import jambesIcon from '#/assets/card-icons/massage-jambes-legeres.png'
import cranienIcon from '#/assets/card-icons/massage-cranien.png'
import signatureIcon from '#/assets/card-icons/massage-signature.png'
import eclatIcon from '#/assets/card-icons/soin-express-detox.png'
import purifierIcon from '#/assets/card-icons/soin-essentiel.png'
import precieuxIcon from '#/assets/card-icons/soin-precieux.png'
import visageIcon from '#/assets/card-icons/soin-massage-visage.png'
import epilationVisageIcon from '#/assets/card-icons/epilation-visage.png'
import epilationCorpsIcon from '#/assets/card-icons/epilation-corps.png'
import epilationMaillotIcon from '#/assets/card-icons/epilation-maillot.png'
import stressIcon from '#/assets/finder-icons/stress.png'
import fatigueIcon from '#/assets/finder-icons/fatigue.png'
import habilleIcon from '#/assets/finder-icons/habille.png'
import corpsEntierIcon from '#/assets/finder-icons/corps-entier.png'
import maillotZonesIcon from '#/assets/finder-icons/maillot-zones.png'
import courtIcon from '#/assets/finder-icons/court.png'
import heureIcon from '#/assets/finder-icons/heure.png'
import longIcon from '#/assets/finder-icons/long.png'

type QuestionId = 'envie' | 'detente' | 'tension' | 'visage' | 'zone' | 'duree-massage' | 'duree-soin'
type Duration = 'court' | 'heure' | 'long'

type Answer = {
  label: string
  detail?: string
  icon: string
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
      { label: 'Lâcher prise', icon: massageIcon, detail: 'Un massage pour me détendre', category: 'massages', next: 'detente' },
      { label: 'Soulager une tension', icon: dosIcon, detail: 'Un massage ciblé', category: 'massages', next: 'tension' },
      { label: 'Prendre soin de mon visage', icon: visageIcon, detail: 'Un soin du visage', category: 'soins', next: 'visage' },
      { label: 'Une peau nette et douce', icon: epilationCorpsIcon, detail: 'Une épilation à la cire', category: 'epilation', next: 'zone' },
    ],
  },
  detente: {
    title: 'Qu’est-ce qui vous pèse le plus en ce moment ?',
    answers: [
      {
        label: 'Le stress, le mental qui tourne', icon: stressIcon,
        scores: { californien: 3, 'cranien-visage-buste': 2, etoile: 1 },
        next: 'duree-massage',
      },
      {
        label: 'La fatigue, un besoin de réconfort', icon: fatigueIcon,
        scores: { 'pierres-chaudes': 3, 'dos-cire-bougie': 2, californien: 1 },
        next: 'duree-massage',
      },
      {
        label: 'Un peu de tout', icon: signatureIcon,
        detail: 'Sabrina adapte le massage à vos besoins',
        scores: { 'joie-detre-signature': 4, californien: 1 },
        next: 'duree-massage',
      },
      {
        label: 'Je préfère rester habillé(e)', icon: habilleIcon,
        scores: { etoile: 4, 'cranien-visage-buste': 2 },
        next: 'duree-massage',
      },
    ],
  },
  tension: {
    title: 'Où se situent vos tensions ?',
    answers: [
      {
        label: 'Le dos, la nuque et les épaules', icon: dosIcon,
        scores: { 'dos-pierres-chaudes': 3, 'dos-cire-bougie': 3 },
        next: 'duree-massage',
      },
      { label: 'Des jambes lourdes', icon: jambesIcon, scores: { 'jambes-legeres': 5 }, next: 'duree-massage' },
      {
        label: 'La tête et le visage', icon: cranienIcon,
        scores: { 'cranien-visage-buste': 5, etoile: 1 },
        next: 'duree-massage',
      },
      {
        label: 'Un peu partout', icon: corpsEntierIcon,
        scores: { 'joie-detre-signature': 3, 'pierres-chaudes': 2, californien: 1 },
        next: 'duree-massage',
      },
    ],
  },
  'duree-massage': {
    title: 'Combien de temps vous accordez-vous ?',
    answers: [
      { label: '30 à 45 minutes', icon: courtIcon, detail: 'Une pause efficace', duration: 'court' },
      { label: 'Environ une heure', icon: heureIcon, detail: 'Le temps de vraiment décrocher', duration: 'heure' },
      { label: 'Deux heures', icon: longIcon, detail: 'Une vraie parenthèse', duration: 'long' },
    ],
  },
  visage: {
    title: 'Que souhaitez-vous pour votre peau ?',
    answers: [
      { label: 'Un coup d’éclat', icon: eclatIcon, detail: 'Avant un événement ou entre deux rendez-vous', scores: { 'express-detox': 4 }, next: 'duree-soin' },
      { label: 'Purifier', icon: purifierIcon, detail: 'Brillances, imperfections, peau mixte à grasse', scores: { essentiel: 5 }, next: 'duree-soin' },
      { label: 'Lisser et repulper', icon: precieuxIcon, detail: 'Ridules, teint fatigué', scores: { precieux: 4, 'massage-anti-age-visage': 2 }, next: 'duree-soin' },
      { label: 'Détendre mes traits', icon: visageIcon, detail: 'Mâchoires serrées, front crispé', scores: { 'massage-anti-age-visage': 4, precieux: 1 }, next: 'duree-soin' },
    ],
  },
  'duree-soin': {
    title: 'Combien de temps vous accordez-vous ?',
    answers: [
      { label: 'Environ 40 minutes', icon: courtIcon, duration: 'court' },
      { label: 'Une heure ou plus', icon: heureIcon, duration: 'heure' },
      { label: 'Deux heures', icon: longIcon, detail: 'La version longue du soin', duration: 'long' },
    ],
  },
  zone: {
    title: 'Quelle zone souhaitez-vous épiler ?',
    answers: [
      { label: 'Le visage', icon: epilationVisageIcon, detail: 'Sourcils, lèvres, menton', scores: { 'epilation-visage': 5 } },
      { label: 'Jambes, bras ou aisselles', icon: epilationCorpsIcon, scores: { 'epilation-corps': 5 } },
      { label: 'Le maillot', icon: epilationMaillotIcon, scores: { 'epilation-maillot': 5 } },
      {
        label: 'Le maillot et d’autres zones', icon: maillotZonesIcon,
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

const surface =
  'bg-[linear-gradient(180deg,#fffefb_0%,#fff8ea_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_1px_0_rgba(201,148,66,0.25),0_10px_26px_rgba(103,70,31,0.08)]'

// Opened from the floating "Quelle prestation pour moi ?" button: a short questionnaire
// that ends on up to three suggestions, each linking to its detail page or to Booksy.
// Laid out to fit the screen without scrolling, on desktop as on a phone.
export function ServiceFinder({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [answers, setAnswers] = useState<ReadonlyArray<Answer>>([])

  const current: QuestionId | undefined =
    answers.length === 0 ? 'envie' : answers[answers.length - 1].next
  const question = current ? questions[current] : undefined
  // The longest path has three questions; the waxing path, two.
  const total = answers[0]?.category === 'epilation' ? 2 : 3
  const compact = question?.answers.length === 3
  const suggestions = question ? [] : suggest(answers)

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
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-[#031f1a]/72 backdrop-blur-[4px] duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in motion-reduce:animate-none" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-[95] max-h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-[1.75rem] border border-[#d4af37]/80 bg-[#fff9ec] text-[#0d3a2f] shadow-[0_40px_100px_rgba(2,20,16,0.45),inset_0_1px_0_rgba(255,255,255,0.9)] [scrollbar-width:none] focus:outline-none [&::-webkit-scrollbar]:hidden',
            'duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-[0.97] data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-[0.97] motion-reduce:animate-none',
            // A little wider for the suggestion cards than for the questions.
            suggestions.length > 0 ? 'max-w-[48rem]' : 'max-w-[42rem]',
          )}
          aria-describedby={undefined}
        >
          {/* Soft light and foliage behind the content, inside a fine gold inner frame. */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.95)_0%,transparent_60%),radial-gradient(circle_at_100%_100%,rgba(212,175,55,0.1),transparent_45%)]"
            aria-hidden="true"
          />
          <img
            src={monsteraShadow}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 -z-10 w-80 rotate-[-20deg] opacity-[0.04]"
          />
          <div
            className="pointer-events-none absolute inset-2 rounded-[1.35rem] border border-[#d4af37]/25"
            aria-hidden="true"
          />

          <div className="relative px-4 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-5 short:pb-5 short:pt-3">
            <div className="flex h-10 items-center justify-between">
              {answers.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setAnswers((previous) => previous.slice(0, -1))}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#9a6d2c] transition-colors hover:bg-[#d4af37]/10 hover:text-[#0d3a2f] focus-visible:outline-2 focus-visible:outline-[#d4af37]"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.6} />
                  Retour
                </button>
              ) : (
                <span />
              )}
              <Dialog.Close
                className="grid size-10 place-items-center rounded-full border border-[#d4af37]/40 bg-[#fffdf8] text-[#355149] transition-colors hover:border-[#c09027] hover:text-[#0d3a2f] focus-visible:outline-2 focus-visible:outline-[#d4af37]"
                aria-label="Fermer"
              >
                <X aria-hidden="true" className="size-4" strokeWidth={1.8} />
              </Dialog.Close>
            </div>

            <div className="-mt-6 flex flex-col items-center text-center">
              <img src={lotusOrnament} alt="" aria-hidden="true" className="size-10 object-contain sm:size-12" width={256} height={256} />
              <Dialog.Title className="font-heading text-[clamp(1.6rem,6vw,2.2rem)] font-normal leading-tight tracking-[-0.02em]">
                Quelle prestation{' '}
                <em className="whitespace-nowrap font-normal text-[#c09027]">pour moi&nbsp;?</em>
              </Dialog.Title>
            </div>

            {question ? (
              <div key={current} className="mt-5 duration-300 animate-in fade-in slide-in-from-right-3 motion-reduce:animate-none">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    {Array.from({ length: total }, (_, index) => (
                      <span
                        key={index}
                        className={cn(
                          'h-1 rounded-full transition-[width,background-color] duration-300',
                          index <= answers.length ? 'w-7 bg-[linear-gradient(90deg,#c09027,#e5bd42)]' : 'w-3.5 bg-[#d4af37]/30',
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#9a6d2c]">
                    {answers.length + 1}&nbsp;/&nbsp;{total}
                  </p>
                </div>
                <h3 className="mt-3 text-balance text-center text-[1.3rem] font-normal leading-snug sm:text-[1.55rem]">
                  {question.title}
                </h3>

                {/* Four answers in a 2 × 2 grid; the three lengths side by side. */}
                <ul className={cn('mt-5 grid gap-2.5 sm:gap-3.5', compact ? 'grid-cols-3' : 'grid-cols-2')}>
                  {question.answers.map((answer) => (
                    <li key={answer.label}>
                      <button
                        type="button"
                        onClick={() => setAnswers((previous) => [...previous, answer])}
                        className={cn(
                          'group flex size-full flex-col items-center gap-2 rounded-2xl border border-[#d4af37]/50 px-3 py-4 text-center transition-[border-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:border-[#c09027] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_1px_0_rgba(201,148,66,0.35),0_16px_34px_rgba(103,70,31,0.14)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]',
                          !compact && 'sm:flex-row sm:gap-4 sm:px-4 sm:text-left',
                          surface,
                        )}
                      >
                        <span className="grid size-14 shrink-0 place-items-center rounded-full border border-[#d4af37]/45 bg-[radial-gradient(circle_at_50%_30%,#fffdf6,#f7ecd4)] shadow-[inset_0_1px_0_#fff,0_4px_12px_rgba(103,70,31,0.1)] transition-colors group-hover:border-[#c09027] sm:size-16">
                          <img src={answer.icon} alt="" aria-hidden="true" className="size-11 object-contain sm:size-12" width={256} height={256} />
                        </span>
                        <span className="min-w-0 sm:flex-1">
                          <span className="block text-[0.92rem] font-semibold leading-snug text-[#173c32] sm:text-base">{answer.label}</span>
                          {answer.detail && (
                            <span className={cn('mt-0.5 hidden text-sm leading-snug text-[#40574f]', !compact && 'sm:block')}>
                              {answer.detail}
                            </span>
                          )}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Results
                suggestions={suggestions}
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

const categoryNames: Record<ServiceCategory, string> = {
  massages: 'des massages',
  soins: 'des soins',
  epilation: 'des épilations',
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
    <div className="mt-3 duration-300 animate-in fade-in slide-in-from-right-3 motion-reduce:animate-none">
      <GoldDivider compact className="mx-auto" />
      <p className="mt-2 text-center text-sm text-[#40574f]">
        Selon vos réponses, nous vous suggérons…
      </p>

      <ul className="mt-5 grid gap-3 sm:mt-6 sm:gap-3.5 short:mt-4 short:gap-3">
        {suggestions.map((suggestion, index) => (
          <SuggestionCard
            key={suggestion.service.slug}
            suggestion={suggestion}
            featured={index === 0}
            onNavigate={onNavigate}
          />
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm sm:mt-7 short:mt-4">
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
            Toute la carte {categoryNames[category]}
          </a>
        )}
      </div>
    </div>
  )
}

// A suggestion as a horizontal card: square photo, name, length and price, then booking
// and its detail page. The best match stands out in deep green with a gold badge.
function SuggestionCard({
  suggestion: { service, variant },
  featured,
  onNavigate,
}: {
  suggestion: Suggestion
  featured: boolean
  onNavigate: () => void
}) {
  return (
    <li
      className={cn(
        'relative flex flex-wrap items-center gap-3 rounded-2xl border p-3 sm:flex-nowrap sm:gap-5 sm:p-3.5 sm:pr-6 short:p-3',
        featured
          ? 'border-[#d4af37] bg-[linear-gradient(120deg,#164a3c_0%,#0d3a2f_45%,#062b23_100%)] text-[#fff9ec] shadow-[inset_0_1px_0_rgba(255,249,236,0.18),0_22px_50px_rgba(6,43,35,0.35)]'
          : cn('border-[#d4af37]/50 text-[#0d3a2f]', surface),
      )}
    >
      {featured && (
        <span className="absolute -top-2.5 right-4 z-10 inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-[#fff1c2]/70 bg-[linear-gradient(180deg,#f3d27a_0%,#d4af37_55%,#b58b22_100%)] px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#14221e] shadow-[0_6px_14px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.6)] sm:-top-3 sm:px-3 sm:text-[0.62rem]">
          <Sparkles aria-hidden="true" className="size-3" strokeWidth={2} />
          Idéal pour vous
        </span>
      )}

      <img
        src={service.image.src}
        alt=""
        className={cn(
          'aspect-square w-20 shrink-0 rounded-xl object-cover sm:w-32 short:w-24',
          featured && 'ring-1 ring-[#d4af37]/60',
        )}
        width={480}
        height={480}
        loading="lazy"
      />

      <div className="min-w-0 flex-1">
        <p className={cn('text-[0.62rem] font-bold uppercase tracking-[0.16em]', featured ? 'text-[#e5bd42]' : 'text-[#9a6d2c]')}>
          {categoryInfo[service.category].label}
        </p>
        <h4 className={cn('mt-0.5 font-heading text-[1.25rem] leading-tight sm:text-[1.5rem]', featured && 'text-[#fff5df]')}>
          {service.title}
        </h4>
        <p className={cn('mt-1 hidden text-sm leading-snug sm:line-clamp-2 short:line-clamp-1', featured ? 'text-[#fff9ec]/78' : 'text-[#40574f]')}>
          {service.hook}
        </p>
        <p className={cn('mt-1 text-sm font-semibold sm:mt-2', featured ? 'text-[#fff9ec]' : 'text-[#0d3a2f]')}>
          {formatDuration(variant.minutes)}
          <span className={cn('mx-1.5', featured ? 'text-[#e5bd42]' : 'text-[#c09027]')}>·</span>
          {formatPrice(variant.promoPrice ?? variant.price)}
        </p>
      </div>

      {/* Under the photo and text on a phone; a column on the right from tablets up. */}
      <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-40 sm:shrink-0 sm:flex-col sm:gap-2.5">
        <EmbossedCta
          href="#reserver"
          data-booksy-variant={variant.booksyId}
          tone="gold"
          className="h-9 w-full px-3 text-[0.6rem] tracking-[0.12em] sm:h-10 sm:px-4 sm:text-[0.62rem] sm:tracking-[0.14em]"
          onClick={onNavigate}
        >
          Réserver
        </EmbossedCta>
        <EmbossedCta
          href={serviceHref(service)}
          tone="light"
          className="h-9 w-full px-3 text-[0.6rem] tracking-[0.12em] sm:h-10 sm:px-4 sm:text-[0.62rem] sm:tracking-[0.14em]"
          onClick={onNavigate}
        >
          En savoir plus
        </EmbossedCta>
      </div>
    </li>
  )
}

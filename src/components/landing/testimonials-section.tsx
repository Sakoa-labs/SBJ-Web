import type { CSSProperties } from 'react'
import { Star } from 'lucide-react'

import {
  GoldDivider,
  SectionEyebrow,
} from '#/components/landing/section-ornaments'
import { cn } from '#/lib/utils'
import { reviews } from '#/data/reviews'
import type { Review, ReviewSource } from '#/data/reviews'
import defaultAvatar from '#/assets/testimonials/avatar-defaut.jpg'
import booksyLogo from '#/assets/review-logos/booksy.png'
import foliageLeft from '../../../design/section temoignages/ChatGPT Image 24 août 2026, 22_13_34.png'
import foliageRight from '../../../design/section temoignages/ChatGPT Image 24 août 2026, 22_16_37.png'

function Stars({ className }: { className?: string }) {
  return (
    <span className={className} role="img" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className="size-3.5 fill-[#d4af37] text-[#d4af37]"
          strokeWidth={1.2}
        />
      ))}
    </span>
  )
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  )
}

function ReviewSourceBadge({ source, verified }: { source: ReviewSource; verified?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      {source === 'Google' ? (
        <GoogleLogo className="size-[1.1rem] shrink-0" />
      ) : (
        <img
          src={booksyLogo}
          alt=""
          aria-hidden="true"
          className="size-[1.1rem] shrink-0 rounded-[0.3rem]"
          width={64}
          height={64}
        />
      )}
      {verified ? `Avis vérifié ${source}` : `Avis client ${source}`}
    </span>
  )
}

// A quote shown in the scrolling band: a customer review, or a student's testimonial
// (no source badge then).
export type Testimonial = Omit<Review, 'source'> & { source?: ReviewSource }

function TestimonialCard({ review }: { review: Testimonial }) {
  return (
    <article className="testimonial-card relative flex min-h-[20rem] w-[min(82vw,24rem)] shrink-0 snap-start flex-col rounded-[1.75rem] border border-[#c99442]/55 bg-[#fffdf8] px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] sm:w-[24rem] sm:px-7 sm:py-7 lg:w-[27rem]">
      <span
        className="absolute right-7 top-7 font-heading text-5xl leading-none text-[#b98232]"
        aria-hidden="true"
      >
        “
      </span>

      <div className="flex items-center gap-4 pr-12">
        <div className="size-16 shrink-0 overflow-hidden rounded-full border border-[#d4af37]/50 shadow-[0_8px_20px_rgba(72,51,25,0.12)] sm:size-[4.5rem]">
          <img
            src={review.avatar ?? defaultAvatar}
            alt=""
            className="size-full object-cover object-center"
            width={512}
            height={512}
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-heading text-[1.75rem] font-medium leading-none text-[#173c32] sm:text-[1.9rem]">
            {review.name}
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#9a6d2c]">
            {review.service}
          </p>
        </div>
      </div>

      <GoldDivider compact className="mt-5 self-center" />

      <blockquote className="mt-5 flex-1 text-[1rem] leading-7 text-[#29443c] sm:text-[1.04rem]">
        « {review.text} »
      </blockquote>

      <p className="mt-5 flex items-center justify-between gap-3 border-t border-[#d4af37]/30 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#40574f]">
        {review.source ? (
          <ReviewSourceBadge source={review.source} verified={review.verified} />
        ) : (
          <span />
        )}
        <Stars className="flex gap-0.5" />
      </p>
    </article>
  )
}

export function TestimonialsSection() {
  return (
    <section
      id="temoignages"
      className="relative isolate -mt-px scroll-mt-24 overflow-hidden bg-[#fff9ec] px-5 py-20 text-[#0d3a2f] sm:scroll-mt-28 sm:px-8 sm:py-24 lg:py-32"
      aria-labelledby="testimonials-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_50%_42%,rgba(255,255,255,0.95)_0%,rgba(255,251,243,0.78)_42%,transparent_72%),linear-gradient(to_bottom,#fff9ec_0%,#fffaf0_13%,#fffdf8_58%,#f5e7d1_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_87%_32%,rgba(185,130,50,0.06),transparent_28%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-[15] h-24 bg-gradient-to-b from-[#fff9ec] via-[#fff9ec]/55 to-transparent sm:h-28"
        aria-hidden="true"
      />

      <img
        data-reveal="left"
        src={foliageLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -left-16 -top-px -z-10 hidden h-[calc(100%+2px)] w-auto max-w-none object-fill lg:block xl:-left-10"
        width={1024}
        height={1536}
        loading="lazy"
      />
      <img
        data-reveal="right"
        src={foliageRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -right-16 -top-px -z-10 hidden h-[calc(100%+2px)] w-auto max-w-none object-fill lg:block xl:-right-10"
        width={1024}
        height={1536}
        loading="lazy"
      />

      <div className="relative z-10 mx-auto w-full max-w-[88rem]">
        <header className="mx-auto max-w-[72rem] text-center">
          <SectionEyebrow label="Témoignages" />
          <h2
            id="testimonials-title"
            className="mt-6 text-balance text-[clamp(2.45rem,12vw,2.85rem)] font-normal leading-[1.02] tracking-[-0.025em] sm:text-[clamp(3.8rem,6.5vw,5.5rem)] lg:whitespace-nowrap lg:text-[clamp(4.25rem,5vw,5.35rem)]"
          >
            Vous en parlez{' '}
            <em className="inline-block pb-1 font-normal text-[#d4af37]">
              mieux
            </em>{' '}
            que nous
          </h2>
        </header>

        <TestimonialsMarquee
          items={reviews}
          label="Avis de nos clients"
          className="mt-12 sm:mt-14"
        />
      </div>
    </section>
  )
}

// Endless band of cards, paused on hover or focus. The list is rendered twice so the loop is seamless;
// it needs enough cards to be wider than the screen.
export function TestimonialsMarquee({
  items,
  label,
  className,
}: {
  items: ReadonlyArray<Testimonial>
  label: string
  className?: string
}) {
  return (
    // The duration grows with the number of cards to keep the same scrolling speed.
    <div
      className={cn('testimonials-marquee', className)}
      aria-label={label}
      style={{ '--marquee-duration': `${items.length * 12}s` } as CSSProperties}
    >
      <div className="testimonials-track py-4">
        <div className="flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6">
          {items.map((item) => (
            <TestimonialCard key={item.name} review={item} />
          ))}
        </div>
        <div
          className="testimonials-copy flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6"
          aria-hidden="true"
        >
          {items.map((item) => (
            <TestimonialCard key={`copy-${item.name}`} review={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

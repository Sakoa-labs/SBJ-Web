import { useState } from 'react'
import type { ReactNode } from 'react'
import { Mail } from 'lucide-react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import {
  GoldDivider,
  SectionEyebrow,
} from '#/components/landing/section-ornaments'
import { RichTitle } from '#/components/ui/rich-text'
import { faqAside } from '#/data/contact'
import type { HomeFaqContent } from '#/data/pages/home'
import { cn } from '#/lib/utils'
import lotusOrnament from '#/assets/formation-icons/massage-wellness.png'
import foliageLeft from '../../../design/section faq/ChatGPT Image 24 août 2026, 22_02_30.png'
import foliageRight from '../../../design/section faq/ChatGPT Image 24 août 2026, 22_10_40.png'

export type FaqQuestion = {
  question: string
  answer: string
}

export function FaqSection({ title, intro, questions, photo }: HomeFaqContent) {
  return (
    <FaqLayout
      eyebrow="FAQ"
      title={<RichTitle text={title} accentClassName="inline-block pb-1 text-[#d4af37]" />}
      titleClassName="md:whitespace-nowrap"
      intro={intro}
      questions={questions}
      decorations={<FaqFoliage />}
      aside={
        <FaqContactAside
          image={photo.src}
          imageAlt={photo.alt}
          imageWidth={photo.width}
          imageHeight={photo.height}
        />
      }
    />
  )
}

export function FaqLayout({
  eyebrow,
  title,
  titleClassName,
  intro,
  questions,
  aside,
  decorations,
  toggleSide = 'start',
}: {
  eyebrow: string
  title: ReactNode
  titleClassName?: string
  intro?: string
  questions: ReadonlyArray<FaqQuestion>
  aside: ReactNode
  decorations?: ReactNode
  toggleSide?: 'start' | 'end'
}) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      className="relative isolate -mt-px scroll-mt-24 overflow-hidden bg-[#fff9ec] px-5 py-20 text-[#0d3a2f] sm:scroll-mt-28 sm:px-8 sm:py-24 lg:py-32"
      aria-labelledby="faq-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_50%_18%,rgba(255,255,255,0.96)_0%,rgba(255,250,240,0.72)_36%,transparent_66%),linear-gradient(to_bottom,#fff9ec_0%,#fffaf0_14%,#fffdf8_58%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 opacity-65 [background-image:radial-gradient(circle_at_25%_22%,rgba(185,130,50,0.07),transparent_25%),radial-gradient(circle_at_78%_72%,rgba(13,58,47,0.06),transparent_28%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-[15] h-24 bg-gradient-to-b from-[#fff9ec] via-[#fff9ec]/55 to-transparent sm:h-28"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-[15] h-24 bg-gradient-to-b from-transparent via-[#fff9ec]/55 to-[#fff9ec] sm:h-28"
        aria-hidden="true"
      />

      {decorations}

      <div className="mx-auto w-full max-w-[76rem]">
        <header className="mx-auto max-w-[68rem] text-center">
          <SectionEyebrow label={eyebrow} />
          <h2
            id="faq-title"
            className={cn(
              'mt-6 text-balance text-[clamp(2rem,8.6vw,4.8rem)] font-normal leading-[1.02] tracking-[-0.025em] text-[#0d3a2f] sm:text-[clamp(3.7rem,7vw,5.4rem)] lg:text-[clamp(4.1rem,5vw,5.45rem)]',
              titleClassName,
            )}
          >
            {title}
          </h2>
          {intro && (
            <p className="mx-auto mt-6 max-w-[38rem] text-pretty text-base leading-7 text-[#355149] sm:text-lg sm:leading-8">
              {intro}
            </p>
          )}
        </header>

        <div className="mt-12 grid items-start gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(19rem,0.72fr)] lg:gap-10 xl:gap-12">
          <div className="space-y-3 sm:space-y-4">
            {questions.map((item, index) => {
              const isOpen = openIndex === index
              const answerId = `faq-answer-${index}`

              return (
                <article
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border bg-[#fffdf8]/82 shadow-[0_14px_40px_rgba(103,70,31,0.055),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-[2px] transition-[border-color,box-shadow] duration-300 ${
                    isOpen
                      ? 'border-[#c99442]/70 shadow-[0_18px_48px_rgba(103,70,31,0.085),inset_0_1px_0_rgba(255,255,255,0.96)]'
                      : 'border-[#c99442]/45'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      className="group flex w-full items-center gap-4 px-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b98232] sm:gap-5 sm:px-6 sm:py-6"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span
                        className={cn(
                          'relative grid size-10 shrink-0 place-items-center rounded-full border border-[#d4af37]/65 bg-[#0d3a2f] text-[#e5bd42] shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_4px_10px_rgba(13,58,47,0.18)] sm:size-11',
                          toggleSide === 'end' && 'order-last',
                        )}
                        aria-hidden="true"
                      >
                        <span className="absolute h-px w-5 bg-current" />
                        <span
                          className={`absolute h-5 w-px bg-current transition-transform duration-200 ease-[cubic-bezier(0.77,0,0.175,1)] motion-reduce:transition-none ${
                            isOpen ? 'rotate-90' : 'rotate-0'
                          }`}
                        />
                      </span>
                      <span className="min-w-0 flex-1 font-heading text-[1.3rem] font-medium leading-snug text-[#173c32] sm:text-[1.55rem]">
                        {item.question.replace(/ \?$/, '\u00a0?')}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={answerId}
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={cn(
                          'pb-6 text-sm leading-7 text-[#40574f] sm:pb-7 sm:text-base',
                          toggleSide === 'end'
                            ? 'px-4 sm:px-6 sm:pr-20'
                            : 'pl-[4.5rem] pr-6 sm:pl-[5.5rem] sm:pr-12',
                        )}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {aside}
        </div>
      </div>
    </section>
  )
}

export function FaqAsideCard({
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  className,
  children,
}: {
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  className?: string
  children: ReactNode
}) {
  return (
    <aside
      className={cn(
        'relative isolate self-start overflow-hidden rounded-[2rem] lg:sticky lg:top-28 border border-[#d4af37]/80 bg-[#0d3a2f] text-center text-[#fff9ec] shadow-[0_24px_65px_rgba(51,37,18,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]',
        className,
      )}
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(4,37,29,0.97)_0%,rgba(4,43,33,0.92)_38%,rgba(4,43,33,0.38)_68%,rgba(4,29,23,0.08)_100%)]"
        aria-hidden="true"
      />
      <div className="flex h-full flex-col items-center px-6 pb-8 pt-10 sm:px-8 sm:pt-12 lg:px-7 lg:pt-10 xl:px-10 xl:pt-12">
        {children}
      </div>
    </aside>
  )
}

export function FaqFoliage() {
  return (
    <>
      <img
        data-reveal="left"
        src={foliageLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -left-28 -top-px -z-10 hidden h-[calc(100%+2px)] w-auto max-w-none object-fill lg:block xl:-left-20"
        width={1086}
        height={1448}
        loading="lazy"
      />
      <img
        data-reveal="right"
        src={foliageRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -right-28 -top-px -z-10 hidden h-[calc(100%+2px)] w-auto max-w-none object-fill lg:block xl:-right-20"
        width={1024}
        height={1536}
        loading="lazy"
      />
    </>
  )
}

export function FaqContactAside({
  image,
  imageAlt,
  imageWidth,
  imageHeight,
}: {
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
}) {
  return (
    <FaqAsideCard
      image={image}
      imageAlt={imageAlt}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      className="h-[36rem] sm:h-[39rem] lg:h-[38rem] xl:h-[40rem]"
    >
      <img
        src={lotusOrnament}
        alt=""
        aria-hidden="true"
        className="size-16 object-contain"
        width={256}
        height={256}
      />
      <h3 className="mt-3 text-[clamp(2.6rem,6vw,3.25rem)] font-normal leading-[0.98] tracking-[-0.02em] lg:text-[2.85rem] xl:text-[3.1rem]">
        <RichTitle text={faqAside.title} accentClassName="pb-1 text-[#e0a84f]" />
      </h3>
      <GoldDivider compact className="mt-5" />
      <p className="mt-5 max-w-[17rem] text-base leading-7 text-[#fff9ec]/90">
        {faqAside.text}
      </p>
      <EmbossedCta href="/contact" className="mt-6 w-full max-w-[19rem] gap-3">
        <Mail aria-hidden="true" className="size-5" strokeWidth={1.4} />
        {faqAside.button}
      </EmbossedCta>
    </FaqAsideCard>
  )
}

import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { RichTitle } from '#/components/ui/rich-text'
import type { HomeAboutContent } from '#/data/pages/home'
import aboutLeavesRight from '../../../design/section a propos/ChatGPT Image 24 août 2026, 17_04_40.png'
import guidesLeavesLeft from '../../../design/section guides/ChatGPT Image 24 août 2026, 15_55_27.png'

export function AboutSection({ eyebrow, title, text, values, photo }: HomeAboutContent) {
  return (
    <section
      id="a-propos"
      className="relative isolate -mt-px scroll-mt-24 overflow-hidden bg-[#fff9ec] text-[#0d3a2f] sm:scroll-mt-28"
      aria-labelledby="about-title"
    >
      <div
        className="absolute inset-0 -z-30 bg-[linear-gradient(to_bottom,#fff9ec_0%,#fff9ed_18%,#fffdf8_56%,#fff9ec_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 top-24 -z-20 bg-[radial-gradient(ellipse_at_38%_34%,rgba(255,255,255,0.9)_0%,transparent_42%),radial-gradient(ellipse_at_12%_78%,rgba(185,130,50,0.08)_0%,transparent_28%),radial-gradient(ellipse_at_78%_52%,rgba(126,79,33,0.09)_0%,transparent_34%)] shadow-[inset_0_-28px_70px_rgba(91,58,26,0.06)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-[15] h-24 bg-gradient-to-b from-transparent via-[#fff9ec]/55 to-[#fff9ec] sm:h-28"
        aria-hidden="true"
      />
      <img
        data-reveal="left"
        src={guidesLeavesLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-[5%] z-[15] hidden h-[112%] w-auto max-w-none object-contain object-left [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.7)_4%,#000_10%,#000_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.7)_4%,#000_10%,#000_100%)] xl:block 2xl:-left-20 2xl:h-[116%]"
        width={1086}
        height={1448}
      />
      <div className="relative z-10 grid w-full items-stretch xl:h-[53rem] xl:grid-cols-[1.04fr_0.96fr]">
        <div className="relative flex h-full min-h-full self-stretch items-center px-5 py-20 text-center sm:px-8 sm:py-24 xl:px-16 xl:py-24 xl:text-left 2xl:pl-32 2xl:pr-20">
          <div className="relative z-10 mx-auto w-full max-w-[47rem] xl:mx-0">
            <SectionEyebrow label={eyebrow} className="w-full max-w-[46rem]" />

            <h2
              id="about-title"
              className="mx-auto mt-7 max-w-[46rem] text-balance text-[clamp(1.6rem,7.6vw,2.4rem)] font-normal leading-[1.14] tracking-[-0.02em] text-[#0d3a2f] sm:text-[clamp(2.6rem,6vw,4.5rem)] sm:leading-[1.12] sm:tracking-[-0.025em] xl:mx-0 xl:text-[clamp(3rem,3.6vw,4.5rem)]"
            >
              <RichTitle text={title} accentClassName="pb-1 text-[#d4af37]" />
            </h2>

            <p className="mx-auto mt-8 max-w-[42rem] text-pretty text-base leading-8 text-[#29443c] sm:text-lg sm:leading-8 xl:mx-0">
              {text}
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {values.map((value) => (
                <article
                  key={value._key}
                  className="flex min-h-48 flex-col items-center justify-start rounded-xl border border-[#b98232]/25 bg-[#fffaf0]/48 px-4 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-[1px]"
                >
                  <img
                    src={value.icon.src}
                    alt=""
                    aria-hidden="true"
                    className="size-16 object-contain"
                    width={256}
                    height={256}
                    loading="lazy"
                  />
                  <h3 className="mt-3 font-sans text-lg font-semibold text-[#173c32]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#3f514b]">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </div>

        <figure
          id="univers-sabrina"
          className="relative h-full min-h-[32rem] self-stretch scroll-mt-24 overflow-hidden bg-[#fff9ed] sm:min-h-[40rem] xl:min-h-0"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 size-full object-cover object-[50%_32%] lg:object-[50%_34%]"
            width={photo.width}
            height={photo.height}
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,58,47,0.02),transparent_48%,rgba(43,29,13,0.1))]"
            aria-hidden="true"
          />
          <img
            data-reveal="right"
            src={aboutLeavesRight}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-28 hidden h-[74%] w-auto max-w-none object-contain object-bottom-right xl:block 2xl:-right-20 2xl:h-[82%]"
            width={1024}
            height={1536}
          />
        </figure>
      </div>
    </section>
  )
}

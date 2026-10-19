import { SectionEyebrow } from '#/components/landing/section-ornaments'
import { usePhotoLightbox, ZoomablePhoto } from '#/components/layout/photo-lightbox'
import { RichTitle, WideScreenBreaks } from '#/components/ui/rich-text'
import { withCaptions } from '#/data/pages/contact'
import type { ContactRoomContent } from '#/data/pages/contact'

const frame = 'rounded-2xl border border-[#d4af37]/60'

// The massage room, from the previous site's "Salle de massage" page; its product photos
// are left out on purpose. Each photo opens larger on click: the first one large, the
// next two side by side.
export function ContactRoomSection({ eyebrow, title, text, quote, photos: items }: ContactRoomContent) {
  const photos = withCaptions(items)
  const { openAt, lightbox } = usePhotoLightbox(photos)
  const [large, ...small] = photos

  return (
    <section
      id="salle"
      className="relative isolate overflow-hidden bg-[#062b23] py-16 text-[#fff9ec] sm:py-20 lg:py-28"
      aria-labelledby="salle-title"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_25%,rgba(27,91,73,0.45),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(212,175,55,0.08),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-[84rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow label={eyebrow} />
          <h2
            id="salle-title"
            className="mt-4 text-[clamp(2.2rem,7vw,3.6rem)] font-normal leading-[1.06] tracking-[-0.025em] text-[#fff5df]"
          >
            <RichTitle text={title} accentClassName="text-[#e5bd42]" />
          </h2>
          <p className="mt-6 max-w-[32rem] text-pretty text-base leading-7 text-[#fff9ec]/82 sm:text-lg sm:leading-8">
            <WideScreenBreaks text={text} />
          </p>
          <blockquote className="mt-8 max-w-[30rem] font-heading text-[1.35rem] italic leading-snug text-[#fff5df] sm:text-[1.6rem]">
            «&nbsp;{quote}&nbsp;»
          </blockquote>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <ZoomablePhoto
            photo={large}
            onOpen={() => openAt(0)}
            className={`col-span-2 aspect-[16/10] shadow-[0_28px_60px_rgba(0,0,0,0.35)] ${frame}`}
            width={large.width}
            height={large.height}
          />
          {small.map((photo, index) => (
            <ZoomablePhoto
              key={photo._key}
              photo={photo}
              onOpen={() => openAt(index + 1)}
              className={`aspect-[4/3] shadow-[0_20px_45px_rgba(0,0,0,0.3)] ${frame}`}
              width={photo.width}
              height={photo.height}
            />
          ))}
        </div>
      </div>
      {lightbox}
    </section>
  )
}

import { useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Dialog } from 'radix-ui'

import { cn } from '#/lib/utils'

export type LightboxPhoto = {
  src: string
  alt: string
  caption?: string
}

const roundButton =
  'grid size-11 place-items-center rounded-full border border-[#d4af37]/60 bg-[#062b23]/70 text-[#fff9ec] backdrop-blur-sm transition-colors hover:border-[#e5bd42] hover:text-[#e5bd42] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]'

// Opens a group of photos full screen, one at a time, with arrows (and the arrow keys)
// to move through the group. `openAt(index)` shows a photo; render `lightbox` once.
export function usePhotoLightbox(photos: ReadonlyArray<LightboxPhoto>): {
  openAt: (index: number) => void
  lightbox: ReactNode
} {
  const [index, setIndex] = useState<number | null>(null)
  const photo = index === null ? undefined : photos[index]
  const step = (delta: number) =>
    setIndex((current) => (current === null ? null : (current + delta + photos.length) % photos.length))

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') step(1)
    if (event.key === 'ArrowLeft') step(-1)
  }

  const lightbox = (
    <Dialog.Root open={photo !== undefined} onOpenChange={(open) => !open && setIndex(null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-[#031f1a]/92 backdrop-blur-[3px] duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in motion-reduce:animate-none" />
        <Dialog.Content
          onKeyDown={onKeyDown}
          aria-describedby={undefined}
          className="fixed inset-0 z-[95] flex flex-col items-center justify-center gap-4 p-4 duration-200 focus:outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in motion-reduce:animate-none sm:p-10"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIndex(null)
          }}
        >
          <Dialog.Title className="sr-only">{photo?.caption ?? photo?.alt ?? 'Photo'}</Dialog.Title>
          {photo && (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="max-h-[calc(100dvh-9rem)] max-w-full rounded-2xl border border-[#d4af37]/60 object-contain shadow-[0_30px_80px_rgba(0,0,0,0.5)] duration-200 animate-in fade-in zoom-in-[0.98] motion-reduce:animate-none"
            />
          )}
          <p className="text-center text-sm text-[#fff9ec]/85 sm:text-base">
            {photo?.caption}
            {photos.length > 1 && index !== null && (
              <span className={cn('text-[#e5bd42]', photo?.caption && 'ml-3')}>
                {index + 1}&nbsp;/&nbsp;{photos.length}
              </span>
            )}
          </p>

          <Dialog.Close className={cn(roundButton, 'absolute right-4 top-4 sm:right-6 sm:top-6')} aria-label="Fermer">
            <X aria-hidden="true" className="size-5" strokeWidth={1.6} />
          </Dialog.Close>
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                className={cn(roundButton, 'absolute left-3 top-1/2 -translate-y-1/2 sm:left-6')}
                aria-label="Photo précédente"
              >
                <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className={cn(roundButton, 'absolute right-3 top-1/2 -translate-y-1/2 sm:right-6')}
                aria-label="Photo suivante"
              >
                <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.6} />
              </button>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )

  return { openAt: setIndex, lightbox }
}

// A photo that opens in the lightbox when clicked, with a gentle zoom on hover.
export function ZoomablePhoto({
  photo,
  onOpen,
  className,
  imgClassName,
  width,
  height,
  children,
}: {
  photo: LightboxPhoto
  onOpen: () => void
  className?: string
  imgClassName?: string
  width: number
  height: number
  children?: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Agrandir : ${photo.caption ?? photo.alt}`}
      className={cn(
        'group relative block w-full cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]',
        className,
      )}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className={cn(
          'size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] motion-reduce:transition-none',
          imgClassName,
        )}
        width={width}
        height={height}
        loading="lazy"
      />
      {children}
    </button>
  )
}

import { cn } from '#/lib/utils'

// Small cut-out spa object (stones, flowers, wax…) scattered behind a section's content.
// Tucked against the page edges and partly cut off; only on wide screens, where the side margins leave room.
export function DecorObject({ src, className }: { src: string; className: string }) {
  return (
    <img
      data-reveal={/(^| )-?left-/.test(className) ? 'left' : 'right'}
      src={src}
      alt=""
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute -z-10 hidden h-auto max-w-none object-contain drop-shadow-[0_18px_20px_rgba(77,51,22,0.16)] xl:block',
        className,
      )}
      loading="lazy"
    />
  )
}

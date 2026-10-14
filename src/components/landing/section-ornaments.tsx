import { cn } from '#/lib/utils'
import dividerOrnament from '#/assets/formation-icons/divider-ornament.png'
import lotusOrnament from '#/assets/formation-icons/massage-wellness.png'

export function GoldDivider({
  compact = false,
  card = false,
  className,
}: {
  compact?: boolean
  card?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5',
        card ? 'w-28' : compact ? 'w-44 sm:w-52' : 'w-56 sm:w-64',
        className,
      )}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37]" />
      <img
        src={dividerOrnament}
        alt=""
        className={cn('object-contain', card ? 'h-4 w-5' : 'h-5 w-7')}
        width={256}
        height={256}
      />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#d4af37] to-[#d4af37]" />
    </div>
  )
}

export function SectionEyebrow({
  label,
  className,
}: {
  // Without a label, only the lotus and the gold divider are shown.
  label?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-center text-[#e5bd42]', className)}>
      {/* The lotus artwork has empty space under it; the label is pulled up into it. */}
      <img
        src={lotusOrnament}
        alt=""
        aria-hidden="true"
        className="-mb-2 size-16 object-contain sm:size-18"
        width={256}
        height={256}
      />
      {label && (
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.28em]">
          {label}
        </p>
      )}
      <GoldDivider className={label ? 'mt-2.5' : 'mt-1.5'} />
    </div>
  )
}

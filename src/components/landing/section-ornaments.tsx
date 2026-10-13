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
  label: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-center text-[#e5bd42]', className)}>
      <img
        src={lotusOrnament}
        alt=""
        aria-hidden="true"
        className="size-16 object-contain sm:size-18"
        width={256}
        height={256}
      />
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em]">
        {label}
      </p>
      <GoldDivider className="mt-4" />
    </div>
  )
}

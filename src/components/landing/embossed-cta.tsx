import type { ComponentProps, ReactNode } from 'react'

import { Button } from '#/components/ui/button'
import { cn } from '#/lib/utils'

export function EmbossedCta({
  href,
  children,
  className,
  tone = 'dark',
  ...linkProps
}: Omit<ComponentProps<'a'>, 'href' | 'children' | 'className'> & {
  href: string
  children: ReactNode
  className?: string
  tone?: 'dark' | 'light' | 'gold'
}) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        'h-13 rounded-sm border border-[#d4af37]/85 px-7 text-xs font-bold uppercase tracking-[0.18em] transition-[transform,box-shadow,border-color,filter]',
        tone === 'light' &&
          'embossed-light-cta text-[#12382f] hover:border-[#e5bd42] hover:text-[#12382f]',
        tone === 'dark' &&
          'embossed-dark-cta text-[#fff9ec] hover:border-[#e5bd42] hover:text-[#fff9ec]',
        tone === 'gold' &&
          'embossed-gold-cta border-[#e5bd42]/95 text-[#14221e] hover:text-[#14221e]',
        className,
      )}
    >
      <a href={href} {...linkProps}>
        {children}
      </a>
    </Button>
  )
}

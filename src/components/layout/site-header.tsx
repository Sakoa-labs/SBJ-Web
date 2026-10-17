import { useEffect, useRef, useState } from 'react'
import { UserRound } from 'lucide-react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { NavigationDrawer } from '#/components/layout/navigation-drawer'
import { Button } from '#/components/ui/button'
import { cn } from '#/lib/utils'
import logoImage from '../../../design/sbj-logo.png'

const primaryLinks = [
  { label: 'Massage', href: '/massages' },
  { label: 'Soins', href: '/soins' },
  { label: 'Épilation', href: '/epilation' },
  { label: 'Formation', href: '/#formation' },
  { label: 'Mes guides', href: '/guides' },
]

// Render as the first element of the page, outside any isolated hero, so the fixed header
// stays above every section. `onLight` darkens the links while the header is still
// transparent over a cream hero; once scrolled it turns green like everywhere else.
export function SiteHeader({
  activeHref,
  onLight = false,
}: {
  activeHref?: string
  onLight?: boolean
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavScrolled, setIsNavScrolled] = useState(false)
  const navSentinelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const sentinel = navSentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsNavScrolled(!entry.isIntersecting)
    })

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <span
        ref={navSentinelRef}
        className="pointer-events-none absolute left-0 top-16 size-px"
        aria-hidden="true"
      />

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b [view-transition-name:site-header] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none',
          isNavScrolled
            ? 'border-[#d4af37]/28 bg-[#06271f]/94 shadow-[0_12px_34px_rgba(2,20,16,0.2)] backdrop-blur-xl'
            : 'border-[#d4af37]/20 bg-transparent',
          onLight && !isNavScrolled && 'site-header-on-light border-[#d4af37]/40',
        )}
      >
        <nav
          className="mx-auto grid h-24 w-full max-w-[100rem] grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 sm:h-28 sm:px-8 xl:px-12"
          aria-label="Navigation principale"
        >
          <div className="hidden items-center gap-5 2xl:gap-7 xl:flex">
            {primaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                aria-current={link.href === activeHref ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/"
            className="col-start-2 inline-flex justify-self-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]"
            aria-label="Joie d'être par Sabrina, accueil"
          >
            <img
              src={logoImage}
              alt="Joie d'être par Sabrina"
              className={`h-auto w-[10.5rem] origin-center transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:w-[12.5rem] xl:w-[13.5rem] ${
                isNavScrolled ? 'scale-90' : 'scale-100'
              }`}
              width={1870}
              height={841}
            />
          </a>

          <div className="hidden items-center justify-end gap-5 2xl:gap-7 xl:flex">
            <EmbossedCta
              href="#offrir"
              tone="light"
              className="h-11 px-5 text-[0.68rem] tracking-[0.16em]"
            >
              Offrir
            </EmbossedCta>
            <Button
              asChild
              className="embossed-gold-cta h-11 rounded-sm border border-[#e5bd42]/90 px-5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#14221e] hover:text-[#14221e]"
            >
              <a href="#reserver">Réserver</a>
            </Button>
            <a href="#espace-apprenant" className="nav-link items-center gap-1.5">
              <UserRound aria-hidden="true" className="size-3.5" strokeWidth={1.5} />
              Espace apprenant
            </a>
          </div>

          <NavigationDrawer
            links={primaryLinks}
            onLight={onLight && !isNavScrolled}
            open={isMenuOpen}
            onOpenChange={setIsMenuOpen}
          />
        </nav>
      </header>
    </>
  )
}

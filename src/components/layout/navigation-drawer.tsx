import { useEffect } from 'react'
import { Menu, UserRound, X } from 'lucide-react'
import { Dialog } from 'radix-ui'

import { Button } from '#/components/ui/button'
import { cn } from '#/lib/utils'
import menuImage from '#/assets/navigation/menu-spa.png'
import logoImage from '../../../design/sbj-logo.png'

type NavigationLink = {
  label: string
  href: string
}

export function NavigationDrawer({
  links,
  onLight = false,
  open,
  onOpenChange,
}: {
  links: ReadonlyArray<NavigationLink>
  onLight?: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)')
    const closeOnDesktop = () => {
      if (desktop.matches) onOpenChange(false)
    }

    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [onOpenChange])

  const closeMenu = () => onOpenChange(false)

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            'col-start-3 grid size-11 justify-self-end place-items-center rounded-full border border-[#d4af37]/65 backdrop-blur-sm transition-[color,border-color,background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-[#e5bd42] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37] xl:hidden',
            onLight
              ? 'bg-[#fffdf8]/80 text-[#0d3a2f] hover:bg-[#f6ecd9] hover:text-[#a87d16]'
              : 'bg-[#06271f]/24 text-[#fff9ec] hover:bg-[#fff9ec]/10 hover:text-[#e5bd42]',
          )}
          aria-label="Ouvrir le menu"
        >
          <Menu aria-hidden="true" className="size-5" strokeWidth={1.7} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="navigation-drawer-overlay" />
        <Dialog.Content
          className="navigation-drawer-content fixed inset-0 z-[90] overflow-hidden bg-[#fff9ec] text-[#0d3a2f] focus:outline-none"
          aria-describedby="navigation-drawer-description"
        >
          <Dialog.Title className="sr-only">Menu principal</Dialog.Title>
          <Dialog.Description id="navigation-drawer-description" className="sr-only">
            Navigation vers les différentes sections du site Joie d’Être.
          </Dialog.Description>

          <div className="grid h-dvh min-h-[38rem] grid-cols-1 sm:grid-cols-[minmax(20rem,46%)_1fr] lg:grid-cols-[minmax(25rem,42%)_1fr]">
            <div className="relative z-10 flex min-h-0 flex-col overflow-y-auto bg-[#fff9ec] px-7 pb-7 pt-6 shadow-[18px_0_50px_rgba(20,34,28,0.08)] [scrollbar-width:none] sm:px-10 sm:pb-9 sm:pt-8 lg:px-14 lg:pb-10 lg:pt-10 [&::-webkit-scrollbar]:hidden">
              <a
                href="/"
                className="inline-flex w-fit rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]"
                onClick={closeMenu}
                aria-label="Joie d’Être, accueil"
              >
                <img
                  src={logoImage}
                  alt="Joie d’Être par Sabrina"
                  className="h-auto w-[10.5rem] sm:w-[12rem]"
                  width={1870}
                  height={841}
                />
              </a>

              <nav
                className="my-auto flex flex-col py-8 sm:py-10"
                aria-label="Menu principal"
              >
                <div className="grid gap-2 sm:gap-3">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="group w-fit font-heading text-[clamp(1.55rem,5vw,2.1rem)] leading-tight text-[#0d3a2f] transition-colors duration-150 hover:text-[#b58b22] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]"
                    >
                      <span className="mr-3 inline-block h-px w-0 bg-[#d4af37] align-middle transition-[width] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-6" />
                      {link.label}
                    </a>
                  ))}
                </div>

              </nav>

              <Button
                asChild
                className="embossed-dark-cta mb-6 h-12 w-full rounded-sm border border-[#d4af37]/85 px-5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#fff9ec] hover:border-[#e5bd42] hover:text-[#fff9ec]"
              >
                <a href="#espace-apprenant" onClick={closeMenu}>
                  <UserRound aria-hidden="true" className="size-4" strokeWidth={1.6} />
                  Espace apprenant
                </a>
              </Button>

              <div className="grid grid-cols-2 gap-3 border-t border-[#d4af37]/28 pt-6">
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-sm border-[#0d3a2f]/55 bg-transparent px-4 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[#0d3a2f] hover:border-[#d4af37] hover:bg-[#f6ecd9] hover:text-[#0d3a2f]"
                >
                  <a href="#offrir" onClick={closeMenu}>Offrir</a>
                </Button>
                <Button
                  asChild
                  className="embossed-gold-cta h-11 rounded-sm border border-[#e5bd42]/90 px-5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#14221e] hover:text-[#14221e]"
                >
                  <a href="#reserver" onClick={closeMenu}>Réserver</a>
                </Button>
              </div>
            </div>

            <figure className="relative hidden min-h-0 overflow-hidden bg-[#082f27] sm:block">
              <img
                src={menuImage}
                alt="Espace de soin Joie d’Être aux tons crème, verts et dorés"
                className="size-full object-cover object-center"
                width={1024}
                height={1536}
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,31,25,0.14),transparent_28%),linear-gradient(180deg,rgba(3,31,25,0.16),transparent_32%,rgba(3,31,25,0.28))]"
                aria-hidden="true"
              />
            </figure>
          </div>

          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute right-5 top-5 z-20 grid size-12 place-items-center rounded-full border border-[#d4af37]/70 bg-[#06271f]/72 text-[#fff9ec] shadow-lg backdrop-blur-md transition-[transform,color,border-color,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-[#e5bd42] hover:bg-[#06271f]/92 hover:text-[#e5bd42] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5bd42] sm:right-7 sm:top-7"
              aria-label="Fermer le menu"
            >
              <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

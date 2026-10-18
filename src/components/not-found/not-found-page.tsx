import { ArrowRight } from 'lucide-react'

import { EmbossedCta } from '#/components/landing/embossed-cta'
import { GoldDivider } from '#/components/landing/section-ornaments'
import { ServiceFinder } from '#/components/landing/service-finder'
import { SiteHeader } from '#/components/layout/site-header'
import { LeafShadow } from '#/components/services/leaf-shadow'
import { Button } from '#/components/ui/button'
import frangipani from '#/assets/decor/frangipanier.png'
import palmLeaf from '../../../design/massage/decorations/palme-faq-gauche.png'
import pathImage from '../../../design/404/sentier.png'
import candleImage from '../../../design/404/bougie.png'

const links = [
  { label: 'Massages', href: '/massages' },
  { label: 'Soins du visage', href: '/soins' },
  { label: 'Épilation', href: '/epilation' },
  { label: 'Formation', href: '/formation' },
  { label: 'Mes guides', href: '/guides' },
  { label: 'Contact', href: '/contact' },
]

// Gold "404" whose zero is a frangipani flower resting in a fine gold ring.
function FlowerCode() {
  const digit =
    'bg-[linear-gradient(180deg,#e9c763_0%,#c99a2e_55%,#a87d16_100%)] bg-clip-text text-transparent'
  return (
    <p
      aria-label="Erreur 404"
      className="flex items-center font-heading text-[clamp(5rem,15vw,8rem)] leading-none tracking-[-0.04em]"
    >
      <span aria-hidden="true" className={digit}>4</span>
      <span
        aria-hidden="true"
        className="relative mx-[0.04em] grid size-[0.78em] place-items-center rounded-full border-2 border-[#d4af37] bg-[radial-gradient(circle,#fffdf6_0%,#fff6e2_100%)] shadow-[0_14px_34px_rgba(103,70,31,0.16),inset_0_0_0_6px_rgba(255,253,246,0.9)]"
      >
        <img
          src={frangipani}
          alt=""
          className="w-[86%] -rotate-12 drop-shadow-[0_8px_14px_rgba(103,70,31,0.22)]"
          width={720}
          height={659}
        />
      </span>
      <span aria-hidden="true" className={digit}>4</span>
    </p>
  )
}

// Shown for any address that no longer exists: the site was rebuilt, so old links
// (from Google or bookmarks) land here and are guided back to the services.
export function NotFoundPage() {
  return (
    <main className="overflow-x-clip bg-background">
      <SiteHeader onLight />
      <section
        className="relative isolate overflow-hidden bg-[#fff9ec] text-[#0d3a2f]"
        aria-labelledby="not-found-title"
      >
        <div
          className="absolute inset-0 -z-30 bg-[linear-gradient(118deg,#fff9ec_0%,#fffaf0_30%,#fffdf8_58%,#fff9ec_100%)]"
          aria-hidden="true"
        />
        <LeafShadow leaf="monstera" className="-left-48 -top-40 w-[44rem] rotate-[18deg]" />
        <img
          data-reveal="right"
          src={palmLeaf}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-24 -z-10 hidden w-[24rem] max-w-none -scale-x-100 rotate-[-18deg] object-contain lg:block"
          width={1254}
          height={1254}
        />

        <div className="mx-auto grid w-full max-w-[84rem] items-center gap-14 px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:min-h-svh lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pb-14 lg:pt-36 xl:gap-24">
          <div className="hero-stagger">
            {/* The 404, its ornament and label are centred over the headline. */}
            <div className="w-fit max-w-full">
              <div className="flex flex-col items-center">
                <FlowerCode />
                <GoldDivider compact className="mt-4" />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-[#c09027]">
                  Page introuvable
                </p>
              </div>

            <h1
              id="not-found-title"
              className="mt-6 text-[clamp(2.3rem,7.5vw,3.9rem)] font-normal leading-[1.05] tracking-[-0.03em]"
            >
              <span className="block font-medium">Ce chemin ne mène</span>
              <em className="block pb-1 font-normal text-[#c09027]">nulle part…</em>
              <span className="mt-1 block text-[0.72em] font-medium">mais celui-ci, si.</span>
            </h1>
            </div>

            <p className="mt-6 max-w-[32rem] border-l-2 border-[#d4af37]/70 pl-5 text-pretty text-base leading-7 text-[#1f3a32] sm:pl-6 sm:text-lg sm:leading-8">
              Le site a fait peau neuve&nbsp;: certaines anciennes adresses ont changé. Laissez-nous
              vous guider.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <ServiceFinder
                trigger={
                  <Button
                    type="button"
                    size="lg"
                    className="embossed-gold-cta h-13 rounded-sm border border-[#e5bd42]/95 px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#14221e] transition-[transform,box-shadow,border-color,filter] hover:text-[#14221e] sm:h-14 sm:min-w-72"
                  >
                    Quelle prestation pour moi&nbsp;?
                  </Button>
                }
              />
              <EmbossedCta href="/" tone="light" className="sm:h-14 sm:min-w-60">
                Retour à l’accueil
              </EmbossedCta>
            </div>

            <nav aria-label="Pages du site" className="mt-9">
              <ul className="grid max-w-[30rem] grid-cols-2 gap-x-8 gap-y-3.5 sm:gap-x-12">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-3 text-base text-[#173c32] transition-colors hover:text-[#9a6d2c]"
                    >
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 text-[#c09027] transition-transform duration-200 group-hover:translate-x-1"
                        strokeWidth={1.8}
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* The path photo in a gold arch, with a small candle photo overlapping its foot. */}
          <div className="relative mx-auto w-full max-w-[30rem] pb-10 pl-10 lg:max-w-none lg:pb-12 lg:pl-14">
            <figure className="hero-photo aspect-[4/5] overflow-hidden rounded-t-full border-[3px] border-[#d4af37] bg-[#e8dcc8] shadow-[0_30px_70px_rgba(77,51,22,0.2)]">
              <img
                src={pathImage}
                alt="Un sentier de pierres à travers un jardin tropical, menant à la porte d’un petit spa"
                className="size-full object-cover"
                width={1122}
                height={1402}
                fetchPriority="high"
              />
            </figure>
            <figure className="hero-photo hero-photo-delayed absolute bottom-0 left-0 aspect-square w-[38%] overflow-hidden border-[3px] border-[#d4af37] bg-[#e8dcc8] shadow-[0_22px_48px_rgba(77,51,22,0.24)]">
              <img
                src={candleImage}
                alt="Une bougie allumée et une fleur de frangipanier posée sur une serviette roulée"
                className="size-full object-cover"
                width={1254}
                height={1254}
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  )
}

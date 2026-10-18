import type { SVGProps } from 'react'

import logoImage from '../../../design/sbj-logo.png'

const footerGroups = [
  {
    title: 'Formations',
    links: [
      { label: 'Formations', href: '/formation' },
      { label: 'Ateliers', href: '/formation#presentiel' },
      { label: 'E-learning', href: '/formation#en-ligne' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { label: 'Guides', href: '/guides' },
      { label: 'PDF', href: '/guides#collection' },
      { label: 'Amazon KDP', href: '/guides' },
    ],
  },
  {
    title: 'Prestations',
    links: [
      { label: 'Massages', href: '#massage' },
      { label: 'Soins du visage', href: '#soins' },
      { label: 'Épilation', href: '#epilation' },
    ],
  },
  {
    title: 'À propos',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'À propos', href: '#a-propos' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
]

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.8v8h3.4Z" />
    </svg>
  )
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" strokeWidth="1.7" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Instagram', href: '#instagram', Icon: InstagramIcon },
  { label: 'Facebook', href: '#facebook', Icon: FacebookIcon },
  { label: 'YouTube', href: '#youtube', Icon: YoutubeIcon },
]

export function SiteFooter() {
  return (
    <footer
      id="contact-footer"
      className="site-footer relative isolate -mt-px scroll-mt-24 overflow-hidden bg-[#031f1a] px-5 pb-8 pt-14 text-[#fff9ec] sm:scroll-mt-28 sm:px-8 sm:pt-16 lg:pt-20"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_32%,rgba(27,91,73,0.3),transparent_30%),radial-gradient(circle_at_90%_85%,rgba(25,70,58,0.24),transparent_28%)]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[92rem]">
        <div className="grid gap-12 xl:grid-cols-[1.35fr_3fr] xl:items-center xl:gap-12 2xl:gap-16">
          <div className="flex flex-col items-center text-center">
            <a
              href="#accueil"
              className="inline-flex justify-center"
              aria-label="Joie d'être par Sabrina, accueil"
            >
              <img
                src={logoImage}
                alt="Joie d'Être par Sabrina"
                className="h-auto w-[18rem] max-w-full"
                width={1870}
                height={841}
                loading="lazy"
              />
            </a>
            <p className="mt-5 max-w-[24rem] text-sm leading-7 text-[#fff9ec]/78 sm:text-base">
              Apprendre, pratiquer et transmettre l’art du bien-être au naturel.
            </p>

            <div className="mt-7 flex justify-center gap-3" aria-label="Réseaux sociaux">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-[#d4af37]/75 text-[#e5bd42] transition-colors duration-200 hover:border-[#e5bd42] hover:bg-[#d4af37]/12 hover:text-[#fff4cf] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]"
                >
                  <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-8 gap-y-10 self-center lg:grid-cols-4"
            aria-label="Navigation du pied de page"
          >
            {footerGroups.map((group, index) => (
              <div key={group.title} className="relative lg:px-4 xl:px-2 2xl:px-5">
                <h2 className="font-heading text-lg font-medium uppercase tracking-[0.06em] text-[#e5bd42] sm:text-xl sm:tracking-[0.08em]">
                  {group.title}
                </h2>
                <span className="mt-4 block h-px w-12 bg-[#d4af37]/55" aria-hidden="true" />
                <div className="relative mt-5">
                  {index < footerGroups.length - 1 && (
                    <span
                      className="absolute -right-4 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-[#d4af37]/24 lg:block xl:-right-2 2xl:-right-4"
                      aria-hidden="true"
                    />
                  )}
                  <ul className="space-y-3">
                    {group.links.map((link) => (
                      <li key={`${group.title}-${link.label}`}>
                        <a
                          href={link.href}
                          className="text-sm text-[#fff9ec]/78 transition-colors hover:text-[#e5bd42] sm:text-base"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div data-footer-legal className="mt-14 flex flex-col gap-4 border-t border-[#d4af37]/38 pt-6 text-xs text-[#fff9ec]/65 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© 2026 Joie d’Être. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2 sm:justify-end">
            <a href="#mentions-legales" className="transition-colors hover:text-[#e5bd42]">
              Mentions légales
            </a>
            <a
              href="#conditions-utilisation"
              className="transition-colors hover:text-[#e5bd42]"
            >
              Conditions d’utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

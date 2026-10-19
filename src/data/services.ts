// Catalogue of every bookable service, shared by the menu cards and the detail pages.
// Edited in Sanity (Prestations) and downloaded at build time by scripts/pull-content.ts.
// Durations and prices mirror the Booksy listing (business 12322): Sabrina updates both.

import content from '#/content/content.json'

export type ServiceCategory = 'massages' | 'soins' | 'epilation'

export type ServiceImage = {
  src: string
  alt: string
}

// One bookable option. Most services have a single one; some come in several durations
// or, for waxing, in several zones.
export type ServiceVariant = {
  label: string
  minutes: number
  price: number
  // Discounted price when a promotion runs, computed from the service's percentage.
  promoPrice?: number
  // Booksy service variant: the booking window opens straight on this option.
  booksyId: number
}

export type Service = {
  slug: string
  category: ServiceCategory
  // Card title on the list page.
  title: string
  // Detail page title, as two lines: upright then gold italic.
  headline: string
  accent: string
  summary: string
  hook: string
  description: string
  image: ServiceImage
  gallery: readonly [ServiceImage, ServiceImage]
  icon?: string
  variants: ReadonlyArray<ServiceVariant>
  // Promotion label shown on the booking box, e.g. "-15 %".
  promotion?: string
  // Only used by the waxing package cards.
  group?: 'forfait'
}

// The shape is checked by scripts/pull-content.ts; JSON types cannot express the two-photo gallery.
export const services = content.services as unknown as ReadonlyArray<Service>

export const categoryInfo: Record<
  ServiceCategory,
  { label: string; path: '/massages' | '/soins' | '/epilation'; bookLabel: string; giftLabel: string }
> = {
  massages: { label: 'Massages', path: '/massages', bookLabel: 'Réserver ce massage', giftLabel: 'Offrir ce massage' },
  soins: { label: 'Soins visage', path: '/soins', bookLabel: 'Réserver ce soin', giftLabel: 'Offrir ce soin' },
  epilation: { label: 'Épilation', path: '/epilation', bookLabel: 'Réserver cette épilation', giftLabel: 'Offrir cette épilation' },
}

export function servicesIn(category: ServiceCategory, group?: 'forfait') {
  return services.filter((service) => service.category === category && service.group === group)
}

export function findService(category: ServiceCategory, slug: string) {
  return services.find((service) => service.category === category && service.slug === slug)
}

export function serviceHref(service: Service) {
  return `${categoryInfo[service.category].path}/${service.slug}`
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value)
}

export function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  return rest ? `${hours} h ${String(rest).padStart(2, '0')}` : `${hours} h`
}

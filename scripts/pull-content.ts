// Downloads the site content from Sanity into src/content/content.json, read by src/data.
// Runs before every build and dev server, so publishing in the Studio then rebuilding is
// enough to update the site. With --allow-cache (dev), a failed download keeps the last file.

import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { createClient } from '@sanity/client'

import { dataset, projectId } from '../studio/project.ts'

const output = new URL('../src/content/content.json', import.meta.url)
const allowCache = process.argv.includes('--allow-cache')

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-10-01',
  // Straight from the API rather than the CDN, so a build right after publishing sees the change.
  useCdn: false,
  perspective: 'published',
})

const image = (field: string) => `${field}{ "url": asset->url, alt }`

const query = `{
  "services": *[_type == "service"] | order(order asc) {
    "slug": slug.current, category, forfait, title, headline, accent, summary, hook, description,
    promotionPercent, variants[]{ label, minutes, price, booksyId },
    ${image('image')}, "icon": icon.asset->url
  },
  // Page documents are taken whole: their images are resolved below, whatever their place.
  "pages": *[string::startsWith(_id, "page-")],
  "assets": *[_type == "sanity.imageAsset"] {
    _id, url, "width": metadata.dimensions.width, "height": metadata.dimensions.height
  },
  "guides": *[_type == "guide"] | order(order asc) {
    "slug": slug.current, title, accent, subtitle, description, price, pages, chapters,
    ${image('cover')}, ${image('photo')}, gallery[]{ "url": asset->url, alt }
  },
  "guidesBundle": *[_id == "guidesBundle"][0] {
    title, accent, subtitle, description, price, "cardImage": cardImage.asset->url,
    ${image('photo')}, gallery[]{ "url": asset->url, alt }
  },
  "reviews": *[_type == "review"] | order(order asc) {
    name, service, source, verified, text, "avatar": avatar.asset->url
  },
  "settings": *[_id == "settings"][0] {
    email, phone, addressLines, mapsQuery, openingHours[]{ days, hours }, faqAside{ title, text, button },
    footer{ tagline, servicesHeading, learnHeading, guidesHeading, contactHeading, copyright }
  }
}`

type Photo = { url?: string; alt?: string }

// Every problem found, so a single failed build lists them all.
const problems: Array<string> = []

function check(condition: unknown, where: string, field: string) {
  if (!condition) problems.push(`${where} : « ${field} » manquant ou invalide`)
}
const text = (value: unknown) => typeof value === 'string' && value.trim() !== ''
const positive = (value: unknown) => typeof value === 'number' && value > 0

// Sanity resizes and converts images on the fly: WebP or AVIF, never larger than needed.
function imageUrl(url: string, width: number) {
  return `${url}?w=${width}&fit=max&auto=format`
}
function photo(value: Photo | null | undefined, where: string, field: string, width = 1800) {
  check(value?.url && text(value.alt), where, field)
  return { src: imageUrl(value?.url ?? '', width), alt: value?.alt ?? '' }
}
function gallery(value: Array<Photo> | null | undefined, where: string) {
  check(value?.length === 2, where, 'Photos secondaires (2 photos)')
  return (value ?? []).map((item) => photo(item, where, 'Photos secondaires'))
}

let data: any
try {
  data = await client.fetch(query)
} catch (error) {
  if (allowCache && existsSync(output)) {
    console.warn(`Contenu Sanity indisponible (${(error as Error).message}) : le dernier contenu téléchargé est conservé.`)
    process.exit(0)
  }
  throw error
}

const assets = new Map<string, { url: string; width: number; height: number }>(
  data.assets.map((asset: any) => [asset._id, asset]),
)

// Replaces every image of a page document with its URL, description and size, and drops
// the system fields Sanity adds to documents.
function resolve(value: unknown, where: string): unknown {
  if (Array.isArray(value)) return value.map((item) => resolve(item, where))
  if (!value || typeof value !== 'object') return value
  const object = value as Record<string, any>
  if (object._type === 'image') {
    const asset = assets.get(object.asset?._ref)
    check(asset, where, 'Photo')
    return {
      src: imageUrl(asset?.url ?? '', 2400),
      alt: object.alt ?? '',
      width: asset?.width ?? 0,
      height: asset?.height ?? 0,
    }
  }
  return Object.fromEntries(
    Object.entries(object)
      .filter(([key]) => !['_id', '_rev', '_createdAt', '_updatedAt', '_system'].includes(key))
      .map(([key, item]) => [key, resolve(item, where)]),
  )
}

const pages: Record<string, any> = Object.fromEntries(
  data.pages.map((page: any) => {
    const key = page._id.replace(/^page-/, '')
    return [key, resolve(page, `Page ${page.title ?? key}`)]
  }),
)

const galleries = Object.fromEntries(
  ['massages', 'soins', 'epilation'].map((key) => {
    const where = `Page ${pages[key]?.title ?? key}`
    const items: Array<{ src: string; alt: string }> = pages[key]?.gallery ?? []
    check(items.length === 2 && items.every((item) => item.src && text(item.alt)), where, 'Photos secondaires (2 photos)')
    return [key, items.map(({ src, alt }) => ({ src, alt }))]
  }),
)

const services = data.services.map((service: any) => {
  const where = `Prestation « ${service.title ?? service.slug} »`
  for (const field of ['slug', 'title', 'headline', 'accent', 'summary', 'hook', 'description'] as const) {
    check(text(service[field]), where, field)
  }
  check(['massages', 'soins', 'epilation'].includes(service.category), where, 'Catégorie')
  check(service.variants?.length, where, 'Options et tarifs')
  const rate = service.promotionPercent
  return {
    slug: service.slug,
    category: service.category,
    title: service.title,
    headline: service.headline,
    accent: service.accent,
    summary: service.summary,
    hook: service.hook,
    description: service.description,
    image: photo(service.image, where, 'Photo principale'),
    gallery: galleries[service.category] ?? [],
    ...(service.icon ? { icon: imageUrl(service.icon, 256) } : {}),
    ...(rate ? { promotion: `-${rate} %` } : {}),
    ...(service.category === 'epilation' && service.forfait ? { group: 'forfait' } : {}),
    variants: (service.variants ?? []).map((variant: any) => {
      check(
        text(variant.label) && positive(variant.minutes) && positive(variant.price) && positive(variant.booksyId),
        where,
        `Option ${variant.label ?? ''}`.trim(),
      )
      return {
        label: variant.label,
        minutes: variant.minutes,
        price: variant.price,
        ...(rate ? { promoPrice: Math.round(variant.price * (100 - rate)) / 100 } : {}),
        booksyId: variant.booksyId,
      }
    }),
  }
})

const guides = data.guides.map((guide: any) => {
  const where = `Guide « ${guide.title ?? guide.slug} »`
  for (const field of ['slug', 'title', 'accent', 'subtitle', 'description'] as const) check(text(guide[field]), where, field)
  check(positive(guide.price) && positive(guide.pages), where, 'Prix ou nombre de pages')
  check(guide.chapters?.length, where, 'Chapitres')
  const cover = photo(guide.cover, where, 'Photo de la carte', 1200)
  return {
    slug: guide.slug,
    title: guide.title,
    subtitle: guide.subtitle,
    price: guide.price,
    image: cover.src,
    imageAlt: cover.alt,
    accent: guide.accent,
    description: guide.description,
    pages: guide.pages,
    chapters: guide.chapters ?? [],
    photo: photo(guide.photo, where, 'Grande photo'),
    gallery: gallery(guide.gallery, where),
  }
})

const bundle = data.guidesBundle ?? {}
for (const field of ['title', 'accent', 'subtitle', 'description'] as const) check(text(bundle[field]), 'Coffret des guides', field)
check(positive(bundle.price), 'Coffret des guides', 'Prix')
check(bundle.cardImage, 'Coffret des guides', 'Photo de la carte')
const guidesBundle = {
  title: bundle.title,
  accent: bundle.accent,
  subtitle: bundle.subtitle,
  description: bundle.description,
  price: bundle.price,
  cardImage: imageUrl(bundle.cardImage ?? '', 1200),
  photo: photo(bundle.photo, 'Coffret des guides', 'Grande photo'),
  gallery: gallery(bundle.gallery, 'Coffret des guides'),
}

const reviews = data.reviews.map((review: any) => {
  const where = `Avis de ${review.name ?? '?'}`
  check(text(review.name) && text(review.service) && text(review.text), where, 'Nom, prestation ou texte')
  check(['Google', 'Booksy'].includes(review.source), where, 'Source')
  return {
    name: review.name,
    service: review.service,
    source: review.source,
    text: review.text,
    ...(review.source === 'Booksy' && review.verified ? { verified: true } : {}),
    ...(review.avatar ? { avatar: imageUrl(review.avatar, 160) } : {}),
  }
})

const settings = data.settings ?? {}
check(text(settings.email) && text(settings.phone) && text(settings.mapsQuery), 'Coordonnées', 'E-mail, téléphone ou recherche Google Maps')
check(settings.addressLines?.length, 'Coordonnées', 'Adresse')
check(settings.openingHours?.length, 'Coordonnées', 'Horaires')
check(
  text(settings.faqAside?.title) && text(settings.faqAside?.text) && text(settings.faqAside?.button),
  'Coordonnées',
  'Encadré « Une autre question ? »',
)
for (const field of ['tagline', 'servicesHeading', 'learnHeading', 'guidesHeading', 'contactHeading', 'copyright']) {
  check(text(settings.footer?.[field]), 'Pied de page', field)
}
const contact = {
  email: settings.email,
  phone: settings.phone,
  phoneHref: `tel:${String(settings.phone ?? '').replace(/\s/g, '')}`,
  address: (settings.addressLines ?? []).join(', '),
  addressLines: settings.addressLines ?? [],
  mapsQuery: settings.mapsQuery,
}

check(services.length, 'Prestations', 'au moins une prestation')
check(guides.length, 'Guides', 'au moins un guide')
check(reviews.length, 'Avis clients', 'au moins un avis')
const duplicates = services
  .map((service: any) => `${service.category}/${service.slug}`)
  .filter((key: string, index: number, all: Array<string>) => all.indexOf(key) !== index)
for (const key of duplicates) problems.push(`Prestations : l’adresse /${key} est utilisée deux fois`)

if (problems.length) {
  console.error(`Le contenu Sanity est incomplet, le site n’est pas mis à jour :\n- ${problems.join('\n- ')}`)
  process.exit(1)
}

mkdirSync(new URL('.', output), { recursive: true })
writeFileSync(
  output,
  JSON.stringify(
    {
      services,
      guides,
      guidesBundle,
      reviews,
      contact,
      openingHours: settings.openingHours,
      faqAside: settings.faqAside,
      footer: settings.footer,
      pages,
    },
    null,
    2,
  ) + '\n',
)
console.log(
  `Contenu Sanity téléchargé : ${services.length} prestations, ${guides.length} guides, ${reviews.length} avis.`,
)

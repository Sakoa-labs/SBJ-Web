import { DecorObject } from '#/components/services/decor-object'
import { LeafShadow } from '#/components/services/leaf-shadow'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
import type { ServiceMenuContent } from '#/data/pages/services'
import { serviceHref, servicesIn } from '#/data/services'
import frangipaniersDuo from '#/assets/decor/frangipaniers-duo.png'

const items: ReadonlyArray<ServiceMenuItem> = servicesIn('epilation').map((service) => ({
  id: service.slug,
  title: service.title,
  description: service.summary,
  image: service.image.src,
  imageAlt: service.image.alt,
  icon: service.icon,
  href: serviceHref(service),
}))

export function EpilationMenuSection({ eyebrow, title, subtitle, button }: ServiceMenuContent) {
  return (
    <ServiceMenuSection
      eyebrow={eyebrow}
      decor={
        <>
          <LeafShadow leaf="monstera" className="-right-64 top-[8%] w-[44rem] -rotate-[28deg]" />
          <DecorObject src={frangipaniersDuo} className="-left-12 top-[44%] w-28 rotate-[18deg]" />
        </>
      }
      id="carte-des-epilations"
      richTitle={title}
      subtitle={subtitle}
      items={items}
      ctaLabel={button}
      imageWidth={1536}
      imageHeight={1024}
      imageClassName="aspect-[1.6/1]"
      variant="card"
    />
  )
}

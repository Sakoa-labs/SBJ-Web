import { DecorObject } from '#/components/services/decor-object'
import { LeafShadow } from '#/components/services/leaf-shadow'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
import type { ServiceMenuContent } from '#/data/pages/services'
import { serviceHref, servicesIn } from '#/data/services'
import frangipanier from '#/assets/decor/frangipanier.png'

const items: ReadonlyArray<ServiceMenuItem> = servicesIn('epilation', 'forfait').map((service) => ({
  id: service.slug,
  title: service.title,
  description: service.summary,
  image: service.image.src,
  imageAlt: service.image.alt,
  icon: service.icon,
  href: serviceHref(service),
}))

export function EpilationForfaitsSection({ eyebrow, title, subtitle, button }: ServiceMenuContent) {
  return (
    <ServiceMenuSection
      eyebrow={eyebrow}
      decor={
        <>
          <LeafShadow leaf="palme" className="-left-52 top-[14%] w-[46rem] -rotate-[8deg]" />
          <DecorObject src={frangipanier} className="-right-14 bottom-[18%] w-32 -rotate-12" />
        </>
      }
      id="forfaits-epilation"
      richTitle={title}
      subtitle={subtitle}
      items={items}
      imageWidth={1536}
      imageHeight={1024}
      imageClassName="aspect-[3/2]"
      variant="card"
      ctaLabel={button}
    />
  )
}

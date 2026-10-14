import { DecorObject } from '#/components/services/decor-object'
import { LeafShadow } from '#/components/services/leaf-shadow'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
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

export function EpilationMenuSection() {
  return (
    <ServiceMenuSection
      eyebrow="Nos épilations"
      decor={
        <>
          <LeafShadow leaf="frangipanier" className="-right-48 top-[6%] w-[44rem] rotate-[12deg]" />
          <DecorObject src={frangipaniersDuo} className="-left-12 top-[44%] w-28 rotate-[18deg]" />
        </>
      }
      id="carte-des-epilations"
      accent="épilations"
      subtitle="Choisissez votre zone."
      items={items}
      imageWidth={1536}
      imageHeight={1024}
      imageClassName="aspect-[1.6/1]"
      variant="card"
    />
  )
}

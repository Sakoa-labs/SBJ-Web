import { DecorObject } from '#/components/services/decor-object'
import { LeafShadow } from '#/components/services/leaf-shadow'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
import { serviceHref, servicesIn } from '#/data/services'
import frangipanier from '#/assets/decor/frangipanier.png'
import pierresEmpilees from '#/assets/decor/pierres-empilees.png'

const items: ReadonlyArray<ServiceMenuItem> = servicesIn('massages').map((service) => ({
  id: service.slug,
  title: service.title,
  description: service.summary,
  image: service.image.src,
  imageAlt: service.image.alt,
  icon: service.icon,
  href: serviceHref(service),
}))

export function MassageMenuSection() {
  return (
    <ServiceMenuSection
      eyebrow="Nos massages"
      decor={
        <>
          <LeafShadow leaf="monstera" className="-right-64 top-[8%] w-[44rem] -rotate-[28deg]" />
          <DecorObject src={frangipanier} className="-left-12 top-[44%] w-28 rotate-[18deg]" />
          <DecorObject src={pierresEmpilees} className="-right-14 bottom-[18%] w-32 -rotate-12" />
        </>
      }
      id="carte-des-massages"
      accent="massages"
      items={items}
      imageWidth={1727}
      imageHeight={911}
      imageClassName="aspect-[1.9/1]"
    />
  )
}

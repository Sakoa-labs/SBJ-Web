import { DecorObject } from '#/components/services/decor-object'
import { LeafShadow } from '#/components/services/leaf-shadow'
import { ServiceMenuSection } from '#/components/services/service-menu-section'
import type { ServiceMenuItem } from '#/components/services/service-menu-section'
import type { ServiceMenuContent } from '#/data/pages/services'
import { serviceHref, servicesIn } from '#/data/services'
import frangipanier from '#/assets/decor/frangipanier.png'
import fioleHuile from '#/assets/decor/fiole-huile.png'

const items: ReadonlyArray<ServiceMenuItem> = servicesIn('soins').map((service) => ({
  id: service.slug,
  title: service.title,
  description: service.summary,
  image: service.image.src,
  imageAlt: service.image.alt,
  icon: service.icon,
  href: serviceHref(service),
}))

export function SoinsMenuSection({ eyebrow, title, subtitle, button }: ServiceMenuContent) {
  return (
    <ServiceMenuSection
      eyebrow={eyebrow}
      decor={
        <>
          <LeafShadow leaf="palme" className="-left-52 top-[14%] w-[46rem] -rotate-[8deg]" />
          <DecorObject src={frangipanier} className="-left-12 top-[44%] w-28 rotate-[18deg]" />
          <DecorObject src={fioleHuile} className="-right-8 bottom-[22%] w-20 -rotate-[24deg]" />
        </>
      }
      id="carte-des-soins"
      richTitle={title}
      subtitle={subtitle}
      items={items}
      ctaLabel={button}
      imageWidth={1484}
      imageHeight={1060}
      imageClassName="aspect-[1.4/1]"
    />
  )
}

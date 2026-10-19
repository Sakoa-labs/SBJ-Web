import { createFileRoute } from '@tanstack/react-router'

import { FormationSection } from '#/components/landing/formation-section'
import { GuidesSection } from '#/components/landing/guides-section'
import { PrestationsSection } from '#/components/landing/prestations-section'
import { AboutSection } from '#/components/landing/about-section'
import { FaqSection } from '#/components/landing/faq-section'
import { TestimonialsSection } from '#/components/landing/testimonials-section'
import { ClosingCtaSection } from '#/components/landing/closing-cta-section'
import { HomeHero } from '#/components/landing/home-hero'
import { PageSections } from '#/components/layout/page-sections'
import { homePage } from '#/data/pages/home'
import type { HomeSection } from '#/data/pages/home'

export const Route = createFileRoute('/')({ component: Home })

function HomeSectionContent({ section }: { section: HomeSection }) {
  switch (section._type) {
    case 'homeFormation':
      return <FormationSection {...section} />
    case 'homeGuides':
      return <GuidesSection {...section} />
    case 'homeServices':
      return <PrestationsSection {...section} />
    case 'homeAbout':
      return <AboutSection {...section} />
    case 'homeFaq':
      return <FaqSection {...section} />
    case 'homeReviews':
      return <TestimonialsSection {...section} />
    case 'homeClosing':
      return <ClosingCtaSection {...section} />
  }
}

function Home() {
  return (
    <main className="overflow-x-clip bg-background">
      <HomeHero {...homePage.hero} />
      <PageSections sections={homePage.sections} render={(section) => <HomeSectionContent section={section} />} />
    </main>
  )
}

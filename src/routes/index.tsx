import { createFileRoute } from '@tanstack/react-router'

import { FormationSection } from '#/components/landing/formation-section'
import { GuidesSection } from '#/components/landing/guides-section'
import { PrestationsSection } from '#/components/landing/prestations-section'
import { AboutSection } from '#/components/landing/about-section'
import { FaqSection } from '#/components/landing/faq-section'
import { TestimonialsSection } from '#/components/landing/testimonials-section'
import { ClosingCtaSection } from '#/components/landing/closing-cta-section'
import { HomeHero } from '#/components/landing/home-hero'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="overflow-x-clip bg-background">
      <HomeHero />
      <FormationSection />
      <GuidesSection />
      <PrestationsSection />
      <AboutSection />
      <FaqSection />
      <TestimonialsSection />
      <ClosingCtaSection />
    </main>
  )
}

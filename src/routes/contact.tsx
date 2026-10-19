import { createFileRoute } from '@tanstack/react-router'

import { ContactFormSection } from '#/components/contact/contact-form-section'
import { ContactHero } from '#/components/contact/contact-hero'
import { ContactRoomSection } from '#/components/contact/contact-room-section'
import { PageSections } from '#/components/layout/page-sections'
import { contactPage } from '#/data/pages/contact'
import type { ContactSection } from '#/data/pages/contact'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact · Joie d’être par Sabrina' },
      {
        name: 'description',
        content:
          'Horaires, adresse, téléphone et accès du cabinet de Sabrina à La Bretagne, Saint-Denis. Écrivez-lui ou réservez en ligne.',
      },
    ],
  }),
  component: Contact,
})

function ContactSectionContent({ section }: { section: ContactSection }) {
  switch (section._type) {
    case 'contactForm':
      return <ContactFormSection {...section} />
    case 'contactRoom':
      return <ContactRoomSection {...section} />
  }
}

function Contact() {
  return (
    <main className="overflow-x-clip bg-background">
      <ContactHero {...contactPage.hero} />
      <PageSections sections={contactPage.sections} render={(section) => <ContactSectionContent section={section} />} />
    </main>
  )
}

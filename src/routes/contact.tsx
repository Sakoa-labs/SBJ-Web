import { createFileRoute } from '@tanstack/react-router'

import { ContactFormSection } from '#/components/contact/contact-form-section'
import { ContactHero } from '#/components/contact/contact-hero'
import { ContactRoomSection } from '#/components/contact/contact-room-section'

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

function Contact() {
  return (
    <main className="overflow-x-clip bg-background">
      <ContactHero />
      <ContactFormSection />
      <ContactRoomSection />
    </main>
  )
}

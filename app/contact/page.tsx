import { Metadata } from 'next'
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactInfo from '@/components/sections/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the eMotoTitle team. Email support, business address, and contact form for e-bike registration inquiries.',
}

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <div className="lg:col-span-5">
          <ContactInfo />
        </div>
      </div>
    </main>
  )
}

import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${siteConfig.name} — how we collect, use, and protect your information.`,
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="font-headline text-4xl font-extrabold text-on-surface mb-4">
        Privacy Policy
      </h1>
      <p className="text-on-surface-variant mb-8 text-sm">
        Last updated: June 1, 2026
      </p>

      <div className="prose prose-slate max-w-none space-y-6 text-on-surface-variant leading-relaxed">
        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
            Information We Collect
          </h2>
          <p>
            When you use {siteConfig.name} to title or register your electric motorcycle or e-bike,
            we collect information you provide directly, including your name, email address,
            government-issued ID, vehicle information (VIN, bill of sale), and payment details.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
            How We Use Your Information
          </h2>
          <p>
            We use your information solely to process your title and registration application,
            communicate with you about your order status, and comply with state DMV requirements.
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
            Data Security
          </h2>
          <p>
            We use industry-standard encryption and secure storage practices to protect your
            personal information and vehicle documents. All document uploads are transmitted
            over HTTPS and stored in encrypted form.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary hover:underline font-medium"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}

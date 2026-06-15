import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${siteConfig.name} — your agreement when using our e-bike and electric motorcycle title service.`,
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <main className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="font-headline text-4xl font-extrabold text-on-surface mb-4">
        Terms of Service
      </h1>
      <p className="text-on-surface-variant mb-8 text-sm">
        Last updated: June 1, 2026
      </p>

      <div className="prose prose-slate max-w-none space-y-6 text-on-surface-variant leading-relaxed">
        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
            Service Description
          </h2>
          <p>
            {siteConfig.name} provides electric motorcycle and e-bike title and registration
            processing services across all 50 US states. Our service facilitates the preparation
            and digital submission of title and registration documents on your behalf. We are not
            a DMV or government agency.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
            Your Responsibilities
          </h2>
          <p>
            You are responsible for providing accurate and truthful information about your vehicle
            and identity. Providing false information in connection with a title application may
            be unlawful. Processing times depend on state DMV schedules and are beyond our control.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
            Fees and Refunds
          </h2>
          <p>
            Service fees are charged at the time of order submission. State DMV fees are
            separate and collected in addition to our service fee. Refunds are available within
            48 hours of order placement if processing has not yet begun. Once documents have
            been submitted to the DMV, no refund is available for the service fee.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
            Limitation of Liability
          </h2>
          <p>
            {siteConfig.name}&apos;s liability is limited to the amount of the service fee paid.
            We are not responsible for state DMV delays, rejection of documents due to
            state-specific requirements not disclosed to us, or any consequential damages.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
            Contact Us
          </h2>
          <p>
            For questions about these Terms, contact us at{' '}
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

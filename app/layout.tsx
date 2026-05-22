import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/config/site.config'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const OG_IMAGE = `${siteConfig.url}/og-default.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords:
    'e-bike registration, e-bike title, electric bike registration, e-bike legal, electric concierge, e-bike DMV, e-bike compliance',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  email: siteConfig.email,
  description: siteConfig.description,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    email: siteConfig.email,
    areaServed: 'US',
    availableLanguage: ['English'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  url: siteConfig.url,
  image: OG_IMAGE,
  email: siteConfig.email,
  priceRange: '$',
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: 'US',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-Bike Title & Registration Service',
  serviceType: 'Vehicle Title & Registration',
  provider: { '@id': `${siteConfig.url}/#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Professional e-bike title and registration service. 100% digital submission, all 50 states, includes lost title bond and optional eMoto insurance.',
  offers: {
    '@type': 'Offer',
    name: siteConfig.pricing.basic.name,
    price: String(siteConfig.pricing.basic.price),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does e-bike title and registration work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three steps. First, choose your state and registration tier — we support all 50 states. Second, upload photos of your bill of sale, VIN, and ID; our system verifies everything instantly. Third, your official title and registration arrives by mail, and you can track progress in real-time from your dashboard.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does e-bike title service cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Basic Title Service starts at $49 and includes 100% digital submission, expert document review, standard tracking, a lost title bond at 150% of bike value, and optional eMoto insurance. Higher tiers are available for expedited or multi-bike fleets.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the title process take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Average filing time is 15 minutes for the rider on our end. State processing times vary, but the digital-first workflow eliminates DMV wait lines and reduces document-rejection rounds that typically delay the process by weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a title for my electric bike?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Title and registration requirements vary by state, e-bike classification (Class 1, 2, or 3), and motor wattage. Higher-powered e-bikes and e-motorcycles are increasingly treated as motor vehicles requiring formal titling. Our state-by-state guidance walks you through what your jurisdiction requires.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need to register my e-bike?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A bill of sale or manufacturer certificate of origin, a clear photo of the VIN or serial number, and a government-issued ID. If you do not have a bill of sale, our Lost Title Bond service (included with Basic) provides a surety bond at 150% of the bike value so you can title without one.',
      },
    },
  ],
}

const allSchemas = [
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  faqSchema,
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {allSchemas.map((schema, i) => (
          <script
            key={`ld-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="bg-surface font-body text-on-surface antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

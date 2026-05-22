import { Metadata } from 'next'
import ServiceHero from '@/components/sections/services/ServiceHero'
import ServiceCards from '@/components/sections/services/ServiceCards'
import TrustBar from '@/components/sections/services/TrustBar'
import WhyRegister from '@/components/sections/services/WhyRegister'

export const metadata: Metadata = {
  title: 'E-Bike Title Service & Registration | $49',
  description:
    'E-bike title service from $49. Includes lost title bond at 150% of bike value and eMoto insurance. 100% digital, all 50 states, 15-minute filing.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'E-Bike Title Service & Registration | $49',
    description:
      'E-bike title service from $49. Lost title bond, eMoto insurance, 100% digital filing across all 50 states.',
    url: '/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Bike Title Service & Registration | $49',
    description:
      'E-bike title service from $49. 100% digital, all 50 states, 15-minute filing.',
  },
}

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      <ServiceHero />
      <ServiceCards />
      <TrustBar />
      <WhyRegister />
    </main>
  )
}

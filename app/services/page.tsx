import { Metadata } from 'next'
import ServiceHero from '@/components/sections/services/ServiceHero'
import ServiceCards from '@/components/sections/services/ServiceCards'
import TrustBar from '@/components/sections/services/TrustBar'
import WhyRegister from '@/components/sections/services/WhyRegister'

export const metadata: Metadata = {
  title: 'Pricing & Services',
  description:
    'E-bike title service from $49. Includes lost title bond at 150% of bike value and eMoto insurance.',
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

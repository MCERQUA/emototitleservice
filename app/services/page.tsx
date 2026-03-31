import { Metadata } from 'next'
import ServiceHero from '@/components/sections/services/ServiceHero'
import ServiceCards from '@/components/sections/services/ServiceCards'
import TrustBar from '@/components/sections/services/TrustBar'
import WhyRegister from '@/components/sections/services/WhyRegister'

export const metadata: Metadata = {
  title: 'Pricing & Services',
  description:
    'Choose your e-bike registration service. Basic Title Service from $49 or Premium Title & Registration from $99.',
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

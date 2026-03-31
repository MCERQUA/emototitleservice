import HeroSection from '@/components/sections/home/HeroSection'
import TrustSignals from '@/components/sections/home/TrustSignals'
import ValueProposition from '@/components/sections/home/ValueProposition'
import HowItWorks from '@/components/sections/home/HowItWorks'
import Testimonial from '@/components/sections/home/Testimonial'
import CTASection from '@/components/sections/home/CTASection'

export default function HomePage() {
  return (
    <main className="pt-20">
      <HeroSection />
      <TrustSignals />
      <ValueProposition />
      <HowItWorks />
      <Testimonial />
      <CTASection />
    </main>
  )
}

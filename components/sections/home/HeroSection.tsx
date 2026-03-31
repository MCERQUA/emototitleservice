import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 h-[500px] w-[700px] -skew-y-6 bg-primary/5 rounded-3xl pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          {/* Text column */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-on-surface">
              Get Your E-Bike{' '}
              <span className="text-primary italic">Titled</span>{' '}
              in Minutes
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              The Electric Concierge handles the bureaucracy. No DMV lines, no
              confusing forms, just the freedom to ride legal.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-signature-gradient text-on-primary px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
              >
                Start Registration
              </Link>
              <Link
                href="/services"
                className="border-2 border-secondary text-secondary px-8 py-3 rounded-xl font-bold text-lg hover:bg-secondary/10 active:scale-95 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Image column */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS5ofcjGMuyUVvOF_aoAIzqPzTF5kam9XddOZbaZHPenIie6upznbY8Xk-U_qLDF8820SNS6u_tqic-Zm9UhmvCY1wy-WTKyhG5xdYQrvWK_fwofH-kMXcRzStJA-XXKmTSgpBErhQA2e24ZRCBtoe-0SeTDIYlvzivqqmw5RsAZWINb3O83lAolkaNCvc7-sVGO-mr_TTwax_3x5ug8Ho_tBqS-TgsGeVrusAeBPvGBD98bBZvEzj41gA8jkhF5Te5p6b4rit3b_F"
                alt="Premium Electric Bike"
                className="w-full h-auto rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />

              {/* Accent card */}
              <div className="hidden md:flex items-center gap-2 absolute -bottom-4 -left-4 bg-tertiary-container text-on-tertiary-container px-5 py-3 rounded-2xl shadow-lg">
                <span className="material-symbols-outlined filled text-on-tertiary-container">
                  verified
                </span>
                <span className="font-headline font-bold text-sm">
                  100% Digital Process
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

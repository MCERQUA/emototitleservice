import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-12">
      <div className="container-site">
        <div className="relative bg-slate-900 rounded-[3rem] px-8 py-16 md:py-24 overflow-hidden">
          {/* Dotted background pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white">
              Ready to ride legal?
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              Get started today and have your title application filed by tomorrow
              morning.
            </p>

            <Link
              href="/services"
              className="inline-block bg-signature-gradient text-on-primary px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

const basicFeatures = [
  '100% Digital Submission',
  'Expert Document Review',
  'Standard Tracking Included',
  'Lost Title Bond (150% of Bike Value)',
  'eMoto Insurance Available',
]

export default function ServiceCards() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-stretch max-w-xl mx-auto">
        {/* Basic Card */}
        <div className="relative bg-surface-container-lowest rounded-xl p-8 flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1">
          {/* Decorative ghost icon */}
          <span className="material-symbols-outlined text-9xl opacity-10 absolute top-4 right-4 select-none pointer-events-none text-on-surface">
            description
          </span>

          <div className="relative z-10 flex flex-col flex-1">
            {/* Icon badge */}
            <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-surface-container-high">
              <span className="material-symbols-outlined text-primary text-2xl">
                bolt
              </span>
            </div>

            <h2 className="font-headline text-2xl font-bold text-on-surface mb-2">
              Basic Title Service
            </h2>
            <p className="text-on-surface-variant mb-6">
              Essential title application support for your e-bike. Fast and
              reliable support for owners who already have local registration
              under control.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {basicFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="material-symbols-outlined filled text-tertiary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-auto mb-6">
              <span className="text-3xl font-headline font-extrabold text-on-surface">
                $49
              </span>
              <span className="text-on-surface-variant ml-1">/ per e-bike</span>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="block text-center bg-surface-container-highest text-primary font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95"
            >
              Select Basic Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

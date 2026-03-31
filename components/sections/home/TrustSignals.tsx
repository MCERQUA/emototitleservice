export default function TrustSignals() {
  const signals = [
    { icon: 'verified_user', label: 'SECURE' },
    { icon: 'electric_moped', label: 'EV-READY' },
    { icon: 'gavel', label: 'COMPLIANT' },
    { icon: 'speed', label: 'EXPRESS' },
  ]

  return (
    <section className="bg-white py-12">
      <div className="container-site">
        <p className="text-center text-sm font-headline font-semibold text-on-surface-variant tracking-widest uppercase mb-8">
          Trusted by leading e-bike enthusiasts
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {signals.map((signal) => (
            <div
              key={signal.label}
              className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-primary text-3xl">
                {signal.icon}
              </span>
              <span className="font-headline font-bold text-on-surface tracking-wide">
                {signal.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

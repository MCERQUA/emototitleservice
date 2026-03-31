export default function ValueProposition() {
  const cards = [
    {
      icon: 'psychology',
      title: 'Expert Guidance',
      description:
        'Our specialists walk you through every requirement for your state. No guesswork, no missed steps.',
      featured: false,
    },
    {
      icon: 'bolt',
      title: 'Fast Processing',
      description:
        'Most applications are filed within 15 minutes. We handle the paperwork so you can get back to riding.',
      featured: true,
    },
    {
      icon: 'shield_lock',
      title: 'Secure Handling',
      description:
        'Your documents are encrypted and handled with the same care as a bank. Privacy guaranteed.',
      featured: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="container-site">
        <div className="text-center mb-14 space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface">
            Why eMotoTitle?
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
            Bureaucracy is manual. We make it digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-3xl p-8 space-y-5 hover:-translate-y-2 transition-transform duration-300 ${
                card.featured
                  ? 'bg-signature-gradient text-white shadow-xl'
                  : 'bg-surface-container-lowest shadow-md'
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${
                  card.featured
                    ? 'bg-white/20'
                    : 'bg-primary/10'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-3xl ${
                    card.featured ? 'text-white' : 'text-primary'
                  }`}
                >
                  {card.icon}
                </span>
              </div>

              <h3
                className={`font-headline text-xl font-bold ${
                  card.featured ? 'text-white' : 'text-on-surface'
                }`}
              >
                {card.title}
              </h3>

              <p
                className={`leading-relaxed ${
                  card.featured ? 'text-white/90' : 'text-on-surface-variant'
                }`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

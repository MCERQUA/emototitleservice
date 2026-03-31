const trustItems = [
  {
    icon: 'lock',
    title: 'Secure Payment',
    subtitle: '256-bit SSL Encrypted',
  },
  {
    icon: 'assignment_return',
    title: 'Money-Back Guarantee',
    subtitle: 'Full refund within 30 days',
  },
  {
    icon: 'support_agent',
    title: 'Expert Support',
    subtitle: 'Dedicated US-based team',
  },
]

export default function TrustBar() {
  return (
    <section className="border-t border-outline-variant py-10 mb-16">
      <div className="flex flex-wrap justify-center gap-10 md:gap-16">
        {trustItems.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-on-surface-variant">
              {item.icon}
            </span>
            <div>
              <p className="font-headline font-bold text-on-surface text-sm">
                {item.title}
              </p>
              <p className="text-on-surface-variant text-xs">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

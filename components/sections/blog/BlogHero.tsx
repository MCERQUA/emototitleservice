export default function BlogHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 h-[500px] w-[700px] -skew-y-6 bg-primary/5 rounded-3xl pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          {/* Text column */}
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
              Electric Insights
            </span>

            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-on-surface">
              The Future of{' '}
              <span className="text-primary italic">E-Mobility</span>{' '}
              Compliance.
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Stay ahead of evolving regulations and optimize your electric
              ride&apos;s legal standing with professional insights from our
              industry experts.
            </p>
          </div>

          {/* Image column */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdKl09KQ8Dh8GZVvSO0K7nMoGebKYHpxzR14RzUxrpt5_4HahFKYhDZ2yDZYso9taR09ybHCciIY-96Y5WlNUnFW7p8DRZifPKkYlnTc3lqPisv5uGdcchyhs2bN7TIXwvqF3rbBpr8W7_564YjMtaSHUrUy5jjHtdloV5jmlFZUTkLOxgl1lyU9CiWW05t_yqlcRET97JjgkOAYA1WoLbhxDvb59pG_pXs4RWXzvTLOngK0s8wzrg4SDBMCKLYDtsu1kU3rxNJsIH"
                alt="Electric mobility insights"
                className="w-full aspect-[4/5] object-cover rounded-xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />

              {/* Floating badge */}
              <div className="hidden md:flex items-center gap-2 absolute -bottom-4 -left-4 glass-card px-5 py-3 rounded-2xl shadow-lg">
                <span className="material-symbols-outlined filled text-primary">
                  verified
                </span>
                <div>
                  <p className="font-headline font-bold text-sm text-on-surface">
                    Industry Pulse
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    2026 Compliance Ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

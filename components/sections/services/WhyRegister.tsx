export default function WhyRegister() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Image with overlay card */}
        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJvynYXXGf4jgZLu3aFcr_7AW6Axs6SrIH6uPP9b3STqIrC7Qq5FkZMgWKOmoE0NvVyfVEpni_6iusXwB7k26c8YcQVDsTO_g4X9t2_EehZfI7ac2UVm23R8AKtFMC-DbWpSenPkCztrXG7cVBd67pm1HxL_SKNoojZeGn8pwWsbQKnnItrUuPhpy6d2llQ_wxNicYbyyHAtjvXsClyA2x1iuss6wHh48CqYr5NLOA3mSIWY5QEd4TYUGUDkBbaPPXQc-Pqzg1I3rd"
            alt="E-bike motorcycle on the road"
            className="aspect-square w-full object-cover rounded-2xl shadow-2xl"
          />
          {/* Overlapping info card */}
          <div className="hidden sm:block absolute -bottom-6 -right-4 bg-surface-container-lowest rounded-xl shadow-xl p-5 max-w-[260px]">
            <p className="font-headline font-bold text-on-surface text-sm mb-1">
              Did You Know?
            </p>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Over 40% of e-bike owners face fines for riding without proper
              registration. Don&apos;t get caught off guard.
            </p>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-4">
            Why register with eMotoTitle?
          </h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Navigating state-by-state regulations is confusing and
            time-consuming. We eliminate the guesswork by handling every step of
            the title and registration process for you -- so you can focus on
            riding.
          </p>

          <div className="space-y-5">
            {/* Info card 1 */}
            <div className="flex items-start gap-4 bg-surface-container-low rounded-xl p-5">
              <span className="material-symbols-outlined text-primary text-3xl mt-0.5">
                timer
              </span>
              <div>
                <p className="font-headline font-bold text-on-surface text-sm mb-1">
                  75% Faster Processing
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Average processing time is 75% faster than doing it yourself.
                  Our streamlined system cuts through bureaucratic delays.
                </p>
              </div>
            </div>

            {/* Info card 2 */}
            <div className="flex items-start gap-4 bg-surface-container-low rounded-xl p-5">
              <span className="material-symbols-outlined text-primary text-3xl mt-0.5">
                cloud_done
              </span>
              <div>
                <p className="font-headline font-bold text-on-surface text-sm mb-1">
                  Digital Registry Sync
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Auto-sync with your state&apos;s digital registry so your
                  records are always up-to-date and accessible online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

export default function FeaturedPosts() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface">
              Latest News
            </h2>
            <p className="text-on-surface-variant mt-2 max-w-lg">
              Timely updates on laws, tech, and security.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition"
            >
              <span className="material-symbols-outlined text-xl">
                arrow_back
              </span>
            </button>
            <button
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition"
            >
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-4 lg:grid-cols-12 gap-6">
          {/* Main featured post */}
          <Link
            href="#"
            className="md:col-span-4 lg:col-span-8 group relative h-[500px] rounded-xl overflow-hidden"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQcY1_wSzuD9iK_3Smm0lGCkoab-vdLnO6Mh97FwlWVU-A-pik_U-ySUqO14h3C0BkywDzlgtzx4zIps0o54BdEbuhu2Qg6wEYVWXB67i2hu3SXuUOCb1W1ex3hbFkGBzulxwxs4Fyltjxb21jS_w4vxzPlwXG257VC9WU3J9VmNicCy9XkepmJmfKDRIHE1b2PdEIWvGEFo-ittAZcDWmXDREmxLklSlN7t_ez7WYnxjpoEA39wBZ1A0Bj7BvoQKqFeFG7o-QBTfv"
              alt="New E-Bike Registration Laws in 2026"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-bold tracking-widest uppercase">
                Legal Update
              </span>
              <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-white leading-tight">
                New E-Bike Registration Laws in 2026
              </h3>
              <p className="text-slate-300 max-w-lg">
                Everything you need to know about the upcoming federal
                mandates...
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    calendar_today
                  </span>
                  Oct 12, 2024
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    schedule
                  </span>
                  8 min read
                </span>
              </div>
            </div>
          </Link>

          {/* Secondary posts */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col gap-6">
            {/* Post 1 */}
            <Link
              href="#"
              className="group bg-surface-container-low rounded-xl overflow-hidden flex-1 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_uj0TMQi_WEbqb8DpMVH4MN2t5Bh8k5vHR1R15bIaNXANXvPPhFx5tJW21ZLjGeSA31Rk8UgAlOcJ44G2ogtJ_BT7xczqiCJR1u7cxp-wmTxjdaSF5A8zVzl6I33nhOvgDTrYkjeTF4SwOAmrGFbD9ckrqXK_LXztuFkvBmhEtrMUhedKJJWJMXJKIrRhkkG_ob78XADaFcZKXtv4_bzntyKG_hmgrw86bewfqt-xtG04dWno9aGi06tNUefKo2jeV7E35mAwLgW"
                  alt="How to Secure Your Electric Ride"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-headline text-lg font-bold text-on-surface mb-2">
                  How to Secure Your Electric Ride
                </h4>
                <p className="text-sm text-on-surface-variant flex-1">
                  Protect your investment with the latest GPS tracking...
                </p>
                <div className="flex items-center gap-2 mt-4 text-primary font-bold text-sm">
                  <span>Guide</span>
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>

            {/* Post 2 */}
            <div className="bg-white border border-outline-variant rounded-xl p-5 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold tracking-widest uppercase">
                  Tech
                </span>
                <button
                  aria-label="Bookmark"
                  className="text-on-surface-variant hover:text-primary transition"
                >
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
              </div>
              <h4 className="font-headline text-lg font-bold text-on-surface mb-2">
                Battery Health: Winter Storage Tips
              </h4>
              <p className="text-sm text-on-surface-variant flex-1">
                Learn the optimal charge levels for long-term storage...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

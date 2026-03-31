'use client'

import { useState, FormEvent } from 'react'

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((err) => console.error(err))
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <div className="relative bg-on-surface rounded-3xl px-8 py-16 md:py-20 overflow-hidden">
          {/* Decorative skew element */}
          <div className="absolute -top-20 -right-20 h-[400px] w-[600px] -skew-y-12 bg-primary/10 rounded-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Never miss a legislative update.
              </h2>
              <p className="text-slate-300 text-lg max-w-md leading-relaxed">
                Join 15,000+ e-bike owners who stay informed on regulation
                changes, safety recalls, and industry milestones.
              </p>

              {submitted ? (
                <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4 max-w-md">
                  <span className="material-symbols-outlined filled text-tertiary-fixed">
                    check_circle
                  </span>
                  <p className="text-white font-medium">
                    You&apos;re subscribed! Check your inbox for a confirmation.
                  </p>
                </div>
              ) : (
                <form
                  name="newsletter"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md"
                >
                  <input type="hidden" name="form-name" value="newsletter" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-signature-gradient text-on-primary px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>

            {/* Right */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-3">
                <span className="material-symbols-outlined filled text-primary-fixed text-3xl">
                  notifications_active
                </span>
                <h3 className="font-headline font-bold text-white text-lg">
                  Instant Law Alerts
                </h3>
                <p className="text-sm text-slate-400">
                  Get notified the moment new regulations are proposed or enacted
                  in your state.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-3">
                <span className="material-symbols-outlined filled text-primary-fixed text-3xl">
                  verified_user
                </span>
                <h3 className="font-headline font-bold text-white text-lg">
                  Expert Verified
                </h3>
                <p className="text-sm text-slate-400">
                  Every article is reviewed by compliance professionals before
                  publication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
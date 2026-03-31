'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
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

  const inputClasses =
    'w-full px-5 py-4 bg-surface rounded-xl border-none focus:ring-0 focus:border-b-2 focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 transition-colors'

  if (submitted) {
    return (
      <div className="relative bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] overflow-hidden text-center">
        <div className="py-16 space-y-4">
          <span className="material-symbols-outlined filled text-primary text-5xl">
            check_circle
          </span>
          <h3 className="font-headline text-2xl font-bold">Message Sent!</h3>
          <p className="text-on-surface-variant max-w-md mx-auto">
            Thank you for reaching out. Our concierge team will respond within 24
            hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/5 pointer-events-none" />

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="relative z-10 space-y-8"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        {/* Name & Email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-on-surface-variant mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className={inputClasses}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-on-surface-variant mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              required
              className={inputClasses}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-bold text-on-surface-variant mb-2"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className={inputClasses}
          >
            <option>Registration Status</option>
            <option>Pricing &amp; Plans</option>
            <option>Technical Support</option>
            <option>Partnership Inquiry</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-on-surface-variant mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us more about your request..."
            required
            className={inputClasses + ' resize-none'}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-signature-gradient text-on-primary px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
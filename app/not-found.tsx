import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    "The page you're looking for doesn't exist. Browse our pricing, blog, or contact the eMotoTitle team.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-20 max-w-3xl mx-auto min-h-[60vh] flex items-center">
      <div className="text-center">
        <span className="inline-block py-1 px-3 bg-primary text-on-primary text-xs font-bold tracking-widest uppercase rounded mb-6">
          404 — Page Not Found
        </span>
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-6">
          This page took a wrong turn.
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
          The URL you tried doesn&apos;t exist, has been moved, or never was.
          Pick a destination below — or get your e-bike titled in 15 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-on-primary px-8 py-3.5 rounded-lg font-bold transition-all hover:opacity-90"
          >
            Return Home
          </Link>
          <Link
            href="/services"
            className="bg-surface-container-low text-on-surface border border-on-surface-variant/30 px-8 py-3.5 rounded-lg font-bold transition-all hover:bg-surface-container"
          >
            View Pricing
          </Link>
          <Link
            href="/contact"
            className="bg-surface-container-low text-on-surface border border-on-surface-variant/30 px-8 py-3.5 rounded-lg font-bold transition-all hover:bg-surface-container"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site.config'
import { cn } from '@/lib/utils'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-blue-700 text-3xl filled">
            electric_bolt
          </span>
          <span className="text-2xl font-black text-slate-900 tracking-tighter font-headline">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-headline transition-colors',
                isActive(item.href)
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-blue-600'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.navigation.cta.href}
            className="bg-signature-gradient text-on-primary px-6 py-2 rounded-xl font-bold active:scale-95 duration-200 transition-all"
          >
            {siteConfig.navigation.cta.label}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 p-2 hover:bg-blue-50 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'flex-col gap-4 px-6 pb-6 bg-white/95 backdrop-blur-md md:hidden transition-all',
          mobileOpen ? 'flex' : 'hidden'
        )}
      >
        {siteConfig.navigation.main.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              'font-headline py-2',
              isActive(item.href)
                ? 'text-blue-600 font-semibold'
                : 'text-slate-600'
            )}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={siteConfig.navigation.cta.href}
          onClick={() => setMobileOpen(false)}
          className="bg-signature-gradient text-on-primary px-6 py-2 rounded-xl font-bold text-center"
        >
          {siteConfig.navigation.cta.label}
        </Link>
      </div>
    </nav>
  )
}
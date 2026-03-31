import Link from 'next/link'
import { siteConfig } from '@/config/site.config'

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full rounded-t-3xl mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-700 filled">
              electric_bolt
            </span>
            <span className="font-headline font-extrabold text-xl text-slate-900">
              {siteConfig.name}
            </span>
          </Link>
          <p className="text-sm text-slate-500 max-w-xs">
            {siteConfig.tagline}. Making ownership simple and legal across all{' '}
            {siteConfig.stats.statesServed} states.
          </p>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {siteConfig.url.replace('https://', '')}.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {siteConfig.footer.columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <p className="font-bold text-slate-900 text-sm">{column.title}</p>
              <nav className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-600 transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
import { Metadata } from 'next'
import BlogHero from '@/components/sections/blog/BlogHero'
import FeaturedPosts from '@/components/sections/blog/FeaturedPosts'
import Newsletter from '@/components/sections/blog/Newsletter'
import MoreArticles from '@/components/sections/blog/MoreArticles'

export const metadata: Metadata = {
  title: 'E-Bike Compliance & Registration News',
  description:
    'E-mobility compliance insights, state-by-state registration law updates, and e-bike industry news from the Electric Concierge.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'E-Bike Compliance & Registration News',
    description:
      'E-mobility compliance insights, registration law updates, and e-bike industry news.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Bike Compliance & Registration News',
    description:
      'E-mobility compliance insights, registration law updates, and e-bike industry news.',
  },
}

export default function BlogPage() {
  return (
    <main className="pt-24 pb-20">
      <BlogHero />
      <FeaturedPosts />
      <Newsletter />
      <MoreArticles />
    </main>
  )
}

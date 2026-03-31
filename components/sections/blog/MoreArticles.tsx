import Link from 'next/link'

const articles = [
  {
    badge: 'Digital Titles',
    title: 'The Paperless Revolution: Digital Registration Benefits',
    description:
      'Why 45 states are moving toward blockchain-verified e-bike titles.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCF5hCBjKb8wYeeQJ3CA8Yp-TKa55_PAvuuIaXGyqM-hN0GqBCJthByBDdWkNymfIvEQe-sT48pK4XPdVBKJYxvSXdFcYC9BjXed2S3iqrNdlUWIw3KS-3xTd0-kiyePcp68cqVEX_iBVHpRtBTcLZFLwW38EnLd9fxmMmbdo9LD5vQSr-kJ8C-HfeT08Ozi6KTcfvdXw55MuzBGeDbf0LPu5m_17zwY1xNfOcju-ldn8_bdx7ZdC2Cd_oUElBab22bAfgx918eF25r',
  },
  {
    badge: 'Safety',
    title: 'Top 5 Smart Helmets for Commuters',
    description:
      'Integrated turn signals, MIPS protection, and Bluetooth...',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9SkQb0Rg_dXJHBY1Urj1L_ukScAPG_vKDfACUNtQMF5vMl8MloL9YvD1Usjv8sXmge_4gIexiPRDfFpjIQ7Ku979cSQyLilr6OkDdHredteSYuBtZoU03RYTQ87kXhKI22VJN51RSrUa1Ou-Gyg5DG3nxkRdpbvhTtq_mKqsrLXbi1d7YD1DU7R1K3slfeIDArSVrxAOy47rso4vyM7xfw0qI_v5ENOvSF-mR4efTMWHmUVXn2X6GfX1RiHjFmWcUVSQre_w2mtwc',
  },
  {
    badge: 'Infrastructure',
    title: 'Charging Networks: The 2024 Expansion Map',
    description: 'New municipal charging hubs...',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0KcEIr6QXhany6M82PsRod_j_wJ7wutLxr49toG0bdkkc9wufZoDUW8EuVtj7jIQEg9Mut0V9T8EzIm3U0Ku2vhGxuvmSKWaZYO7lH6J9nnKm2FGEDDsGLJB61LVnqOMdUlmNl6FMa1piltl6w0a7oivbvwIf26e7xzEnxzCxb2Men5DOIjuxv6t1dEssSyHtO-muBWyrEA90W43D5OjG3aSzSYJe0YK99sIPqAkNpggq7vrxUMgonvjCf6xWvja4e-hx6BBRKIpd',
  },
]

export default function MoreArticles() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-10">
          More from the Concierge
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.title}
              href="#"
              className="group bg-surface-container-low rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
                  {article.badge}
                </span>
                <h3 className="font-headline text-lg font-bold text-on-surface leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

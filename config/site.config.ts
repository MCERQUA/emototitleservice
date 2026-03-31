export const siteConfig = {
  name: 'eMotoTitle',
  tagline: 'The Electric Concierge for E-Bike Registration',
  description:
    'Professional e-bike title and registration services. Get your e-bike titled in minutes with our 100% digital process. No DMV lines, no confusing forms.',
  url: 'https://emototitleservice.com',
  email: 'support@emototitleservice.com',
  address: {
    name: 'VoltFlow Tech Hub',
    street: '88 Electric Avenue, Suite 400',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
  },
  social: {
    // Add social links when available
  },
  stats: {
    successRate: '99%',
    avgFilingTime: '15m',
    legalRiders: '5,000+',
    statesServed: '50',
  },
  pricing: {
    basic: {
      name: 'Basic Title Service',
      price: 49,
      features: [
        '100% Digital Submission',
        'Expert Document Review',
        'Standard Tracking Included',
      ],
    },
    premium: {
      name: 'Premium Title & Registration',
      price: 99,
      features: [
        'All Basic Service Features',
        'Full State Registration Handling',
        'Priority Support & Fast Tracking',
        'Official License Plate Coordination',
      ],
    },
  },
  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'Pricing', href: '/services' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Get Started', href: '/services' },
  },
  footer: {
    columns: [
      {
        title: 'Services',
        links: [
          { label: 'How it Works', href: '/#how-it-works' },
          { label: 'Pricing', href: '/services' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'Blog', href: '/blog' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
        ],
      },
    ],
  },
} as const
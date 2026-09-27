import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // @tailwindcss/forms paints focus rings and checkbox/radio fills with theme blue.600
        // (a blue). No blue-* utilities are used on this site, so point that one shade at the
        // warm orange-700 (#c2410c) and the plugin output carries no blue.
        blue: { 600: '#c2410c' },
        primary: {
          DEFAULT: '#964313',
          dim: '#843B10',
          fixed: '#E9874E',
          'fixed-dim': '#E57330',
          container: '#E9874E',
        },
        secondary: {
          DEFAULT: '#6B5847',
          dim: '#5E4C3B',
          fixed: '#F5D7C6',
          'fixed-dim': '#EAC9B5',
          container: '#F5D7C6',
        },
        tertiary: {
          DEFAULT: '#006668',
          dim: '#00595b',
          fixed: '#5dfbfe',
          'fixed-dim': '#4aedef',
          container: '#5dfbfe',
        },
        surface: {
          DEFAULT: '#f5f6f7',
          bright: '#f5f6f7',
          dim: '#D8D4CF',
          variant: '#DFDCD8',
          'container-lowest': '#ffffff',
          'container-low': '#eff1f2',
          container: '#EEE7DC',
          'container-high': '#E5E2DF',
          'container-highest': '#DFDCD8',
        },
        'on-surface': {
          DEFAULT: '#322E29',
          variant: '#635A51',
        },
        'on-primary': {
          DEFAULT: '#F9F2E7',
          container: '#3A1A07',
          fixed: '#000000',
          'fixed-variant': '#492109',
        },
        'on-secondary': {
          DEFAULT: '#F9F2E7',
          container: '#5D4B3A',
          fixed: '#4A3828',
          'fixed-variant': '#675544',
        },
        'on-tertiary': {
          DEFAULT: '#befeff',
          container: '#005d5f',
          fixed: '#00494a',
          'fixed-variant': '#00686a',
        },
        outline: {
          DEFAULT: '#757778',
          variant: '#abadae',
        },
        error: {
          DEFAULT: '#b31b25',
          dim: '#9f0519',
          container: '#fb5151',
        },
        'on-error': {
          DEFAULT: '#ffefee',
          container: '#570008',
        },
        background: '#f5f6f7',
        'on-background': '#322E29',
        'inverse-surface': '#100E0C',
        'inverse-on-surface': '#9b9d9e',
        'inverse-primary': '#E56E2A',
        'surface-tint': '#964313',
      },
      fontFamily: {
        headline: ['var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
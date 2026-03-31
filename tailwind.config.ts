import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0058ba',
          dim: '#004da4',
          fixed: '#6c9fff',
          'fixed-dim': '#5091ff',
          container: '#6c9fff',
        },
        secondary: {
          DEFAULT: '#4b5d70',
          dim: '#3f5164',
          fixed: '#ccdff6',
          'fixed-dim': '#bed1e7',
          container: '#ccdff6',
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
          dim: '#d1d5d7',
          variant: '#dadddf',
          'container-lowest': '#ffffff',
          'container-low': '#eff1f2',
          container: '#e6e8ea',
          'container-high': '#e0e3e4',
          'container-highest': '#dadddf',
        },
        'on-surface': {
          DEFAULT: '#2c2f30',
          variant: '#595c5d',
        },
        'on-primary': {
          DEFAULT: '#f0f2ff',
          container: '#00214e',
          fixed: '#000000',
          'fixed-variant': '#002a60',
        },
        'on-secondary': {
          DEFAULT: '#ecf3ff',
          container: '#3e5063',
          fixed: '#2b3d4f',
          'fixed-variant': '#485a6d',
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
        'on-background': '#2c2f30',
        'inverse-surface': '#0c0f10',
        'inverse-on-surface': '#9b9d9e',
        'inverse-primary': '#4a8eff',
        'surface-tint': '#0058ba',
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
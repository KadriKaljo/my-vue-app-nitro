/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'display-1': ['64px', { lineHeight: '72px' }],
        'display-2': ['56px', { lineHeight: '64px' }],
        'heading-1': ['48px', { lineHeight: '56px' }],
        'heading-2': ['40px', { lineHeight: '48px' }],
        'heading-3': ['32px', { lineHeight: '40px' }],
        'heading-4': ['24px', { lineHeight: '32px' }],
        'heading-5': ['20px', { lineHeight: '28px' }],
        'heading-6': ['18px', { lineHeight: '24px' }],
        body: ['16px', { lineHeight: '24px' }],
        small: ['14px', { lineHeight: '20px' }],
        tiny: ['12px', { lineHeight: '16px' }],
      },
      colors: {
        'nitro-green': {
          50:  '#E5F6F4',
          100: '#CCEDE9',
          200: '#99DBD4',
          300: '#66CABE',
          400: '#33B8A9',
          500: '#00A693',
          600: '#008576',
          700: '#006458',
          800: '#004849',
          900: '#00211D'
        },
        'nitro-grey': {
          50:  '#F5F6F9',
          100: '#E6E9F0',
          200: '#D7DBE6',
          300: '#C9CEDD',
          400: '#BAC1D4',
          500: '#9CA6C1',
          600: '#818EB0',
          700: '#546286',
          800: '#323850',
          900: '#111418'
        },
        'nitro-error': {
          50:  '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#99181B',
          900: '#7F1D1D'
        },
        'nitro-shades': {
          50:  '#001412',
          300: '#FFFFFF'
        }
      },
      fontFamily: {
        display: 'var(--font-family-display)',
        body: 'var(--font-family-body)'
      }
    }
  },
  plugins: []
}



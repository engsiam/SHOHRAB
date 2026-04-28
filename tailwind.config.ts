import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
        colors: {
          'primary-fixed': '#74f5ff',
          'primary-fixed-dim': '#00dbe7',
          'tertiary-fixed': '#8bf2ff',
          'inverse-surface': '#e0e2ea',
          'surface-container-highest': '#31353b',
          'inverse-primary': '#00696f',
          'inverse-on-surface': '#2d3136',
          'secondary-container': '#0266ff',
          'tertiary': '#e4fcff',
          'on-primary-fixed-variant': '#004f54',
          'on-tertiary-fixed': '#001f23',
          'on-error': '#690005',
          'surface-variant': '#b9cacb',
          'surface-container-lowest': '#020617',
          'tertiary-fixed-dim': '#43d9e9',
          'primary-container': '#00f2ff',
          'outline': '#849495',
          'on-error-container': '#ffdad6',
          'surface-container-high': '#020617',
          'surface-container-low': '#020617',
          'on-primary-container': '#006a71',
          'secondary': '#b3c5ff',
          'surface-container': '#020617',
          'primary': '#e1fdff',
          'outline-variant': '#3a494b',
          'on-primary-fixed': '#002022',
          'surface-bright': '#36393f'
        },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        'margin-page': '64px',
        'gutter': '24px',
        'section-gap': '128px',
        'container-max': '1200px',
        'unit': '8px'
      },
      fontFamily: {
        'body-md': ['Inter', 'sans-serif'],
        'h3': ['Space Grotesk', 'sans-serif'],
        'h1': ['Space Grotesk', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'h2': ['Space Grotesk', 'sans-serif'],
        'label-caps': ['Space Grotesk', 'sans-serif'],
        'code': ['monospace']
      },
      fontSize: {
        'code': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'h3': ['32px', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],
        'h1': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'h2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'label-caps': ['14px', { lineHeight: '1.0', letterSpacing: '0.1em', fontWeight: '500' }]
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;

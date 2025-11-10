import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: 'var(--brand-bg)',
          surface: 'var(--brand-surface)',
          text: 'var(--brand-text)',
          muted: 'var(--brand-muted)',
          primary: 'var(--brand-primary)',
          primaryHover: 'var(--brand-primary-hover)',
          primaryTint: 'var(--brand-primary-tint)',
          accent: 'var(--brand-accent)',
          accentHover: 'var(--brand-accent-hover)',
          accentTint: 'var(--brand-accent-tint)',
          gray: {
            50: 'var(--brand-gray-50)',
            100: 'var(--brand-gray-100)',
            200: 'var(--brand-gray-200)',
            300: 'var(--brand-gray-300)',
            600: 'var(--brand-gray-600)',
            900: 'var(--brand-gray-900)'
          }
        },
        pillar: {
          schlaf: '#36A8A2',
          ernaehrung: '#7CB342',
          bewegung: '#F6A623',
          achtsamkeit: '#7E57C2'
        }
      },
      fontSize: {
        xs: ['0.75rem', {lineHeight: '1rem'}],
        sm: ['0.875rem', {lineHeight: '1.25rem'}],
        base: ['1rem', {lineHeight: '1.5rem'}],
        lg: ['1.125rem', {lineHeight: '1.75rem'}],
        xl: ['1.25rem', {lineHeight: '1.75rem'}],
        '2xl': ['1.5rem', {lineHeight: '2rem'}],
        '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
        '4xl': ['2.25rem', {lineHeight: '2.5rem'}],
        '5xl': ['3rem', {lineHeight: '1.1'}],
        '6xl': ['3.75rem', {lineHeight: '1'}],
        '7xl': ['4.5rem', {lineHeight: '1'}]
      },
      borderRadius: {
        none: '0',
        sm: '0.5rem',
        DEFAULT: '1rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem'
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        medium: 'var(--shadow-medium)',
        strong: 'var(--shadow-strong)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'],
        display: ['var(--font-manrope)', 'system-ui']
      },
      spacing: {
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem'
      },
      backgroundImage: {
        'hero-gradient': 'var(--gradient-hero)',
        'gradient-teal': 'var(--gradient-teal)',
        'gradient-primary': 'var(--gradient-primary)'
      },
      transitionTimingFunction: {
        smooth: 'var(--ease-smooth)',
        bounce: 'var(--ease-bounce)'
      },
      transitionDuration: {
        fast: 'var(--animation-fast)',
        normal: 'var(--animation-normal)',
        slow: 'var(--animation-slow)'
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0', transform: 'translateY(10px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'}
        },
        slideUp: {
          '0%': {transform: 'translateY(100%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
        scaleIn: {
          '0%': {transform: 'scale(0.9)', opacity: '0'},
          '100%': {transform: 'scale(1)', opacity: '1'}
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
        scaleIn: 'scaleIn 0.3s ease-out'
      }
    }
  },
  plugins: [forms, typography]
};

export default config;

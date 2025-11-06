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
          accentHover: 'var(--brand-accent-hover)'
        },
        pillar: {
          sleep: '#6366F1',
          nutrition: '#22C55E',
          activity: '#0EA5E9',
          mindfulness: '#F59E0B'
        }
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
        soft: '0 4px 16px rgba(15, 23, 42, 0.06)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'],
        display: ['var(--font-outfit)', 'system-ui']
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(120% 120% at 20% 20%, rgba(20, 184, 166, 0.25), transparent)'
      }
    }
  },
  plugins: [forms, typography]
};

export default config;

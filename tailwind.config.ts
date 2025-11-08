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
          schlaf: '#36A8A2',
          ernaehrung: '#7CB342',
          bewegung: '#F6A623',
          achtsamkeit: '#7E57C2'
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
        soft: '0 4px 16px rgba(11, 18, 32, 0.08)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'],
        display: ['var(--font-manrope)', 'system-ui']
      },
      spacing: {
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(120% 120% at 20% 20%, rgba(54, 168, 162, 0.25), transparent)'
      }
    }
  },
  plugins: [forms, typography]
};

export default config;

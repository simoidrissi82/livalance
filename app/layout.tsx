import type {Metadata, Viewport} from 'next';
import {headers} from 'next/headers';
import {ReactNode} from 'react';

import {PlausibleScript} from '@/components/ui/PlausibleScript';
import {inter, manrope} from '@/fonts';
import {getOrganizationJsonLd, getWebsiteJsonLd} from '@/lib/structured-data';
import '@/styles/globals.css';

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.livalance.example';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Livalance – Lebe vital. In Balance.',
    template: '%s | Livalance'
  },
  description:
    'Bilingual wellness coaching & workshops across sleep, nutrition, activity, and mindfulness with science-backed guidance.',
  alternates: {
    canonical: baseUrl
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: baseUrl,
    siteName: 'Livalance',
    title: 'Livalance – Lebe vital. In Balance.',
    description:
      'Ganzheitliches Coaching und Workshops für Schlaf, Ernährung, Aktivität und Mindfulness.',
    images: [
      {
        url: '/images/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'Livalance – Lebe vital. In Balance.'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@livalance',
    creator: '@livalance'
  }
};

export const viewport: Viewport = {
  themeColor: '#0B1220'
};

const organizationJsonLd = JSON.stringify(getOrganizationJsonLd());
const websiteJsonLd = JSON.stringify(getWebsiteJsonLd());

export default async function RootLayout({children}: {children: ReactNode}) {
  // For static export, use default locale
  const locale = 'de';

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans`} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <PlausibleScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: organizationJsonLd}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: websiteJsonLd}}
        />
        {children}
      </body>
    </html>
  );
}

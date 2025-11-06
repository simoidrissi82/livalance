import type {Metadata, Viewport} from 'next';
import {headers} from 'next/headers';
import {ReactNode} from 'react';

import {PlausibleScript} from '@/components/PlausibleScript';
import {inter, outfit} from '@/fonts';
import {getOrganizationJsonLd, getWebsiteJsonLd} from '@/lib/structured-data';
import '@/styles/globals.css';

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.livalance.example';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Livalance – Vital leben. Im Gleichgewicht.',
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
    title: 'Livalance – Vital leben. Im Gleichgewicht.',
    description:
      'Ganzheitliches Coaching und Workshops für Schlaf, Ernährung, Aktivität und Mindfulness.',
    images: [
      {
        url: '/images/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'Livalance – Vital leben. Im Gleichgewicht.'
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
  themeColor: '#14B8A6'
};

const organizationJsonLd = JSON.stringify(getOrganizationJsonLd());
const websiteJsonLd = JSON.stringify(getWebsiteJsonLd());

export default function RootLayout({children}: {children: ReactNode}) {
  const locale = headers().get('x-next-intl-locale') ?? 'de';

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
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

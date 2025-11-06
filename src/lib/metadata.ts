import type {Metadata} from 'next';

import type {AppLocale} from '@/i18n/routing';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.livalance.example';

export function buildPageMetadata({
  locale,
  path,
  title,
  description
}: {
  locale: AppLocale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const localeKey = locale === 'de' ? 'de_DE' : 'en';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath
    },
    openGraph: {
      type: 'website',
      locale: localeKey,
      title,
      description,
      url: canonicalPath
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

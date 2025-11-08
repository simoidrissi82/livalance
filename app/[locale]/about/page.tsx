import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {AboutPage} from '@/about';
import {buildPageMetadata} from '@/lib/metadata';
import type {AppLocale} from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: {locale: AppLocale};
}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'aboutPage'});
  return buildPageMetadata({
    locale: params.locale,
    path: params.locale === 'de' ? '/ueber' : '/en/about',
    title: t('heroTitle'),
    description: t('heroSubtitle')
  });
}

export default async function Page() {
  return <AboutPage />;
}

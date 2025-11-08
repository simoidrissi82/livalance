import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {buildPageMetadata} from '@/lib/metadata';
import {WorkshopsPage} from '@/workshops';
import type {AppLocale} from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: {locale: AppLocale};
}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'workshopsPage'});
  return buildPageMetadata({
    locale: params.locale,
    path: params.locale === 'de' ? '/workshops' : `/en/workshops`,
    title: t('heroTitle'),
    description: t('heroSubtitle')
  });
}

export default async function Page() {
  return <WorkshopsPage />;
}

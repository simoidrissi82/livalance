import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {buildPageMetadata} from '@/lib/metadata';
import {PillarsPage} from '@/pillars';
import type {AppLocale} from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: {locale: AppLocale};
}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'pillarsPage'});

  return buildPageMetadata({
    locale: params.locale,
    path: params.locale === 'de' ? '/saeulen' : `/en/pillars`,
    title: t('title'),
    description: t('intro')
  });
}

export default async function Page() {
  return <PillarsPage />;
}

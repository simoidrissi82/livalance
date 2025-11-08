import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {ArticlesPage} from '@/articles';
import {buildPageMetadata} from '@/lib/metadata';
import type {AppLocale} from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: {locale: AppLocale};
}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'articles'});
  return buildPageMetadata({
    locale: params.locale,
    path: params.locale === 'de' ? '/wissen' : '/en/insights',
    title: t('title'),
    description: t('intro')
  });
}

export default async function Page({params}: {params: {locale: AppLocale}}) {
  return <ArticlesPage locale={params.locale} />;
}

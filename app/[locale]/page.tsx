import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {HomePage} from '@/home';
import {locales, type AppLocale} from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: {locale: AppLocale};
}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'hero'});
  return {
    title: t('title'),
    description: t('subtitle')
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function Page({params}: {params: {locale: AppLocale}}) {
  return <HomePage locale={params.locale} />;
}

import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {ContactPage} from '@/contact';
import {buildPageMetadata} from '@/lib/metadata';
import type {AppLocale} from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: {locale: AppLocale};
}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'contact'});
  return buildPageMetadata({
    locale: params.locale,
    path: params.locale === 'de' ? '/kontakt' : '/en/contact',
    title: t('title'),
    description: t('intro')
  });
}

export default async function Page() {
  return <ContactPage />;
}

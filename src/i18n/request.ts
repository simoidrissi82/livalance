import type {AbstractIntlMessages} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';
import {notFound} from 'next/navigation';

import {defaultLocale} from '@/i18n/routing';

const localeToFileMap: Record<string, () => Promise<AbstractIntlMessages>> = {
  de: () =>
    import('@/messages/de.json').then(
      (mod) => mod.default as unknown as AbstractIntlMessages
    ),
  en: () =>
    import('@/messages/en.json').then(
      (mod) => mod.default as unknown as AbstractIntlMessages
    )
};

export default getRequestConfig(async () => {
  const headerLocale = headers().get('x-next-intl-locale');
  const locale = headerLocale && headerLocale in localeToFileMap ? headerLocale : defaultLocale;
  const loader = localeToFileMap[locale];

  if (!loader) {
    notFound();
  }

  return {
    locale,
    messages: await loader()
  };
});

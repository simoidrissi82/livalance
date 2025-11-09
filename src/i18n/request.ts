import type {AbstractIntlMessages} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
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

export default getRequestConfig(async ({locale}) => {
  // For static export, locale comes from the URL params, not headers
  if (!locale || !(locale in localeToFileMap)) {
    locale = defaultLocale;
  }
  
  const loader = localeToFileMap[locale];

  if (!loader) {
    notFound();
  }

  return {
    locale,
    messages: await loader(),
    timeZone: 'Europe/Berlin'
  };
});

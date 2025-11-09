import type {Metadata} from 'next';

import {AboutPage} from '@/about';
import {buildPageMetadata} from '@/lib/metadata';
import type {AppLocale} from '@/i18n/routing';

import deMessages from '@/messages/de.json';
import enMessages from '@/messages/en.json';

const messages = {
  de: deMessages,
  en: enMessages
};

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: AppLocale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const localeMessages = messages[locale] || messages.de;
  const aboutPage = localeMessages.aboutPage as any;
  
  return buildPageMetadata({
    locale,
    path: locale === 'de' ? '/ueber' : '/en/about',
    title: aboutPage.heroTitle,
    description: aboutPage.heroSubtitle
  });
}

export default async function Page() {
  return <AboutPage />;
}

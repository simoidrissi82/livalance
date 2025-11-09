import type {Metadata} from 'next';

import {buildPageMetadata} from '@/lib/metadata';
import {WorkshopsPage} from '@/workshops';
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
  const workshopsPage = localeMessages.workshopsPage as any;
  
  return buildPageMetadata({
    locale,
    path: locale === 'de' ? '/workshops' : `/en/workshops`,
    title: workshopsPage.heroTitle,
    description: workshopsPage.heroSubtitle
  });
}

export default async function Page() {
  return <WorkshopsPage />;
}

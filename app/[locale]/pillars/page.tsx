import type {Metadata} from 'next';

import {buildPageMetadata} from '@/lib/metadata';
import {PillarsPage} from '@/pillars';
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
  const pillarsPage = localeMessages.pillarsPage as any;

  return buildPageMetadata({
    locale,
    path: locale === 'de' ? '/saeulen' : `/en/pillars`,
    title: pillarsPage.title,
    description: pillarsPage.intro
  });
}

export default async function Page() {
  return <PillarsPage />;
}

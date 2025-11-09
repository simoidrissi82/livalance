import type {Metadata} from 'next';

import {HomePage} from '@/home';
import {locales, type AppLocale} from '@/i18n/routing';

import deMessages from '@/messages/de.json';
import enMessages from '@/messages/en.json';

const messages = {
  de: deMessages,
  en: enMessages
};

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: AppLocale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const localeMessages = messages[locale] || messages.de;
  const hero = localeMessages.hero as any;
  
  return {
    title: hero.title,
    description: hero.subtitle
  };
}

export async function generateStaticParams() {
  return [{locale: 'de'}, {locale: 'en'}];
}

export default async function Page() {
  return <HomePage />;
}

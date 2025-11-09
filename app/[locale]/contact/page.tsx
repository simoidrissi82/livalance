import type {Metadata} from 'next';

import {ContactPage} from '@/contact';
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
  const contact = localeMessages.contact as any;
  
  return buildPageMetadata({
    locale,
    path: locale === 'de' ? '/kontakt' : '/en/contact',
    title: contact.title,
    description: contact.intro
  });
}

export default async function Page() {
  return <ContactPage />;
}

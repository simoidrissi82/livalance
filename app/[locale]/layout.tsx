import {setRequestLocale} from 'next-intl/server';
import type {ReactNode} from 'react';

import {ClientLayout} from '@/components/layout/ClientLayout';
import type {AppLocale} from '@/i18n/routing';

import deMessages from '@/messages/de.json';
import enMessages from '@/messages/en.json';

const messages = {
  de: deMessages,
  en: enMessages
};

export const runtime = 'edge';

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const localeMessages = messages[locale as AppLocale] || messages.de;

  return (
    <ClientLayout locale={locale} messages={localeMessages}>
      <main id="main-content" className="min-h-[60vh]" tabIndex={-1}>
        {children}
      </main>
    </ClientLayout>
  );
}

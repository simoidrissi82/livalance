import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import type {ReactNode} from 'react';

import {Footer} from '@/components/Footer';
import {Header} from '@/components/Header';
import type {AppLocale} from '@/i18n/routing';

export const runtime = 'edge';

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: {locale: AppLocale};
}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);

  const messages = await getMessages({locale});

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <main className="min-h-[60vh]">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}

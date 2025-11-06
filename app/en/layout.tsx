import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import type {ReactNode} from 'react';

import {Footer} from '@/components/Footer';
import {Header} from '@/components/Header';

const locale = 'en';

export default async function EnLayout({children}: {children: ReactNode}) {
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

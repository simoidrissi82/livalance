'use client';

import {NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';

import {Header} from './Header';
import {Footer} from './Footer';

type ClientLayoutProps = {
  locale: string;
  messages: any;
  children: ReactNode;
};

export function ClientLayout({locale, messages, children}: ClientLayoutProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}

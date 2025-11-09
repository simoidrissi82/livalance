'use client';

import {NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';

import {Header} from './Header';
import {Footer} from './Footer';
import {ScrollToTop} from '../ui/ScrollToTop';

type ClientLayoutProps = {
  locale: string;
  messages: any;
  children: ReactNode;
};

export function ClientLayout({locale, messages, children}: ClientLayoutProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Berlin">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </NextIntlClientProvider>
  );
}

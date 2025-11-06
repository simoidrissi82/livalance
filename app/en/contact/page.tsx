import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {ContactPage} from '@/contact';
import {buildPageMetadata} from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('contact');
  return buildPageMetadata({
    locale: 'en',
    path: '/en/contact',
    title: t('title'),
    description: t('intro')
  });
}

export default async function Page() {
  return <ContactPage />;
}

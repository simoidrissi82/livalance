import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {HomePage} from '@/home';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('hero');
  const title = t('title');
  const description = t('subtitle');

  return {
    title,
    description,
    alternates: {
      canonical: '/en'
    }
  };
}

export default async function Page() {
  return <HomePage locale="en" />;
}

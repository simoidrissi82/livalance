import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {AboutPage} from '@/about';
import {buildPageMetadata} from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('aboutPage');
  return buildPageMetadata({
    locale: 'de',
    path: '/de/ueber',
    title: t('heroTitle'),
    description: t('heroSubtitle')
  });
}

export default async function Page() {
  return <AboutPage />;
}

import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {buildPageMetadata} from '@/lib/metadata';
import {WorkshopsPage} from '@/workshops/WorkshopsPage';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('workshopsPage');
  return buildPageMetadata({
    locale: 'de',
    path: '/de/workshops',
    title: t('heroTitle'),
    description: t('heroSubtitle')
  });
}

export default async function Page() {
  return <WorkshopsPage />;
}

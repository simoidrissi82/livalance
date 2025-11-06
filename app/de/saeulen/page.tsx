import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {PillarsPage} from '@/pillars';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pillarsPage');
  return {
    title: t('title'),
    description: t('intro'),
    alternates: {
      canonical: '/de/saeulen'
    }
  };
}

export default async function Page() {
  return <PillarsPage />;
}

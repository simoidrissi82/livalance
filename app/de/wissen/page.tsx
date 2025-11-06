import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import {ArticlesPage} from '@/articles';
import {buildPageMetadata} from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('articles');
  return buildPageMetadata({
    locale: 'de',
    path: '/de/wissen',
    title: t('title'),
    description: t('intro')
  });
}

export default async function Page() {
  return <ArticlesPage locale="de" />;
}

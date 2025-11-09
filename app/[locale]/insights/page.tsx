import type {Metadata} from 'next';

import {ArticlesPage} from '@/articles';
import {buildPageMetadata} from '@/lib/metadata';
import {getArticles} from '@/lib/content';
import type {AppLocale} from '@/i18n/routing';

export async function generateStaticParams() {
  return [{locale: 'de'}, {locale: 'en'}];
}

import deMessages from '@/messages/de.json';
import enMessages from '@/messages/en.json';

const messages = {
  de: deMessages,
  en: enMessages
};

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: AppLocale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const localeMessages = messages[locale] || messages.de;
  const articles = localeMessages.articles as any;
  
  return buildPageMetadata({
    locale,
    path: locale === 'de' ? '/wissen' : '/en/insights',
    title: articles.title,
    description: articles.intro
  });
}

export default async function Page({params}: {params: Promise<{locale: AppLocale}>}) {
  const {locale} = await params;
  const articles = await getArticles(locale);
  return <ArticlesPage articles={articles} />;
}

import {getTranslations} from 'next-intl/server';

import {ArticleList} from '@/components/ArticleList';
import {getArticles} from '@/lib/content';
import type {AppLocale} from '@/i18n/routing';

export async function ArticlesPage({locale}: {locale: AppLocale}) {
  const [articles, labels, articlePage] = await Promise.all([
    getArticles(locale),
    getTranslations({locale, namespace: 'articles'}),
    getTranslations({locale, namespace: 'articlesPage'})
  ]);

  return (
    <ArticleList
      articles={articles}
      labels={{
        title: labels('title'),
        intro: labels('intro'),
        category: labels('filters.category'),
        readingTime: labels('filters.readingTime'),
        all: labels('filters.all'),
        under5: labels('filters.under5'),
        under10: labels('filters.under10'),
        empty: labels('empty'),
        readMore: articlePage('readMore')
      }}
    />
  );
}

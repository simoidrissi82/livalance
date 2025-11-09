'use client';

import {useTranslations} from 'next-intl';

import {ArticleList} from '@/components/content/ArticleList';
import type {ArticleFrontmatter} from '@/lib/content-types';

export function ArticlesPage({articles}: {articles: ArticleFrontmatter[]}) {
  const labels = useTranslations('articles');
  const articlePage = useTranslations('articlesPage');

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
        readMore: articlePage('readMore'),
        cta: labels('cta')
      }}
    />
  );
}

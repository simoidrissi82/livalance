"use client";

import {useMemo, useState} from 'react';

import {Link} from '@/i18n/routing';

import {CTAButton} from './CTAButton';
import type {ArticleFrontmatter} from '@/lib/content-types';

type ArticleListProps = {
  articles: ArticleFrontmatter[];
  labels: {
    title: string;
    intro: string;
    category: string;
    readingTime: string;
    all: string;
    under5: string;
    under10: string;
    empty: string;
    readMore: string;
    cta: string;
  };
};

const PAGE_SIZE = 4;

export function ArticleList({articles, labels}: ArticleListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTime, setSelectedTime] = useState<string>('all');
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((article) => set.add(article.category));
    return Array.from(set);
  }, [articles]);

  const filtered = useMemo(() => {
    let items = [...articles];

    if (selectedCategory !== 'all') {
      items = items.filter((article) => article.category === selectedCategory);
    }

    if (selectedTime !== 'all') {
      items = items.filter((article) => {
        if (selectedTime === 'under5') {
          return article.readingTime <= 5;
        }
        if (selectedTime === 'under10') {
          return article.readingTime <= 10;
        }
        return true;
      });
    }

    return items;
  }, [articles, selectedCategory, selectedTime]);

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const currentItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setPage(1);
  };

  const handleReadingChange = (value: string) => {
    setSelectedTime(value);
    setPage(1);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-display text-3xl font-semibold text-brand-text">
            {labels.title}
          </h2>
          <p className="text-base text-brand-muted">{labels.intro}</p>
        </div>
        <CTAButton href="/insights" variant="ghost">
          {labels.cta}
        </CTAButton>
      </div>

      <div className="mt-8 flex flex-wrap items-end gap-4 rounded-3xl bg-white/60 p-5 shadow-soft backdrop-blur">
        <div className="flex flex-col text-xs font-semibold text-brand-muted">
          <span>{labels.category}</span>
          <select
            className="mt-1 rounded-2xl border border-white/60 bg-white/90 px-3 py-2 text-sm text-brand-text shadow-soft focus:border-brand-primary"
            value={selectedCategory}
            onChange={(event) => handleCategoryChange(event.target.value)}
          >
            <option value="all">{labels.all}</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col text-xs font-semibold text-brand-muted">
          <span>{labels.readingTime}</span>
          <select
            className="mt-1 rounded-2xl border border-white/60 bg-white/90 px-3 py-2 text-sm text-brand-text shadow-soft focus:border-brand-primary"
            value={selectedTime}
            onChange={(event) => handleReadingChange(event.target.value)}
          >
            <option value="all">{labels.all}</option>
            <option value="under5">{labels.under5}</option>
            <option value="under10">{labels.under10}</option>
          </select>
        </div>
      </div>

      {currentItems.length === 0 ? (
        <p className="mt-10 text-sm text-brand-muted">{labels.empty}</p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {currentItems.map((article) => (
            <article
              key={article.slug}
              className="hover:border-brand-primary/30 group flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1"
            >
              <div className="space-y-3">
                <span className="bg-brand-primary-tint inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  {article.category} · {article.readingTime} min
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-brand-text">
                  {article.title}
                </h3>
                <p className="text-sm text-brand-muted">{article.excerpt}</p>
              </div>
              <Link
                href={{
                  pathname: '/articles/[slug]',
                  params: {slug: article.slug}
                }}
                className="flex items-center gap-2 text-sm font-semibold text-brand-primary"
              >
                {labels.readMore}
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      )}

      {pageCount > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-3">
          {Array.from({length: pageCount}).map((_, index) => {
            const pageNumber = index + 1;
            const isActive = pageNumber === page;
            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                className={`size-9 rounded-full text-sm font-semibold ${
                  isActive
                    ? 'bg-brand-primary text-white'
                    : 'bg-brand-primary-tint text-brand-text'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}

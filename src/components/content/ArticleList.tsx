"use client";

import {useMemo, useState} from 'react';
import {motion} from 'framer-motion';

import {Link} from '@/i18n/routing';

import {CTAButton} from '../ui/CTAButton';
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
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-surface via-white to-brand-surface py-20">
      <div className="absolute top-0 left-0 h-64 w-64 bg-brand-primary/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-brand-accent/5 rounded-full blur-3xl" aria-hidden />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <div className="max-w-3xl space-y-4">
            <motion.h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text"
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.2}}
            >
              {labels.title}
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed text-brand-muted"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.6, delay: 0.3}}
            >
              {labels.intro}
            </motion.p>
          </div>
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0.4}}
          >
            <CTAButton href="/insights" variant="ghost">
              {labels.cta}
            </CTAButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-end gap-6 rounded-3xl border-2 border-white/60 bg-white/95 p-8 shadow-medium backdrop-blur"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.5}}
        >
          <div className="flex flex-col text-sm font-bold text-brand-primary">
            <span className="mb-2">{labels.category}</span>
            <select
              className="rounded-2xl border-2 border-white/60 bg-white/90 px-4 py-3 text-base text-brand-text shadow-soft transition-all focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
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
          <div className="flex flex-col text-sm font-bold text-brand-accent">
            <span className="mb-2">{labels.readingTime}</span>
            <select
              className="rounded-2xl border-2 border-white/60 bg-white/90 px-4 py-3 text-base text-brand-text shadow-soft transition-all focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
              value={selectedTime}
              onChange={(event) => handleReadingChange(event.target.value)}
            >
              <option value="all">{labels.all}</option>
              <option value="under5">{labels.under5}</option>
              <option value="under10">{labels.under10}</option>
            </select>
          </div>
        </motion.div>

      {currentItems.length === 0 ? (
        <motion.p
          className="mt-10 text-base text-brand-muted"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
        >
          {labels.empty}
        </motion.p>
      ) : (
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-100px'}}
          variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1, transition: {staggerChildren: 0.1}}
          }}
        >
          {currentItems.map((article) => (
            <motion.article
              key={article.slug}
              className="group flex h-full flex-col gap-6 overflow-hidden rounded-3xl border-2 border-white/60 bg-white/95 p-8 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-medium hover:border-brand-primary/40"
              variants={{
                hidden: {opacity: 0, y: 30},
                visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
              }}
              whileHover={{scale: 1.02}}
            >
              <div className="space-y-4">
                <motion.span
                  className="inline-flex items-center rounded-full bg-brand-primary-tint px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-primary shadow-soft"
                  whileHover={{scale: 1.05}}
                >
                  {article.category} · {article.readingTime} min
                </motion.span>
                <h3 className="font-display text-2xl font-bold text-brand-text leading-tight group-hover:text-brand-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-base leading-relaxed text-brand-muted">{article.excerpt}</p>
              </div>
              <Link
                href={`/insights/${article.slug}` as any}
                className="flex items-center gap-2 text-base font-bold text-brand-primary transition-all group-hover:gap-3"
              >
                {labels.readMore}
                <motion.span
                  aria-hidden
                  animate={{x: [0, 4, 0]}}
                  transition={{duration: 1.5, repeat: Infinity}}
                >
                  →
                </motion.span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      )}

      {pageCount > 1 ? (
        <motion.div
          className="mt-12 flex items-center justify-center gap-4"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.3}}
        >
          {Array.from({length: pageCount}).map((_, index) => {
            const pageNumber = index + 1;
            const isActive = pageNumber === page;
            return (
              <motion.button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                className={`h-12 w-12 rounded-full text-base font-bold transition-all ${
                  isActive
                    ? 'bg-brand-primary text-white shadow-medium scale-110'
                    : 'bg-brand-primary-tint text-brand-text hover:bg-brand-primary/20'
                }`}
                whileHover={{scale: isActive ? 1.1 : 1.05}}
                whileTap={{scale: 0.95}}
              >
                {pageNumber}
              </motion.button>
            );
          })}
        </motion.div>
      ) : null}
      </div>
    </section>
  );
}

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
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-accent/40 via-pillar-ernaehrung/30 to-brand-primary/35 py-20">
      {/* Enhanced animated gradient blobs - BIGGER & MORE SATURATED */}
      <motion.div
        className="absolute -top-32 -left-32 h-[620px] w-[620px] bg-brand-primary/30 rounded-full blur-3xl"
        aria-hidden
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-[540px] w-[540px] bg-brand-accent/25 rounded-full blur-3xl"
        aria-hidden
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.4, 0.25]
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[480px] w-[480px] bg-pillar-ernaehrung/20 rounded-full blur-3xl"
        aria-hidden
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [-60, 60, -60]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />
      
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
          className="mt-12 flex flex-wrap items-end gap-6 rounded-3xl border-2 border-brand-primary/20 bg-gradient-to-br from-white via-brand-primary-tint/10 to-white p-8 shadow-medium backdrop-blur"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.5}}
          whileHover={{scale: 1.01}}
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
              className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border-2 border-brand-primary/20 bg-gradient-to-br from-white via-brand-primary-tint/10 to-white p-8 shadow-medium backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-strong hover:border-brand-primary/40"
              variants={{
                hidden: {opacity: 0, y: 30},
                visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
              }}
              whileHover={{scale: 1.02}}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
              <div className="relative z-10 space-y-4">
                <motion.span
                  className="inline-flex items-center rounded-full bg-brand-primary-tint px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-primary shadow-medium"
                  whileHover={{scale: 1.05}}
                >
                  {article.category} · {article.readingTime} min
                </motion.span>
                <h3 className="font-display text-2xl font-bold text-brand-text leading-tight group-hover:text-brand-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-base leading-relaxed text-brand-text/80">{article.excerpt}</p>
              </div>
              <Link
                href={`/insights/${article.slug}` as any}
                className="relative z-10 flex items-center gap-2 text-base font-bold text-brand-primary transition-all group-hover:gap-3"
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

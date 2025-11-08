import Image from 'next/image';
import type {ReactNode} from 'react';

import type {ArticleFrontmatter} from '@/lib/content-types';

type ArticleDetailProps = {
  frontmatter: ArticleFrontmatter;
  content: ReactNode;
};

export function ArticleDetail({frontmatter, content}: ArticleDetailProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10 space-y-4">
        <p className="text-xs uppercase tracking-wide text-brand-muted">
          {frontmatter.category} · {frontmatter.readingTime} min
        </p>
        <h1 className="font-display text-4xl font-semibold text-brand-text">
          {frontmatter.title}
        </h1>
        <p className="text-base text-brand-muted">{frontmatter.excerpt}</p>
        <p className="text-xs text-brand-muted">
          {new Intl.DateTimeFormat(frontmatter.locale === 'de' ? 'de-DE' : 'en', {
            dateStyle: 'medium'
          }).format(frontmatter.publishDate)}
        </p>
      </header>

      <div className="relative mb-12 aspect-[3/2] overflow-hidden rounded-3xl border border-slate-200 bg-brand-surface shadow-soft">
        <Image
          src={frontmatter.cover}
          alt={frontmatter.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <div className="prose-brand prose-p:text-brand-text/80 prose max-w-none prose-headings:font-display prose-headings:text-brand-text prose-strong:text-brand-text">
        {content}
      </div>
    </article>
  );
}

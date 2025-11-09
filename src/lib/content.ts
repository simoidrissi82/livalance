import type {MDXComponents} from 'mdx/types';
import {compileMDX} from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import {articleFrontmatterSchema, type ArticleFrontmatter} from './content-types';

import type {AppLocale} from '@/i18n/routing';
import {articlesFrontmatters, articlesSources} from '@/generated/articles-data';

const components: MDXComponents = {};

function coerceFrontmatters(locale: AppLocale): ArticleFrontmatter[] {
  const list = (articlesFrontmatters as any)[locale] ?? [];
  return list
    .map((fm: any) =>
      articleFrontmatterSchema.parse({
        ...fm,
        // Stored as ISO string; convert back to Date via Zod transformer
        publishDate: fm.publishDate
      })
    )
    .filter((it: ArticleFrontmatter) => it.published);
}

export async function getArticles(locale: AppLocale): Promise<ArticleFrontmatter[]> {
  const items = coerceFrontmatters(locale);
  return items.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

export async function getArticleBySlug(locale: AppLocale, slug: string) {
  const items = coerceFrontmatters(locale);
  const frontmatter = items.find((it) => it.slug === slug);
  if (!frontmatter) return null;

  const body = (articlesSources as any)[locale]?.[slug];
  if (!body) return null;

  const {content} = await compileMDX<ArticleFrontmatter>({
    source: body,
    components,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {behavior: 'wrap', properties: {className: ['anchor']}}
          ]
        ]
      }
    }
  });

  return {frontmatter, content};
}

export async function getArticleSlugs(locale: AppLocale) {
  const items = coerceFrontmatters(locale);
  return items.map((it) => it.slug);
}

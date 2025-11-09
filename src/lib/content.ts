import type {MDXComponents} from 'mdx/types';
import {compileMDX} from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import {articleFrontmatterSchema, type ArticleFrontmatter} from './content-types';
import {generatedArticles} from './generated/articles';

import type {AppLocale} from '@/i18n/routing';

const components: MDXComponents = {};

type ParsedArticle = {
  locale: AppLocale;
  slug: string;
  frontmatter: ArticleFrontmatter;
  source: string;
};

const parsedArticles: ParsedArticle[] = generatedArticles.map((article) => ({
  locale: article.locale as AppLocale,
  slug: article.slug,
  frontmatter: articleFrontmatterSchema.parse(article.frontmatter),
  source: article.source
}));

function getArticlesForLocale(locale: AppLocale) {
  return parsedArticles
    .filter((article) => article.locale === locale)
    .map((article) => article.frontmatter)
    .filter((frontmatter) => frontmatter.published)
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

function findArticle(locale: AppLocale, slug: string): ParsedArticle | undefined {
  return parsedArticles.find(
    (article) => article.locale === locale && article.slug === slug
  );
}

export async function getArticles(locale: AppLocale): Promise<ArticleFrontmatter[]> {
  return getArticlesForLocale(locale);
}

export async function getArticleBySlug(locale: AppLocale, slug: string) {
  const article = findArticle(locale, slug);

  if (!article) {
    return null;
  }

  const {content} = await compileMDX<ArticleFrontmatter>({
    source: article.source,
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

  return {
    frontmatter: article.frontmatter,
    content
  };
}

export async function getArticleSlugs(locale: AppLocale) {
  return parsedArticles
    .filter((article) => article.locale === locale && article.frontmatter.published)
    .map((article) => article.slug);
}

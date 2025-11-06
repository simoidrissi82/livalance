import fs from 'node:fs/promises';
import path from 'node:path';
import type {MDXComponents} from 'mdx/types';
import {compileMDX} from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import {articleFrontmatterSchema, type ArticleFrontmatter} from './content-types';

import type {AppLocale} from '@/i18n/routing';

const components: MDXComponents = {};

const articleDirMap: Record<AppLocale, string> = {
  de: 'wissen',
  en: 'insights'
};

async function loadFile(filePath: string) {
  return fs.readFile(filePath, 'utf-8');
}

async function listFiles(dir: string) {
  try {
    const entries = await fs.readdir(dir);
    return entries.filter((file) => file.endsWith('.mdx'));
  } catch (error) {
    return [];
  }
}

function buildArticlePath(locale: AppLocale) {
  const baseDir = path.join(process.cwd(), 'content', locale, articleDirMap[locale]);
  return baseDir;
}

async function parseFrontmatter(
  filePath: string,
  schema: typeof articleFrontmatterSchema
) {
  const source = await loadFile(filePath);

  const {frontmatter} = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
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

  return schema.parse(frontmatter);
}

export async function getArticles(locale: AppLocale): Promise<ArticleFrontmatter[]> {
  const dir = buildArticlePath(locale);
  const files = await listFiles(dir);

  const items = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      return parseFrontmatter(filePath, articleFrontmatterSchema);
    })
  );

  return items
    .filter((item) => item.published)
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

export async function getArticleBySlug(locale: AppLocale, slug: string) {
  const dir = buildArticlePath(locale);
  const files = await listFiles(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    const {content, frontmatter} = await compileMDX<ArticleFrontmatter>({
      source: await loadFile(filePath),
      components,
      options: {
        parseFrontmatter: true,
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

    const parsedFrontmatter = articleFrontmatterSchema.parse(frontmatter);

    if (parsedFrontmatter.slug === slug && parsedFrontmatter.locale === locale) {
      return {
        frontmatter: parsedFrontmatter,
        content
      };
    }
  }

  return null;
}

export async function getArticleSlugs(locale: AppLocale) {
  const articles = await getArticles(locale);
  return articles.map((article) => article.slug);
}

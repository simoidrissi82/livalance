import type {Metadata} from 'next';
import {notFound} from 'next/navigation';

import {ArticleDetail} from '@/articles/ArticleDetail';
import {getArticleBySlug, getArticleSlugs} from '@/lib/content';
import {getArticleJsonLd} from '@/lib/structured-data';
import type {AppLocale} from '@/i18n/routing';

export async function generateStaticParams() {
  const locales: AppLocale[] = ['de', 'en'];
  const params = await Promise.all(
    locales.map(async (locale) => {
      const slugs = await getArticleSlugs(locale);
      return slugs.map((slug) => ({locale, slug}));
    })
  );
  return params.flat();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: AppLocale; slug: string}>;
}): Promise<Metadata> {
  const {locale, slug} = await params;
  const article = await getArticleBySlug(locale, slug);

  if (!article) {
    return {};
  }

  const {frontmatter} = article;
  const title = frontmatter.seoTitle ?? frontmatter.title;
  const description = frontmatter.seoDescription ?? frontmatter.excerpt;

  const localePath = locale === 'de' ? '/wissen' : '/en/insights';

  return {
    title,
    description,
    alternates: {
      canonical: `${localePath}/${frontmatter.slug}`
    },
    openGraph: {
      type: 'article',
      locale: locale === 'de' ? 'de_DE' : 'en',
      title,
      description,
      url: `${localePath}/${frontmatter.slug}`,
      images: frontmatter.cover
        ? [{url: frontmatter.cover, width: 1200, height: 630, alt: frontmatter.title}]
        : undefined
    }
  };
}

export default async function Page({
  params
}: {
  params: Promise<{locale: AppLocale; slug: string}>;
}) {
  const {locale, slug} = await params;
  const article = await getArticleBySlug(locale, slug);

  if (!article) {
    notFound();
  }

  const jsonLd = JSON.stringify(getArticleJsonLd(article.frontmatter, locale));

  return (
    <>
      <ArticleDetail frontmatter={article.frontmatter} content={article.content} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: jsonLd}} />
    </>
  );
}

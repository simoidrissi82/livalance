import type {Metadata} from 'next';
import {notFound} from 'next/navigation';

import {ArticleDetail} from '@/articles/ArticleDetail';
import {getArticleBySlug, getArticleSlugs} from '@/lib/content';
import {getArticleJsonLd} from '@/lib/structured-data';

const locale = 'en' as const;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs(locale);
  return slugs.map((slug) => ({slug}));
}

export async function generateMetadata({
  params
}: {
  params: {slug: string};
}): Promise<Metadata> {
  const article = await getArticleBySlug(locale, params.slug);

  if (!article) {
    return {};
  }

  const {frontmatter} = article;
  const title = frontmatter.seoTitle ?? frontmatter.title;
  const description = frontmatter.seoDescription ?? frontmatter.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `/en/insights/${frontmatter.slug}`
    },
    openGraph: {
      type: 'article',
      locale: 'en',
      title,
      description,
      url: `/en/insights/${frontmatter.slug}`,
      images: frontmatter.cover
        ? [{url: frontmatter.cover, width: 1200, height: 630, alt: frontmatter.title}]
        : undefined
    }
  };
}

export default async function Page({params}: {params: {slug: string}}) {
  const article = await getArticleBySlug(locale, params.slug);

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

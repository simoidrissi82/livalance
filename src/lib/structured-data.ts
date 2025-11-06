import type {ArticleFrontmatter} from '@/lib/content-types';
import type {AppLocale} from '@/i18n/routing';

const brandUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.livalance.example';

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Livalance',
    url: brandUrl,
    logo: `${brandUrl}/images/logo.svg`,
    sameAs: ['https://www.linkedin.com', 'https://www.instagram.com']
  };
}

export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Livalance',
    url: brandUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${brandUrl}/de?w={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getArticleJsonLd(
  frontmatter: ArticleFrontmatter,
  locale: AppLocale
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: frontmatter.publishDate.toISOString(),
    author: {
      '@type': 'Organization',
      name: frontmatter.author
    },
    inLanguage: locale === 'de' ? 'de-DE' : 'en',
    url: `${brandUrl}/${locale === 'de' ? 'de/wissen' : 'en/insights'}/${frontmatter.slug}`,
    image: frontmatter.cover ? `${brandUrl}${frontmatter.cover}` : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Livalance',
      logo: {
        '@type': 'ImageObject',
        url: `${brandUrl}/images/logo.svg`
      }
    }
  };
}

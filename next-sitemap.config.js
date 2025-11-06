const locale = process.env.SITEMAP_LOCALE ?? 'de';
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.livalance.example';

const isDefaultLocale = locale === 'de';
const localePrefix = locale === 'de' ? '/de' : '/en';

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  generateRobotsTxt: isDefaultLocale,
  outDir: 'public',
  generateIndexSitemap: false,
  sitemapBaseFileName: `sitemap_${locale}`,
  exclude: ['/api/*'],
  alternateRefs: [
    {href: `${siteUrl}/de`, hreflang: 'de-DE'},
    {href: `${siteUrl}/en`, hreflang: 'en'},
    {href: `${siteUrl}`, hreflang: 'x-default'}
  ],
  transform: async (config, path) => {
    if (!path.startsWith(localePrefix)) {
      return null;
    }

    return {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    };
  },
  robotsTxtOptions: {
    policies: [{userAgent: '*', allow: '/'}]
  }
};

export default config;

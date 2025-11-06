import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts', {
  localePrefix: 'always'
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: []
  },
  pageExtensions: ['ts', 'tsx', 'mdx']
};

export default withNextIntl(nextConfig);

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: []
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async rewrites() {
    return [
      {source: '/de/wissen', destination: '/de/insights'},
      {source: '/de/wissen/:slug', destination: '/de/insights/:slug'},
      {source: '/de/saeulen', destination: '/de/pillars'},
      {source: '/de/ueber', destination: '/de/about'},
      {source: '/de/kontakt', destination: '/de/contact'},
      {source: '/de/impressum', destination: '/de/legal/imprint'},
      {source: '/de/datenschutz', destination: '/de/legal/privacy'},
      {source: '/de/agb', destination: '/de/legal/terms'},
      {source: '/de/widerruf', destination: '/de/legal/cancellation'}
    ];
  }
};

export default withNextIntl(nextConfig);

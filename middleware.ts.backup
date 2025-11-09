import createMiddleware from 'next-intl/middleware';

import {defaultLocale, locales, pathnames} from '@/i18n/routing';

export default createMiddleware({
  locales,
  defaultLocale,
  pathnames,
  localeDetection: true
});

export const config = {
  matcher: ['/((?!_next|.*\\..*|api).*)']
};

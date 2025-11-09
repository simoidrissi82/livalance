import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  pathnames: {
    '/': '/',
    '/workshops': {
      de: '/workshops',
      en: '/workshops'
    },
    '/pillars': {
      de: '/saeulen',
      en: '/pillars'
    },
    '/insights': {
      de: '/wissen',
      en: '/insights'
    },
    '/about': {
      de: '/ueber',
      en: '/about'
    },
    '/contact': {
      de: '/kontakt',
      en: '/contact'
    },
    '/legal/imprint': {
      de: '/impressum',
      en: '/legal/imprint'
    },
    '/legal/privacy': {
      de: '/datenschutz',
      en: '/legal/privacy'
    },
    '/legal/terms': {
      de: '/agb',
      en: '/legal/terms'
    },
    '/legal/cancellation': {
      de: '/widerruf',
      en: '/legal/cancellation'
    },
    '/articles/[slug]': {
      de: '/wissen/[slug]',
      en: '/insights/[slug]'
    }
  }
});

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
export const pathnames = routing.pathnames;

export type AppLocale = (typeof locales)[number];

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);

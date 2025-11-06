import {createLocalizedPathnamesNavigation, Pathnames} from 'next-intl/navigation';

export const locales = ['de', 'en'] as const;
export const defaultLocale = 'de';

export type AppLocale = (typeof locales)[number];

export const pathnames: Pathnames<typeof locales> = {
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
};

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({
    locales,
    defaultLocale,
    pathnames
  });

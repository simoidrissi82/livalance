import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de'
  // No pathnames = same URLs for both languages
  // /de/about (German content), /en/about (English content)
  // Content is translated, URLs stay consistent
});

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export type AppLocale = (typeof locales)[number];

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);

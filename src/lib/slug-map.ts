import map from '../../content/slug-map.json';

import type {AppLocale} from '@/i18n/routing';

type ContentType = 'articles';

type SlugEntry = {
  de: string;
  en: string;
};

type SlugMap = Record<ContentType, SlugEntry[]>;

const slugMap = map as SlugMap;

export function getAlternateSlug(
  type: ContentType,
  currentLocale: AppLocale,
  targetLocale: AppLocale,
  slug: string
) {
  const entries = slugMap[type] ?? [];

  const match = entries.find((entry) => entry[currentLocale] === slug);

  if (!match) {
    return slug;
  }

  return match[targetLocale];
}

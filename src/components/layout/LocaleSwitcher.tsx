"use client";

import type {Route} from 'next';
import {usePathname, useRouter} from 'next/navigation';

import {getAlternateSlug} from '@/lib/slug-map';
import type {AppLocale} from '@/i18n/routing';

type LocaleSwitcherProps = {
  currentLocale: string;
};

const locales: AppLocale[] = ['de', 'en'];

const segmentMap: Record<string, Record<AppLocale, string[]>> = {
  home: {
    de: [],
    en: []
  },
  workshops: {
    de: ['workshops'],
    en: ['workshops']
  },
  pillars: {
    de: ['saeulen'],
    en: ['pillars']
  },
  insights: {
    de: ['wissen'],
    en: ['insights']
  },
  about: {
    de: ['ueber'],
    en: ['about']
  },
  contact: {
    de: ['kontakt'],
    en: ['contact']
  },
  legalImprint: {
    de: ['impressum'],
    en: ['legal', 'imprint']
  },
  legalPrivacy: {
    de: ['datenschutz'],
    en: ['legal', 'privacy']
  },
  legalTerms: {
    de: ['agb'],
    en: ['legal', 'terms']
  },
  legalCancellation: {
    de: ['widerruf'],
    en: ['legal', 'cancellation']
  }
};

function buildPath(
  currentLocale: AppLocale,
  targetLocale: AppLocale,
  pathname: string
) {
  const rawSegments = pathname.split('/').filter(Boolean);

  // Remove locale prefix
  const [, ...segments] = rawSegments;

  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  const [first, second] = segments;

  const isArticle =
    first === 'wissen' || first === 'insights' ? second !== undefined : false;
  if (isArticle && second) {
    const translatedSlug = getAlternateSlug(
      'articles',
      currentLocale,
      targetLocale,
      second
    );
    const section = segmentMap.insights[targetLocale];
    return `/${targetLocale}/${[...section, translatedSlug].join('/')}`;
  }

  if (
    currentLocale === 'de' &&
    ['impressum', 'datenschutz', 'agb', 'widerruf'].includes(first)
  ) {
    if (first === 'impressum') {
      return `/${targetLocale}/${segmentMap.legalImprint[targetLocale].join('/')}`;
    }
    if (first === 'datenschutz') {
      return `/${targetLocale}/${segmentMap.legalPrivacy[targetLocale].join('/')}`;
    }
    if (first === 'agb') {
      return `/${targetLocale}/${segmentMap.legalTerms[targetLocale].join('/')}`;
    }
    if (first === 'widerruf') {
      return `/${targetLocale}/${segmentMap.legalCancellation[targetLocale].join('/')}`;
    }
  }

  if (currentLocale === 'en' && first === 'legal' && second) {
    if (second === 'imprint') {
      return `/${targetLocale}/${segmentMap.legalImprint[targetLocale].join('/')}`;
    }
    if (second === 'privacy') {
      return `/${targetLocale}/${segmentMap.legalPrivacy[targetLocale].join('/')}`;
    }
    if (second === 'terms') {
      return `/${targetLocale}/${segmentMap.legalTerms[targetLocale].join('/')}`;
    }
    if (second === 'cancellation') {
      return `/${targetLocale}/${segmentMap.legalCancellation[targetLocale].join('/')}`;
    }
  }

  // General mapping
  for (const config of Object.values(segmentMap)) {
    if (arraysEqual(config[currentLocale], segments)) {
      return `/${targetLocale}/${config[targetLocale].join('/')}`;
    }
  }

  // fallback to home
  return `/${targetLocale}`;
}

function arraysEqual(a: string[], b: string[]) {
  if (a.length !== b.length) {
    return false;
  }

  return a.every((value, index) => value === b[index]);
}

export function LocaleSwitcher({currentLocale}: LocaleSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const activeLocale = (currentLocale as AppLocale) ?? 'de';

  const handleChange = (locale: AppLocale) => {
    if (locale === activeLocale) {
      return;
    }

    const targetPath = buildPath(activeLocale, locale, pathname ?? `/${activeLocale}`);
    router.replace(targetPath as Route);
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-xl bg-brand-surface px-3 py-2 text-xs font-semibold shadow-soft">
      {locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => handleChange(locale)}
            className={`uppercase transition ${
              isActive ? 'text-brand-primary' : 'text-brand-muted'
            }`}
            aria-pressed={isActive}
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}

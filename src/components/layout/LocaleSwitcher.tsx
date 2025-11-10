"use client";

import {useEffect, useRef} from 'react';
import type {Route} from 'next';
import {usePathname, useRouter} from 'next/navigation';

import {getAlternateSlug} from '@/lib/slug-map';
import type {AppLocale} from '@/i18n/routing';

type LocaleSwitcherProps = {
  currentLocale: string;
  scrolled?: boolean;
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

export function LocaleSwitcher({currentLocale, scrolled = false}: LocaleSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const activeLocale = (currentLocale as AppLocale) ?? 'de';
  const isLocaleChangingRef = useRef<boolean>(false);
  const scrollPositionRef = useRef<number>(0);

  // Restore scroll position after locale change
  useEffect(() => {
    if (isLocaleChangingRef.current && scrollPositionRef.current > 0) {
      // Use requestAnimationFrame to ensure the page has rendered with new locale
      let frameId1: number;
      let frameId2: number;
      
      frameId1 = requestAnimationFrame(() => {
        // Double RAF to ensure layout is complete
        frameId2 = requestAnimationFrame(() => {
          window.scrollTo({
            top: scrollPositionRef.current,
            behavior: 'auto'
          });
          isLocaleChangingRef.current = false;
        });
      });
      
      return () => {
        if (frameId1) cancelAnimationFrame(frameId1);
        if (frameId2) cancelAnimationFrame(frameId2);
      };
    }
  }, [pathname]);

  const handleChange = (locale: AppLocale) => {
    if (locale === activeLocale) {
      return;
    }

    // Save current scroll position and mark that we're changing locale
    scrollPositionRef.current = window.scrollY;
    isLocaleChangingRef.current = true;

    const targetPath = buildPath(activeLocale, locale, pathname ?? `/${activeLocale}`);
    router.replace(targetPath as Route);
  };

  return (
    <div className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold shadow-soft transition-colors ${
      scrolled 
        ? 'bg-brand-surface' 
        : 'bg-white/20 backdrop-blur-sm border border-white/30'
    }`}>
      {locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => handleChange(locale)}
            className={`uppercase transition ${
              scrolled
                ? isActive 
                  ? 'text-brand-primary' 
                  : 'text-brand-muted'
                : isActive
                  ? 'text-white drop-shadow-md'
                  : 'text-white/70 drop-shadow-md'
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

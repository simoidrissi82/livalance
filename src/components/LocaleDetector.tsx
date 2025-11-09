'use client';

import {useEffect} from 'react';
import {usePathname, useRouter} from 'next/navigation';

export function LocaleDetector() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only run on root path
    if (pathname !== '/') return;

    // Detect browser locale
    const browserLocale = navigator.language.split('-')[0];
    const supportedLocale = browserLocale === 'de' ? 'de' : 'en';

    // Redirect to detected locale
    router.replace(`/${supportedLocale}/` as any);
  }, [pathname, router]);

  return null;
}

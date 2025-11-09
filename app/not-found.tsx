import Link from 'next/link';
import type {Route} from 'next';

import {defaultLocale, type AppLocale} from '@/i18n/routing';
import {getLocale, getTranslations} from 'next-intl/server';

export default async function NotFound() {
  const [locale, t] = await Promise.all([
    getLocale(),
    getTranslations('notFound')
  ]);
  const activeLocale = (locale as AppLocale | null) ?? defaultLocale;
  const homeHref = `/${activeLocale}` as Route;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-24 text-white">
      <div className="w-full max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
          {t('label')}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-300">{t('description')}</p>
        <div className="mt-10 flex justify-center">
          <Link
            href={homeHref}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </main>
  );
}

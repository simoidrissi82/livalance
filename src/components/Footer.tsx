import {getLocale, getTranslations} from 'next-intl/server';

import {Link} from '@/i18n/routing';

import {NewsletterForm} from './NewsletterForm';

export async function Footer() {
  const [tFooter, tLegal] = await Promise.all([
    getTranslations('footer'),
    getTranslations('legal')
  ]);
  const locale = await getLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-brand-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h2 className="font-display text-xl text-brand-text">
            {tFooter('tagline')}
          </h2>
          <p className="mt-3 text-sm text-brand-muted">
            {tFooter('rights', {year})}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
            {tFooter('newsletterLabel')}
          </h3>
          <NewsletterForm />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
            {tFooter('follow')}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-4 text-xs text-brand-muted">
          <Link href={locale === 'de' ? '/impressum' : '/legal/imprint'}>
            {tLegal('imprint')}
          </Link>
          <Link href={locale === 'de' ? '/datenschutz' : '/legal/privacy'}>
            {tLegal('privacy')}
          </Link>
          <Link href={locale === 'de' ? '/agb' : '/legal/terms'}>
            {tLegal('terms')}
          </Link>
          <Link href={locale === 'de' ? '/widerruf' : '/legal/cancellation'}>
            {tLegal('cancellation')}
          </Link>
        </div>
      </div>
    </footer>
  );
}

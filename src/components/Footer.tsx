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
    <footer className="bg-brand-primary-tint/40 relative overflow-hidden border-t border-white/40">
      <div className="from-brand-primary/30 to-brand-accent/20 absolute inset-0 bg-gradient-to-br via-transparent" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h2 className="font-display text-xl text-brand-text">
            {tFooter('tagline')}
          </h2>
          <p className="text-brand-text/70 mt-3 text-sm">
            {tFooter('rights', {year})}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
            {tFooter('newsletterLabel')}
          </h3>
          <div className="mt-3 rounded-2xl bg-white/70 p-3 shadow-soft backdrop-blur">
            <NewsletterForm />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
            {tFooter('follow')}
          </h3>
          <ul className="text-brand-text/80 mt-3 space-y-2 text-sm">
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

      <div className="relative border-t border-white/50">
        <div className="text-brand-text/70 mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-4 text-xs">
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

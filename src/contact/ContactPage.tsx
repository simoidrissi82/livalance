import {getLocale, getTranslations} from 'next-intl/server';

import {BookingEmbed} from '@/components/BookingEmbed';
import {CTAButton} from '@/components/CTAButton';

export async function ContactPage() {
  const t = await getTranslations('contact');
  const cta = await getTranslations('cta');
  const locale = await getLocale();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="rounded-3xl bg-brand-surface p-8 shadow-soft">
        <h1 className="font-display text-4xl font-semibold text-brand-text">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-brand-muted">{t('intro')}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <CTAButton href={`mailto:hello@livalance.com`}>{cta('submit')}</CTAButton>
          <CTAButton href="#booking" variant="secondary">
            {t('booking')}
          </CTAButton>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-brand-surface p-8 shadow-soft">
        <form className="space-y-4">
          <label className="flex flex-col text-sm text-brand-text">
            {t('email')}
            <input
              type="email"
              className="mt-1 rounded-xl border border-slate-200 bg-brand-bg px-3 py-2 text-sm text-brand-text focus:border-brand-primary"
              required
            />
          </label>
          <label className="flex flex-col text-sm text-brand-text">
            {t('message')}
            <textarea
              className="mt-1 min-h-[160px] rounded-xl border border-slate-200 bg-brand-bg px-3 py-2 text-sm text-brand-text focus:border-brand-primary"
              required
            />
          </label>
          <CTAButton type="submit">{cta('submit')}</CTAButton>
        </form>
      </section>

      <section id="booking" className="mt-12">
        <BookingEmbed locale={locale} />
      </section>
    </div>
  );
}

import {getLocale, getTranslations} from 'next-intl/server';

import {BookingEmbed} from '@/components/BookingEmbed';
import {CTAButton} from '@/components/CTAButton';
import {ProgramOverview} from '@/components/ProgramOverview';

export async function WorkshopsPage() {
  const t = await getTranslations('workshopsPage');
  const program = await getTranslations('programSection');
  const locale = await getLocale();
  const cta = await getTranslations('cta');
  const booking = await getTranslations('booking');

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <section className="rounded-3xl bg-brand-surface p-10 shadow-soft">
        <h1 className="font-display text-4xl font-semibold text-brand-text">
          {t('heroTitle')}
        </h1>
        <p className="mt-4 text-lg text-brand-muted">{t('heroSubtitle')}</p>
        <div className="mt-6">
          <CTAButton href="/contact">{cta('bookIntro')}</CTAButton>
        </div>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-brand-surface p-8 shadow-soft">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
            {t('flowTitle')}
          </h2>
          <ol className="mt-4 space-y-4 text-sm text-brand-text">
            <li>{t('flowSteps.0')}</li>
            <li>{t('flowSteps.1')}</li>
            <li>{t('flowSteps.2')}</li>
          </ol>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-brand-surface p-8 shadow-soft">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
            {t('formatsTitle')}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-brand-text">
            <li>{t('formats.0')}</li>
            <li>{t('formats.1')}</li>
            <li>{t('formats.2')}</li>
          </ul>
          <p className="mt-6 text-sm text-brand-muted">{t('pricingNote')}</p>
        </div>
      </section>

      <ProgramOverview
        title={program('title')}
        description={program('description')}
        bundles={[
          {
            name: program('bundles.0.name'),
            description: program('bundles.0.description')
          },
          {
            name: program('bundles.1.name'),
            description: program('bundles.1.description')
          },
          {
            name: program('bundles.2.name'),
            description: program('bundles.2.description')
          }
        ]}
        ctaLabel={program('cta')}
        ctaHref="/contact"
      />

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
          {booking('headline')}
        </h2>
        <p className="mt-2 text-sm text-brand-muted">{booking('description')}</p>
        <div className="mt-4">
          <BookingEmbed locale={locale} />
        </div>
        <p className="mt-4 text-xs text-brand-muted">{t('disclaimer')}</p>
      </section>
    </div>
  );
}

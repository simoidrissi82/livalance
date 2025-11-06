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
    <div className="space-y-16 bg-brand-bg pb-20">
      <section className="relative overflow-hidden bg-brand-primary-tint/40">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-transparent to-brand-accent/20" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
              {t('heroTagline')}
            </span>
            <h1 className="font-display text-4xl font-semibold text-brand-text">
              {t('heroTitle')}
            </h1>
            <p className="text-lg text-brand-text/80">{t('heroSubtitle')}</p>
            <div className="flex flex-wrap gap-3 pt-4">
              <CTAButton href="/contact">{cta('bookIntro')}</CTAButton>
              <CTAButton href="#booking" variant="secondary">
                {cta('viewWorkshops')}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
            {t('flowTitle')}
          </h2>
          <p className="mt-2 text-sm text-brand-text/80">{t('flowDescription')}</p>
          <ol className="mt-6 space-y-4 text-sm text-brand-text">
            <li>{t('flowSteps.0')}</li>
            <li>{t('flowSteps.1')}</li>
            <li>{t('flowSteps.2')}</li>
          </ol>
        </div>
        <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
            {t('formatsTitle')}
          </h2>
          <p className="mt-2 text-sm text-brand-text/80">{t('formatsDescription')}</p>
          <ul className="mt-6 space-y-3 text-sm text-brand-text">
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
        supporting={program('supporting')}
        bundles={[
          {
            name: program('bundles.0.name'),
            description: program('bundles.0.description'),
            duration: program('bundles.0.duration'),
            deliverables: [
              program('bundles.0.deliverables.0'),
              program('bundles.0.deliverables.1'),
              program('bundles.0.deliverables.2')
            ]
          },
          {
            name: program('bundles.1.name'),
            description: program('bundles.1.description'),
            duration: program('bundles.1.duration'),
            deliverables: [
              program('bundles.1.deliverables.0'),
              program('bundles.1.deliverables.1'),
              program('bundles.1.deliverables.2')
            ]
          },
          {
            name: program('bundles.2.name'),
            description: program('bundles.2.description'),
            duration: program('bundles.2.duration'),
            deliverables: [
              program('bundles.2.deliverables.0'),
              program('bundles.2.deliverables.1'),
              program('bundles.2.deliverables.2')
            ]
          }
        ]}
        note={program('note')}
        ctaLabel={program('cta')}
        ctaHref="/contact"
      />

      <section id="booking" className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
            {booking('headline')}
          </h2>
          <p className="mt-2 text-sm text-brand-muted">{booking('description')}</p>
          <div className="mt-4">
            <BookingEmbed locale={locale} />
          </div>
          <p className="mt-4 text-xs text-brand-muted">{t('disclaimer')}</p>
        </div>
      </section>
    </div>
  );
}

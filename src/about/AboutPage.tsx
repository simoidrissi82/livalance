import {getTranslations} from 'next-intl/server';

export async function AboutPage() {
  const t = await getTranslations('aboutPage');

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold text-brand-text">
        {t('heroTitle')}
      </h1>
      <p className="mt-4 text-lg text-brand-muted">{t('heroSubtitle')}</p>
      <section className="mt-10 rounded-3xl border border-slate-200 bg-brand-surface p-8 shadow-soft">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
          {t('missionTitle')}
        </h2>
        <p className="mt-4 text-base text-brand-text">{t('mission')}</p>
      </section>
    </div>
  );
}

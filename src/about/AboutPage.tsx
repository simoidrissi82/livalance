import {getTranslations} from 'next-intl/server';

export async function AboutPage() {
  const t = await getTranslations('aboutPage');

  return (
    <div className="space-y-16 bg-brand-bg pb-20">
      <section className="bg-brand-primary-tint/40 relative overflow-hidden">
        <div className="from-brand-primary/30 to-brand-accent/30 absolute inset-0 bg-gradient-to-br via-transparent" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
              {t('missionTitle')}
            </span>
            <h1 className="font-display text-4xl font-semibold text-brand-text">{t('heroTitle')}</h1>
            <p className="text-brand-text/80 text-lg">{t('heroSubtitle')}</p>
            <p className="text-brand-text/70 text-base">{t('mission')}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[1.5fr_1fr]">
        <article className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">{t('storyTitle')}</h2>
          <p className="text-brand-text/80 mt-4 text-base">{t('story')}</p>
        </article>
        <aside className="border-brand-primary/20 bg-brand-primary-tint/50 rounded-3xl border p-8 shadow-soft">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-primary">{t('valuesTitle')}</h2>
          <ul className="text-brand-text/80 mt-4 space-y-3 text-sm">
            <li>{t('values.0')}</li>
            <li>{t('values.1')}</li>
            <li>{t('values.2')}</li>
          </ul>
        </aside>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">{t('approachTitle')}</h2>
          <p className="text-brand-text/80 mt-4 text-base">{t('approach')}</p>
        </div>
      </section>
    </div>
  );
}

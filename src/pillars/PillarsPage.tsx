import {getTranslations} from 'next-intl/server';

import {CTAButton} from '@/components/CTAButton';

const pillarKeys = ['sleep', 'nutrition', 'activity', 'mindfulness'] as const;

type PillarKey = (typeof pillarKeys)[number];

const cardAccentMap: Record<PillarKey, string> = {
  sleep: 'border-pillar-schlaf/30 bg-pillar-schlaf/5',
  nutrition: 'border-pillar-ernaehrung/30 bg-pillar-ernaehrung/5',
  activity: 'border-pillar-bewegung/30 bg-pillar-bewegung/5',
  mindfulness: 'border-pillar-achtsamkeit/30 bg-pillar-achtsamkeit/5'
};

const badgeClassMap: Record<PillarKey, string> = {
  sleep: 'bg-pillar-schlaf/20 text-pillar-schlaf',
  nutrition: 'bg-pillar-ernaehrung/20 text-pillar-ernaehrung',
  activity: 'bg-pillar-bewegung/20 text-pillar-bewegung',
  mindfulness: 'bg-pillar-achtsamkeit/20 text-pillar-achtsamkeit'
};

export async function PillarsPage() {
  const [pillars, page] = await Promise.all([
    getTranslations('pillars'),
    getTranslations('pillarsPage')
  ]);

  const conceptBullets = [
    page('conceptBullets.0'),
    page('conceptBullets.1'),
    page('conceptBullets.2')
  ];

  return (
    <div className="space-y-16 bg-brand-bg pb-20">
      <section className="relative overflow-hidden bg-brand-primary-tint/40">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-transparent to-brand-accent/20" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-display text-4xl font-semibold text-brand-text">{page('title')}</h1>
            <p className="text-lg text-brand-text/80">{page('intro')}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-soft backdrop-blur">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-semibold text-brand-text">
              {page('conceptTitle')}
            </h2>
            <p className="text-base text-brand-text/80">{page('conceptBody')}</p>
            <ul className="mt-6 space-y-3 text-sm text-brand-text/80">
              {conceptBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-brand-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {pillarKeys.map((key) => (
            <article
              key={key}
              className={`rounded-3xl border p-8 shadow-soft backdrop-blur ${cardAccentMap[key]}`}
            >
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${badgeClassMap[key]}`}
              >
                {pillars(`items.${key}.title`)}
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
              </span>
              <h2 className="font-display text-2xl font-semibold text-brand-text">
                {page(`items.${key}.headline`)}
              </h2>
              <p className="mt-4 text-sm text-brand-text/80">{page(`items.${key}.body`)}</p>
              <ul className="mt-6 space-y-2 text-sm text-brand-text/80">
                {[0, 1, 2].map((index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-primary/80" />
                    <span>{page(`items.${key}.details.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-brand-primary/10 bg-brand-surface p-10 text-center shadow-soft">
          <h3 className="font-display text-2xl font-semibold text-brand-text">{page('ctaTitle')}</h3>
          <p className="mt-4 text-sm text-brand-text/80">{page('ctaBody')}</p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">{page('ctaButton')}</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}

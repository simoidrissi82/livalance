import {getTranslations} from 'next-intl/server';

import {PillarsGrid} from '@/components/PillarsGrid';

const pillarKeys = ['sleep', 'nutrition', 'activity', 'mindfulness'] as const;

type PillarKey = (typeof pillarKeys)[number];

export async function PillarsPage() {
  const [pillars, page] = await Promise.all([
    getTranslations('pillars'),
    getTranslations('pillarsPage')
  ]);

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
        <div className="grid gap-8 md:grid-cols-2">
          {pillarKeys.map((key) => (
            <article
              key={key}
              className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur"
            >
              <h2 className="font-display text-2xl font-semibold text-brand-text">
                {page(`items.${key}.headline`)}
              </h2>
              <p className="mt-4 text-sm text-brand-text/80">{page(`items.${key}.body`)}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="bg-brand-bg/60">
        <PillarsGrid
          title={pillars('title')}
          description={pillars('description')}
          items={pillarKeys.map((key) => ({
            id: key,
            title: pillars(`items.${key}.title`),
            description: pillars(`items.${key}.body`),
            focusPoints: [
              pillars(`items.${key}.focus.0`),
              pillars(`items.${key}.focus.1`),
              pillars(`items.${key}.focus.2`)
            ]
          }))}
        />
      </div>
    </div>
  );
}

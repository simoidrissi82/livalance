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
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold text-brand-text">
        {page('title')}
      </h1>
      <p className="mt-4 text-lg text-brand-muted">{page('intro')}</p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {pillarKeys.map((key) => (
          <article
            key={key}
            className="rounded-3xl border border-slate-200 bg-brand-surface p-6 shadow-soft"
          >
            <h2 className="font-display text-2xl font-semibold text-brand-text">
              {page(`items.${key}.headline`)}
            </h2>
            <p className="mt-4 text-sm text-brand-muted">{page(`items.${key}.body`)}</p>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <PillarsGrid
          title={pillars('title')}
          description={pillars('description')}
          items={pillarKeys.map((key) => ({
            id: key,
            title: pillars(`items.${key}.title`),
            description: pillars(`items.${key}.body`)
          }))}
        />
      </div>
    </div>
  );
}

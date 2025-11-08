import {BoltIcon, HeartIcon, MoonIcon, SparklesIcon} from '@heroicons/react/24/outline';

type PillarItem = {
  id: 'sleep' | 'nutrition' | 'activity' | 'mindfulness';
  title: string;
  description: string;
  focusPoints: string[];
};

const gradientMap: Record<PillarItem['id'], string> = {
  sleep: 'from-pillar-schlaf/30 via-pillar-schlaf/5 to-transparent',
  nutrition: 'from-pillar-ernaehrung/30 via-pillar-ernaehrung/5 to-transparent',
  activity: 'from-pillar-bewegung/30 via-pillar-bewegung/5 to-transparent',
  mindfulness: 'from-pillar-achtsamkeit/30 via-pillar-achtsamkeit/5 to-transparent'
};

const iconBgMap: Record<PillarItem['id'], string> = {
  sleep: 'bg-pillar-schlaf/20 text-pillar-schlaf',
  nutrition: 'bg-pillar-ernaehrung/20 text-pillar-ernaehrung',
  activity: 'bg-pillar-bewegung/20 text-pillar-bewegung',
  mindfulness: 'bg-pillar-achtsamkeit/20 text-pillar-achtsamkeit'
};

const iconMap: Record<PillarItem['id'], JSX.Element> = {
  sleep: <MoonIcon className="h-6 w-6" />,
  nutrition: <SparklesIcon className="h-6 w-6" />,
  activity: <BoltIcon className="h-6 w-6" />,
  mindfulness: <HeartIcon className="h-6 w-6" />
};

export function PillarsGrid({
  title,
  description,
  items
}: {
  title: string;
  description: string;
  items: PillarItem[];
}) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="absolute inset-x-10 top-0 h-full rounded-3xl bg-white/70 blur-3xl" aria-hidden />
      <div className="relative mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-brand-text">
            {title}
          </h2>
          <p className="mt-4 text-base text-brand-muted">{description}</p>
        </div>
      </div>
      <div className="relative grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="group relative overflow-hidden rounded-3xl border border-white/50 bg-brand-surface/90 p-8 shadow-soft backdrop-blur"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradientMap[item.id]} opacity-0 transition group-hover:opacity-100`}
              aria-hidden
            />
            <div className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBgMap[item.id]}`}
                >
                  {iconMap[item.id]}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-text">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-muted">{item.description}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-brand-text/80">
                {item.focusPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

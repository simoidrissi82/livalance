type PillarItem = {
  id: 'sleep' | 'nutrition' | 'activity' | 'mindfulness';
  title: string;
  description: string;
  focusPoints: string[];
};

const colorMap: Record<PillarItem['id'], string> = {
  sleep: 'from-pillar-sleep/20 via-pillar-sleep/5 to-transparent',
  nutrition: 'from-pillar-nutrition/20 via-pillar-nutrition/5 to-transparent',
  activity: 'from-pillar-activity/20 via-pillar-activity/5 to-transparent',
  mindfulness: 'from-pillar-mindfulness/20 via-pillar-mindfulness/5 to-transparent'
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
              className={`absolute inset-0 bg-gradient-to-br ${colorMap[item.id]} opacity-0 transition group-hover:opacity-100`}
              aria-hidden
            />
            <div className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary-tint text-brand-primary">
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
import {BoltIcon, HeartIcon, MoonIcon, SparklesIcon} from '@heroicons/react/24/outline';


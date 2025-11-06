type PillarItem = {
  id: 'sleep' | 'nutrition' | 'activity' | 'mindfulness';
  title: string;
  description: string;
};

const colorMap: Record<PillarItem['id'], string> = {
  sleep: 'bg-pillar-sleep/10 text-pillar-sleep',
  nutrition: 'bg-pillar-nutrition/10 text-pillar-nutrition',
  activity: 'bg-pillar-activity/10 text-pillar-activity',
  mindfulness: 'bg-pillar-mindfulness/10 text-pillar-mindfulness'
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
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-brand-text">
            {title}
          </h2>
          <p className="mt-4 text-base text-brand-muted">{description}</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-slate-200 bg-brand-surface p-6 shadow-soft"
          >
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colorMap[item.id]}`}
            >
              {item.title}
            </span>
            <p className="mt-4 text-sm text-brand-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

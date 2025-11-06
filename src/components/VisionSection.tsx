export function VisionSection({
  title,
  visionLabel,
  missionLabel,
  outcomeLabel,
  vision,
  mission,
  outcome,
  valuesTitle,
  values
}: {
  title: string;
  visionLabel: string;
  missionLabel: string;
  outcomeLabel: string;
  vision: string;
  mission: string;
  outcome: string;
  valuesTitle: string;
  values: string[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center font-display text-3xl font-semibold text-brand-text">
        {title}
      </h2>
      <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-6 sm:grid-cols-3">
          <article className="rounded-3xl border border-white/60 bg-white/80 p-6 text-left shadow-soft backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
              {visionLabel}
            </h3>
            <p className="mt-3 text-sm text-brand-text/80">{vision}</p>
          </article>
          <article className="rounded-3xl border border-white/60 bg-white/80 p-6 text-left shadow-soft backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
              {missionLabel}
            </h3>
            <p className="mt-3 text-sm text-brand-text/80">{mission}</p>
          </article>
          <article className="rounded-3xl border border-white/60 bg-white/80 p-6 text-left shadow-soft backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
              {outcomeLabel}
            </h3>
            <p className="mt-3 text-sm text-brand-text/80">{outcome}</p>
          </article>
        </div>

        <aside className="rounded-3xl border border-brand-primary/20 bg-brand-primary-tint/40 p-8 shadow-soft">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
            {valuesTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-text/80">
            {values.map((value) => (
              <li key={value} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-primary" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

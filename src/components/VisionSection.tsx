export function VisionSection({
  title,
  visionLabel,
  missionLabel,
  outcomeLabel,
  vision,
  mission,
  outcome
}: {
  title: string;
  visionLabel: string;
  missionLabel: string;
  outcomeLabel: string;
  vision: string;
  mission: string;
  outcome: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center font-display text-3xl font-semibold text-brand-text">
        {title}
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-brand-surface p-6 shadow-soft">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
            {visionLabel}
          </h3>
          <p className="mt-3 text-sm text-brand-muted">{vision}</p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-brand-surface p-6 shadow-soft">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
            {missionLabel}
          </h3>
          <p className="mt-3 text-sm text-brand-muted">{mission}</p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-brand-surface p-6 shadow-soft">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
            {outcomeLabel}
          </h3>
          <p className="mt-3 text-sm text-brand-muted">{outcome}</p>
        </article>
      </div>
    </section>
  );
}

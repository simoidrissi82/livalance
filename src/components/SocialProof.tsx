type SocialProofProps = {
  title: string;
  description: string;
  items: string[];
  metrics: Array<{value: string; label: string}>;
};

export function SocialProof({title, description, items, metrics}: SocialProofProps) {
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-brand-primary/10 via-transparent to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-display text-xl font-semibold text-brand-text">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-muted">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.2em] text-brand-muted">
          {items.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 px-5 py-2">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-brand-primary/15 bg-white/80 p-6 text-center shadow-soft backdrop-blur"
            >
              <p className="font-display text-3xl font-semibold text-brand-text">{metric.value}</p>
              <p className="mt-2 text-sm text-brand-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

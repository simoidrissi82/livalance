import {CheckCircleIcon} from '@heroicons/react/24/solid';

type SocialProofProps = {
  title: string;
  description?: string;
  items?: string[];
  metrics: Array<{value: string; label: string}>;
};

export function SocialProof({title, description, items = [], metrics}: SocialProofProps) {
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div className="from-brand-primary/5 to-brand-accent/10 absolute inset-0 bg-gradient-to-br via-transparent" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-white/60 bg-white/85 p-10 shadow-soft backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-muted">
              {title}
            </p>
            {description ? (
              <p className="text-brand-text/80 mt-4 text-base">{description}</p>
            ) : null}
            {items.length ? (
              <ul className="mt-8 space-y-4">
                {items.map((item) => (
                  <li key={item} className="text-brand-text/80 flex gap-3 text-sm">
                    <CheckCircleIcon className="mt-0.5 size-5 text-brand-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>

          <div className="grid gap-6 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-brand-primary/15 bg-brand-surface/95 rounded-3xl border p-6 shadow-soft"
              >
                <p className="font-display text-4xl font-semibold text-brand-text">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm text-brand-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

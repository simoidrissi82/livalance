import {CTAButton} from './CTAButton';

type WorkshopHighlightProps = {
  badge: string;
  title: string;
  description: string;
  agenda: string[];
  ctaLabel: string;
  ctaHref?: string;
  ctaSupporting?: string;
  outcomesTitle?: string;
  outcomes?: string[];
  disclaimer: string;
};

export function WorkshopHighlight({
  badge,
  title,
  description,
  agenda,
  ctaLabel,
  ctaHref = '/workshops',
  ctaSupporting,
  outcomesTitle,
  outcomes,
  disclaimer
}: WorkshopHighlightProps) {
  const hasOutcomes = Boolean(outcomes?.length);

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <div className="from-brand-primary/15 to-brand-accent/20 absolute inset-0 bg-gradient-to-br via-transparent" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
              {badge}
            </span>
            <h2 className="font-display text-3xl font-semibold text-brand-text">{title}</h2>
            <p className="text-base text-brand-muted">{description}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href={ctaHref}>{ctaLabel}</CTAButton>
              {ctaSupporting ? (
                <p className="text-brand-text/80 text-sm">{ctaSupporting}</p>
              ) : null}
            </div>
          </div>

          <div className={`grid gap-6 ${hasOutcomes ? 'sm:grid-cols-2' : ''}`}>
            <article className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">Agenda</h3>
              <ul className="text-brand-text/80 mt-4 space-y-3 text-sm">
                {agenda.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 flex-none rounded-full bg-brand-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {hasOutcomes ? (
              <article className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
                  {outcomesTitle}
                </h3>
                <ul className="text-brand-text/80 mt-4 space-y-3 text-sm">
                  {outcomes?.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1.5 flex-none rounded-full bg-brand-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ) : null}
          </div>
        </div>

        <p className="text-brand-text/60 mt-10 text-xs">{disclaimer}</p>
      </div>
    </section>
  );
}

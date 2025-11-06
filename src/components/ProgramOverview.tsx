import {CTAButton} from './CTAButton';

type ProgramOverviewProps = {
  title: string;
  description: string;
  supporting?: string;
  bundles: Array<{name: string; description: string; duration: string; deliverables: string[]}>;
  note?: string;
  ctaLabel: string;
  ctaHref?: string;
};

export function ProgramOverview({
  title,
  description,
  supporting,
  bundles,
  note,
  ctaLabel,
  ctaHref = '/contact'
}: ProgramOverviewProps) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary-tint via-white to-brand-accent/10" aria-hidden />
      <div className="relative rounded-[2.5rem] border border-white/60 bg-white/80 p-10 shadow-soft backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-display text-3xl font-semibold text-brand-text">{title}</h2>
            <p className="text-base text-brand-muted">{description}</p>
            {supporting ? <p className="text-sm text-brand-text/80">{supporting}</p> : null}
          </div>
          <CTAButton href={ctaHref} variant="secondary">
            {ctaLabel}
          </CTAButton>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {bundles.map((bundle) => (
            <article
              key={bundle.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-brand-primary/15 bg-white/90 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-primary/40"
            >
              <div className="space-y-4">
                <span className="inline-flex rounded-full bg-brand-primary-tint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  {bundle.duration}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-text">
                    {bundle.name}
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted">{bundle.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-brand-text/80">
                  {bundle.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-primary" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <CTAButton href={ctaHref} variant="ghost">
                {ctaLabel}
              </CTAButton>
            </article>
          ))}
        </div>

        {note ? <p className="mt-8 text-sm text-brand-muted">{note}</p> : null}
      </div>
    </section>
  );
}

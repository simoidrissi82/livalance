import {CTAButton} from './CTAButton';

type ProgramOverviewProps = {
  title: string;
  description: string;
  bundles: Array<{name: string; description: string}>;
  ctaLabel: string;
  ctaHref?: string;
};

export function ProgramOverview({
  title,
  description,
  bundles,
  ctaLabel,
  ctaHref = '/contact'
}: ProgramOverviewProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-brand-text">{title}</h2>
          <p className="mt-4 text-base text-brand-muted">{description}</p>
        </div>
        <CTAButton href={ctaHref} variant="secondary">
          {ctaLabel}
        </CTAButton>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {bundles.map((bundle) => (
          <article
            key={bundle.name}
            className="flex h-full flex-col rounded-3xl border border-slate-200 bg-brand-surface p-6 shadow-soft"
          >
            <h3 className="font-display text-xl font-semibold text-brand-text">
              {bundle.name}
            </h3>
            <p className="mt-4 text-sm text-brand-muted">{bundle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

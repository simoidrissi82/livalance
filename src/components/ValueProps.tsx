import {CTAButton} from './CTAButton';

type ValueItem = {
  title: string;
  body: string;
};

type ValuePropsSectionProps = {
  title: string;
  items: ValueItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function ValuePropsSection({title, items, ctaLabel, ctaHref}: ValuePropsSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-brand-text">{title}</h2>
        </div>
        {ctaLabel && ctaHref ? (
          <CTAButton href={ctaHref} variant="secondary">
            {ctaLabel}
          </CTAButton>
        ) : null}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-brand-surface p-6 shadow-soft"
          >
            <h3 className="font-display text-xl font-semibold text-brand-text">
              {item.title}
            </h3>
            <p className="mt-4 text-sm text-brand-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

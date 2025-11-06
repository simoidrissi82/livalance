import {CTAButton} from './CTAButton';

type WorkshopHighlightProps = {
  badge: string;
  title: string;
  description: string;
  agenda: string[];
  ctaLabel: string;
  disclaimer: string;
};

export function WorkshopHighlight({
  badge,
  title,
  description,
  agenda,
  ctaLabel,
  disclaimer
}: WorkshopHighlightProps) {
  return (
    <section className="bg-brand-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <span className="inline-flex rounded-full bg-brand-primary-tint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
          {badge}
        </span>
        <div className="mt-6 grid gap-10 md:grid-cols-[3fr_2fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-brand-text">
              {title}
            </h2>
            <p className="mt-4 text-base text-brand-muted">{description}</p>
            <div className="mt-6">
              <CTAButton href="/workshops">{ctaLabel}</CTAButton>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-brand-bg p-6 shadow-soft">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
              Agenda
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-text">
              {agenda.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-brand-muted">{disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

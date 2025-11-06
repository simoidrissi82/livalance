import {CTAButton} from './CTAButton';

type HeroProps = {
  title: string;
  subtitle: string;
  announcement: string;
  trustSignal: string;
  metrics: Array<{value: string; label: string}>;
  highlights: Array<{title: string; description: string}>;
  primaryCta: {label: string; href: string};
  secondaryCta: {label: string; href: string};
};

export function Hero({
  title,
  subtitle,
  announcement,
  trustSignal,
  metrics,
  highlights,
  primaryCta,
  secondaryCta
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" aria-hidden />
      <div className="absolute bottom-[-6rem] right-[-8rem] h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-6 text-left">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-primary/20 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary shadow-soft backdrop-blur">
              {announcement}
            </span>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-snug text-brand-text md:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base text-brand-muted md:text-lg">
              {subtitle}
            </p>
            <p className="max-w-xl text-sm font-medium text-brand-text/80">
              {trustSignal}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </CTAButton>
              <CTAButton href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </CTAButton>
            </div>

            <dl className="mt-4 grid gap-6 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-white/70 p-4 shadow-soft backdrop-blur"
                >
                  <dt className="text-xs uppercase tracking-wide text-brand-muted">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-brand-text">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="group relative overflow-hidden rounded-3xl border border-brand-primary/10 bg-white/80 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-brand-primary/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-accent/10 opacity-0 transition group-hover:opacity-100" aria-hidden />
                <div className="relative">
                  <h3 className="font-display text-xl font-semibold text-brand-text">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted">
                    {highlight.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

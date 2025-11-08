import {CTAButton} from './CTAButton';

type HeroProps = {
  title: string;
  subtitleSuffix: string;
  inlinePillars?: string[];
  primaryCta: {label: string; href: string};
  secondaryCta: {label: string; href: string};
};

const pillarColorClasses = [
  'text-pillar-ernaehrung',
  'text-pillar-schlaf',
  'text-pillar-bewegung',
  'text-pillar-achtsamkeit'
];

export function Hero({
  title,
  subtitleSuffix,
  inlinePillars = [],
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
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-snug text-brand-text md:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base text-brand-muted md:text-lg">
              {inlinePillars.length ? (
                <>
                  {inlinePillars.map((pillar, index) => (
                    <span key={pillar} className="mr-2">
                      <span
                        className={`font-semibold ${
                          pillarColorClasses[index] ?? 'text-brand-primary'
                        }`}
                      >
                        {pillar}
                      </span>
                      .
                    </span>
                  ))}
                  <span>{subtitleSuffix}</span>
                </>
              ) : (
                subtitleSuffix
              )}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </CTAButton>
              <CTAButton href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import {CTAButton} from './CTAButton';

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: {label: string; href: string};
  secondaryCta: {label: string; href: string};
};

export function Hero({title, subtitle, primaryCta, secondaryCta}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-28 text-left">
        <span className="inline-flex w-fit rounded-full border border-brand-primary-tint bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
          Livalance
        </span>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-snug text-brand-text md:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base text-brand-muted md:text-lg">
          {subtitle}
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
    </section>
  );
}

import {CTAButton} from './CTAButton';

type FinalCTAProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  tagline?: string;
};

export function FinalCTA({title, subtitle, ctaLabel, tagline}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-primary-tint to-brand-accent/30" aria-hidden />
      <div className="relative mx-auto max-w-4xl rounded-[2.5rem] border border-white/60 bg-white/85 p-12 text-center shadow-soft backdrop-blur">
        <h2 className="font-display text-3xl font-semibold text-brand-text">
          {title}
        </h2>
        <p className="mt-4 text-base text-brand-muted">{subtitle}</p>
        <div className="mt-8 flex justify-center">
          <CTAButton href="/contact" variant="primary">
            {ctaLabel}
          </CTAButton>
        </div>
        {tagline ? (
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-brand-primary">
            {tagline}
          </p>
        ) : null}
      </div>
    </section>
  );
}

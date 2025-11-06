import {CTAButton} from './CTAButton';

type FinalCTAProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
};

export function FinalCTA({title, subtitle, ctaLabel}: FinalCTAProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h2 className="font-display text-3xl font-semibold text-brand-text">
        {title}
      </h2>
      <p className="mt-4 text-base text-brand-muted">{subtitle}</p>
      <div className="mt-6 flex justify-center">
        <CTAButton href="/contact">{ctaLabel}</CTAButton>
      </div>
    </section>
  );
}

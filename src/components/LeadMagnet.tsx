import {CTAButton} from './CTAButton';

type LeadMagnetProps = {
  title: string;
  description: string;
  ctaLabel: string;
};

export function LeadMagnet({title, description, ctaLabel}: LeadMagnetProps) {
  return (
    <section className="relative overflow-hidden bg-brand-primary-tint">
      <div className="absolute right-[-20%] top-[-30%] h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-brand-text">
            {title}
          </h2>
          <p className="mt-4 text-base text-brand-text/80">{description}</p>
        </div>
        <CTAButton href="/contact" variant="primary">
          {ctaLabel}
        </CTAButton>
      </div>
    </section>
  );
}

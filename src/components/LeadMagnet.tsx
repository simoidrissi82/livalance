import {CTAButton} from './CTAButton';

type LeadMagnetProps = {
  title: string;
  description: string;
  benefits: string[];
  note: string;
  privacy: string;
  ctaLabel: string;
};

export function LeadMagnet({title, description, benefits, note, privacy, ctaLabel}: LeadMagnetProps) {
  return (
    <section className="relative overflow-hidden bg-brand-primary-tint">
      <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-brand-primary/30 blur-3xl" aria-hidden />
      <div className="absolute right-[-20%] top-[-30%] h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 rounded-[2rem] border border-white/40 bg-white/80 p-10 shadow-soft backdrop-blur md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-brand-text">
              {title}
            </h2>
            <p className="mt-4 text-base text-brand-text/80">{description}</p>
            <ul className="mt-6 space-y-3 text-sm text-brand-text/80">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-brand-primary/10 p-8 text-brand-text">
            <p className="text-sm text-brand-text/80">{note}</p>
            <CTAButton href="/contact" variant="primary">
              {ctaLabel}
            </CTAButton>
            <p className="text-xs text-brand-text/60">{privacy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

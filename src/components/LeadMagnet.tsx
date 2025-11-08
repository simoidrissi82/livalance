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
    <section className="bg-brand-primary-tint relative overflow-hidden">
      <div className="bg-brand-primary/30 absolute -left-20 top-10 size-48 rounded-full blur-3xl" aria-hidden />
      <div className="bg-brand-accent/20 absolute right-[-20%] top-[-30%] size-64 rounded-full blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 rounded-3xl border border-white/40 bg-white/80 p-10 shadow-soft backdrop-blur md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-brand-text">
              {title}
            </h2>
            <p className="text-brand-text/80 mt-4 text-base">{description}</p>
            <ul className="text-brand-text/80 mt-6 space-y-3 text-sm">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="mt-2 size-1.5 flex-none rounded-full bg-brand-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-primary/10 flex flex-col justify-between gap-6 rounded-2xl p-8 text-brand-text">
            <p className="text-brand-text/80 text-sm">{note}</p>
            <CTAButton href="/contact" variant="primary">
              {ctaLabel}
            </CTAButton>
            <p className="text-brand-text/60 text-xs">{privacy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

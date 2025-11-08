import {CTAButton} from './CTAButton';

type CgmKickstartProps = {
  title: string;
  bullets: string[];
  disclaimer: string;
  ctaLabel: string;
};

export function CgmKickstart({title, bullets, disclaimer, ctaLabel}: CgmKickstartProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-3xl border border-slate-200 bg-brand-surface p-8 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-brand-text">{title}</h2>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <CTAButton href="/assessment" width="full">
            {ctaLabel}
          </CTAButton>
        </div>
        <p className="mt-6 text-xs text-brand-muted">{disclaimer}</p>
      </div>
    </section>
  );
}

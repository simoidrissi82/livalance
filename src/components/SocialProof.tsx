type SocialProofProps = {
  title: string;
  items: string[];
};

export function SocialProof({title, items}: SocialProofProps) {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center font-display text-xl font-semibold text-brand-text">
          {title}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.2em] text-brand-muted">
          {items.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 px-5 py-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

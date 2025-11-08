export function ValuesSection({title, items}: {title: string; items: string[]}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center font-display text-3xl font-semibold text-brand-text">
        {title}
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item}
            className="rounded-3xl border border-slate-200 bg-brand-surface p-6 shadow-soft"
          >
            <p className="text-sm text-brand-muted">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

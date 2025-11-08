export function ToolkitSection({title, bullets}: {title: string; bullets: string[]}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-display text-3xl font-semibold text-brand-text">{title}</h2>
      <ul className="mt-6 space-y-3 text-sm text-brand-muted">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-accent" aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

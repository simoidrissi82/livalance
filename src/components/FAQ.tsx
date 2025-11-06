type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({title, items}: {title: string; items: FAQItem[]}) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-center font-display text-3xl font-semibold text-brand-text">
        {title}
      </h2>
      <div className="mt-10 space-y-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="rounded-3xl border border-slate-200 bg-brand-surface p-6 shadow-soft"
          >
            <summary className="cursor-pointer text-lg font-medium text-brand-text">
              {item.question}
            </summary>
            <p className="mt-3 text-sm text-brand-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

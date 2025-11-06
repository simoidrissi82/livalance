type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({title, items}: {title: string; items: FAQItem[]}) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-center font-display text-3xl font-semibold text-brand-text">
        {title}
      </h2>
      <div className="mt-12 space-y-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur"
          >
            <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-medium text-brand-text">
              <span>{item.question}</span>
              <span className="ml-4 text-brand-primary transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-brand-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

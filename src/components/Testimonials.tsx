type TestimonialItem = {
  quote: string;
  author: string;
  rating?: number;
};

export function Testimonials({title, items}: {title: string; items: TestimonialItem[]}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center font-display text-3xl font-semibold text-brand-text">
        {title}
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <TestimonialCard key={item.author} item={item} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({item}: {item: TestimonialItem}) {
  const rating = typeof item.rating === 'number' ? item.rating : null;

  return (
    <figure className="flex h-full flex-col rounded-3xl border border-brand-primary/10 bg-white/90 p-6 shadow-soft backdrop-blur">
      {rating ? (
        <div className="mb-4 flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-muted">
            Bewertung
          </span>
          <div className="flex items-center gap-2" aria-label={`Bewertet mit ${rating} von 5 Sternen`}>
            <div className="flex items-center gap-1">
              {Array.from({length: 5}).map((_, index) => (
                <svg
                  key={index}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={`h-4 w-4 ${
                    rating && index < rating ? 'text-brand-primary' : 'text-brand-muted/40'
                  }`}
                  role="img"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.5l2.9 5.88 6.5.94-4.7 4.58 1.1 6.42L12 17.98 6.2 20.32l1.1-6.42-4.7-4.58 6.5-.94z"
                  />
                </svg>
              ))}
            </div>
            <span className="text-xs font-semibold text-brand-text/70">{rating.toFixed(1)} / 5</span>
          </div>
        </div>
      ) : null}

      <blockquote className="text-sm text-brand-text/80">“{item.quote}”</blockquote>
      <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-muted">
        {item.author}
      </figcaption>
    </figure>
  );
}

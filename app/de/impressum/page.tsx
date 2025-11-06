export const metadata = {
  title: 'Impressum | Livalance',
  description: 'Gesetzliche Anbieterkennzeichnung für Livalance.'
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-brand-text">
        Impressum
      </h1>
      <p className="mt-4 text-sm text-brand-muted">
        Livalance GmbH · Musterstraße 12 · 8000 München · Deutschland
      </p>
      <p className="mt-2 text-sm text-brand-muted">
        E-Mail: hello@livalance.com · Telefon: +49 89 000000
      </p>
      <p className="mt-4 text-xs text-brand-muted">
        Verantwortlich gemäß § 55 Abs. 2 RStV: Livalance Geschäftsführung.
      </p>
    </div>
  );
}

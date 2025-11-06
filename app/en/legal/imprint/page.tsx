export const metadata = {
  title: 'Imprint | Livalance',
  description: 'Legal disclosure for Livalance.'
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-brand-text">
        Imprint
      </h1>
      <p className="mt-4 text-sm text-brand-muted">
        Livalance GmbH · Example Street 12 · 8000 Munich · Germany
      </p>
      <p className="mt-2 text-sm text-brand-muted">
        Email: hello@livalance.com · Phone: +49 89 000000
      </p>
      <p className="mt-4 text-xs text-brand-muted">
        Responsible for content: Livalance Management.
      </p>
    </div>
  );
}

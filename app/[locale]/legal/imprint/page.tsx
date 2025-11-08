export default function Page({params}: {params: {locale: 'de' | 'en'}}) {
  if (params.locale === 'de') {
    return (
      <div className="mx-auto max-w-3xl space-y-4 px-6 py-16 text-sm text-brand-muted">
        <h1 className="font-display text-3xl font-semibold text-brand-text">Impressum</h1>
        <p>Livalance GmbH · Musterstraße 12 · 8000 München · Deutschland</p>
        <p>E-Mail: hello@livalance.com · Telefon: +49 89 000000</p>
        <p>Verantwortlich gemäß § 55 Abs. 2 RStV: Geschäftsführung Livalance.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-4 px-6 py-16 text-sm text-brand-muted">
      <h1 className="font-display text-3xl font-semibold text-brand-text">Imprint</h1>
      <p>Livalance GmbH · Example Street 12 · 8000 Munich · Germany</p>
      <p>Email: hello@livalance.com · Phone: +49 89 000000</p>
      <p>Responsible for content: Livalance Management.</p>
    </div>
  );
}

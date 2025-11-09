export default async function Page({params}: {params: Promise<{locale: 'de' | 'en'}>}) {
  const {locale} = await params;
  if (locale === 'de') {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 space-y-4 text-sm text-brand-muted">
        <h1 className="font-display text-3xl font-semibold text-brand-text">Widerruf</h1>
        <p>
          Verbraucher:innen haben das Recht, binnen 14 Tagen ohne Angabe von Gründen einen Vertrag zu widerrufen. Die
          Frist beginnt mit Vertragsabschluss.
        </p>
        <p>
          Zur Ausübung des Widerrufsrechts reicht eine formlose E-Mail an hello@livalance.com. Bereits erbrachte
          Leistungen werden anteilig berechnet.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 space-y-4 text-sm text-brand-muted">
      <h1 className="font-display text-3xl font-semibold text-brand-text">Cancellation Policy</h1>
      <p>
        Consumers may cancel within 14 days without stating a reason. The period starts on the day the agreement is
        concluded.
      </p>
      <p>Send a simple email to hello@livalance.com to cancel. Services already delivered will be invoiced proportionally.</p>
    </div>
  );
}

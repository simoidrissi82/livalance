export default async function Page({params}: {params: Promise<{locale: 'de' | 'en'}>}) {
  const {locale} = await params;
  if (locale === 'de') {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 space-y-4 text-sm text-brand-muted">
        <h1 className="font-display text-3xl font-semibold text-brand-text">AGB</h1>
        <p>
          Unsere Allgemeinen Geschäftsbedingungen regeln Leistungsumfang, Zahlungsmodalitäten und Haftung. Projekte
          starten nach schriftlicher Bestätigung und Anzahlung. Termine können bis 72 Stunden vor Beginn kostenlos
          verschoben werden.
        </p>
        <p>Für Unternehmen gelten individuelle Rahmenvereinbarungen. Es gilt deutsches Recht.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 space-y-4 text-sm text-brand-muted">
      <h1 className="font-display text-3xl font-semibold text-brand-text">Terms & Conditions</h1>
      <p>
        Our general terms cover scope, payment, and liability. Projects begin once confirmed in writing alongside the
        initial deposit. Sessions can be rescheduled up to 72 hours in advance.
      </p>
      <p>Custom agreements apply for company programmes. German law governs all contracts.</p>
    </div>
  );
}

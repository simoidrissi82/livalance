export const metadata = {
  title: 'AGB | Livalance',
  description: 'Allgemeine Geschäftsbedingungen für Programme und Workshops von Livalance.'
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-brand-text">AGB</h1>
      <p className="mt-4 text-sm text-brand-muted">
        Unsere Allgemeinen Geschäftsbedingungen regeln Leistungsumfang, Zahlungsmodalitäten
        und Haftung. Projekte starten nach schriftlicher Bestätigung und Anzahlung. Termine
        können bis 72 Stunden vor Beginn kostenlos verschoben werden.
      </p>
      <p className="mt-4 text-sm text-brand-muted">
        Für Unternehmen gelten individuelle Rahmenvereinbarungen. Es gilt deutsches Recht.
      </p>
    </div>
  );
}

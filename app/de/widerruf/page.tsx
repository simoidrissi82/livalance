export const metadata = {
  title: 'Widerruf | Livalance',
  description: 'Informationen zum Widerrufsrecht für Verbraucher:innen.'
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-brand-text">
        Widerruf
      </h1>
      <p className="mt-4 text-sm text-brand-muted">
        Verbraucher:innen haben das Recht, binnen 14 Tagen ohne Angabe von Gründen einen
        Vertrag zu widerrufen. Die Frist beginnt mit Vertragsabschluss.
      </p>
      <p className="mt-4 text-sm text-brand-muted">
        Zur Ausübung des Widerrufsrechts reicht eine formlose E-Mail an
        hello@livalance.com. Bereits erbrachte Leistungen werden anteilig berechnet.
      </p>
    </div>
  );
}

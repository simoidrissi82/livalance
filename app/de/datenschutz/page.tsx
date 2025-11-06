export const metadata = {
  title: 'Datenschutz | Livalance',
  description: 'Informationen zur Verarbeitung personenbezogener Daten bei Livalance.'
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-brand-text">
        Datenschutz
      </h1>
      <p className="mt-4 text-sm text-brand-muted">
        Wir verarbeiten personenbezogene Daten ausschließlich zur Bereitstellung unserer
        Leistungen, zur Vertragsabwicklung und zur Kommunikation. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. b bzw. f DSGVO.
      </p>
      <p className="mt-4 text-sm text-brand-muted">
        Bei Fragen erreichst du uns unter hello@livalance.com. Wir nutzen Plausible
        Analytics ohne Cookies.
      </p>
    </div>
  );
}

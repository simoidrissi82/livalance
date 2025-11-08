export default function Page({params}: {params: {locale: 'de' | 'en'}}) {
  if (params.locale === 'de') {
    return (
      <div className="mx-auto max-w-3xl space-y-4 px-6 py-16 text-sm text-brand-muted">
        <h1 className="font-display text-3xl font-semibold text-brand-text">Datenschutz</h1>
        <p>
          Wir verarbeiten personenbezogene Daten ausschließlich zur Bereitstellung unserer Leistungen, zur
          Vertragsabwicklung und zur Kommunikation. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. f DSGVO.
        </p>
        <p>
          Bei Fragen erreichst du uns unter hello@livalance.com. Wir nutzen Plausible Analytics ohne Cookies.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-4 px-6 py-16 text-sm text-brand-muted">
      <h1 className="font-display text-3xl font-semibold text-brand-text">Privacy Policy</h1>
      <p>
        We process personal data to deliver our services, handle contracts, and respond to enquiries in line with
        Art. 6 (1) lit. b/f GDPR.
      </p>
      <p>Contact us via hello@livalance.com. We use Plausible Analytics without cookies.</p>
    </div>
  );
}

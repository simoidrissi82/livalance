export const metadata = {
  title: 'Privacy Policy | Livalance',
  description: 'Details on personal data processing at Livalance.'
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-brand-text">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-brand-muted">
        We process personal data to deliver our services, handle contracts, and respond to
        enquiries in line with Art. 6 (1) lit. b/f GDPR.
      </p>
      <p className="mt-4 text-sm text-brand-muted">
        Contact us via hello@livalance.com. We use Plausible Analytics without cookies.
      </p>
    </div>
  );
}

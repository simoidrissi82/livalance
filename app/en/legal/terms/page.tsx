export const metadata = {
  title: 'Terms & Conditions | Livalance',
  description: 'Terms governing coaching, workshops, and company programmes.'
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-brand-text">
        Terms & Conditions
      </h1>
      <p className="mt-4 text-sm text-brand-muted">
        Our general terms cover scope, payment, and liability. Projects begin once
        confirmed in writing alongside the initial deposit. Sessions can be rescheduled up
        to 72 hours in advance.
      </p>
      <p className="mt-4 text-sm text-brand-muted">
        Custom agreements apply for company programmes. German law governs all contracts.
      </p>
    </div>
  );
}

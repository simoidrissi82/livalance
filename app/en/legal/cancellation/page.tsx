export const metadata = {
  title: 'Cancellation Policy | Livalance',
  description: 'Information about consumer cancellation rights at Livalance.'
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-brand-text">
        Cancellation Policy
      </h1>
      <p className="mt-4 text-sm text-brand-muted">
        Consumers may cancel within 14 days without stating a reason. The period starts on
        the day the agreement is concluded.
      </p>
      <p className="mt-4 text-sm text-brand-muted">
        Send a simple email to hello@livalance.com to cancel. Services already delivered
        will be invoiced proportionally.
      </p>
    </div>
  );
}

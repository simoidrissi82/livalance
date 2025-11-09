export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-20" aria-live="polite" aria-busy="true">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-brand-primary border-t-transparent" role="status" aria-label="Loading">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-4 text-sm text-brand-muted">Loading content...</p>
      </div>
    </div>
  );
}


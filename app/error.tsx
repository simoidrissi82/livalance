'use client';

import {useEffect} from 'react';

import {CTAButton} from '@/components/ui/CTAButton';

export default function Error({
  error,
  reset
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="font-display text-3xl font-semibold text-brand-text">Something went wrong</h1>
        <p className="text-base text-brand-muted">
          We encountered an unexpected error. Please try again or contact us if the problem persists.
        </p>
        {error.digest && (
          <p className="text-xs text-brand-muted">Error ID: {error.digest}</p>
        )}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <CTAButton onClick={reset} variant="primary">
            Try again
          </CTAButton>
          <CTAButton href="/contact" variant="secondary">
            Contact support
          </CTAButton>
        </div>
      </div>
    </div>
  );
}


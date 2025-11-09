"use client";

import {FormEvent, useState} from 'react';
import {useTranslations} from 'next-intl';

import {CTAButton} from '../ui/CTAButton';

export function NewsletterForm() {
  const t = useTranslations('newsletter');
  const cta = useTranslations('cta');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      // TODO: Replace with direct Brevo/Mailerlite API call
      // For static export, call external API directly from browser
      // Example:
      // const response = await fetch('https://api.brevo.com/v3/contacts', {
      //   method: 'POST',
      //   headers: {
      //     'accept': 'application/json',
      //     'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY,
      //     'content-type': 'application/json'
      //   },
      //   body: JSON.stringify({ email, listIds: [2] })
      // });
      
      // Simulated success for now
      await new Promise(resolve => setTimeout(resolve, 1000));

      setEmail('');
      setConsent(false);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form className="mt-3 space-y-3" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-1 text-sm text-brand-muted">
        {t('email')}
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-xl border border-slate-200 bg-brand-bg px-3 py-2 text-brand-text focus:border-brand-primary"
        />
      </label>
      <label className="flex items-start gap-2 text-xs text-brand-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 rounded border-brand-muted text-brand-primary focus:ring-brand-primary"
          required
        />
        <span>{t('consent')}</span>
      </label>
      <CTAButton type="submit" width="full">
        {status === 'loading' ? '…' : cta('joinNewsletter')}
      </CTAButton>
      {status === 'success' ? (
        <p className="text-xs text-emerald-600">{t('success')}</p>
      ) : null}
      {status === 'error' ? (
        <p className="text-xs text-rose-600">{t('error')}</p>
      ) : null}
    </form>
  );
}

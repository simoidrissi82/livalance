import {getLocale, getTranslations} from 'next-intl/server';

import {BookingEmbed} from '@/components/BookingEmbed';
import {CTAButton} from '@/components/CTAButton';

export async function ContactPage() {
  const t = await getTranslations('contact');
  const cta = await getTranslations('cta');
  const locale = await getLocale();
  const channels = [t('channels.0'), t('channels.1'), t('channels.2')];

  return (
    <div className="space-y-16 bg-brand-bg pb-20">
      <section className="relative overflow-hidden bg-brand-primary-tint/40">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-transparent to-brand-accent/30" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <div className="rounded-[2.5rem] border border-white/60 bg-white/80 p-12 shadow-soft backdrop-blur">
            <h1 className="font-display text-4xl font-semibold text-brand-text">{t('title')}</h1>
            <p className="mt-4 text-lg text-brand-text/80">{t('intro')}</p>
            <p className="mt-2 text-sm text-brand-text/70">{t('supporting')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="mailto:hello@livalance.com">{cta('submit')}</CTAButton>
              <CTAButton href="#booking" variant="secondary">
                {t('booking')}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur">
          <form className="space-y-4">
            <label className="flex flex-col text-sm text-brand-text">
              {t('email')}
              <input
                type="email"
                className="mt-1 rounded-2xl border border-white/60 bg-white/90 px-3 py-2 text-sm text-brand-text shadow-soft focus:border-brand-primary"
                required
              />
            </label>
            <label className="flex flex-col text-sm text-brand-text">
              {t('message')}
              <textarea
                className="mt-1 min-h-[180px] rounded-2xl border border-white/60 bg-white/90 px-3 py-2 text-sm text-brand-text shadow-soft focus:border-brand-primary"
                required
              />
            </label>
            <CTAButton type="submit">{cta('submit')}</CTAButton>
          </form>
        </div>
        <aside className="flex flex-col justify-between rounded-3xl border border-brand-primary/20 bg-brand-primary-tint/50 p-8 shadow-soft">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-primary">Connections</h2>
            <ul className="mt-4 space-y-3 text-sm text-brand-text/80">
              {channels.map((channel) => (
                <li key={channel}>{channel}</li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-brand-text/70">{t('response')}</p>
        </aside>
      </section>

      <section id="booking" className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur">
          <BookingEmbed locale={locale} />
        </div>
      </section>
    </div>
  );
}

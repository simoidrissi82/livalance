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
      <section className="bg-brand-primary-tint/40 relative overflow-hidden">
        <div className="from-brand-primary/30 to-brand-accent/30 absolute inset-0 bg-gradient-to-br via-transparent" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <div className="rounded-[2.5rem] border border-white/60 bg-white/80 p-12 shadow-soft backdrop-blur">
            <h1 className="font-display text-4xl font-semibold text-brand-text">{t('title')}</h1>
            <p className="text-brand-text/80 mt-4 text-lg">{t('intro')}</p>
            <p className="text-brand-text/70 mt-2 text-sm">{t('supporting')}</p>
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
        <aside className="border-brand-primary/20 bg-brand-primary-tint/50 flex flex-col justify-between rounded-3xl border p-8 shadow-soft">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-primary">Connections</h2>
            <ul className="text-brand-text/80 mt-4 space-y-3 text-sm">
              {channels.map((channel) => (
                <li key={channel}>{channel}</li>
              ))}
            </ul>
          </div>
          <p className="text-brand-text/70 text-xs">{t('response')}</p>
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

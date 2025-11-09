'use client';

import {useLocale, useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

import {BookingEmbed} from '@/components/booking/BookingEmbed';
import {CTAButton} from '@/components/ui/CTAButton';
import {ProgramOverview} from '@/components/content/ProgramOverview';
import {WorkshopHighlight} from '@/components/content/WorkshopHighlight';

export function WorkshopsPage() {
  const t = useTranslations('workshopsPage');
  const offers = useTranslations('offersTeaser');
  const cta = useTranslations('cta');
  const booking = useTranslations('booking');
  const locale = useLocale();

  const workshopDeliverables = offers.raw('bundles.0.deliverables') as string[];

  return (
    <div className="space-y-16 bg-brand-bg pb-20">
      <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-primary-tint/40 via-brand-surface/20 to-brand-accent-tint/30">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/15" aria-hidden />
        
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-20 right-20 h-96 w-96 rounded-full bg-brand-primary/15 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-brand-accent/15 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <motion.div
            className="max-w-3xl space-y-4 sm:space-y-6"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
          >
            <motion.span
              className="inline-flex rounded-full bg-white/70 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-brand-primary shadow-soft"
              initial={{scale: 0.8, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{duration: 0.4, delay: 0.2}}
            >
              {t('heroTagline')}
            </motion.span>
            
            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.3}}
            >
              {t('heroTitle')}
            </motion.h1>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-text/80 leading-relaxed"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.4}}
            >
              {t('heroSubtitle')}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.5}}
            >
              <CTAButton href="/contact" showIcon>{cta('bookIntro')}</CTAButton>
              <CTAButton href="#booking" variant="secondary">
                {cta('viewWorkshops')}
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <WorkshopHighlight
        badge={offers('bundles.0.duration')}
        title={offers('bundles.0.name')}
        description={offers('bundles.0.description')}
        agenda={workshopDeliverables}
        ctaLabel={cta('bookIntro')}
        ctaHref="/contact"
        disclaimer={offers('supporting')}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-surface via-white to-brand-surface py-12 sm:py-16 md:py-20">
        <div className="absolute top-0 right-0 h-64 w-64 bg-brand-accent/5 rounded-full blur-3xl" aria-hidden />
        
        <div className="relative mx-auto grid max-w-6xl gap-6 sm:gap-8 px-4 sm:px-6 md:grid-cols-2">
          <motion.div
            className="group rounded-3xl border-2 border-white/60 bg-white/95 p-6 sm:p-8 md:p-10 shadow-soft backdrop-blur transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.02}}
          >
            <h2 className="text-sm sm:text-base font-bold uppercase tracking-wide text-brand-primary mb-3 sm:mb-4">
              {t('flowTitle')}
            </h2>
            <p className="text-sm sm:text-base text-brand-text/80 leading-relaxed">{t('flowDescription')}</p>
            <ol className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-sm sm:text-base text-brand-text">
              {[0, 1, 2].map((index) => (
                <motion.li
                  key={index}
                  className="flex gap-3"
                  initial={{opacity: 0, x: -10}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{delay: index * 0.1}}
                >
                  <span className="flex-none font-bold text-brand-primary">{index + 1}.</span>
                  <span>{t(`flowSteps.${index}`)}</span>
                </motion.li>
              ))}
            </ol>
          </motion.div>
          
          <motion.div
            className="group rounded-3xl border-2 border-white/60 bg-white/95 p-6 sm:p-8 md:p-10 shadow-soft backdrop-blur transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6, delay: 0.2}}
            whileHover={{scale: 1.02}}
          >
            <h2 className="text-sm sm:text-base font-bold uppercase tracking-wide text-brand-accent mb-3 sm:mb-4">
              {t('formatsTitle')}
            </h2>
            <p className="text-sm sm:text-base text-brand-text/80 leading-relaxed">{t('formatsDescription')}</p>
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-sm sm:text-base text-brand-text">
              {[0, 1, 2].map((index) => (
                <motion.li
                  key={index}
                  className="flex gap-3"
                  initial={{opacity: 0, x: -10}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{delay: index * 0.1 + 0.2}}
                >
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-accent" />
                  <span>{t(`formats.${index}`)}</span>
                </motion.li>
              ))}
            </ul>
            <motion.p
              className="mt-6 sm:mt-8 text-xs sm:text-sm text-brand-muted italic"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.5}}
            >
              {t('pricingNote')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <ProgramOverview
        title={offers('title')}
        description={offers('description')}
        supporting={offers('supporting')}
        bundles={[
          {
            name: offers('bundles.0.name'),
            description: offers('bundles.0.description'),
            duration: offers('bundles.0.duration'),
            deliverables: [
              offers('bundles.0.deliverables.0'),
              offers('bundles.0.deliverables.1'),
              offers('bundles.0.deliverables.2')
            ]
          },
          {
            name: offers('bundles.1.name'),
            description: offers('bundles.1.description'),
            duration: offers('bundles.1.duration'),
            deliverables: [
              offers('bundles.1.deliverables.0'),
              offers('bundles.1.deliverables.1'),
              offers('bundles.1.deliverables.2')
            ]
          },
          {
            name: offers('bundles.2.name'),
            description: offers('bundles.2.description'),
            duration: offers('bundles.2.duration'),
            deliverables: [
              offers('bundles.2.deliverables.0'),
              offers('bundles.2.deliverables.1'),
              offers('bundles.2.deliverables.2')
            ]
          }
        ]}
        note={offers('note')}
        ctaLabel={offers('cta')}
        ctaHref="/contact"
      />

      <section id="booking" className="relative overflow-hidden bg-gradient-to-br from-brand-bg via-brand-surface to-brand-bg py-20">
        <motion.div
          className="absolute top-10 left-10 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            className="rounded-3xl border-2 border-white/60 bg-white/95 p-12 shadow-medium backdrop-blur"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
          >
            <motion.h2
              className="text-base font-bold uppercase tracking-wide text-brand-primary mb-3"
              initial={{opacity: 0, y: -10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
            >
              {booking('headline')}
            </motion.h2>
            <motion.p
              className="text-base text-brand-muted leading-relaxed"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.3}}
            >
              {booking('description')}
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.4}}
            >
              <BookingEmbed locale={locale} />
            </motion.div>
            <motion.p
              className="mt-6 text-sm text-brand-muted"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.5}}
            >
              {t('disclaimer')}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

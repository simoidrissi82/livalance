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
    <div className="relative min-h-screen">
      {/* Single unified background for entire page */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-pillar-schlaf/15 to-pillar-ernaehrung/10" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-pillar-schlaf/25 via-pillar-ernaehrung/20 to-brand-accent/30" aria-hidden />
        
        {/* Enhanced animated gradient blobs */}
        <motion.div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-pillar-schlaf/20 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute -right-32 -bottom-32 h-[520px] w-[520px] rounded-full bg-brand-accent/30 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-pillar-ernaehrung/15 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
        />
      </div>
      
      <section className="relative min-h-screen flex items-center overflow-hidden">
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-24">
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.5}}
            >
              <CTAButton href="/contact" showIcon width="full-mobile">{cta('bookIntro')}</CTAButton>
              <CTAButton href="#booking" variant="secondary" width="full-mobile">
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

      <section className="relative overflow-hidden py-20">
        {/* Enhanced animated gradient blobs */}
        <motion.div
          className="absolute -top-32 -right-32 h-[650px] w-[650px] bg-brand-accent/25 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 h-[500px] w-[500px] bg-pillar-schlaf/20 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 h-[450px] w-[450px] bg-pillar-ernaehrung/18 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 100, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        
        <div className="relative mx-auto grid max-w-6xl gap-6 sm:gap-8 px-4 sm:px-6 md:grid-cols-2">
          <motion.div
            className="group relative rounded-3xl border-2 border-brand-primary/30 bg-gradient-to-br from-white via-brand-primary-tint/15 to-white p-6 sm:p-8 md:p-10 shadow-medium backdrop-blur-sm transition-all duration-300 hover:shadow-strong hover:-translate-y-2 hover:border-brand-primary/50"
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.02}}
          >
            {/* Enhanced gradient overlay on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
            <div className="relative z-10">
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
            </div>
          </motion.div>
          
          <motion.div
            className="group relative rounded-3xl border-2 border-brand-accent/30 bg-gradient-to-br from-white via-brand-accent-tint/15 to-white p-6 sm:p-8 md:p-10 shadow-medium backdrop-blur-sm transition-all duration-300 hover:shadow-strong hover:-translate-y-2 hover:border-brand-accent/50"
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6, delay: 0.2}}
            whileHover={{scale: 1.02}}
          >
            {/* Enhanced gradient overlay on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-accent/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
            <div className="relative z-10">
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
            </div>
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

      <section id="booking" className="relative overflow-hidden py-20">
        {/* Multiple animated gradient blobs */}
        <motion.div
          className="absolute top-10 left-10 h-96 w-96 rounded-full bg-pillar-schlaf/15 blur-3xl"
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
        <motion.div
          className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-brand-accent/20 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 h-72 w-72 rounded-full bg-pillar-bewegung/12 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            className="rounded-3xl border-2 border-brand-primary/30 bg-gradient-to-br from-white/95 via-brand-primary-tint/10 to-white/95 p-12 shadow-strong backdrop-blur-xl"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.01}}
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

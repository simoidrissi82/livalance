'use client';

import {useLocale, useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

import {BookingEmbed} from '@/components/booking/BookingEmbed';
import {CTAButton} from '@/components/ui/CTAButton';

export function ContactPage() {
  const t = useTranslations('contact');
  const cta = useTranslations('cta');
  const locale = useLocale();
  const channels = [t('channels.0'), t('channels.1'), t('channels.2')];

  return (
    <div className="space-y-16 bg-brand-bg pb-20">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-primary-tint/40 via-brand-surface/20 to-brand-accent-tint/30">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/15" aria-hidden />
        
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-10 left-10 h-96 w-96 rounded-full bg-brand-primary/15 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-brand-accent/15 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <motion.div
            className="rounded-[2.5rem] border-2 border-white/60 bg-white/95 p-12 md:p-16 shadow-medium backdrop-blur"
            initial={{opacity: 0, scale: 0.95, y: 30}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.01}}
          >
            <motion.h1
              className="font-display text-5xl md:text-6xl font-bold text-brand-text leading-tight"
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.2}}
            >
              {t('title')}
            </motion.h1>
            
            <motion.p
              className="mt-6 text-xl md:text-2xl text-brand-text/80 leading-relaxed"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.6, delay: 0.3}}
            >
              {t('intro')}
            </motion.p>
            
            <motion.p
              className="mt-4 text-base text-brand-text/70 leading-relaxed"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.6, delay: 0.4}}
            >
              {t('supporting')}
            </motion.p>
            
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.5}}
            >
              <CTAButton href="mailto:hello@livalance.com" showIcon>{cta('submit')}</CTAButton>
              <CTAButton href="#booking" variant="secondary">
                {t('booking')}
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-surface via-white to-brand-surface py-20">
        <div className="absolute top-0 right-0 h-64 w-64 bg-brand-accent/5 rounded-full blur-3xl" aria-hidden />
        
        <div className="relative mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="rounded-3xl border-2 border-white/60 bg-white/95 p-10 shadow-medium backdrop-blur"
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
          >
            <form className="space-y-6">
              <motion.label
                className="flex flex-col text-base font-medium text-brand-text"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.1}}
              >
                {t('email')}
                <input
                  type="email"
                  className="mt-2 rounded-2xl border-2 border-white/60 bg-white/90 px-4 py-3 text-base text-brand-text shadow-soft transition-all focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
                  required
                />
              </motion.label>
              
              <motion.label
                className="flex flex-col text-base font-medium text-brand-text"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.2}}
              >
                {t('message')}
                <textarea
                  className="mt-2 min-h-[200px] rounded-2xl border-2 border-white/60 bg-white/90 px-4 py-3 text-base text-brand-text shadow-soft transition-all focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none resize-none"
                  required
                />
              </motion.label>
              
              <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.3}}
              >
                <CTAButton type="submit" showIcon>{cta('submit')}</CTAButton>
              </motion.div>
            </form>
          </motion.div>
          
          <motion.aside
            className="flex flex-col justify-between rounded-3xl border-2 border-brand-primary/20 bg-gradient-to-br from-brand-primary-tint/50 to-brand-primary-tint/30 p-10 shadow-medium"
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6, delay: 0.2}}
            whileHover={{scale: 1.02}}
          >
            <div>
              <motion.h2
                className="text-base font-bold uppercase tracking-wide text-brand-primary mb-6"
                initial={{opacity: 0, y: -10}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.3}}
              >
                Connections
              </motion.h2>
              <ul className="space-y-4">
                {channels.map((channel, index) => (
                  <motion.li
                    key={channel}
                    className="flex gap-3 text-base text-brand-text/80"
                    initial={{opacity: 0, x: -10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: index * 0.1 + 0.4}}
                  >
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-brand-primary" />
                    <span>{channel}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.p
              className="text-sm text-brand-text/70 leading-relaxed"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.7}}
            >
              {t('response')}
            </motion.p>
          </motion.aside>
        </div>
      </section>

      <section id="booking" className="relative overflow-hidden bg-gradient-to-br from-brand-bg via-brand-surface to-brand-bg py-20">
        <motion.div
          className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl"
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
        
        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            className="rounded-3xl border-2 border-white/60 bg-white/95 p-12 shadow-medium backdrop-blur"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
          >
            <BookingEmbed locale={locale} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-primary-tint/60 via-brand-surface/40 to-brand-accent-tint/50">
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
        
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <motion.div
            className="rounded-[2.5rem] border-2 border-white/60 bg-white/95 p-12 md:p-16 shadow-medium backdrop-blur"
            initial={{opacity: 0, scale: 0.95, y: 30}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.01}}
          >
            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight"
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
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.5}}
            >
              <CTAButton href="mailto:hello@livalance.com" showIcon width="full-mobile">{cta('submit')}</CTAButton>
              <CTAButton href="#booking" variant="secondary" width="full-mobile">
                {t('booking')}
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-pillar-achtsamkeit/40 via-brand-accent/30 to-brand-primary/35 py-20">
        {/* Enhanced animated gradient blobs - BIGGER & MORE SATURATED */}
        <motion.div
          className="absolute -top-40 -right-40 h-[700px] w-[700px] bg-brand-accent/35 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.5, 0.35],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 h-[600px] w-[600px] bg-brand-primary/30 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.45, 0.3]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 h-[450px] w-[450px] bg-pillar-achtsamkeit/20 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [-40, 40, -40]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        
        <div className="relative mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="group relative rounded-3xl border-2 border-brand-accent/20 bg-gradient-to-br from-white via-brand-accent-tint/10 to-white p-10 shadow-medium backdrop-blur transition-all duration-300 hover:shadow-strong hover:-translate-y-1 hover:border-brand-accent/40"
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.01}}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
            <div className="relative z-10">
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
            </div>
          </motion.div>
          
          <motion.aside
            className="group relative flex flex-col justify-between rounded-3xl border-2 border-brand-primary/30 bg-gradient-to-br from-brand-primary-tint/50 via-brand-accent-tint/30 to-brand-primary-tint/50 p-10 shadow-strong"
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6, delay: 0.2}}
            whileHover={{scale: 1.02}}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
            <div className="relative z-10">
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
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-brand-accent" />
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
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="booking" className="relative overflow-hidden bg-gradient-to-br from-brand-accent/40 via-pillar-bewegung/30 to-brand-accent/45 py-20">
        {/* Multiple animated gradient blobs */}
        <motion.div
          className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-brand-accent/20 blur-3xl"
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
          className="absolute top-10 right-10 h-80 w-80 rounded-full bg-brand-primary/15 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        
        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            className="rounded-3xl border-2 border-brand-primary/30 bg-gradient-to-br from-white via-brand-primary-tint/10 to-white p-12 shadow-strong backdrop-blur"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.01}}
          >
            <BookingEmbed locale={locale} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

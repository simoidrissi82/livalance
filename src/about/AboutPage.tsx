'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export function AboutPage() {
  const t = useTranslations('aboutPage');

  return (
    <div className="space-y-16 bg-brand-bg pb-20">
      <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-primary-tint/40 via-brand-surface/20 to-brand-accent-tint/30">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/15" aria-hidden />
        
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-20 right-10 h-96 w-96 rounded-full bg-brand-accent/15 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute bottom-10 left-20 h-80 w-80 rounded-full bg-brand-primary/15 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
            y: [0, 20, 0]
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
            className="max-w-3xl space-y-6"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
          >
            <motion.span
              className="inline-flex rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary shadow-soft"
              initial={{scale: 0.8, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{duration: 0.4, delay: 0.2}}
            >
              {t('missionTitle')}
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
              className="text-xl md:text-2xl text-brand-text/80 leading-relaxed"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.4}}
            >
              {t('heroSubtitle')}
            </motion.p>
            
            <motion.p
              className="text-lg text-brand-text/70 leading-relaxed"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.5}}
            >
              {t('mission')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-surface via-white to-brand-surface py-20">
        <div className="absolute top-0 left-0 h-64 w-64 bg-brand-primary/5 rounded-full blur-3xl" aria-hidden />
        
        <div className="relative mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[1.5fr_1fr]">
          <motion.article
            className="group rounded-3xl border-2 border-white/60 bg-white/95 p-10 shadow-soft backdrop-blur transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.02}}
          >
            <motion.h2
              className="text-base font-bold uppercase tracking-wide text-brand-primary mb-4"
              initial={{opacity: 0, y: -10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
            >
              {t('storyTitle')}
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed text-brand-text/80"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.3}}
            >
              {t('story')}
            </motion.p>
          </motion.article>
          
          <motion.aside
            className="rounded-3xl border-2 border-brand-primary/20 bg-gradient-to-br from-brand-primary-tint/50 to-brand-primary-tint/30 p-10 shadow-medium"
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6, delay: 0.2}}
            whileHover={{scale: 1.02}}
          >
            <motion.h2
              className="text-base font-bold uppercase tracking-wide text-brand-primary mb-6"
              initial={{opacity: 0, y: -10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.4}}
            >
              {t('valuesTitle')}
            </motion.h2>
            <ul className="space-y-4">
              {[0, 1, 2].map((index) => (
                <motion.li
                  key={index}
                  className="flex gap-3 text-base text-brand-text/80"
                  initial={{opacity: 0, x: -10}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{delay: index * 0.1 + 0.5}}
                >
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-brand-primary" />
                  <span>{t(`values.${index}`)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-surface/30 to-white py-20">
        <div className="absolute bottom-0 right-0 h-64 w-64 bg-brand-accent/5 rounded-full blur-3xl" aria-hidden />
        
        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            className="rounded-3xl border-2 border-white/60 bg-white/95 p-12 shadow-medium backdrop-blur"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.01}}
          >
            <motion.h2
              className="text-base font-bold uppercase tracking-wide text-brand-accent mb-6"
              initial={{opacity: 0, y: -10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
            >
              {t('approachTitle')}
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed text-brand-text/80"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.3}}
            >
              {t('approach')}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

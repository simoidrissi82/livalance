'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export function AboutPage() {
  const t = useTranslations('aboutPage');

  return (
    <div className="bg-gradient-to-br from-brand-accent/40 via-pillar-ernaehrung/30 to-brand-primary/35">
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        
        {/* HUGE Animated gradient blobs */}
        <motion.div
          className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-brand-primary/30 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute -bottom-24 -right-24 h-[480px] w-[480px] rounded-full bg-brand-accent/25 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <motion.div
            className="max-w-3xl space-y-6 rounded-3xl bg-white/60 backdrop-blur-md p-8 md:p-12 shadow-strong"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.01}}
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

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-accent/40 via-pillar-ernaehrung/30 to-brand-primary/35 py-20">
        {/* Enhanced animated gradient blobs - BIGGER & MORE SATURATED */}
        <motion.div
          className="absolute -top-20 -left-20 h-[600px] w-[600px] bg-brand-primary/30 rounded-full blur-3xl"
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
          className="absolute -bottom-20 -right-20 h-[500px] w-[500px] bg-brand-accent/25 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
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
          className="absolute top-1/2 left-1/2 h-[400px] w-[400px] bg-pillar-ernaehrung/20 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [-50, 50, -50],
            y: [-30, 30, -30]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        
        <div className="relative mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[1.5fr_1fr]">
          <motion.article
            className="group relative rounded-3xl border-2 border-brand-primary/20 bg-gradient-to-br from-white via-brand-primary-tint/10 to-white p-10 shadow-medium backdrop-blur transition-all duration-300 hover:shadow-strong hover:-translate-y-2 hover:border-brand-primary/40"
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.02}}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
            <div className="relative z-10">
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
            </div>
          </motion.article>
          
          <motion.aside
            className="group relative rounded-3xl border-2 border-brand-accent/30 bg-gradient-to-br from-brand-accent-tint/40 via-brand-primary-tint/30 to-brand-accent-tint/40 p-10 shadow-strong"
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6, delay: 0.2}}
            whileHover={{scale: 1.02}}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
            <div className="relative z-10">
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
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-brand-accent" />
                  <span>{t(`values.${index}`)}</span>
                </motion.li>
              ))}
            </ul>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-pillar-bewegung/35 via-white to-brand-accent/40 py-20">
        {/* Enhanced animated gradient blobs */}
        <motion.div
          className="absolute -bottom-32 -right-32 h-[550px] w-[550px] bg-brand-accent/30 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.45, 0.3]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -top-24 -left-24 h-[480px] w-[480px] bg-brand-primary/25 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5
          }}
        />
        
        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            className="rounded-3xl border-2 border-brand-accent/30 bg-gradient-to-br from-white via-brand-accent-tint/10 to-white p-12 shadow-strong backdrop-blur"
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

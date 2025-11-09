'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

import {CTAButton} from '@/components/ui/CTAButton';

const pillarKeys = ['sleep', 'nutrition', 'activity', 'mindfulness'] as const;

type PillarKey = (typeof pillarKeys)[number];

const cardAccentMap: Record<PillarKey, string> = {
  sleep: 'border-pillar-schlaf/30 bg-pillar-schlaf/5',
  nutrition: 'border-pillar-ernaehrung/30 bg-pillar-ernaehrung/5',
  activity: 'border-pillar-bewegung/30 bg-pillar-bewegung/5',
  mindfulness: 'border-pillar-achtsamkeit/30 bg-pillar-achtsamkeit/5'
};

const badgeClassMap: Record<PillarKey, string> = {
  sleep: 'bg-pillar-schlaf/20 text-pillar-schlaf',
  nutrition: 'bg-pillar-ernaehrung/20 text-pillar-ernaehrung',
  activity: 'bg-pillar-bewegung/20 text-pillar-bewegung',
  mindfulness: 'bg-pillar-achtsamkeit/20 text-pillar-achtsamkeit'
};

export function PillarsPage() {
  const pillars = useTranslations('pillars');
  const page = useTranslations('pillarsPage');

  const conceptBullets = [
    page('conceptBullets.0'),
    page('conceptBullets.1'),
    page('conceptBullets.2')
  ];

  return (
    <div className="space-y-16 bg-brand-bg pb-20">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-primary-tint/60 via-brand-surface/40 to-brand-accent-tint/50">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/15" aria-hidden />
        
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-20 left-20 h-96 w-96 rounded-full bg-brand-primary/15 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-brand-accent/15 blur-3xl"
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
        
        <motion.div
          className="absolute top-1/2 left-1/2 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
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
            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.2}}
            >
              {page('title')}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-brand-text/80 leading-relaxed"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.3}}
            >
              {page('intro')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-accent/40 via-pillar-ernaehrung/30 to-brand-primary/40 py-20">
        {/* Enhanced animated gradient blobs - BIGGER & MORE SATURATED */}
        <motion.div
          className="absolute -top-24 -left-24 h-[580px] w-[580px] bg-brand-primary/30 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -bottom-28 -right-28 h-[520px] w-[520px] bg-brand-accent/25 rounded-full blur-3xl"
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
        <motion.div
          className="absolute top-1/3 right-1/3 h-[450px] w-[450px] bg-pillar-ernaehrung/20 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
            y: [-50, 50, -50]
          }}
          transition={{
            duration: 16,
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
            <div className="space-y-6">
              <motion.h2
                className="font-display text-4xl font-bold text-brand-text"
                initial={{opacity: 0, y: -10}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.2}}
              >
                {page('conceptTitle')}
              </motion.h2>
              
              <motion.p
                className="text-lg leading-relaxed text-brand-text/80"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{delay: 0.3}}
              >
                {page('conceptBody')}
              </motion.p>
              
              <ul className="mt-8 space-y-4">
                {conceptBullets.map((bullet, index) => (
                  <motion.li
                    key={bullet}
                    className="flex gap-4"
                    initial={{opacity: 0, x: -10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: index * 0.1 + 0.4}}
                  >
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-brand-primary" />
                    <span className="text-base text-brand-text/80">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-pillar-achtsamkeit/30 via-white via-pillar-bewegung/30 to-pillar-schlaf/35 py-20">
        {/* Animated gradient blobs for each pillar */}
        <motion.div
          className="absolute top-10 right-10 h-72 w-72 bg-pillar-achtsamkeit/12 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 h-80 w-80 bg-pillar-schlaf/10 rounded-full blur-3xl"
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5
          }}
        />
        
        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: '-100px'}}
            variants={{
              hidden: {opacity: 0},
              visible: {opacity: 1, transition: {staggerChildren: 0.15}}
            }}
          >
            {pillarKeys.map((key, index) => {
              const pillarColor = {
                sleep: 'border-pillar-schlaf/40 bg-gradient-to-br from-white via-pillar-schlaf/15 to-white',
                nutrition: 'border-pillar-ernaehrung/40 bg-gradient-to-br from-white via-pillar-ernaehrung/15 to-white',
                activity: 'border-pillar-bewegung/40 bg-gradient-to-br from-white via-pillar-bewegung/15 to-white',
                mindfulness: 'border-pillar-achtsamkeit/40 bg-gradient-to-br from-white via-pillar-achtsamkeit/15 to-white'
              }[key];
              
              return (
              <motion.article
                key={key}
                className={`group relative rounded-3xl border-2 p-10 shadow-medium backdrop-blur transition-all duration-300 hover:shadow-strong hover:-translate-y-2 hover:scale-[1.02] ${pillarColor}`}
                variants={{
                  hidden: {opacity: 0, y: 30},
                  visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
                }}
                whileHover={{scale: 1.02}}
              >
                {/* Gradient overlay on hover */}
                {key === 'sleep' && <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pillar-schlaf/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />}
                {key === 'nutrition' && <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pillar-ernaehrung/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />}
                {key === 'activity' && <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pillar-bewegung/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />}
                {key === 'mindfulness' && <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pillar-achtsamkeit/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />}
                <div className="relative z-10">
                <motion.span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide shadow-medium ${badgeClassMap[key]}`}
                  initial={{scale: 0.8, opacity: 0}}
                  whileInView={{scale: 1, opacity: 1}}
                  viewport={{once: true}}
                  transition={{delay: index * 0.15 + 0.2}}
                >
                  {pillars(`items.${key}.title`)}
                  <span className="h-2 w-2 rounded-full bg-current" aria-hidden />
                </motion.span>
                
                <h2 className="mt-6 font-display text-3xl font-bold text-brand-text">
                  {page(`items.${key}.headline`)}
                </h2>
                
                <p className="mt-4 text-base leading-relaxed text-brand-text/80">{page(`items.${key}.body`)}</p>
                
                <ul className="mt-8 space-y-4">
                  {[0, 1, 2].map((detailIndex) => {
                    const dotColor = {
                      sleep: 'bg-pillar-schlaf',
                      nutrition: 'bg-pillar-ernaehrung',
                      activity: 'bg-pillar-bewegung',
                      mindfulness: 'bg-pillar-achtsamkeit'
                    }[key];
                    
                    return (
                    <motion.li
                      key={detailIndex}
                      className="flex gap-3"
                      initial={{opacity: 0, x: -10}}
                      whileInView={{opacity: 1, x: 0}}
                      viewport={{once: true}}
                      transition={{delay: detailIndex * 0.1}}
                    >
                      <span className={`mt-1.5 h-2 w-2 flex-none rounded-full ${dotColor}`} />
                      <span className="text-base text-brand-text/80">{page(`items.${key}.details.${detailIndex}`)}</span>
                    </motion.li>
                  )})}
                </ul>
                </div>
              </motion.article>
            )})}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-accent/35 via-pillar-achtsamkeit/25 to-brand-accent/40 py-20">
        {/* Multiple animated gradient blobs */}
        <motion.div
          className="absolute top-10 right-10 h-96 w-96 rounded-full bg-brand-accent/20 blur-3xl"
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
          className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-brand-primary/15 blur-3xl"
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
        
        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div
            className="rounded-3xl border-2 border-brand-primary/30 bg-gradient-to-br from-white via-brand-primary-tint/10 to-brand-accent-tint/10 p-12 md:p-16 text-center shadow-strong"
            initial={{opacity: 0, scale: 0.95, y: 30}}
            whileInView={{opacity: 1, scale: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.02}}
          >
            <motion.h3
              className="font-display text-4xl font-bold text-brand-text"
              initial={{opacity: 0, y: -10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
            >
              {page('ctaTitle')}
            </motion.h3>
            
            <motion.p
              className="mt-6 text-lg leading-relaxed text-brand-text/80 max-w-2xl mx-auto"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.3}}
            >
              {page('ctaBody')}
            </motion.p>
            
            <motion.div
              className="mt-8 flex justify-center"
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.4}}
            >
              <CTAButton href="/contact" showIcon>{page('ctaButton')}</CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import {motion} from 'framer-motion';

import {CTAButton} from '../ui/CTAButton';
import {motionVariants} from '@/design-system/tokens';

type HeroProps = {
  title: string;
  subtitleSuffix: string;
  inlinePillars?: string[];
  primaryCta: {label: string; href: string};
  secondaryCta: {label: string; href: string};
};

const pillarColorClasses = [
  'text-pillar-ernaehrung',
  'text-pillar-schlaf',
  'text-pillar-bewegung',
  'text-pillar-achtsamkeit'
];

export function Hero({
  title,
  subtitleSuffix,
  inlinePillars = [],
  primaryCta,
  secondaryCta
}: HeroProps) {
  return (
    <section className="relative isolate min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="fixed inset-0 -z-10">
        <picture>
          <source srcSet="/images/brand/background2.webp" type="image/webp" />
          <img
            src="/images/brand/background2.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            aria-hidden="true"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-bg/60 via-brand-bg/40 to-brand-bg/60" aria-hidden />
      </div>
      
      {/* Enhanced gradient blobs */}
      <motion.div
        className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-brand-primary/15 blur-3xl"
        aria-hidden
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <motion.div
        className="absolute bottom-[-4rem] right-[-6rem] h-[32rem] w-[32rem] rounded-full bg-brand-accent/15 blur-3xl"
        aria-hidden
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, -40, 0],
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

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            className="flex flex-col gap-6 text-left"
            initial="initial"
            animate="animate"
            variants={motionVariants.stagger}
          >
            <motion.h1
              className="max-w-3xl font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white drop-shadow-lg"
              variants={motionVariants.fadeIn}
              style={{textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}
            >
              {title}
            </motion.h1>
            
            <motion.p
              className="max-w-2xl text-base sm:text-lg md:text-xl text-white/90 drop-shadow-md"
              variants={motionVariants.fadeIn}
              style={{textShadow: '0 1px 6px rgba(0,0,0,0.25)'}}
            >
              {inlinePillars.length ? (
                <>
                  {inlinePillars.map((pillar, index) => (
                    <span key={pillar} className="mr-2">
                      <span
                        className={`font-semibold ${
                          pillarColorClasses[index] ?? 'text-brand-primary'
                        }`}
                      >
                        {pillar}
                      </span>
                      .
                    </span>
                  ))}
                  <span>{subtitleSuffix}</span>
                </>
              ) : (
                subtitleSuffix
              )}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={motionVariants.fadeIn}
            >
              <CTAButton href={primaryCta.href} variant="primary" width="full-mobile">
                {primaryCta.label}
              </CTAButton>
              <CTAButton href={secondaryCta.href} variant="secondary" width="full-mobile">
                {secondaryCta.label}
              </CTAButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 0.4}}
          >
            <div className="relative h-96 w-96">
              {/* Floating Pillar Icons */}
              <motion.div
                className="absolute top-8 left-12 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="text-4xl">🌙</div>
              </motion.div>

              <motion.div
                className="absolute top-20 right-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
              >
                <div className="text-5xl">🥗</div>
              </motion.div>

              <motion.div
                className="absolute bottom-24 left-8 flex h-22 w-22 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20"
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 8, 0]
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              >
                <div className="text-4xl">🏃</div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-16 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20"
                animate={{
                  y: [0, -22, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5
                }}
              >
                <div className="text-4xl">🧘</div>
              </motion.div>

              {/* Central Glow */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="h-48 w-48 rounded-full bg-white/5 blur-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

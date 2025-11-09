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
              className="max-w-3xl font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
              variants={motionVariants.fadeIn}
              style={{textShadow: '0 3px 15px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.1)'}}
            >
              {title}
            </motion.h1>
            
            <motion.p
              className="max-w-2xl text-base sm:text-lg md:text-xl text-white/95"
              variants={motionVariants.fadeIn}
              style={{textShadow: '0 2px 10px rgba(0,0,0,0.4)'}}
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
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, delay: 0.3}}
          >
            <div className="relative h-96 w-96">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/20"
                animate={{rotate: 360}}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              
              {/* Inner glow */}
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              {/* Center content */}
              <div className="absolute inset-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
                <div className="text-center">
                  <motion.div 
                    className="font-display text-4xl font-bold text-white drop-shadow-lg mb-2"
                    animate={{
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    Livalance
                  </motion.div>
                  <div className="text-sm text-white/80 drop-shadow-md">
                    Lebe vital. In Balance.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

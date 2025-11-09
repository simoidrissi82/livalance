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
    <section className="relative isolate min-h-[90vh] flex items-center overflow-hidden bg-brand-bg">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{backgroundImage: 'url(/images/brand/background.png)'}}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-bg/95 via-brand-bg/90 to-brand-bg/85" aria-hidden />
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

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            className="flex flex-col gap-6 text-left"
            initial="initial"
            animate="animate"
            variants={motionVariants.stagger}
          >
            <motion.h1
              className="max-w-3xl font-display text-5xl font-bold leading-tight text-brand-text md:text-6xl lg:text-7xl"
              variants={motionVariants.fadeIn}
            >
              {title}
            </motion.h1>
            
            <motion.p
              className="max-w-2xl text-lg text-brand-muted md:text-xl"
              variants={motionVariants.fadeIn}
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
              className="flex flex-col gap-3 sm:flex-row"
              variants={motionVariants.fadeIn}
            >
              <CTAButton href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </CTAButton>
              <CTAButton href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </CTAButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, delay: 0.3}}
          >
            <div className="relative h-96 w-96">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent/30 via-brand-primary/20 to-transparent"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-tr from-pillar-ernaehrung/30 via-pillar-schlaf/20 to-transparent"
                animate={{
                  rotate: -360
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              <div className="absolute inset-16 flex items-center justify-center rounded-full bg-brand-surface/90 backdrop-blur-sm shadow-strong">
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-brand-primary">
                    Livalance
                  </div>
                  <div className="mt-2 text-sm text-brand-muted">
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

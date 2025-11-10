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
  tagline?: string;
};

const pillarColorClasses = [
  'text-pillar-ernaehrung',
  'text-pillar-schlaf',
  'text-pillar-bewegung',
  'text-pillar-achtsamkeit'
];

const pillarColors = [
  '#7CB342', // ernaehrung - green
  '#36A8A2', // schlaf - teal
  '#F6A623', // bewegung - orange
  '#7E57C2'  // achtsamkeit - purple
];

export function Hero({
  title,
  subtitleSuffix,
  inlinePillars = [],
  primaryCta,
  secondaryCta,
  tagline = 'Live vital. In balance.'
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-brand-bg/50 via-brand-bg/30 to-brand-bg/50" aria-hidden />
      </div>
      
      {/* Enhanced gradient blobs */}
      <motion.div
        className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-brand-primary/15 blur-3xl z-0"
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
        className="absolute bottom-[-4rem] right-[-6rem] h-[32rem] w-[32rem] rounded-full bg-brand-accent/15 blur-3xl z-0"
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
        className="absolute top-1/2 left-1/2 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl z-0"
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-24 xl:gap-28">
          {/* Mobile bubble - shown above text */}
          <motion.div
            className="relative z-10 flex lg:hidden items-center justify-center"
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94]}}
          >
            <div className="relative h-64 w-64">
              {/* Simple outer ring without colors - cards provide the color */}
              <div
                className="absolute inset-0 rounded-full border-2 border-white/20"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-bg/80 via-brand-bg/60 to-brand-bg/80 backdrop-blur-sm" />
              </div>
              
              {/* Inner glow ring */}
              <motion.div
                className="absolute inset-6 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
              
              {/* Pillar names in corners as glass cards - smaller for mobile */}
              {inlinePillars.map((pillar, index) => {
                // Position at corners: top-left, top-right, bottom-right, bottom-left
                const positions = [
                  { top: '8px', left: '8px', alignItems: 'flex-start', justifyContent: 'flex-start' }, // top-left
                  { top: '8px', right: '8px', alignItems: 'flex-start', justifyContent: 'flex-end' }, // top-right
                  { bottom: '8px', right: '8px', alignItems: 'flex-end', justifyContent: 'flex-end' }, // bottom-right
                  { bottom: '8px', left: '8px', alignItems: 'flex-end', justifyContent: 'flex-start' } // bottom-left
                ];
                const pos = positions[index];
                
                return (
                  <motion.div
                    key={pillar}
                    className="absolute"
                    style={{
                      ...pos,
                      alignItems: pos.alignItems,
                      justifyContent: pos.justifyContent
                    }}
                    initial={{opacity: 0, scale: 0.9, y: index < 2 ? -5 : 5}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <div
                      className="px-3 py-1.5 rounded-lg backdrop-blur-md border flex items-center gap-2 shadow-lg"
                      style={{
                        backgroundColor: `${pillarColors[index]}30`,
                        borderColor: `${pillarColors[index]}70`,
                        boxShadow: `
                          0 6px 24px rgba(0, 0, 0, 0.3),
                          0 0 24px ${pillarColors[index]}50,
                          0 0 40px ${pillarColors[index]}30,
                          inset 0 1px 0 rgba(255, 255, 255, 0.3)
                        `
                      }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: pillarColors[index],
                          boxShadow: `0 0 14px ${pillarColors[index]}100, 0 0 22px ${pillarColors[index]}70, 0 2px 4px rgba(0, 0, 0, 0.3)`
                        }}
                      />
                      <span
                        className="text-xs font-semibold whitespace-nowrap"
                        style={{
                          color: index === 3 // Mindfulness - use lighter purple for better readability
                            ? '#a78bfa'
                            : pillarColors[index],
                          textShadow: index === 3 // Mindfulness - stronger shadows for contrast
                            ? `0 2px 5px rgba(0, 0, 0, 0.8), 0 0 12px ${pillarColors[index]}80, 0 0 18px ${pillarColors[index]}60, 0 0 28px ${pillarColors[index]}40`
                            : `0 2px 4px rgba(0, 0, 0, 0.6), 0 0 10px ${pillarColors[index]}70, 0 0 16px ${pillarColors[index]}50, 0 0 24px ${pillarColors[index]}30`
                        }}
                      >
                        {pillar}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Center content - smaller for mobile */}
              <div className="absolute inset-10 flex flex-col items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <motion.div 
                  className="font-display text-2xl font-bold text-white mb-1"
                  animate={{
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  Livalance
                </motion.div>
                <div className="text-xs text-white/80">
                  {tagline}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8 sm:gap-10 lg:gap-12 text-center lg:text-left relative z-10 w-full"
            initial="initial"
            animate="animate"
            variants={motionVariants.stagger}
          >
            <motion.h1
              className="max-w-4xl mx-auto lg:mx-0 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold leading-[1.1] tracking-tight text-white"
              variants={motionVariants.fadeIn}
            >
              <span className="block whitespace-nowrap">{title.split('.')[0]}.</span>
              {title.includes('.') && (
                <span className="block whitespace-nowrap bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  {title.split('.').slice(1).join('.').trim()}
                </span>
              )}
            </motion.h1>
            
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-4 justify-center lg:justify-start"
              variants={motionVariants.fadeIn}
            >
              <CTAButton href={primaryCta.href} variant="primary" width="full-mobile" showIcon>
                {primaryCta.label}
              </CTAButton>
              <CTAButton href={secondaryCta.href} variant="secondary" width="full-mobile" className="text-white border-white/30 hover:bg-white/10">
                {secondaryCta.label}
              </CTAButton>
            </motion.div>
          </motion.div>

          {/* Desktop bubble - shown on right */}
          <motion.div
            className="relative z-10 hidden lg:flex items-center justify-center"
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94]}}
          >
            <div className="relative h-96 w-96">
              {/* Simple outer ring without colors - cards provide the color */}
              <div
                className="absolute inset-0 rounded-full border-2 border-white/20"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-bg/80 via-brand-bg/60 to-brand-bg/80 backdrop-blur-sm" />
              </div>
              
              {/* Inner glow ring */}
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
              
              {/* Pillar names in corners as glass cards */}
              {inlinePillars.map((pillar, index) => {
                // Position at corners: top-left, top-right, bottom-right, bottom-left
                const positions = [
                  { top: '12px', left: '12px', alignItems: 'flex-start', justifyContent: 'flex-start' }, // top-left
                  { top: '12px', right: '12px', alignItems: 'flex-start', justifyContent: 'flex-end' }, // top-right
                  { bottom: '12px', right: '12px', alignItems: 'flex-end', justifyContent: 'flex-end' }, // bottom-right
                  { bottom: '12px', left: '12px', alignItems: 'flex-end', justifyContent: 'flex-start' } // bottom-left
                ];
                const pos = positions[index];
                
                return (
                  <motion.div
                    key={pillar}
                    className="absolute"
                    style={{
                      ...pos,
                      alignItems: pos.alignItems,
                      justifyContent: pos.justifyContent
                    }}
                    initial={{opacity: 0, scale: 0.9, y: index < 2 ? -5 : 5}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{
                      delay: 0.6 + index * 0.12,
                      duration: 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <div
                      className="px-4 py-2.5 rounded-xl backdrop-blur-md border flex items-center gap-2.5 shadow-lg"
                      style={{
                        backgroundColor: `${pillarColors[index]}30`,
                        borderColor: `${pillarColors[index]}70`,
                        boxShadow: `
                          0 8px 32px rgba(0, 0, 0, 0.3),
                          0 0 30px ${pillarColors[index]}50,
                          0 0 50px ${pillarColors[index]}30,
                          inset 0 1px 0 rgba(255, 255, 255, 0.3)
                        `
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: pillarColors[index],
                          boxShadow: `0 0 18px ${pillarColors[index]}100, 0 0 28px ${pillarColors[index]}70, 0 2px 4px rgba(0, 0, 0, 0.3)`
                        }}
                      />
                      <span
                        className="text-sm font-semibold whitespace-nowrap"
                        style={{
                          color: index === 3 // Mindfulness - use lighter purple for better readability
                            ? '#a78bfa'
                            : pillarColors[index],
                          textShadow: index === 3 // Mindfulness - stronger shadows for contrast
                            ? `0 2px 6px rgba(0, 0, 0, 0.8), 0 0 16px ${pillarColors[index]}80, 0 0 24px ${pillarColors[index]}60, 0 0 35px ${pillarColors[index]}40`
                            : `0 2px 4px rgba(0, 0, 0, 0.6), 0 0 12px ${pillarColors[index]}70, 0 0 20px ${pillarColors[index]}50, 0 0 30px ${pillarColors[index]}30`
                        }}
                      >
                        {pillar}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Center content */}
              <div className="absolute inset-16 flex flex-col items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <motion.div 
                  className="font-display text-4xl font-bold text-white mb-2"
                  animate={{
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  Livalance
                </motion.div>
                <div className="text-sm text-white/80">
                  {tagline}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

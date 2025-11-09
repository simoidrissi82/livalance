'use client';

import {motion} from 'framer-motion';

import {CTAButton} from '../ui/CTAButton';

type FinalCTAProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  tagline?: string;
};

export function FinalCTA({title, subtitle, ctaLabel, tagline}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-primary-tint to-brand-accent/30" aria-hidden />
      <motion.div
        className="relative mx-auto max-w-4xl rounded-[2.5rem] border-2 border-white/60 bg-white/85 p-8 sm:p-12 md:p-16 text-center shadow-medium backdrop-blur"
        initial={{opacity: 0, scale: 0.9, y: 30}}
        whileInView={{opacity: 1, scale: 1, y: 0}}
        viewport={{once: true, margin: '-100px'}}
        transition={{duration: 0.7, ease: [0.4, 0, 0.2, 1]}}
        whileHover={{scale: 1.02, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'}}
      >
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text"
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.2}}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{delay: 0.3}}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="mt-10 flex justify-center"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.4}}
        >
          <CTAButton href="/contact" variant="primary" showIcon>
            {ctaLabel}
          </CTAButton>
        </motion.div>
        {tagline ? (
          <motion.p
            className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: 0.5}}
          >
            {tagline}
          </motion.p>
        ) : null}
      </motion.div>
    </section>
  );
}

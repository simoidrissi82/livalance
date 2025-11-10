'use client';

import {motion} from 'framer-motion';

import {CTAButton} from '../ui/CTAButton';

type CgmKickstartProps = {
  title: string;
  bullets: string[];
  disclaimer: string;
  ctaLabel: string;
};

export function CgmKickstart({title, bullets, disclaimer, ctaLabel}: CgmKickstartProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        className="rounded-3xl border-2 border-brand-primary/20 bg-brand-surface p-10 shadow-medium"
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-100px'}}
        transition={{duration: 0.6}}
        whileHover={{scale: 1.01, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'}}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <motion.h2
              className="font-display text-4xl font-bold text-brand-text"
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
            >
              {title}
            </motion.h2>
            <ul className="mt-6 space-y-4 text-base text-brand-muted">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={bullet}
                  className="flex gap-3"
                  initial={{opacity: 0, x: -10}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{delay: index * 0.1 + 0.3}}
                >
                  <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-brand-accent" aria-hidden />
                  <span className="text-brand-text/90">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{delay: 0.4}}
          >
            <CTAButton href="/contact" width="full" showIcon>
              {ctaLabel}
            </CTAButton>
          </motion.div>
        </div>
        <motion.p
          className="mt-8 text-sm text-brand-muted"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{delay: 0.6}}
        >
          {disclaimer}
        </motion.p>
      </motion.div>
    </section>
  );
}

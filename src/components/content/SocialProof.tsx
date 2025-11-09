'use client';

import {motion} from 'framer-motion';
import {CheckCircleIcon} from '@heroicons/react/24/solid';

type SocialProofProps = {
  title: string;
  description?: string;
  items?: string[];
  metrics: Array<{value: string; label: string}>;
};

export function SocialProof({title, description, items = [], metrics}: SocialProofProps) {
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/10" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            className="rounded-3xl border-2 border-white/60 bg-white/85 p-12 shadow-medium backdrop-blur"
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.01}}
          >
            <motion.p
              className="text-xs font-bold uppercase tracking-[0.4em] text-brand-primary"
              initial={{opacity: 0, y: -10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
            >
              {title}
            </motion.p>
            {description ? (
              <motion.p
                className="mt-6 text-lg leading-relaxed text-brand-text/80"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{delay: 0.3}}
              >
                {description}
              </motion.p>
            ) : null}
            {items.length ? (
              <ul className="mt-8 space-y-5">
                {items.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex gap-4 text-base text-brand-text/80"
                    initial={{opacity: 0, x: -10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: index * 0.1 + 0.4}}
                  >
                    <CheckCircleIcon className="mt-0.5 h-6 w-6 flex-none text-brand-primary" aria-hidden />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            ) : null}
          </motion.article>

          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="group rounded-3xl border-2 border-brand-primary/15 bg-gradient-to-br from-brand-surface/95 to-white p-8 shadow-soft transition-all duration-300 hover:border-brand-primary/40 hover:shadow-medium hover:-translate-y-2"
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: index * 0.15 + 0.3}}
                whileHover={{scale: 1.05}}
              >
                <motion.p
                  className="font-display text-4xl md:text-5xl font-bold text-brand-primary"
                  initial={{opacity: 0, scale: 0.5}}
                  whileInView={{opacity: 1, scale: 1}}
                  viewport={{once: true}}
                  transition={{delay: index * 0.15 + 0.5, type: 'spring'}}
                >
                  {metric.value}
                </motion.p>
                <p className="mt-4 text-base font-medium text-brand-muted">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

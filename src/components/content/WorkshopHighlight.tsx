'use client';

import {motion} from 'framer-motion';

import {CTAButton} from '../ui/CTAButton';

type WorkshopHighlightProps = {
  badge: string;
  title: string;
  description: string;
  agenda: string[];
  ctaLabel: string;
  ctaHref?: string;
  ctaSupporting?: string;
  outcomesTitle?: string;
  outcomes?: string[];
  disclaimer: string;
};

export function WorkshopHighlight({
  badge,
  title,
  description,
  agenda,
  ctaLabel,
  ctaHref = '/workshops',
  ctaSupporting,
  outcomesTitle,
  outcomes,
  disclaimer
}: WorkshopHighlightProps) {
  const hasOutcomes = Boolean(outcomes?.length);

  return (
    <section className="relative overflow-hidden">
      
      {/* Animated gradient accents */}
      <motion.div
        className="absolute top-20 right-20 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl"
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
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            className="flex flex-col gap-6"
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6}}
          >
            <motion.span
              className="inline-flex w-fit items-center rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary"
              initial={{scale: 0.8, opacity: 0}}
              whileInView={{scale: 1, opacity: 1}}
              viewport={{once: true}}
              transition={{duration: 0.4, delay: 0.1}}
            >
              {badge}
            </motion.span>
            <h2 className="font-display text-4xl font-bold text-brand-text">{title}</h2>
            <p className="text-lg leading-relaxed text-brand-muted">{description}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href={ctaHref} showIcon>{ctaLabel}</CTAButton>
              {ctaSupporting ? (
                <p className="text-sm text-brand-text/80">{ctaSupporting}</p>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            className={`grid gap-6 ${hasOutcomes ? 'sm:grid-cols-2' : ''}`}
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <motion.article
              className="group rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
              whileHover={{scale: 1.02}}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary mb-4">Agenda</h3>
              <ul className="space-y-3 text-base text-brand-text/80">
                {agenda.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex gap-3"
                    initial={{opacity: 0, x: -10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: index * 0.1}}
                  >
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>

            {hasOutcomes ? (
              <motion.article
                className="group rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
                whileHover={{scale: 1.02}}
                initial={{opacity: 0, scale: 0.95}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.3}}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-accent mb-4">
                  {outcomesTitle}
                </h3>
                <ul className="space-y-3 text-base text-brand-text/80">
                  {outcomes?.map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex gap-3"
                      initial={{opacity: 0, x: -10}}
                      whileInView={{opacity: 1, x: 0}}
                      viewport={{once: true}}
                      transition={{delay: index * 0.1}}
                    >
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-accent" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            ) : null}
          </motion.div>
        </div>

        <motion.p
          className="mt-10 text-sm text-brand-text/60"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{delay: 0.5}}
        >
          {disclaimer}
        </motion.p>
      </div>
    </section>
  );
}

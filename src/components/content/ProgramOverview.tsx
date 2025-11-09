'use client';

import {motion} from 'framer-motion';

import {CTAButton} from '../ui/CTAButton';

type ProgramOverviewProps = {
  title: string;
  description: string;
  supporting?: string;
  bundles: Array<{name: string; description: string; duration: string; deliverables: string[]}>;
  note?: string;
  ctaLabel: string;
  ctaHref?: string;
};

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {staggerChildren: 0.15}
  }
};

const cardVariants = {
  hidden: {opacity: 0, y: 30},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.5, ease: [0.4, 0, 0.2, 1] as const}
  }
};

export function ProgramOverview({
  title,
  description,
  supporting,
  bundles,
  note,
  ctaLabel,
  ctaHref = '/contact'
}: ProgramOverviewProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-brand-surface via-white to-brand-accent-tint/20 py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary-tint/50 via-white to-brand-accent/10" aria-hidden />
      <motion.div
        className="relative rounded-[2.5rem] border border-white/60 bg-white/80 p-12 shadow-medium backdrop-blur"
        initial={{opacity: 0, scale: 0.95}}
        whileInView={{opacity: 1, scale: 1}}
        viewport={{once: true, margin: '-100px'}}
        transition={{duration: 0.6}}
      >
        <motion.div
          className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
        >
          <div className="max-w-3xl space-y-4">
            <h2 className="font-display text-4xl font-bold text-brand-text">{title}</h2>
            <p className="text-lg leading-relaxed text-brand-muted">{description}</p>
            {supporting ? <p className="text-base text-brand-text/80">{supporting}</p> : null}
          </div>
          <CTAButton href={ctaHref} variant="secondary" showIcon>
            {ctaLabel}
          </CTAButton>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-100px'}}
        >
          {bundles.map((bundle, index) => (
            <motion.article
              key={bundle.name}
              className="group flex h-full flex-col justify-between rounded-3xl border-2 border-brand-primary/15 bg-white/90 p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/40 hover:shadow-medium"
              variants={cardVariants}
              whileHover={{scale: 1.02}}
            >
              <div className="space-y-4">
                <motion.span
                  className="inline-flex rounded-full bg-brand-primary-tint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary"
                  initial={{scale: 0, opacity: 0}}
                  whileInView={{scale: 1, opacity: 1}}
                  viewport={{once: true}}
                  transition={{delay: index * 0.1 + 0.3}}
                >
                  {bundle.duration}
                </motion.span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-brand-text">
                    {bundle.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-brand-muted">{bundle.description}</p>
                </div>
                <ul className="space-y-3 text-base text-brand-text/80">
                  {bundle.deliverables.map((deliverable, dIndex) => (
                    <motion.li
                      key={deliverable}
                      className="flex gap-3"
                      initial={{opacity: 0, x: -10}}
                      whileInView={{opacity: 1, x: 0}}
                      viewport={{once: true}}
                      transition={{delay: dIndex * 0.1}}
                    >
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-accent" />
                      <span>{deliverable}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <CTAButton href={ctaHref} variant="ghost">
                  {ctaLabel}
                </CTAButton>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {note ? (
          <motion.p
            className="mt-10 text-base text-brand-muted"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: 0.5}}
          >
            {note}
          </motion.p>
        ) : null}
      </motion.div>
      </div>
    </section>
  );
}

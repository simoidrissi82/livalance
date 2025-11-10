'use client';

import {motion} from 'framer-motion';
import {CheckCircleIcon} from '@heroicons/react/24/outline';

import {CTAButton} from '../ui/CTAButton';
import {motionVariants} from '@/design-system/tokens';

type ValueItem = {
  title: string;
  body: string;
};

type ValuePropsSectionProps = {
  title: string;
  items: ValueItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export function ValuePropsSection({title, items, ctaLabel, ctaHref}: ValuePropsSectionProps) {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-b from-brand-bg via-white to-brand-surface py-20">
      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-0 h-64 w-64 bg-brand-primary/5 rounded-full blur-3xl z-0" aria-hidden />
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-brand-accent/5 rounded-full blur-3xl z-0" aria-hidden />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6">
      <motion.div
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.6}}
      >
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-bold text-brand-text">{title}</h2>
        </div>
        {ctaLabel && ctaHref ? (
          <CTAButton href={ctaHref} variant="primary">
            {ctaLabel}
          </CTAButton>
        ) : null}
      </motion.div>
      
      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, margin: '-50px'}}
      >
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-brand-gray-200 bg-brand-surface p-8 shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent/15">
                <CheckCircleIcon className="h-6 w-6 text-brand-accent" />
              </div>
              
              <h3 className="font-display text-2xl font-semibold text-brand-text mb-3">
                {item.title}
              </h3>
              
              <p className="text-base leading-relaxed text-brand-muted">{item.body}</p>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-accent via-brand-primary to-pillar-ernaehrung"
              initial={{width: 0}}
              whileInView={{width: '100%'}}
              viewport={{once: true}}
              transition={{duration: 0.8, delay: index * 0.1}}
            />
          </motion.article>
        ))}
      </motion.div>
      </div>
    </section>
  );
}

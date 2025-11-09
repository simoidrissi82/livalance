import {motion} from 'framer-motion';

import {CTAButton} from '../ui/CTAButton';

type LeadMagnetProps = {
  title: string;
  description: string;
  benefits: string[];
  note: string;
  privacy: string;
  ctaLabel: string;
};

export function LeadMagnet({title, description, benefits, note, privacy, ctaLabel}: LeadMagnetProps) {
  return (
    <section className="relative overflow-hidden bg-brand-primary-tint">
      <motion.div
        className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-brand-primary/30 blur-3xl"
        aria-hidden
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute right-[-20%] top-[-30%] h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl"
        aria-hidden
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <motion.div
          className="grid gap-10 rounded-[2rem] border-2 border-white/40 bg-white/95 p-10 shadow-medium backdrop-blur md:grid-cols-[2fr_1fr]"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          <div>
            <motion.h2
              className="font-display text-4xl font-bold text-brand-text"
              initial={{opacity: 0, y: -10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: 0.2}}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-4 text-base leading-relaxed text-brand-text/90"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: 0.3}}
            >
              {description}
            </motion.p>
            <motion.ul
              className="mt-8 space-y-4 text-base text-brand-text/90"
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              variants={{
                hidden: {opacity: 0},
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  className="flex gap-3"
                  variants={{
                    hidden: {opacity: 0, x: -20},
                    visible: {opacity: 1, x: 0}
                  }}
                >
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-primary" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <motion.div
            className="flex flex-col justify-between gap-6 rounded-2xl bg-brand-primary/10 p-8 text-brand-text"
            initial={{opacity: 0, scale: 0.95}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.5}}
          >
            <p className="text-sm text-brand-text/90">{note}</p>
            <CTAButton href="/contact" variant="primary">
              {ctaLabel}
            </CTAButton>
            <p className="text-xs text-brand-text/70">{privacy}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

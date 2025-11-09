'use client';

import {motion} from 'framer-motion';

export function VisionSection({
  title,
  visionLabel,
  missionLabel,
  outcomeLabel,
  vision,
  mission,
  outcome,
  valuesTitle,
  values
}: {
  title: string;
  visionLabel: string;
  missionLabel: string;
  outcomeLabel: string;
  vision: string;
  mission: string;
  outcome: string;
  valuesTitle: string;
  values: string[];
}) {
  const cards = [
    {label: visionLabel, content: vision},
    {label: missionLabel, content: mission},
    {label: outcomeLabel, content: outcome}
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        className="text-center font-display text-4xl font-bold text-brand-text"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-100px'}}
        transition={{duration: 0.6}}
      >
        {title}
      </motion.h2>
      <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.label}
              className="group rounded-3xl border-2 border-white/60 bg-white/80 p-8 text-left shadow-soft backdrop-blur transition-all duration-300 hover:border-brand-primary/40 hover:shadow-medium hover:-translate-y-1"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-50px'}}
              transition={{delay: index * 0.15}}
              whileHover={{scale: 1.03}}
            >
              <motion.h3
                className="text-sm font-bold uppercase tracking-wide text-brand-primary"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{delay: index * 0.15 + 0.2}}
              >
                {card.label}
              </motion.h3>
              <p className="mt-4 text-base leading-relaxed text-brand-text/80">{card.content}</p>
            </motion.article>
          ))}
        </div>

        <motion.aside
          className="rounded-3xl border-2 border-brand-primary/20 bg-gradient-to-br from-brand-primary-tint/40 to-brand-primary-tint/20 p-10 shadow-medium"
          initial={{opacity: 0, x: 30}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.6, delay: 0.3}}
          whileHover={{scale: 1.02}}
        >
          <motion.h3
            className="text-sm font-bold uppercase tracking-wide text-brand-primary"
            initial={{opacity: 0, y: -10}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.5}}
          >
            {valuesTitle}
          </motion.h3>
          <ul className="mt-6 space-y-4">
            {values.map((value, index) => (
              <motion.li
                key={value}
                className="flex gap-3 text-base text-brand-text/80"
                initial={{opacity: 0, x: -10}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1 + 0.6}}
              >
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-primary" />
                <span>{value}</span>
              </motion.li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}

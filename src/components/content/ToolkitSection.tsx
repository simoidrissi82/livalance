'use client';

import {motion} from 'framer-motion';

export function ToolkitSection({title, bullets}: {title: string; bullets: string[]}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <motion.h2
        className="font-display text-4xl font-bold text-white"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-100px'}}
        transition={{duration: 0.6}}
      >
        {title}
      </motion.h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bullets.map((bullet, index) => (
          <motion.li
            key={bullet}
            className="group flex gap-3 rounded-2xl bg-gradient-to-br from-white to-brand-surface p-6 shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-50px'}}
            transition={{delay: index * 0.1}}
            whileHover={{scale: 1.02}}
          >
            <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-brand-accent transition-transform group-hover:scale-150" aria-hidden />
            <span className="text-base text-brand-text/90">{bullet}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

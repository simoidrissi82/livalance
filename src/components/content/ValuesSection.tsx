'use client';

import {motion} from 'framer-motion';

export function ValuesSection({title, items}: {title: string; items: string[]}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <motion.h2
        className="text-center font-display text-4xl font-bold text-brand-text"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-100px'}}
        transition={{duration: 0.6}}
      >
        {title}
      </motion.h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <motion.article
            key={item}
            className="group rounded-3xl border-2 border-brand-primary/20 bg-gradient-to-br from-brand-surface to-white p-8 shadow-soft transition-all duration-300 hover:border-brand-primary/40 hover:shadow-medium hover:-translate-y-1"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-50px'}}
            transition={{delay: index * 0.1}}
            whileHover={{scale: 1.02}}
          >
            <p className="text-base leading-relaxed text-brand-muted">{item}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

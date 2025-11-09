'use client';

import {motion} from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({title, items}: {title: string; items: FAQItem[]}) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <motion.h2
        className="text-center font-display text-5xl font-bold text-brand-text"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-100px'}}
        transition={{duration: 0.6}}
      >
        {title}
      </motion.h2>
      <div className="mt-12 space-y-6">
        {items.map((item, index) => (
          <motion.details
            key={item.question}
            className="group overflow-hidden rounded-3xl border-2 border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur transition-all duration-300 hover:border-brand-primary/30 hover:shadow-medium"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-50px'}}
            transition={{delay: index * 0.1}}
            whileHover={{scale: 1.01}}
          >
            <summary className="flex cursor-pointer items-center justify-between text-left text-xl font-semibold text-brand-text">
              <span>{item.question}</span>
              <motion.span
                className="ml-4 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-primary/10 text-2xl text-brand-primary transition-all group-open:rotate-45 group-open:bg-brand-primary group-open:text-white"
                whileHover={{scale: 1.1}}
              >
                +
              </motion.span>
            </summary>
            <motion.p
              className="mt-4 text-base leading-relaxed text-brand-muted"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.2}}
            >
              {item.answer}
            </motion.p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}

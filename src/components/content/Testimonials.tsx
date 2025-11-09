'use client';

import {motion} from 'framer-motion';
import {UserCircleIcon} from '@heroicons/react/24/solid';

type TestimonialItem = {
  quote: string;
  author: string;
  rating?: number;
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

const cardVariants = {
  hidden: {opacity: 0, y: 30},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export function Testimonials({title, items}: {title: string; items: TestimonialItem[]}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-bg via-brand-surface to-brand-bg py-24">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-10 right-10 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl"
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
      
      <motion.div
        className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-brand-accent/10 blur-3xl"
        aria-hidden
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.6}}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 mb-6"
            initial={{scale: 0.8, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.4}}
          >
            <svg className="h-5 w-5 text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.5l2.9 5.88 6.5.94-4.7 4.58 1.1 6.42L12 17.98 6.2 20.32l1.1-6.42-4.7-4.58 6.5-.94z"/>
            </svg>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">Testimonials</span>
          </motion.div>
          
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text mb-4"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.1}}
          >
            {title}
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            Was unsere Kunden über ihre Erfahrungen sagen
          </motion.p>
        </motion.div>
        
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-100px'}}
        >
          {items.map((item) => (
            <TestimonialCard key={item.author} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({item}: {item: TestimonialItem}) {
  const rating = typeof item.rating === 'number' ? item.rating : null;

  return (
    <motion.figure
      className="group relative flex h-full flex-col rounded-3xl border-2 border-white/60 bg-white/95 p-10 shadow-medium backdrop-blur-sm transition-all duration-300 hover:shadow-strong hover:border-brand-accent/50 hover:-translate-y-2 hover:scale-[1.02]"
      variants={cardVariants}
      whileHover={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-accent/5 to-brand-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative">
        <div className="mb-8 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent/30 to-brand-primary/30 ring-4 ring-white/50"
              whileHover={{scale: 1.1, rotate: 5}}
              transition={{type: 'spring', stiffness: 300}}
            >
              <UserCircleIcon className="h-12 w-12 text-brand-accent" />
            </motion.div>
            
            <div>
              <figcaption className="text-lg font-bold text-brand-text">
                {item.author}
              </figcaption>
              <p className="text-sm text-brand-primary font-medium">Verified Customer</p>
            </div>
          </div>
          
          {/* Decorative accent */}
          <motion.div
            className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-accent/20 to-brand-primary/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>

        {rating ? (
          <div className="mb-6 flex items-center gap-3" aria-label={`Bewertet mit ${rating} von 5 Sternen`}>
            <div className="flex items-center gap-1">
              {Array.from({length: 5}).map((_, index) => (
                <motion.svg
                  key={index}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={`h-5 w-5 ${
                    rating && index < rating ? 'text-brand-accent drop-shadow-sm' : 'text-brand-gray-300'
                  }`}
                  role="img"
                  initial={{opacity: 0, scale: 0, rotate: -180}}
                  whileInView={{opacity: 1, scale: 1, rotate: 0}}
                  viewport={{once: true}}
                  transition={{
                    delay: index * 0.08,
                    type: 'spring',
                    stiffness: 200
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M12 2.5l2.9 5.88 6.5.94-4.7 4.58 1.1 6.42L12 17.98 6.2 20.32l1.1-6.42-4.7-4.58 6.5-.94z"
                  />
                </motion.svg>
              ))}
            </div>
            <span className="text-sm font-bold text-brand-accent">{rating.toFixed(1)} / 5.0</span>
          </div>
        ) : null}

        <blockquote className="relative flex-1 text-base leading-relaxed text-brand-text/90">
          <span className="absolute -left-4 -top-4 text-6xl text-brand-accent/30 font-serif leading-none">"</span>
          <p className="relative pl-4">{item.quote}</p>
        </blockquote>
      </div>
    </motion.figure>
  );
}

'use client';

import {motion} from 'framer-motion';
import {BoltIcon, HeartIcon, MoonIcon, SparklesIcon} from '@heroicons/react/24/outline';

type PillarItem = {
  id: 'sleep' | 'nutrition' | 'activity' | 'mindfulness';
  title: string;
  description: string;
  focusPoints: string[];
};

const gradientMap: Record<PillarItem['id'], string> = {
  sleep: 'from-pillar-schlaf/30 via-pillar-schlaf/5 to-transparent',
  nutrition: 'from-pillar-ernaehrung/30 via-pillar-ernaehrung/5 to-transparent',
  activity: 'from-pillar-bewegung/30 via-pillar-bewegung/5 to-transparent',
  mindfulness: 'from-pillar-achtsamkeit/30 via-pillar-achtsamkeit/5 to-transparent'
};

const iconBgMap: Record<PillarItem['id'], string> = {
  sleep: 'bg-pillar-schlaf/20 text-pillar-schlaf',
  nutrition: 'bg-pillar-ernaehrung/20 text-pillar-ernaehrung',
  activity: 'bg-pillar-bewegung/20 text-pillar-bewegung',
  mindfulness: 'bg-pillar-achtsamkeit/20 text-pillar-achtsamkeit'
};

const iconMap: Record<PillarItem['id'], React.ReactElement> = {
  sleep: <MoonIcon className="h-7 w-7" />,
  nutrition: <SparklesIcon className="h-7 w-7" />,
  activity: <BoltIcon className="h-7 w-7" />,
  mindfulness: <HeartIcon className="h-7 w-7" />
};

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: {opacity: 0, y: 30},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export function PillarsGrid({
  title,
  description,
  items
}: {
  title: string;
  description: string;
  items: PillarItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-surface/30 to-white py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="absolute inset-x-10 top-0 h-full rounded-3xl bg-white/70 blur-3xl" aria-hidden />
      
      <motion.div
        className="relative mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-100px'}}
        transition={{duration: 0.6}}
      >
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-bold text-brand-text">
            {title}
          </h2>
          <p className="mt-4 text-lg text-brand-muted">{description}</p>
        </div>
      </motion.div>
      
      <motion.div
        className="relative grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, margin: '-100px'}}
      >
        {items.map((item) => (
          <motion.article
            key={item.id}
            className="group relative overflow-hidden rounded-3xl border border-white/50 bg-brand-surface/90 p-10 shadow-soft backdrop-blur transition-all duration-300 hover:shadow-medium hover:scale-[1.02]"
            variants={cardVariants}
            whileHover={{y: -4}}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${gradientMap[item.id]} opacity-0`}
              initial={{opacity: 0}}
              whileHover={{opacity: 1}}
              transition={{duration: 0.3}}
              aria-hidden
            />
            
            <div className="relative flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <motion.div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl ${iconBgMap[item.id]} transition-transform`}
                  whileHover={{scale: 1.1, rotate: 5}}
                  transition={{type: 'spring', stiffness: 300}}
                >
                  {iconMap[item.id]}
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-brand-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-brand-muted">{item.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-base text-brand-text/80">
                {item.focusPoints.map((point, index) => (
                  <motion.li
                    key={point}
                    className="flex gap-3 items-start"
                    initial={{opacity: 0, x: -10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: index * 0.1}}
                  >
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-accent" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
      </div>
    </section>
  );
}

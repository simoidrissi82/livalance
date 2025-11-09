'use client';

import {motion} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';
import {HeartIcon, SparklesIcon, EnvelopeIcon} from '@heroicons/react/24/outline';

import {Link} from '@/i18n/routing';

import {NewsletterForm} from '../forms/NewsletterForm';

const pillarIcons = [
  {color: 'text-pillar-schlaf', icon: SparklesIcon},
  {color: 'text-pillar-ernaehrung', icon: SparklesIcon},
  {color: 'text-pillar-bewegung', icon: SparklesIcon},
  {color: 'text-pillar-achtsamkeit', icon: HeartIcon}
];

export function Footer() {
  const tFooter = useTranslations('footer');
  const tLegal = useTranslations('legal');
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-accent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-pillar-ernaehrung blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Brand section */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent/20">
                <HeartIcon className="h-6 w-6 text-brand-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">
                Livalance
              </h2>
            </div>
            
            <p className="mb-6 max-w-md text-base leading-relaxed text-white/80">
              {tFooter('tagline')}
            </p>

            {/* Pillar badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {pillarIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ${item.color}`}
                  whileHover={{scale: 1.1, rotate: 5}}
                  transition={{type: 'spring', stiffness: 300}}
                >
                  <item.icon className="h-4 w-4" />
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-white/60">
              {tFooter('rights', {year})}
            </p>
          </motion.div>

          {/* Newsletter section */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.1}}
          >
            <div className="mb-4 flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-brand-accent" />
              <h3 className="font-display text-lg font-semibold text-white">
                {tFooter('newsletterLabel')}
              </h3>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/20 shadow-medium">
              <NewsletterForm />
            </div>
          </motion.div>

          {/* Social & Links section */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <h3 className="mb-4 font-display text-lg font-semibold text-white">
              {tFooter('follow')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-white/80 transition-colors hover:text-brand-accent"
                >
                  <span className="h-1 w-1 rounded-full bg-brand-accent transition-transform group-hover:scale-150" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-white/80 transition-colors hover:text-brand-accent"
                >
                  <span className="h-1 w-1 rounded-full bg-brand-accent transition-transform group-hover:scale-150" />
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Legal links */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-8"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.3}}
        >
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href="/legal/imprint"
              className="text-white/60 transition-colors hover:text-white"
            >
              {tLegal('imprint')}
            </Link>
            <Link
              href="/legal/privacy"
              className="text-white/60 transition-colors hover:text-white"
            >
              {tLegal('privacy')}
            </Link>
            <Link
              href="/legal/terms"
              className="text-white/60 transition-colors hover:text-white"
            >
              {tLegal('terms')}
            </Link>
            <Link
              href="/legal/cancellation"
              className="text-white/60 transition-colors hover:text-white"
            >
              {tLegal('cancellation')}
            </Link>
          </div>
          
          <div className="text-sm text-white/60">
            Made with <span className="text-red-400">♥</span> for your wellbeing
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

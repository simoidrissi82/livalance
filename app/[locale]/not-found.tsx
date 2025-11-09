'use client';

import {motion} from 'framer-motion';
import {HomeIcon, MagnifyingGlassIcon, ArrowLeftIcon} from '@heroicons/react/24/outline';
import {useRouter} from 'next/navigation';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/routing';

export default function NotFound() {
  const router = useRouter();
  const t = useTranslations('notFound');
  
  return (
    <div className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-brand-bg">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet="/images/brand/background.webp" type="image/webp" />
          <img
            src="/images/brand/background.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="eager"
            aria-hidden="true"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-bg/95 via-brand-bg/90 to-brand-bg/85" aria-hidden />
      </div>

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl"
        aria-hidden
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
        className="absolute bottom-[-4rem] right-[-6rem] h-[32rem] w-[32rem] rounded-full bg-brand-accent/10 blur-3xl"
        aria-hidden
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.div
            initial={{scale: 0.8, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <h1 className="font-display text-8xl sm:text-9xl font-bold text-brand-primary/20">
              404
            </h1>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{scale: 0, rotate: -180}}
            animate={{scale: 1, rotate: 0}}
            transition={{duration: 0.6, delay: 0.3, type: 'spring'}}
            className="flex justify-center"
          >
            <div className="rounded-full bg-brand-primary/10 p-6">
              <MagnifyingGlassIcon className="h-16 w-16 text-brand-primary" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.4}}
          >
            {t('title')}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mx-auto max-w-2xl text-lg sm:text-xl text-brand-muted"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.5}}
          >
            {t('description')}
          </motion.p>

          {/* Actions */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.6}}
          >
            <button
              onClick={() => router.back()}
              className="group inline-flex items-center gap-2 rounded-2xl border-2 border-brand-primary bg-brand-primary-tint px-8 py-4 text-base font-semibold text-brand-text shadow-soft transition-all duration-300 hover:scale-105 hover:bg-brand-primary hover:text-white hover:shadow-medium w-full sm:w-auto"
            >
              <ArrowLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              {t('goBack')}
            </button>
            
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-2xl bg-brand-primary px-8 py-4 text-base font-semibold text-white shadow-medium transition-all duration-300 hover:scale-105 hover:shadow-strong w-full sm:w-auto"
            >
              <HomeIcon className="h-5 w-5" />
              {t('goHome')}
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="pt-12 border-t border-brand-text/10"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
          >
            <p className="text-sm text-brand-muted mb-4">{t('suggestions')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/workshops"
                className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-brand-text transition-all hover:bg-brand-primary hover:text-white hover:scale-105 shadow-soft"
              >
                {t('workshops')}
              </Link>
              <Link
                href="/pillars"
                className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-brand-text transition-all hover:bg-brand-primary hover:text-white hover:scale-105 shadow-soft"
              >
                {t('pillars')}
              </Link>
              <Link
                href="/insights"
                className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-brand-text transition-all hover:bg-brand-primary hover:text-white hover:scale-105 shadow-soft"
              >
                {t('insights')}
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-brand-text transition-all hover:bg-brand-primary hover:text-white hover:scale-105 shadow-soft"
              >
                {t('contact')}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import Image from 'next/image';
import {useState, useEffect} from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';

import {Link} from '@/i18n/routing';

import type {HeaderNavItem} from './Header';
import {CTAButton} from '../ui/CTAButton';
import {LocaleSwitcher} from './LocaleSwitcher';

type HeaderClientProps = {
  locale: string;
  navItems: HeaderNavItem[];
  ctaLabel: string;
};

export function HeaderClient({locale, navItems, ctaLabel}: HeaderClientProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = () => setOpen((value) => !value);

  const close = () => setOpen(false);

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
      scrolled 
        ? 'border-slate-200 bg-white/95 backdrop-blur-md shadow-sm' 
        : 'border-white/20 bg-black/20 backdrop-blur-md'
    }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link
            href="/"
            className={`inline-flex items-center transition-opacity duration-300 ${
              scrolled ? 'opacity-100' : 'opacity-95'
            }`}
            aria-label="Livalance"
          >
            <Image
              src="/images/brand/logo_new.png"
              alt="Livalance"
              width={220}
              height={48}
              className={`h-12 md:h-14 w-auto transition-all duration-300 ${
                scrolled 
                  ? 'brightness-100' 
                  : 'brightness-100 drop-shadow-lg'
              } ${scrolled ? '' : 'logo-no-bg'}`}
              priority
              sizes="(max-width: 768px) 176px, 220px"
            />
            <span className="sr-only">Livalance</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-4 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href as any}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition whitespace-nowrap ${
                scrolled
                  ? 'text-brand-text hover:bg-brand-primary-tint hover:text-brand-primary'
                  : 'text-white drop-shadow-md hover:bg-white/20 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex md:ml-8">
          <LocaleSwitcher currentLocale={locale} scrolled={scrolled} />
          <CTAButton href="/contact">{ctaLabel}</CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-brand-text md:hidden"
          onClick={toggle}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full w-full border-b border-slate-200 bg-brand-surface shadow-soft md:hidden"
        >
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href as any}
                className="rounded-xl px-3 py-2 text-sm font-medium text-brand-text hover:bg-brand-primary-tint"
                onClick={close}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex items-center gap-3">
              <LocaleSwitcher currentLocale={locale} scrolled={true} />
              <CTAButton href="/contact" width="full">
                {ctaLabel}
              </CTAButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

"use client";

import Image from 'next/image';
import {useState} from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';

import {Link} from '@/i18n/routing';

import type {HeaderNavItem} from './Header';
import {CTAButton} from './CTAButton';
import {LocaleSwitcher} from './LocaleSwitcher';

type HeaderClientProps = {
  locale: string;
  navItems: HeaderNavItem[];
  ctaLabel: string;
};

export function HeaderClient({locale, navItems, ctaLabel}: HeaderClientProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((value) => !value);

  const close = () => setOpen(false);

  return (
    <header className="bg-brand-bg/80 sticky top-0 z-50 border-b border-slate-100 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-text"
            aria-label="Livalance"
          >
            <Image
              src="/images/brand/livalance-mark.svg"
              alt="Livalance"
              width={220}
              height={48}
              className="h-12 w-auto"
              priority
            />
            <span className="sr-only">Livalance</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-4 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="hover:bg-brand-primary-tint rounded-xl px-3 py-2 text-sm font-medium text-brand-muted transition hover:text-brand-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher currentLocale={locale} />
          <CTAButton href="/contact">{ctaLabel}</CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-brand-text md:hidden"
          onClick={toggle}
          aria-label="Toggle navigation"
        >
          {open ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
        </button>
      </div>

      {open ? (
        <div className="absolute left-0 top-full w-full border-b border-slate-200 bg-brand-surface shadow-soft md:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="hover:bg-brand-primary-tint rounded-xl px-3 py-2 text-sm font-medium text-brand-text"
                onClick={close}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex items-center gap-3">
              <LocaleSwitcher currentLocale={locale} />
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

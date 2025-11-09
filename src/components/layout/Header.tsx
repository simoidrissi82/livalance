'use client';

import {useTranslations, useLocale} from 'next-intl';

import {NAV_LINKS} from '@/config/navigation';

import {HeaderClient} from './HeaderClient';

export function Header() {
  const locale = useLocale();
  const navTranslations = useTranslations('nav');
  const ctaTranslations = useTranslations('cta');

  const navItems = NAV_LINKS.map((item) => ({
    key: item.key,
    href: {pathname: item.href},
    label: navTranslations(item.key as any)
  }));

  return (
    <HeaderClient
      locale={locale}
      navItems={navItems}
      ctaLabel={ctaTranslations('bookIntro')}
    />
  );
}

export type HeaderNavItem = {
  key: string;
  href: {pathname: string};
  label: string;
};

import {getLocale, getTranslations} from 'next-intl/server';

import {NAV_LINKS} from '@/config/navigation';
import type {AppLocale} from '@/i18n/routing';

import {HeaderClient} from './HeaderClient';

export async function Header() {
  const locale = (await getLocale()) as AppLocale;
  const navTranslations = await getTranslations('nav');
  const ctaTranslations = await getTranslations('cta');

  const navItems = NAV_LINKS.map((item) => ({
    key: item.key,
    href: {pathname: item.href},
    label: navTranslations(item.key)
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

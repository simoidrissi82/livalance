import {getLocale, getTranslations} from 'next-intl/server';

import {NAV_LINKS} from '@/config/navigation';

import {CTAButton} from './CTAButton';
import {LocaleSwitcher} from './LocaleSwitcher';
import {HeaderClient} from './HeaderClient';

export async function Header() {
  const locale = await getLocale();
  const navTranslations = await getTranslations('nav');
  const ctaTranslations = await getTranslations('cta');

  const navItems = NAV_LINKS.map((item) => ({
    ...item,
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
  href: string;
  label: string;
};

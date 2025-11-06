export const NAV_LINKS = [
  {key: 'home', href: '/'},
  {key: 'workshops', href: '/workshops'},
  {key: 'pillars', href: '/pillars'},
  {key: 'insights', href: '/insights'},
  {key: 'about', href: '/about'},
  {key: 'contact', href: '/contact'}
] as const;

export type NavKey = (typeof NAV_LINKS)[number]['key'];

import { Navlinks } from '@/app/types/navbar';

export const navlinks: Navlinks[] = [
  { id: 1, name: 'about', href: '/about' },
  { id: 2, name: 'flowers', href: '/flowers' },
  { id: 4, name: 'login', href: '/login' },
];

export const adminNavlinks: Navlinks[] = [
  { id: 3, name: 'dashboard', href: '/admin' },
  { id: 2, name: 'flowers', href: '/admin/list' },
  { id: 1, name: 'create', href: '/admin/create' },
  // { id: 4, name: 'logout', href: '/logout' },
];

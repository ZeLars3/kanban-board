import { RoutePaths } from '@core/enums';

import { INavItem } from '../models';

export const NAV_ITEMS: INavItem[] = [
  {
    name: 'Home',
    path: RoutePaths.Home,
  },
  {
    name: '🍱 Kanban',
    path: RoutePaths.Kanban,
  },
  {
    name: '⚡ SSR',
    path: RoutePaths.SSR,
  },
  {
    name: '🔑 Login',
    path: RoutePaths.Login,
  },
];

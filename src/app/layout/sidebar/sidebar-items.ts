import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard/main',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    icon: '',
    class: '',
    groupTitle: false,
    submenu: [],
  },

  {
    path: '/pages/category',
    title: 'MENUITEMS.CATEGORY.TEXT',
    icon: 'monitor',
    class: '',
    groupTitle: false,
    submenu: [],
  },

  {
    path: '/pages/product',
    title: 'MENUITEMS.PRODUCT.TEXT',
    icon: '',
    class: '',
    groupTitle: false,
    submenu: [],
  },

  {
    path: '/pages/payment',
    title: 'MENUITEMS.PAYMENT.TEXT',
    icon: '',
    class: '',
    groupTitle: false,
    submenu: [],
  },

  {
    path: '',
    title: 'MENUITEMS.USER.TEXT',
    icon: '',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/pages/user',
        title: 'MENUITEMS.USER.LIST.USERS',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: [],
      },
      {
        path: '/pages/role',
        title: 'MENUITEMS.USER.LIST.ROLE',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: [],
      }
    ],
  },

];
import { RouteInfo } from './sidebar.metadata';
import { 
  Home, 
  Tag, 
  Box, 
  ShoppingCart, 
  User, 
  Shield 
} from 'angular-feather/icons'; // Import Feather icons

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard/main',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    icon: 'Home', // Feather icon
    class: '',
    groupTitle: false,
    submenu: [],
  },
  {
    path: '/pages/category',
    title: 'MENUITEMS.CATEGORY.TEXT',
    icon: 'Tag', // Feather icon
    class: '',
    groupTitle: false,
    submenu: [],
  },
  {
    path: '/pages/product',
    title: 'MENUITEMS.PRODUCT.TEXT',
    icon: 'Box', // Feather icon
    class: '',
    groupTitle: false,
    submenu: [],
  },
  {
    path: '/pages/order',
    title: 'MENUITEMS.PAYMENT.TEXT',
    icon: 'Box',
    class: '',
    groupTitle: false,
    submenu: [],
  },
  {
    path: '/pages/user',
    title: 'MENUITEMS.USER.TEXT',
    icon: 'User', 
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: '/pages/role',
    title: 'MENUITEMS.ROLE.TEXT',
    icon: 'Shield', // Feather icon
    class: '',
    groupTitle: false,
    submenu: [],
  },
];

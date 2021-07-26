export const ROUTES: RouteInfo[] = [
    {
        path: '/home',
        title: 'Dashboard',
        icon: 'fa fa-tachometer',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/users',
        title: 'users',
        icon: 'fa fa-sitemap',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
   
];


// Sidebar route metadata
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    label: string;
    labelClass: string;
    extralink: boolean;
    submenu: RouteInfo[];
  }
  
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string,       // Possible values: link/dropDown/icon/separator/extLink
  name?: string,      // Used as display text for item and title for separator type
  state?: string,     // Router state
  icon?: string,      // Material icon name
  tooltip?: string,   // Tooltip text
  disabled?: boolean, // If true, item will not be appeared in sidenav.
  sub?: IChildItem[], // Dropdown items
  badges?: IBadge[]
}
interface IChildItem {
  type?: string,
  name: string,       // Display text
  state?: string,     // Router state
  icon?: string,
  sub?: IChildItem[]
}

interface IBadge {
  color: string;      // primary/accent/warn/hex color codes(#fff000)
  value: string;      // Display text
}

@Injectable()
export class NavigationService {
  constructor() { }
  separatorMenu: IMenuItem[] = [];
  defaultMenu: IMenuItem[] = [];
  // defaultMenu: IMenuItem[] = [
  //   {
  //     name: 'DASHBOARD',
  //     type: 'link',
  //     tooltip: 'Dashboard',
  //     icon: 'dashboard',
  //     state: 'dashboard'
  //   },
  //   {
  //     name: 'INBOX',
  //     type: 'link',
  //     tooltip: 'Inbox',
  //     icon: 'inbox',
  //     state: 'inbox'
  //   },
  //   {
  //     name: 'CHAT',
  //     type: 'link',
  //     tooltip: 'Chat',
  //     icon: 'chat',
  //     state: 'chat'
  //   },
  //   {
  //     name: 'Category',
  //     type: 'link',
  //     tooltip: 'Category',
  //     icon: 'category',
  //     state: 'Category'
  //   },
  //   {
  //     name: 'CALENDAR',
  //     type: 'link',
  //     tooltip: 'Calendar',
  //     icon: 'date_range',
  //     state: 'calendar'
  //   },
  //   {
  //     name: 'DIALOGS',
  //     type: 'dropDown',
  //     tooltip: 'Dialogs',
  //     icon: 'filter_none',
  //     state: 'dialogs',
  //     sub: [
  //       { name: 'CONFIRM', state: 'confirm' },
  //       { name: 'LOADER', state: 'loader' },
  //     ]
  //   },
  //   {
  //     name: 'MATERIAL',
  //     type: 'dropDown',
  //     tooltip: 'Material',
  //     icon: 'favorite',
  //     state: 'material',
  //     sub: [
  //       { name: 'BUTTONS', state: 'buttons' },
  //       { name: 'CARDS', state: 'cards' },
  //       { name: 'GRIDS', state: 'grids' },
  //       { name: 'LISTS', state: 'lists' },
  //       { name: 'MENU', state: 'menu' },
  //       { name: 'TABS', state: 'tabs' },
  //       { name: 'SELECT', state: 'select' },
  //       { name: 'RADIO', state: 'radio' },
  //       { name: 'AUTOCOMPLETE', state: 'autocomplete' },
  //       { name: 'SLIDER', state: 'slider' },
  //       { name: 'PROGRESS', state: 'progress' },
  //       { name: 'SNACKBAR', state: 'snackbar' },
  //     ]
  //   },
  //   {
  //     name: 'FORMS',
  //     type: 'dropDown',
  //     tooltip: 'Forms',
  //     icon: 'description',
  //     state: 'forms',
  //     sub: [
  //       { name: 'BASIC', state: 'basic' },
  //       { name: 'EDITOR', state: 'editor' },
  //       { name: 'UPLOAD', state: 'upload' },
  //       { name: 'WIZARD', state: 'wizard' }
  //     ]
  //   },
  //   {
  //     name: 'TABLES',
  //     type: 'dropDown',
  //     tooltip: 'Tables',
  //     icon: 'format_line_spacing',
  //     state: 'tables',
  //     sub: [
  //       { name: 'FULLSCREEN', state: 'fullscreen' },
  //       { name: 'PAGING', state: 'paging' },
  //       { name: 'FILTER', state: 'filter' },
  //     ]
  //   },
  //   {
  //     name: 'PROFILE',
  //     type: 'dropDown',
  //     tooltip: 'Profile',
  //     icon: 'person',
  //     state: 'profile',
  //     sub: [
  //       { name: 'OVERVIEW', state: 'overview' },
  //       { name: 'SETTINGS', state: 'settings' },
  //       { name: 'BLANK', state: 'blank' },
  //     ]
  //   },
  //   {
  //     name: 'Products',
  //     type: 'link',
  //     tooltip: 'Products',
  //     icon: 'add',
  //     state: 'Products'
  //   },
  //   {
  //     name: 'Orders',
  //     type: 'link',
  //     tooltip: 'Orders',
  //     icon: 'description',
  //     state: 'Orders'
  //   },
  //   {
  //     name: 'CHARTS',
  //     type: 'link',
  //     tooltip: 'Charts',
  //     icon: 'show_chart',
  //     state: 'charts'
  //   },
  //   {
  //     name: 'DND',
  //     type: 'link',
  //     tooltip: 'Drag and Drop',
  //     icon: 'adjust',
  //     state: 'dragndrop'
  //   },
  //   {
  //     name: 'SESSIONS',
  //     type: 'dropDown',
  //     tooltip: 'Pages',
  //     icon: 'view_carousel',
  //     state: 'sessions',
  //     sub: [
  //       { name: 'SIGNUP', state: 'signup' },
  //       { name: 'SIGNIN', state: 'signin' },
  //       { name: 'FORGOT', state: 'forgot-password' },
  //       { name: 'LOCKSCREEN', state: 'lockscreen' },
  //       { name: 'NOTFOUND', state: '404' },
  //       { name: 'ERROR', state: 'error' }
  //     ]
  //   },
  //   {
  //     name: 'OTHERS',
  //     type: 'dropDown',
  //     tooltip: 'Others',
  //     icon: 'blur_on',
  //     state: 'others',
  //     sub: [
  //       { name: 'GALLERY', state: 'gallery' },
  //       { name: 'PRICINGS', state: 'pricing' },
  //       { name: 'USERS', state: 'users' },
  //       { name: 'BLANK', state: 'blank' },
  //     ]
  //   },
  //   {
  //     name: 'MATICONS',
  //     type: 'link',
  //     tooltip: 'Material Icons',
  //     icon: 'store',
  //     state: 'icons'
  //   },
  //   {
  //     name: 'DOC',
  //     type: 'extLink',
  //     tooltip: 'Documentation',
  //     icon: 'library_books',
  //     state: 'http://egret-doc.mhrafi.com/'
  //   }
  // ]
  // separatorMenu: IMenuItem[] = [
  //   {
  //     type: 'separator',
  //     name: 'Custom components'
  //   },
  //   {
  //     name: 'DASHBOARD',
  //     type: 'link',
  //     tooltip: 'Dashboard',
  //     icon: 'dashboard',
  //     state: 'dashboard'
  //   },
  //   {
  //     name: 'INBOX',
  //     type: 'link',
  //     tooltip: 'Inbox',
  //     icon: 'inbox',
  //     state: 'inbox'
  //   },
  //   {
  //     name: 'CHAT',
  //     type: 'link',
  //     tooltip: 'Chat',
  //     icon: 'chat',
  //     state: 'chat'
  //   },
  //   {
  //     name: 'Category',
  //     type: 'link',
  //     tooltip: 'Category',
  //     icon: 'category',
  //     state: 'Category'
  //   },
  //   {
  //     name: 'DIALOGS',
  //     type: 'dropDown',
  //     tooltip: 'Dialogs',
  //     icon: 'filter_none',
  //     state: 'dialogs',
  //     sub: [
  //       { name: 'CONFIRM', state: 'confirm' },
  //       { name: 'LOADER', state: 'loader' },
  //     ]
  //   },
  //   {
  //     name: 'PROFILE',
  //     type: 'dropDown',
  //     tooltip: 'Profile',
  //     icon: 'person',
  //     state: 'profile',
  //     sub: [
  //       { name: 'OVERVIEW', state: 'overview' },
  //       { name: 'SETTINGS', state: 'settings' },
  //       { name: 'BLANK', state: 'blank' },
  //     ]
  //   },
  //   {
  //     name: 'GENERAL',
  //     type: 'link',
  //     tooltip: 'GENERAL',
  //     icon: 'add',
  //     state: 'GENERAL'
  //   },
  //   {
  //     type: 'separator',
  //     name: 'Integrated components'
  //   },
  //   {
  //     name: 'CALENDAR',
  //     type: 'link',
  //     tooltip: 'Calendar',
  //     icon: 'date_range',
  //     state: 'calendar'
  //   },
  //   {
  //     name: 'MATERIAL',
  //     type: 'dropDown',
  //     tooltip: 'Material',
  //     icon: 'favorite',
  //     state: 'material',
  //     sub: [
  //       { name: 'BUTTONS', state: 'buttons' },
  //       { name: 'CARDS', state: 'cards' },
  //       { name: 'GRIDS', state: 'grids' },
  //       { name: 'LISTS', state: 'lists' },
  //       { name: 'MENU', state: 'menu' },
  //       { name: 'TABS', state: 'tabs' },
  //       { name: 'SELECT', state: 'select' },
  //       { name: 'RADIO', state: 'radio' },
  //       { name: 'AUTOCOMPLETE', state: 'autocomplete' },
  //       { name: 'SLIDER', state: 'slider' },
  //       { name: 'PROGRESS', state: 'progress' },
  //       { name: 'SNACKBAR', state: 'snackbar' },
  //     ]
  //   },
  //   {
  //     name: 'FORMS',
  //     type: 'dropDown',
  //     tooltip: 'Forms',
  //     icon: 'description',
  //     state: 'forms',
  //     sub: [
  //       { name: 'BASIC', state: 'basic' },
  //       { name: 'EDITOR', state: 'editor' },
  //       { name: 'UPLOAD', state: 'upload' },
  //       { name: 'WIZARD', state: 'wizard' }
  //     ]
  //   },
  //   {
  //     name: 'TABLES',
  //     type: 'dropDown',
  //     tooltip: 'Tables',
  //     icon: 'format_line_spacing',
  //     state: 'tables',
  //     sub: [
  //       { name: 'FULLSCREEN', state: 'fullscreen' },
  //       { name: 'PAGING', state: 'paging' },
  //       { name: 'FILTER', state: 'filter' },
  //     ]
  //   },
  //   {
  //     name: 'Orders',
  //     type: 'link',
  //     tooltip: 'Orders',
  //     icon: 'description',
  //     state: 'Orders'
  //   },
  //   {
  //     name: 'CHARTS',
  //     type: 'link',
  //     tooltip: 'Charts',
  //     icon: 'show_chart',
  //     state: 'charts'
  //   },
  //   {
  //     name: 'DND',
  //     type: 'link',
  //     tooltip: 'Drag and Drop',
  //     icon: 'adjust',
  //     state: 'dragndrop'
  //   },
  //   {
  //     type: 'separator',
  //     name: 'Other components'
  //   },
  //   {
  //     name: 'SESSIONS',
  //     type: 'dropDown',
  //     tooltip: 'Pages',
  //     icon: 'view_carousel',
  //     state: 'sessions',
  //     sub: [
  //       { name: 'SIGNUP', state: 'signup' },
  //       { name: 'SIGNIN', state: 'signin' },
  //       { name: 'FORGOT', state: 'forgot-password' },
  //       { name: 'LOCKSCREEN', state: 'lockscreen' },
  //       { name: 'NOTFOUND', state: '404' },
  //       { name: 'ERROR', state: 'error' }
  //     ]
  //   },
  //   {
  //     name: 'OTHERS',
  //     type: 'dropDown',
  //     tooltip: 'Others',
  //     icon: 'blur_on',
  //     state: 'others',
  //     sub: [
  //       { name: 'GALLERY', state: 'gallery' },
  //       { name: 'PRICINGS', state: 'pricing' },
  //       { name: 'USERS', state: 'users' },
  //       { name: 'BLANK', state: 'blank' },
  //     ]
  //   },
  //   {
  //     name: 'MATICONS',
  //     type: 'link',
  //     tooltip: 'Material Icons',
  //     icon: 'store',
  //     state: 'icons'
  //   },
  //   {
  //     name: 'DOC',
  //     type: 'extLink',
  //     tooltip: 'Documentation',
  //     icon: 'library_books',
  //     state: 'http://egret-doc.mhrafi.com/'
  //   }
  // ]
  iconMenu: IMenuItem[] = [
    // {
    //   name: 'HOME',
    //   type: 'icon',
    //   tooltip: 'Home',
    //   icon: 'home',
    //   state: 'home'
    // },
    // {
    //   name: 'PROFILE',
    //   type: 'icon',
    //   tooltip: 'Profile',
    //   icon: 'person',
    //   state: 'profile/overview'
    // },
    // {
    //   name: 'GENERAL',
    //   type: 'link',
    //   tooltip: 'GENERAL',
    //   icon: 'add',
    //   state: 'GENERAL'
    // },
    {
      type: 'separator',
      name: 'MENU'
    },
   {
      name: 'Products',
      type: 'link',
      tooltip: 'Products',
     icon: 'dashboard',
       state: 'Products'
      //  badges: [{ color: 'accent', value: '' }],
   },
    {
      name: 'Category',
      type: 'link',
      tooltip: 'Category',
      icon: 'category',
      state: 'Category'
    },

    // {
    //   name: 'Delivery Boy',
    //   type: 'link',
    //   tooltip: 'Delivery Boy',
    //   icon: 'motorcycle',
    //   state: 'DeliveryBoy'
    // },


    // {
    //   name: 'Products',
    //   type: 'link',
    //   tooltip: 'Products',
    //   icon: 'add',
    //   state: 'Products'
    // },
    {
      name: 'Orders',
      type: 'link',
      tooltip: 'Orders',
      icon: 'description',
      state: 'Orders'
    },
    {
      name: 'Dispatcher',
      type: 'link',
      tooltip: 'Dispatcher',
      icon: 'motorcycle',
      state: 'Delivery'
    },
    {
      name: 'Custom Order',
      type: 'link',
      tooltip: 'Create Order',
      icon: 'view_list',
      state: 'CreateOrder'
    },
    {
        name: 'Trip',
        type: 'link',
        tooltip: 'Trip',
        icon: 'local_shipping',
        state: 'trip'
      },

    {
      name: 'Configuration',
      type: 'link',
      tooltip: 'Configuration',
      icon: 'settings',
      state: 'Configuration'
    },
    // {
    //   name: 'SESSIONS',
    //   type: 'dropDown',
    //   tooltip: 'Pages',
    //   icon: 'view_carousel',
    //   state: 'sessions',
    //   sub: [
    //     { name: 'SIGNUP', state: 'signup' },
    //     { name: 'SIGNIN', state: 'signin' },
    //     { name: 'FORGOT', state: 'forgot-password' },
    //     { name: 'LOCKSCREEN', state: 'lockscreen' },
    //     { name: 'NOTFOUND', state: '404' },
    //     { name: 'ERROR', state: 'error' }
    //   ]
    // },
    // {
    //   name: 'OTHERS',
    //   type: 'dropDown',
    //   tooltip: 'Others',
    //   icon: 'blur_on',
    //   state: 'others',
    //   sub: [
    //     { name: 'GALLERY', state: 'gallery' },
    //     { name: 'PRICINGS', state: 'pricing' },
    //     { name: 'USERS', state: 'users' },
    //     { name: 'BLANK', state: 'blank' }
    //   ]
    // },
    // 
    // {
    //   name: 'Multi Level',
    //   type: 'dropDown',
    //   tooltip: 'Multi Level',
    //   icon: 'format_align_center',
    //   state: '',
    //   sub: [
    //     {
    //       name: 'Level Two', type: 'dropDown', state: 'fake-1', sub: [
    //         { name: 'Level Three', state: 'fake-2' },
    //         { name: 'Level Three', state: 'fake-3' }
    //       ]
    //     },
    //     { name: 'Level Two', state: 'fake-4' },
    //     { name: 'Level Two', state: 'fake-5' }
    //   ]
    // },
    // {
    //   name: 'DOC',
    //   type: 'extLink',
    //   tooltip: 'Documentation',
    //   icon: 'library_books',
    //   state: 'http://egret-doc.mhrafi.com/'
    // }
  ]

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
   iconTypeMenuTitle: string = '';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    switch (menuType) {
      case 'separator-menu':
        this.menuItems.next(this.separatorMenu);
        break;
      case 'icon-menu':
        this.menuItems.next(this.iconMenu);
        break;
      default:
        this.menuItems.next(this.defaultMenu);
    }
  }
}

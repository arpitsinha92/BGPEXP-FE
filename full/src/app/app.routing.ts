import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
  {
     path: '',
      redirectTo: 'home',
      pathMatch: 'full'

    // path: '',
    // loadChildren: './views/website/website.module#WebsiteModule',
    // data: { title: 'Website', breadcrumb: 'WEBSITE'}
    // path: ' ',
    // redirectTo: './views/website/website.module#WebsiteModule',
    // pathMatch: 'full'

  },
  {
    path: 'home',
    loadChildren: './views/home/home.module#HomeModule',
    data: { title: 'Bhagalpur Express' }
  },

  {
    path: 'Website',
    loadChildren: './views/website/website.module#WebsiteModule',
    data: { title: 'Bhagalpur Express' }
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session'}
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'Products',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        data: { title: 'Products', breadcrumb: 'Products'}
      },
      {
        path: 'material',
        loadChildren: './views/material/app-material.module#AppMaterialModule',
        data: { title: 'Material', breadcrumb: 'MATERIAL'}
      },
      {
        path: 'dialogs',
        loadChildren: './views/app-dialogs/app-dialogs.module#AppDialogsModule',
        data: { title: 'Dialogs', breadcrumb: 'DIALOGS'}
      },
      {
        path: 'CreateOrder',
        loadChildren: './views/profile/profile.module#ProfileModule',
        data: { title: 'Custom Order', breadcrumb: 'Custom Order'}
      },
      {
        path: 'others',
        loadChildren: './views/others/others.module#OthersModule',
        data: { title: 'Others', breadcrumb: 'OTHERS'}
      },
      {
        path: 'tables',
        loadChildren: './views/tables/tables.module#TablesModule',
        data: { title: 'Tables', breadcrumb: 'TABLES'}
      },
      {


        path: 'Category',
        loadChildren: './views/app-tour/app-tour.module#AppTourModule',
        data: { title: 'Category', breadcrumb: 'Category'}
      },

      // {
      //   path: 'DeliveryBoy',
      //   loadChildren: './views/delivery-boy/delivery-boy.module#DeliveryBoyModule',
      //   data: { title: 'DeliveryBoy', breadcrumb: 'Delivery Boy'}
      // },
      {
        path: 'forms',
        loadChildren: './views/forms/forms.module#AppFormsModule',
        data: { title: 'Forms', breadcrumb: 'FORMS'}
      },
      {
        path: 'Delivery',
        loadChildren: './views/charts/charts.module#AppChartsModule',
        data: { title: 'Dispatcher', breadcrumb: 'Dispatcher'}
      },
      {
        path: 'Orders',
        loadChildren: './views/map/map.module#AppMapModule',
        data: { title: 'Orders', breadcrumb: 'Orders'}
      },
      {
        path: 'Configuration',
        loadChildren: './views/dragndrop/dragndrop.module#DragndropModule',
        data: { title: 'Configuration', breadcrumb: 'Configuration'}
      },
      {
        path: 'inbox',
        loadChildren: './views/app-inbox/app-inbox.module#AppInboxModule',
        data: { title: 'Inbox', breadcrumb: 'INBOX'}
      },
      {
        path: 'calendar',
        loadChildren: './views/app-calendar/app-calendar.module#AppCalendarModule',
        data: { title: 'Calendar', breadcrumb: 'CALENDAR'}
      },
      {
        path: 'chat',
        loadChildren: './views/app-chats/app-chats.module#AppChatsModule',
        data: { title: 'Chat', breadcrumb: 'CHAT'}
      },
      {

        path: 'Productsx',
        loadChildren: './views/cruds/cruds.module#CrudsModule',
        data: { title: 'Productsx', breadcrumb: 'Productsx'}

      },
      {
        path: 'shop',
        loadChildren: './views/shop/shop.module#ShopModule',
        data: { title: 'Shop', breadcrumb: 'SHOP'}
      },
      {
        path: 'trip',
        loadChildren: './views/mat-icons/mat-icons.module#MatIconsModule',
        data: { title: 'Trip', breadcrumb: 'Trip'}
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];


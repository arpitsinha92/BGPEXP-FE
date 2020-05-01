import { Routes } from '@angular/router';

import { WebsiteComponent } from './website.component';


export const WebsiteRoutes: Routes = [
  { path: '', component: WebsiteComponent, data: { title: 'Website' } }
];
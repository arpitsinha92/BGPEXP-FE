import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
 
  import {MatCardModule} from '@angular/material/card';
  import {MatMenuModule} from '@angular/material/menu';
  import {MatProgressBarModule} from '@angular/material/progress-bar';
  import {MatButtonModule} from '@angular/material/button';
  import {MatChipsModule} from '@angular/material/chips';
  import {MatListModule} from '@angular/material/list';
  import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';

import { WebsiteComponent } from './website.component';
import {WebsiteRoutes } from "./website.routing";
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    ChartsModule,
    NgxDatatableModule,
    SharedModule,
    RouterModule.forChild(WebsiteRoutes)
  ],
  declarations: [WebsiteComponent],
  exports: []
})
export class WebsiteModule { }




// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { 
//   MatIconModule,
//   MatCardModule,
//   MatMenuModule,
//   MatProgressBarModule,
//   MatButtonModule,
//   MatChipsModule,
//   MatListModule,
//   MatGridListModule
//  } from '@angular/material';
// import { RouterModule } from '@angular/router';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { SharedModule } from '../../shared/shared.module';

// import { DashboardComponent } from './dashboard.component';
// import { DashboardRoutes } from "./dashboard.routing";

// @NgModule({
//   imports: [
//     CommonModule,
//     MatIconModule,
//     MatCardModule,
//     MatMenuModule,
//     MatProgressBarModule,
//     MatButtonModule,
//     MatChipsModule,
//     MatListModule,
//     MatGridListModule,
//     FlexLayoutModule,
//     ChartsModule,
//     NgxDatatableModule,
//     SharedModule,
//     RouterModule.forChild(DashboardRoutes)
//   ],
//   declarations: [DashboardComponent],
//   exports: []
// })

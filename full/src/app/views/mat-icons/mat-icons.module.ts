import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  MatCardModule
 } from '@angular/material/card';
 import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatIconsComponent } from './mat-icons.component';
import { MatIconsRoutes } from "./mat-icons.routing";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    NgxDatatableModule,
    RouterModule.forChild(MatIconsRoutes)
  ],
  declarations: [MatIconsComponent]
})
export class MatIconsModule { }

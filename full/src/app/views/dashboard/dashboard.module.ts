import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
 import {MatCardModule} from '@angular/material/card';
 import {MatMenuModule} from '@angular/material/menu';
 import {MatProgressBarModule} from '@angular/material/progress-bar';
 import {MatButtonModule} from '@angular/material/button';
 import {MatChipsModule} from '@angular/material/chips';
 import {MatListModule} from '@angular/material/list';
 import {MatGridListModule} from '@angular/material/grid-list';
 import {MatInputModule} from '@angular/material/input';
 import {MatDatepickerModule} from '@angular/material/datepicker';
 import {MatNativeDateModule} from '@angular/material/core';
 import {MatRadioModule} from '@angular/material/radio';
 import {MatCheckboxModule} from '@angular/material/checkbox';
 import {MatStepperModule} from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { DatePipe } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from "./dashboard.routing";

import { MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  imports: [
  
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
   



    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,



    MatInputModule,
    MatListModule,
   
    MatDatepickerModule, 
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,

    MatIconModule,
    MatStepperModule,
    MatAutocompleteModule,
  
    MatButtonToggleModule,

    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatInputModule,
    NgxDatatableModule,


    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent],
  exports: []
})
export class DashboardModule {

}
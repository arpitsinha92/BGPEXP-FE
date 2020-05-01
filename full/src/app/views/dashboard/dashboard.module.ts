import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatProgressBarModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatGridListModule,
  MatInputModule,
  MatDatepickerModule, 
  MatNativeDateModule,
  MatRadioModule,
  MatCheckboxModule,
  MatStepperModule
 } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { DatePipe } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from "./dashboard.routing";

import { 
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
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
  MatTooltipModule
} from '@angular/material';

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
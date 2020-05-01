import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule } from '@angular/forms';
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
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ChartsComponent } from './charts.component';
import { ChartsRoutes } from "./charts.routing";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [MatAutocompleteModule,
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
    MatTooltipModule,
    NgxDatatableModule,
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
    MatStepperModule,
    FormsModule,
    CommonModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    ChartsModule,
    RouterModule.forChild(ChartsRoutes)
  ],
  declarations: [ChartsComponent]
})
export class AppChartsModule { }

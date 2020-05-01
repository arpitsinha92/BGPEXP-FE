import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../../shared/shared.module';
import { DatePipe } from '@angular/common'
import { MapComponent } from './map.component';
import { MapRoutes } from "./map.routing";
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({

  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,

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



    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0' }),
    RouterModule.forChild(MapRoutes)
  ],
  declarations: [MapComponent]
})
export class AppMapModule { }

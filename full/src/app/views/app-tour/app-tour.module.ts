import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatePipe } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

/*import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {TokenInterceptorService} from '../../../token-interceptor.service';*/


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
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
  MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppTourComponent } from './app-tour.component';
import { TourRoutes } from './app-tour.routing';
// import { AppAutocompleteComponent } from '../material/app-autocomplete/app-autocomplete.component';

// import { AppAutocompleteComponent } from './app-autocomplete/app-autocomplete.component';
// import { AppButtonsComponent } from '../material//app-buttons/app-buttons.component';
// import { AppCardComponent } from '../material/app-card/app-card.component';
// import { AppGridComponent } from '../material/app-grid/app-grid.component';
// import { AppListComponent } from '../material/app-list/app-list.component';
// import { AppMenuComponent } from '../material/app-menu/app-menu.component';
// import { AppProgressComponent } from '../material/app-progress/app-progress.component';
// import { AppRadioComponent } from '../material/app-radio/app-radio.component';
// import { AppSelectComponent } from '../material/app-select/app-select.component';
// import { AppSliderComponent } from '../material/app-slider/app-slider.component';
// import { AppSnackbarComponent } from '../material/app-snackbar/app-snackbar.component';
// import { AppTabComponent } from '../material/app-tab/app-tab.component';

import { MaterialRoutes } from "../material/app-material.routing";

@NgModule({
  imports: [
    AgGridModule.withComponents(null),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
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
    NgxDatatableModule,

    // AppButtonsComponent,
    // AppCardComponent,
    // AppGridComponent,
    // AppListComponent,
    // AppMenuComponent,
    // AppProgressComponent,
    // AppRadioComponent,
    // AppSelectComponent,
    // AppSliderComponent,
    // AppSnackbarComponent,
    // AppTabComponent
    RouterModule.forChild(TourRoutes)
  ],


  declarations: [AppTourComponent],
  providers: [DatePipe]
  /*,
   {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}]*/
},

)
export class AppTourModule { }



//----------------------------

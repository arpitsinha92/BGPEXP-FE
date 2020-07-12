import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
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
 import {MatAutocompleteModule} from '@angular/material/autocomplete';
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

import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

import { ChartsComponent } from './charts.component';
import { ChartsRoutes } from "./charts.routing";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularFrameworkComponentWrapper } from 'ag-grid-angular/lib/angularFrameworkComponentWrapper';

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

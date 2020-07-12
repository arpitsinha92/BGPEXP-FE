import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  MatIconModule} from '@angular/material/icon';
  import { MatCardModule} from '@angular/material/card';
  import {MatListModule} from '@angular/material/list';
 import { MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragulaModule } from 'ng2-dragula';

import { DragndropComponent } from './dragndrop.component';
import { DragndropRoutes } from "./dragndrop.routing";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    DragulaModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  MatDatepickerModule, 
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonModule,
  MatStepperModule,
    RouterModule.forChild(DragndropRoutes)
  ],
  declarations: [DragndropComponent]
})
export class DragndropModule { }

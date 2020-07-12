import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
//import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule} from '@angular/material/progress-bar';
 
 import {MatButtonModule} from '@angular/material/button';
 import {MatInputModule} from '@angular/material/input';
 import {MatCardModule} from '@angular/material/card';
 import {MatCheckboxModule} from '@angular/material/checkbox';
 import {MatIconModule} from '@angular/material/icon';
 import {MatListModule} from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
import { ForgotPasswordComponent } from '../sessions/forgot-password/forgot-password.component';
import { LockscreenComponent } from '../sessions/lockscreen/lockscreen.component';
import { SigninComponent } from '../sessions/signin/signin.component';
import { SignupComponent } from '../sessions/signup/signup.component';
import { SessionsRoutes } from "../sessions/sessions.routing";
import { NotFoundComponent } from '../sessions/not-found/not-found.component';
import { ErrorComponent } from '../sessions/error/error.component';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
 
@NgModule({
  imports: [
   // BrowserAnimationsModule,
    //BrowserModule,
    CommonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [HomeComponent,ForgotPasswordComponent, LockscreenComponent, SigninComponent, SignupComponent, NotFoundComponent, ErrorComponent]
})
export class HomeModule { }

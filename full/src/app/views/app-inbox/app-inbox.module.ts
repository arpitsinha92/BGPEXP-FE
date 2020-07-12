import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
 import {MatButtonModule} from '@angular/material/button';
 import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatMenuModule} from '@angular/material/menu';
 import {MatInputModule} from '@angular/material/input';
 import {MatDialogModule} from '@angular/material/dialog';
 import {MatListModule} from '@angular/material/list';
 import {MatCheckboxModule} from '@angular/material/checkbox';
 import {MatTooltipModule} from '@angular/material/tooltip';
 import {MatExpansionModule} from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';

import { SharedModule } from './../../shared/shared.module';
import { AppInboxComponent } from './app-inbox.component';
import { MailComposeComponent } from './mail-compose.component';
import { InboxRoutes } from "./app-inbox.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatExpansionModule,
    FlexLayoutModule,
    QuillModule,
    SharedModule,
    RouterModule.forChild(InboxRoutes)
  ],
  declarations: [AppInboxComponent, MailComposeComponent],
  entryComponents: [MailComposeComponent]
})
export class AppInboxModule { }

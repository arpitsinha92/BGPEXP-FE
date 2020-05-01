import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { rootRouterConfig } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';



import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { WebsiteComponent } from './views/website/website.component';
import { AgGridModule } from 'ag-grid-angular';
import { DialogOrderComponent } from './views/dialog-order/dialog-order.component';

import { SliderModule } from 'angular-image-slider';
//import { CreateOrderComponent } from './create-order/create-order.component';

//import { DeliveryBoyComponent } from './views/delivery-boy/delivery-boy.component';

//import { DeliveryBoyregistrationComponent } from './delivery-boyregistration/delivery-boyregistration.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
   suppressScrollX: true
};

@NgModule({
  entryComponents: [DialogOrderComponent],
  imports: [
    SliderModule,
    MatDialogModule,
    FormsModule,
    BrowserModule,
    AgGridModule.withComponents(null),
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    PerfectScrollbarModule,

    ReactiveFormsModule,
    NgxDatatableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [AppComponent, DialogOrderComponent],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
   { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

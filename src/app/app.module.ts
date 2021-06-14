import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverService } from "./service/driver.service";
import { OrderListComponent } from './order-list/order-list.component';
import {OrderService} from "./service/order.service";
import { TruckListComponent } from './truck-list/truck-list.component';
import {TruckService} from "./service/truck.service";

@NgModule({
  declarations: [
    AppComponent,
    DriverListComponent,
    OrderListComponent,
    TruckListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DriverService, OrderService, TruckService],
  bootstrap: [AppComponent]
})
export class AppModule { }

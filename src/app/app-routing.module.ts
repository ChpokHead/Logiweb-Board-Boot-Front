import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverListComponent } from "./driver-list/driver-list.component";
import { OrderListComponent } from "./order-list/order-list.component";

const routes: Routes = [
  { path: 'drivers', component: DriverListComponent },
  { path: 'orders', component: OrderListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

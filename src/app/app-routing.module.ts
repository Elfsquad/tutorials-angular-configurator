import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {  path: '', component: ProductsComponent },
  {  path: 'configure/:id', component: ConfiguratorComponent },
  {  path: 'checkout', component: CheckoutComponent } // <-- Route to the checkout page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
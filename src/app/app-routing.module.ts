import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {AppComponent} from './app.component'; // CLI imports router

const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'catalogue', component: CatalogueComponent},
  { path: '**', component: CatalogueComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}

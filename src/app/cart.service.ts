/*
This is a service, that mocks the delivery of submitted carts/orders to the back-end.
 */

import { Injectable } from '@angular/core';
import {Cart} from './cart/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  mockDB: Cart[] = [];
  constructor() { }
  submitCart(cart: Cart): void{
    cart.id = this.mockDB.length;
    this.mockDB.push(cart);
  }
}

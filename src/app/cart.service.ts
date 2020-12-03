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
  activeCart: Cart = new Cart(0);
  constructor() { }
  getActive(): Cart {
    return this.activeCart;
  }
  submitCart(cart: Cart): void{
    cart.id = this.mockDB.length;
    this.mockDB.push(cart);
    this.activeCart = new Cart(this.mockDB.length);
  }
}

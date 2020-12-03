/*
A component to display a Cart and its controls.
 */

import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Cart} from './cart';
import {Item} from '../item';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input() selectedItem: Item; // allows selection of an Item from a parent component
  selectedAmount = 1;
  cart: Cart; // The id of the Cart can be adjusted for the Context of this component
  constructor(private cartService: CartService) {
  }
  submit(): void{ // Submits the cart to e.g. the back end for processing, e.g. to be registered as an Order.
    this.cartService.submitCart(this.cart);
    this.cart = new Cart(1);
  }
  ngOnInit(): void {
    this.cart = this.cartService.getActive();
  }
}



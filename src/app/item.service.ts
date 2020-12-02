/*
A Service to supply the available Items. It can be altered for actual HTTP-Requests to a DB holding the product catalogue.
 */
import { Injectable } from '@angular/core';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // Some Mock-Items
  items: Item[] = [
    {name: 'TestItem1', id: 1, price: 1.1},
    {name: 'TestItem2', id: 2, price: 2.2},
    {name: 'TestItem3', id: 3, price: 3.3},
    {name: 'TestItem4', id: 4, price: 4.4},
    {name: 'TestItem5', id: 5, price: 5.5},
    {name: 'TestItem6', id: 6, price: 6.6},
    {name: 'TestItem7', id: 7, price: 7.7},


  ];
  constructor() { }
  getItems(): Item[] {
    return this.items;
  }
}

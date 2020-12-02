import {Position} from './position';
import {Item} from '../item';
/*
A class to allow compact and quick exchange of order-data
 */
export class Cart {
  constructor(id: number) {
    this.id = id;
  }

  id: number;
  positions: Map<Item, Position> = new Map<Item, Position>();
  total = 0; // As a field instead of a getter to allow direct access in view

  /*
   Adds {{amount}} items of {{item}}'s position. If no position exists, a new one is created.
   if amount is negative, the position is deleted. To allow direct access to Cart.total, it is
   updated in a field.
   */
  addSelected(item: Item, amount: number): void {
    let pos: Position = new Position(item, amount);
    if (this.positions.has(item)){
      pos = this.positions.get(item);
      this.positions.get(item).setAmount(pos.amount + amount);
    } else {
      this.positions.set(item, pos );
    }
    if (pos.amount <= 0){
      this.positions.delete(item);
    }
    this.total = 0;
    for (const i of this.positions.values()) {
      this.total += i.price;
    }
  }
}

import {Item} from '../item';



export class Position{
  item: Item;
  amount: number;
  price: number;
  setAmount(value: number): void {
    this.amount = value;
    this.price = this.amount * this.item.price;
  }
  equals(other: Position): boolean{
    return this.item === (other.item);
  }
  constructor(item: Item, amount: number = 1) {
    this.item = item;
    this.amount = amount;
    this.price = this.item.price * this.amount;
  }
}

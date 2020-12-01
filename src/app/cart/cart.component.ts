import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Cart} from './cart';
import {Item} from '../item';
import {Position} from './position';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {
@Input() selectedItem: Item;
  positions: Position[] = [];
  selectedAmount: number;
  constructor() {
  }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
  }
  addSelected(item: Item, amount: number): void{
    const pos: Position = new Position(item, amount);
    let wasInside = false;
    for (const i of this.positions){
      if (i.equals(pos)){
        i.setAmount(i.amount + pos.amount);
        wasInside = true;
      }
      if (!wasInside){
        this.positions.push(pos);
      }
    }
  }

}

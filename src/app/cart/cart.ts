import {Position} from './position';
import {Item} from '../item';

export class Cart {
  constructor(id: number) {
    this.id = id;
  }
  id: number;
  positions: Position[] = [];

  putPosition(pos: Position): void{
    // If the position is already present, it is updated, if not, it is added.
    const newAmount: number = pos.amount;
    const treatedPosition: Position = this.getPosition(pos.item);
    treatedPosition.amount = newAmount;
    if (pos === treatedPosition){
      this.positions.push(treatedPosition);
    }
  }
  getPosition(item: Item): Position{
    // Returns existing position of the Item. if none is found, returns new Position with that item.
    let returnPos: Position = new Position(item, 1);
    for (const i of this.positions){
      if (item === i.item){
        returnPos = i;
      }
    }
    return returnPos;
  }

}

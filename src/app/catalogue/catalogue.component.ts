import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {ItemServiceService} from '../item-service.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  selectedItem: Item;
  items: Item[];

  constructor(private itemService: ItemServiceService) {}
  select(item: Item): void{
    this.selectedItem = item;

  }
  getItems(): void{
    this.items = this.itemService.getItems();
  }
  ngOnInit(): void {
    this.getItems();
    for (const i of this.items){}
  }

}

/*
Component to substitute the greater context of our cart component. It would likely be used in a different, greater surrounding.
 */

import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {MatDrawer} from '@angular/material/sidenav';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  selectedItem: Item;
  items: Item[];

  constructor(private itemService: ItemService) {
  }
  select(item: Item): void{
    this.selectedItem = item;

  }
  getItems(): void{
    this.items = this.itemService.getItems();
  }
  ngOnInit(): void {
    this.getItems();
  }

}

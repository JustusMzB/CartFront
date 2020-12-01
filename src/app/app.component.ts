import { Component } from '@angular/core';
import {Item} from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntershopCartfront';
  currentItem: Item = {id: 1, name: 'superproto', price: 2};
}

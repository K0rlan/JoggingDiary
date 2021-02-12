import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Model} from '../model/Model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  // items: Model[];
  // item: Model;

  // @Output() inputedItems: EventEmitter<Model> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
//   addingItem(newItems: Model){
    // this.items.push(newItems);
    // this.inputedItems.emit(this.item);
  //   this.item = newItems;
  //   console.log(this.item);
  // }

}

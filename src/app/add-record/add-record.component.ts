import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import {Model} from '../model/Model';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';
import {printLine} from 'tslint/lib/verify/lines';
import {ComponentService} from '../service/component.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  time: string;
  distance: string;
  date: string;

  item: Model;

  // @Output() inputedItem: EventEmitter<Model> = new EventEmitter();

  constructor(private service: ComponentService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addItem(time: string, date: string, distance: string){
    this.item = new Model(time, date, distance);
    // this.inputedItem.emit(this.item);
    this.service.changeData(this.item);
  }
}

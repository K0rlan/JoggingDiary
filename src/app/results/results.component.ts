import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../model/Model';
import {ComponentService} from '../service/component.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  items = [{
    date: '2018-04-11',
    distance: '5,000.00',
    time: '42:40',
  }];
  item: any;
  // @Input() item: Model;

  constructor(private service: ComponentService) { }

  ngOnInit(): void {
    // this.items.unshift(this.item);
    // this.items.push(this.item);
    // console.log(this.items);

    this.service.data$.subscribe(res => {
      this.item = res;
      this.items.push(this.item);
    });
  }


}

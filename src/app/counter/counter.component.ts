import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() change:number=1;
  counter:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  increment()
  {
    this.counter=this.counter + this.change;
  }
  decrement()
  {
    this.counter=this.counter - this.change;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.scss']
})
export class VirtualScrollingComponent implements OnInit {
  numbers:number[] = [];

  constructor() { 
    for (let i = 0; i < 1000; i++){
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor( private cdref: ChangeDetectorRef ) { }

  ngOnInit(): void {
  }

  logChanges(index:any){
    console.log(index);
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();    
  }
}

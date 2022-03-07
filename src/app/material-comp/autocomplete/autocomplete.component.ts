import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  
  myControl = new FormControl('');
  options:string[]= [
    'Angular',
    'React',
    'Vue'
  ];

  objectoptions:any = [{
    name:'Angular'
  },{
    name:'React'
  },{
    name:'Vue'
  },{
    name:'Reactnative'
  }];

  filteredOptions: Observable<string[]>;


  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map( value => this._filter(value) )
    )
  }

  displayfn(object:any){
    return object.name;
  }

  private _filter(value: string):string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
        option.toLowerCase().includes(filterValue)
      );
  }

}

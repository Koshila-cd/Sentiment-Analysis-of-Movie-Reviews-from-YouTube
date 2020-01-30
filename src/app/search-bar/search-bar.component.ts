import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

// import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() {
    // this.searchControl = new FormControl('');
    // this.filteredResults$ = this.searchControl.valueChanges
      // .startWith('')
      // .map(val => this.filterResults(val))
      // .map(val => val.slice(0, 4));
  }

  searchControl: FormControl;

  filteredResults$: Observable<string[]>;

  results: string[] = [
    'what time is it',
    'what is my ip',
    'what song is this',
    'when is the solar eclipse',
    'what is my name',
    'what is inertia',
    'what does the fox say',
    'what do turtles eat',
    'where\'s my refund',
  ];

  ngOnInit() {
  }

  // private filterResults(val: string): string[] {
  //   return val ? this.results.filter(v => v.toLowerCase().indexOf(val.toLowerCase()) === 0) : [];
  // }

}

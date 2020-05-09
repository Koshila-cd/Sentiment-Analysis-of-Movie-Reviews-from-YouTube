import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-tiles',
  templateUrl: './movie-tiles.component.html'
})
export class MovieTilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alert() {
    alert('button works');
  }
}

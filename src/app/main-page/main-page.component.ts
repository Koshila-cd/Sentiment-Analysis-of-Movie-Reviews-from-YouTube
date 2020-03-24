import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie } from 'src/models/movie';
import { Service } from 'src/epics/service';
import { AddMovie } from 'src/models/addMovie';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  tiles = [
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  constructor(private service: Service) { 
    this.addMovie = new Movie();
  }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.movies = data;
      this.movies.forEach(dat =>{
        console.log(dat.thumbnail)
      })
    });
  }

  // addTrailer($event){    
  //   console.log("Save button is clicked!", $event);    
  // } 


  movies: Movie[]
  addMovie: Movie
  // addMovie: AddMovie[]

  // '', '', 'Magneta', 'Tornado'];
  addTrailer(title: string, url: string) {
    if (title && url) {

      console.log(title)
      console.log(url)
      this.addMovie.movieName = title
      this.addMovie.trailerUrl = url

      this.service.addMovie(this.addMovie).subscribe(data => {
        // this.movies = data;
        console.log(data)
        window.location.reload();
      });

    } else {

    }
  }



}

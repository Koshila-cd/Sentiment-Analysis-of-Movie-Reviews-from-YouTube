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

  constructor(private service: Service) { 
    this.addMovie = new Movie();
  }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.movies = data;
      this.movies.forEach(dat =>{
        let x = dat.rate.split("%")[0]
        if ( x >= '60') {
          dat.ticket = "../../assets/images/movie-ticket.png"
        } 
        else {
          dat.ticket = "../../assets/images/ticket.png"
        }
      })
    });
  }

  movies: Movie[]
  addMovie: Movie

  addTrailer(title: string, url: string) {
    if (title && url) {

      this.addMovie.movieName = title
      this.addMovie.trailerUrl = url

      this.service.addMovie(this.addMovie).subscribe(data => {
        window.location.reload();
      });

    } else {
      
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable, of } from 'rxjs';
import { AddMovie } from 'src/models/addMovie';
 
@Injectable()
export class Service {
 
  private serviceUrl: string;
 
  constructor(private http: HttpClient) {
    this.serviceUrl = 'http://localhost:8080/movies';
  }
 
  public findAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.serviceUrl + '/all');
  }
 
  public addMovie(movie: Movie) {
    return this.http.post<Movie>(this.serviceUrl + '/add', movie);
  }
}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectMovieComponent} from './select-movie/select-movie.component';


const routes: Routes = [
  // { path: 'app-select-movie', component: SelectMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  // routes: Routes = [
  //   { path: 'app-select-movie', component: SelectMovieComponent }
  // ];

}

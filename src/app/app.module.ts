import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AngularMaterialModule} from './angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {MovieTilesComponent} from './movie-tiles/movie-tiles.component';
import {SelectMovieComponent} from './select-movie/select-movie.component';

// const appRoutes: Routes = [
//   { path: 'app-select-movie', component: SelectMovieComponent }
// ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainPageComponent,
    SearchBarComponent,
    MovieTilesComponent,
    SelectMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

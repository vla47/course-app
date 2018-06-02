import { Component } from '@angular/core';


import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

export const AvailableRoutes: any = [
    { path: '', component: MoviesComponent },
    { path: 'movie', component: MovieComponent }
];

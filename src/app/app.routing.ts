import { Component } from '@angular/core';


import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

export const AvailableRoutes: any = [
  {
    path: '',
    component: HomeLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MoviesComponent
      },
      {
        path: 'movie',
        component: MovieComponent
      },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  { path: '**', redirectTo: '' }
];

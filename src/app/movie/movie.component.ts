import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular//common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movie: any;

  public constructor(private location: Location, private http: HttpClient) {
      this.movie = {
          'name': '',
          'genre': '',
          'formats': {
              'digital': false,
              'bluray': false,
              'dvd': false
          }
      }
  }

  public ngOnInit() { }

  public save() {
      if (this.movie.name && this.movie.genre) {
          this.http.post('http://localhost:8000/movies', JSON.stringify(this.movie))
              .subscribe(result => {
                  this.location.back();
              }, err => {
                  console.log(err)
              });
      }
  }

}


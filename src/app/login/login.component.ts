import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cred: any;

  constructor(private http: HttpClient, private router: Router) {
    this.cred = {
      'email': '',
      'password': ''
    };
  }

  ngOnInit() {
  }

  public login() {
    if (this.cred.email && this.cred.password) {
      this.http.post('http://localhost:3000/login', this.cred).subscribe(res => {
        if (res) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email: this.cred.email, token: res }));
          this.router.navigate(['/movies'], { 'queryParams': res });
        }
      });
    }
  }
}

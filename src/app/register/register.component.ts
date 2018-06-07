import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cred: any;
  constructor(private http: HttpClient, private router: Router) {
    this.cred = {
      'firstname': '',
      'lastname': '',
      'email': '',
      'password': ''
    };
  }

  ngOnInit() {
  }

  public register() {
    if (this.cred.email && this.cred.password) {
      this.http.post('http://localhost:3000/register', this.cred).subscribe(res => {
        this.router.navigate(['/login']);
      });
    }
  }
}

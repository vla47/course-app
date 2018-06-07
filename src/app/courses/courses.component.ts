
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

    public courses: any;

    public constructor(private http: HttpClient, private router: Router, private location: Location) {
        this.courses = [];
    }

    public ngOnInit() {
        this.location.subscribe(() => {
            this.refresh();
        });
        this.refresh();
    }

    private refresh() {
        this.http.get('http://localhost:3000/courses')
            .subscribe(result => {
                this.courses = result;
            });
    }

    public search(event: any) {
        let url = 'http://localhost:3000/courses';
        if (event.target.value) {
            url = 'http://localhost:3000/search/' + event.target.value;
        }
        this.http.get(url)
            .subscribe(result => {
                this.courses = result;
            });
    }

    public create() {
        this.router.navigate(['course']);
    }

}

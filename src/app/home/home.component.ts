import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses$: Observable<Course[]>;

  beginnersCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(
  ) {

  }

  ngOnInit() {

  }

}

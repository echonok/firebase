import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  loading = false;

  displayedColumns = ['seqNo', 'description', 'duration'];

  constructor() {

  }

  ngOnInit() {

  }

}

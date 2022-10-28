import { Component, OnInit } from '@angular/core';
import {NgserviceService} from '../ngservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {
  courses = new Course();
 
  constructor(private _route:Router, private _service: NgserviceService, private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._activatedRouter.snapshot.paramMap.get('id');
    console.log(id);
    var a: number= +id;
   this._service.featchCourseBdyIdFromRemote(a).subscribe(
    data=>{
      console.log("data received");
      this.courses = data;
    },
      error => console.log("Exception Occured")
    )
  }
  gotolist() {
    this._route.navigate(['courselist']);
  }
}

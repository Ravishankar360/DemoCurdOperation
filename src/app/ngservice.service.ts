import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class Course {
}

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http: HttpClient) { }



  fetchCourseListFromRemote(): Observable<any>{
    return this._http.get<any>('http://localhost:8082/getCourse');
  }
  addCourseToRemote(course: Course): Observable<any>{
    return this._http.post<any>('http://localhost:8082/addCourse',course);
  }
  updateCourseToRemote(course: Course): Observable<any>{
    return this._http.post<any>('http://localhost:8082/updateCourse',course);
  }
  deleteCourseBdyIdFromRemote(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8082/deleteCourse/' + id);
  }
  featchCourseBdyIdFromRemote(id: number): Observable<any> {
    return this._http.get<any>('http://localhost:8082/getCourse/' + id);
  }
}

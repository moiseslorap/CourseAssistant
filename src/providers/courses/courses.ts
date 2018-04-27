import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the CoursesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoursesProvider {
  //public courses = [];

  constructor(public storage: Storage) {
    console.log('Hello CoursesProvider Provider');
  }

  public getCourses(){
    return this.storage.get('courses');
    //return this.courses;
  }
  public saveCourseToStorage(courses){
    this.storage.set('courses', courses);
    //this.courses.push(course);
    //console.log(this.courses);
  }
}
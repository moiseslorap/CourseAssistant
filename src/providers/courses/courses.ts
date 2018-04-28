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
  buildings=[{id:"BOO",name:"James E. Booth Hall"},{id:"BRN",name:"Brown Hall RIT"},{id:"CAR",name:"Chester F. Carlson Center for Imaging Science"},{id:"CBT",name:"Center for Bioscience Education & Technology"},{id:"COL",name:"Color Science Hall RIT"},{id:"EAS",name:"George Eastman Hall RIT"},{id:"ENG",name:"Engineering Hall RIT"},{id:"ENT",name:"Engineering Technology Hall"},{id:"GAN",name:"Frank E. Gannett Hall"},{id:"GLE",name:"James E. Gleason Hall"},{id:"GOL",name:"Thomas B. Golisano Hall"},{id:"GOS",name:"Thomas Gosnell Hall"},{id:"HAC",name:"Hale-Andrews Student Life Center"},{id:"HLC",name:"Hugh L. Carey Hall"},{id:"INA",name:"Institute Hall - Academic"},{id:"LAC",name:"Laboratory for Applied Computing"},{id:"LBJ",name:"Lyndon Baines Johnson Hall RIT"},{id:"LBR",name:"Liberal Arts Hall RIT"},{id:"LOW",name:"Max Lowenthal Hall"},{id:"ORN",name:"Orange Hall RIT"},{id:"RED",name:"Red Barn RIT"},{id:"ROS",name:"Lewis P. Ross Hall"},{id:"SAU",name:"Student Alumni Union RIT"},{id:"SHH",name:"Sol Heumann Hall"},{id:"SLA",name:"Louise Slaughter Hall"},{id:"SUS",name:"Sustainability Institute RIT"},{id:"WEL",name:"Welcome Center RIT}"}];
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
  public setBuildings(){
    return this.buildings;
  }
}
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NewCoursePage } from '../new-course/new-course';
import { CourseDetailsPage } from '../course-details/course-details';
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  public coursesList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: StorageProvider, public modalCtrl: ModalController) {
    this.storage.getCourses()
      .then((courses) => {
        if (courses)
          this.coursesList = courses;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

  addCourse() {
    let addModal = this.modalCtrl.create(NewCoursePage);
 
    addModal.onDidDismiss((course) => {
 
          if(course){
            this.saveCourse(course);
          }
 
    });
 
    addModal.present();
  }

  saveCourse(course){
    this.coursesList.push(course);
    this.storage.saveCoursesToStorage(this.coursesList);
  }

  viewCourse(course){
    this.navCtrl.push(CourseDetailsPage, {
      course: course
    });
  }
}
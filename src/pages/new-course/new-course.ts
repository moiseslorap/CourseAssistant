import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { CoursesProvider } from '../../providers/courses/courses'
/**
 * Generated class for the NewCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-course',
  templateUrl: 'new-course.html',
})
export class NewCoursePage {

  public buildings: any;
  building: string;
  roomNumber: string;
  courseName: string;
  courseNumber: string;
  buildingKeys: any;
  public base64Image: string;
  public photos: [];

  constructor(private camera: Camera, public view: ViewController, public navCtrl: NavController, public navParams: NavParams, public list:CoursesProvider) {
    
  }

  ionViewDidLoad() {
    this.buildings = this.list.setBuildings();
    console.log(this.buildings)
    console.log('ionViewDidLoad New-CoursePage');
  }

  saveItem() {
    let course = {
      building: this.building,
      roomNumber: this.roomNumber,
      courseName: this.courseName,
      courseNumber: this.courseNumber,
      photos: this.photos
    };
    console.log(this.photos);
    console.log(course);
    this.view.dismiss(course);
  }

  close() {
    this.view.dismiss();
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 100, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
  }

  deletePhoto(index){
    this.photos.splice(index, 1);
  }

}
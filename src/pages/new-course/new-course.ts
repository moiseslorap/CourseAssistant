import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'

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

  buildings = ['BOO','BRN','CAR','CBT','COL','EAS','ENG','GAN','GLE','GOL','GOS','HAC','HLC','INA','LAC','LBJ','LBR','LOW','ORN','RED','ROS','SLA','SUS','WEL'];
  building: string;
  roomNumber: string;
  courseName: string;
  courseNumber: string;
  public base64Image: string;
  public photos: any;

  constructor(private camera: Camera, public view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCoursePage');
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
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { StorageProvider } from '../../providers/storage/storage';/**
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
  id: string;
  buildingKeys: any;
  public base64Image: string;
  public photos = [];

  constructor(private camera: Camera, public view: ViewController, public navCtrl: NavController, public navParams: NavParams, public list:StorageProvider) {
    
  }

  ionViewDidLoad() {
    //populate buildings array from storage
    this.buildings = this.list.setBuildings();
    console.log('ionViewDidLoad New-CoursePage');
  }

  saveItem() {
    //course object
    let course = {
      building: this.building,
      roomNumber: this.roomNumber,
      courseName: this.courseName,
      id: this.id,
      photos: this.photos,
    };
    this.view.dismiss(course);
  }
  //closes modal
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
        this.photos.push(this.base64Image); //pushing captured image into array
        this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
  }

  deletePhoto(index){
    this.photos.splice(index, 1); //deletes given index from photos array
  }
}
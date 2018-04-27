import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-course-details',
  templateUrl: 'course-details.html',
})
export class CourseDetailsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any; 

  building;
  roomNumber;
  courseName;
  courseNumber;
  photos;
  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadMap();
    console.log('ionViewDidLoad CourseDetailsPage');
    this.courseNumber = this.navParams.get('course').courseNumber;
    this.courseName = this.navParams.get('course').courseName;
    this.roomNumber = this.navParams.get('course').roomNumber;
    this.building = this.navParams.get('course').building;
    this.photos = this.navParams.get('course').photos;
  }

  loadMap(){
    let latLng = new google.maps.LatLng(43.0842093,-77.6803826);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
    this.addMarker();

  }
  addMarker(){
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
   
    let content = "<h4>Information!</h4>";         
   
    this.addInfoWindow(marker, content);
   
  }

  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
   
  }

}

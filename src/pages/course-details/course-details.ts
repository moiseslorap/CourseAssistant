import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
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
  id;
  photos;
  buildings;
  position;
  constructor(public navParams: NavParams, public list: StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDcourseNameLoad CourseDetailsPage');
    this.id = this.navParams.get('course').id;
    this.courseName = this.navParams.get('course').courseName;
    this.roomNumber = this.navParams.get('course').roomNumber;
    this.building = this.navParams.get('course').building;
    this.photos = this.navParams.get('course').photos;
    this.buildings = this.list.setBuildings();
    this.buildings = this.list.setBuildings();
    this.loadMap();
  }


  // getLatlong(){
  //       let geocoder = new google.maps.Geocoder();
  //       let address = this.buildings.find(b => b.id == this.building).name;
  //       console.log(address);
  //       geocoder.geocode({ 'address': address }, function (results, status) {

  //           if (status == google.maps.GeocoderStatus.OK) {
  //               let lat = results[0].geometry.location.lat();
  //               let lng = results[0].geometry.location.lng();
  //               this.position = lat + ',' + lng;
  //               console.log(this.position);
  //           }
  //       });
  // }

  geocodeAddress(geocoder, map) {
    let address = this.buildings.find(b => b.id == this.building).name;
    let location = this.building + "-" + this.roomNumber;
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP,
          position: results[0].geometry.location,
          title: address
        });
        let directions = "https://www.google.com/maps/dir/?api=1&destination=" + address + "&travelmode=walking";
        let content = "<b>" + address + "</b><p>" + location + "</p> <p><a href='" + directions +"'>Open in Google Maps</a></p>";
        let infoWindow = new google.maps.InfoWindow({
          content: content
        });

        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }

    });
  }

  loadMap() {
    console.log(this.position);
    let latLng = new google.maps.LatLng(this.position);
    console.log(latLng);
    let mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      gestureHandling: 'greedy',
      mapTypeControl: false
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
    var geocoder = new google.maps.Geocoder();
    this.geocodeAddress(geocoder, this.map);
    //this.addMarker();
  }
}

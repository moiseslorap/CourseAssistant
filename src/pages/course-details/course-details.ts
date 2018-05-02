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
    //getting values from nav params
    this.id = this.navParams.get('course').id;
    this.courseName = this.navParams.get('course').courseName;
    this.roomNumber = this.navParams.get('course').roomNumber;
    this.building = this.navParams.get('course').building;
    this.photos = this.navParams.get('course').photos;
    this.buildings = this.list.setBuildings(); //populating buildings from storage
    this.loadMap(); //loads map
  }

  /*GOOGLE PLACES API
  *Gets the location of the building given a query, in this case the building name. 
  */
  geocodeAddress(geocoder, map) {
    let address = this.buildings.find(b => b.id == this.building).name; //finding building name given the id on the buildings array
    let location = this.building + "-" + this.roomNumber; //used on content

    //this block gets location given the name
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
  /*GOOGLE MAPS API
  * Initializes the map and calls the geocodeAddress function on the created map 
  */
  loadMap() {
    console.log(this.position);
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
  }
}

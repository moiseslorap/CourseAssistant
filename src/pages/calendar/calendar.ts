import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import * as moment from 'moment';
/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  eventSource = []; //array containing the event objects
  viewTitle: string; //title 
  selectedDay = new Date();
  
  //calendar object
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(private storage: StorageProvider, private modalCtrl: ModalController, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    //getting assignments from storage
    this.storage.getAssignments()
      .then((assignments) => {
        if (assignments)
          this.eventSource = assignments;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  //modal for creating new assignment
  addEvent() {
    let modal = this.modalCtrl.create('NewAssignmentPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
        
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
    //saving assignments
    this.storage.saveAssignmentsToStorage(this.eventSource);
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  //creates alert for selected event
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    let alert = this.alertCtrl.create({
      title: 'Course: ' + event.id + '<br>Assignment: ' + event.title ,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
  
  //assigns the time of the selected calendar day to the selected time
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
}


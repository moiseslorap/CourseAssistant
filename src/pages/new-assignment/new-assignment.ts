import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the NewAssignmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-assignment',
  templateUrl: 'new-assignment.html',
})
export class NewAssignmentPage {

  assignment = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), id: String};
  minDate = new Date().toISOString();
  public courses = [];
 
  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController, private storage: StorageProvider) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.assignment.startTime = preselectedDate;
    this.assignment.endTime = preselectedDate;
    
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    this.viewCtrl.dismiss(this.assignment);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAssignmentPage');
    this.storage.getCourses()
      .then((courses) => {
        if (courses)
          this.courses = courses;
      });
    console.log(this.courses);
  }

  
}

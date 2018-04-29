import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignmentDetailsPage } from './assignment-details';

@NgModule({
  declarations: [
    AssignmentDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignmentDetailsPage),
  ],
})
export class AssignmentDetailsPageModule {}

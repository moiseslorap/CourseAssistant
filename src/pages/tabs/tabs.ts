import { Component } from '@angular/core';
import { CalendarPage} from '../calendar/calendar';
import { CoursesPage} from '../courses/courses';
import { AssignmentsPage } from '../assignments/assignments'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CoursesPage;
  tab2Root = AssignmentsPage;
  tab3Root = CalendarPage;

  constructor() {

  }
}

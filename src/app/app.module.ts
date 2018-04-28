import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { NewCoursePage } from '../pages/new-course/new-course';
import { CalendarPage} from '../pages/calendar/calendar';
import { CoursesPage} from '../pages/courses/courses';
import { CourseDetailsPage } from '../pages/course-details/course-details';
import { AssignmentsPage } from '../pages/assignments/assignments';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CoursesProvider } from '../providers/courses/courses';
import { AssignmentsProvider } from '../providers/assignments/assignments';
import { IonicStorageModule } from '@ionic/storage'
import { Camera } from '@ionic-native/camera'
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    NewCoursePage,
    CoursesPage,
    CalendarPage,
    AssignmentsPage,
    CourseDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    NewCoursePage,
    CoursesPage,
    CalendarPage,
    AssignmentsPage,
    CourseDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoursesProvider,
    AssignmentsProvider,
    Camera
  ]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { NewCoursePage } from '../pages/new-course/new-course';
import { CalendarPage} from '../pages/calendar/calendar';
import { CoursesPage} from '../pages/courses/courses';
import { CourseDetailsPage } from '../pages/course-details/course-details';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { NgCalendarModule  } from 'ionic2-calendar';
import { StorageProvider } from '../providers/storage/storage';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    NewCoursePage,
    CoursesPage,
    CalendarPage,
    CourseDetailsPage
  ],
  imports: [
    NgCalendarModule,
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
    CourseDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    StorageProvider
  ]
})
export class AppModule {}

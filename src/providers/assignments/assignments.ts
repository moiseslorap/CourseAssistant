import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AssignmentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AssignmentsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AssignmentsProvider Provider');
  }

}

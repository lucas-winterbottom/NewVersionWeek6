import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Shift } from './shift';
import 'rxjs/add/operator/map';

@Injectable()
export class ShiftService {

  constructor(private http: Http) { }

  //retrieve
  getContacts() {
    return this.http.get('http://localhost/3000/api/contacts')
      .map(res => res.json());
  }
  //add
}
